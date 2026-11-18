/* ============================================================
   建站教练互动课程 · 交互逻辑
   ============================================================ */
(function(){
'use strict';

const $  = (s,root=document) => root.querySelector(s);
const $$ = (s,root=document) => Array.from(root.querySelectorAll(s));
const esc = (s) => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const toolMap = {};
TOOLS.forEach((t,i)=>toolMap[t.name]=i);

/* ---------- persistent state ---------- */
const KEY='wb_buildsite_course_v1';
let saved={};
try{ saved=JSON.parse(localStorage.getItem(KEY)||'{}'); }catch(e){ saved={}; }
function persist(){ try{ localStorage.setItem(KEY,JSON.stringify(saved)); }catch(e){} }
saved.done      = saved.done      || [];
saved.checks    = saved.checks    || {};
saved.mapChecks = saved.mapChecks || {};
saved.mapOpen   = saved.mapOpen   || {};
saved.flashKnown= saved.flashKnown|| [];
saved.quizBest  = saved.quizBest  || 0;
saved.orderBest = saved.orderBest || false;
saved.notes     = saved.notes     || '';
saved.theme     = saved.theme     || 'light';

/* 旧版 m1–m21 进度迁移到新的 L00–L14 */
const LEGACY_MAP={m20:0,m1:1,m7:1,m2:2,m10:2,m3:3,m8:3,m16:4,m11:5,m5:6,m13:6,m17:6,
  m6:7,m12:8,m19:8,m14:9,m4:10,m18:10,m15:12,m9:13,m21:14};
if(saved.done.some(x=>LEGACY_MAP[x]!==undefined)){
  saved.done=Array.from(new Set(saved.done.map(x=>LEGACY_MAP[x]!==undefined?MODULES[LEGACY_MAP[x]].id:x)));
  persist();
}

let state={
  view:'course', mod:0, toolCat:'全部', toolQ:'', train:'flash',
  flashIdx:0, flashFlip:false, quizIdx:0, quizPicked:null, quizScore:0, quizDone:false,
  orderPicked:[], orderResult:null
};

/* ---------- generic helpers ---------- */
function toolInline(name){
  const i=toolMap[name];
  if(i===undefined) return esc(name);
  return `<a class="tool-inline" href="${esc(TOOLS[i].url)}" target="_blank" rel="noopener noreferrer" title="${esc(TOOLS[i].desc)}">${esc(name)}</a>`;
}
function toolLinksHTML(names){ return names.map(toolInline).join(''); }

function renderBlocks(blocks){
  return blocks.map(b=>{
    switch(b.t){
      case 'p':      return `<p class="prose">${b.html}</p>`;
      case 'h3':     return `<h3 style="font-size:15.5px;margin:26px 0 10px">${b.text}</h3>`;
      case 'ul':     return `<ul class="clean">${b.items.map(i=>`<li>${i}</li>`).join('')}</ul>`;
      case 'formula':return `<div class="formula">${b.html}</div>`;
      case 'grid':   return `<div class="grid2">${b.items.map((i,k)=>
                       `<div class="mini-card"><span class="mi">${String(k+1).padStart(2,'0')} / ${String(b.items.length).padStart(2,'0')}</span><h4>${i.title}</h4><p>${i.text}</p></div>`).join('')}</div>`;
      case 'steps':  return `<div class="steps">${b.items.map(i=>
                       `<div class="step"><div><h4>${i.title}</h4><p>${i.text}</p></div></div>`).join('')}</div>`;
      case 'terms':  return `<div class="term-grid">${b.items.map(i=>
                       `<div class="term"><b>${i.term}</b><p>${i.text}</p></div>`).join('')}</div>`;
      case 'callout':{
        return `<div class="callout ${b.kind}"><div><span class="ct">${b.title}</span><p>${b.text}</p></div></div>`;
      }
      case 'code':{
        return `<div class="code-block">
          <div class="code-head"><span>${esc(b.label||'PROMPT')}</span>
          <button class="code-copy" data-copy="${encodeURIComponent(b.text)}">复制</button></div>
          <pre class="code-body">${esc(b.text)}</pre></div>`;
      }
      case 'table':{
        return `<div class="vtable-wrap"><table class="vtable">
          <thead><tr>${b.head.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${b.rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
        </table></div>`;
      }
      case 'quote': return `<blockquote class="vquote">${esc(b.text)}</blockquote>`;
      default: return '';
    }
  }).join('');
}

/* ---------- course view ---------- */
function renderModuleList(){
  let lastGroup=null;
  $('#moduleList').innerHTML=MODULES.map((m,i)=>{
    let head='';
    if(m.group&&m.group!==lastGroup){
      lastGroup=m.group;
      head=`<div class="side-group"><span>${esc(m.group)}</span></div>`;
    }
    return head+`<button class="mod-item ${i===state.mod?'active':''} ${saved.done.includes(m.id)?'done':''}" data-mod="${i}">
      <span class="mod-num">${saved.done.includes(m.id)?'✓':String(i).padStart(2,'0')}</span>
      <span class="mod-body"><strong>${m.title}</strong><small>${m.sub}</small></span>
    </button>`;
  }).join('');
}

function renderLesson(){
  const m=MODULES[state.mod];
  const prev=state.mod>0?state.mod-1:null, next=state.mod<MODULES.length-1?state.mod+1:null;
  const isDone=saved.done.includes(m.id);
  const pad=i=>String(i).padStart(2,'0');
  const label=i=>i===null?'':pad(i)+' '+MODULES[i].title;
  $('#lesson').innerHTML=`
    <div class="lesson-head">
      <div class="lesson-meta">${esc(m.group)} · ${m.sections.length} 个部分 · ${m.tools.length} 个工具</div>
      <h1>${m.title}</h1>
      <p class="lede">${m.lede}</p>
      <div class="lesson-banner"><div class="quote">${m.quote}</div></div>
    </div>
    ${m.sections.map(s=>`<div class="section-title"><span class="bar"></span><h2>${s.title}</h2></div>${renderBlocks(s.blocks)}`).join('')}
    <div class="section-title"><span class="bar"></span><h2>本课工具 · 一键直达</h2></div>
    <div style="line-height:2.4">${toolLinksHTML(m.tools)}</div>
    <div class="section-title"><span class="bar"></span><h2>带走的 ${m.takeaway.length} 句话</h2></div>
    <div class="card">${m.takeaway.map((t,i)=>`<p style="margin-bottom:8px"><strong style="color:var(--cyan)">${i+1}.</strong> ${t}</p>`).join('')}</div>
    <div class="lesson-nav">
      <button class="btn ghost nav-page" data-go="${prev}" title="${esc(label(prev))}" ${prev===null?'disabled style="opacity:.35"':''}><span class="nav-arrow">←</span><span class="nav-label">${prev===null?'已是第一课':esc(label(prev))}</span></button>
      <button class="btn done-btn ${isDone?'is-done':''}" id="doneBtn">${isDone?'✓ 已标记掌握':'标记本节已掌握'}</button>
      <button class="btn primary nav-page" data-go="${next}" title="${esc(label(next))}" ${next===null?'disabled style="opacity:.35"':''}><span class="nav-label">${next===null?'已是最后一课':esc(label(next))}</span><span class="nav-arrow">→</span></button>
    </div>`;
  $('#rail').innerHTML=`
    <h4>本节工具箱</h4>
    ${m.tools.map(n=>{const i=toolMap[n];return `<a class="rail-link" href="${esc(TOOLS[i].url)}" target="_blank" rel="noopener noreferrer"><span>↗</span><span>${esc(n)}</span><span>→</span></a>`}).join('')}
    <div class="rail-box"><strong>下一步</strong><p>把这节的知识练成直觉，别只靠眼睛过一遍。</p>
      <button class="btn primary wide" style="margin-top:0" data-open-train>去训练场</button>
    </div>
    <div class="rail-box"><strong>标准流程</strong><p>六阶段从找词到增长，一条主线串起全部课程。</p>
      <button class="btn wide" style="margin-top:0" data-open-map>打开作战地图</button>
    </div>`;
  renderProgress();
}

function renderProgress(){
  const pct=MODULES.length?Math.round(saved.done.length/MODULES.length*100):0;
  $('#progressPct').textContent=pct+'%';
  $('#progressFill').style.width=pct+'%';
}

/* ---------- tools view ---------- */
function renderToolCats(){
  const cats=['全部'].concat(Array.from(new Set(TOOLS.map(t=>t.cat))));
  $('#toolCats').innerHTML=cats.map(c=>`<button class="chip ${state.toolCat===c?'active':''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
  $('#toolCount').textContent=TOOLS.length;
}
function renderTools(){
  const q=state.toolQ.trim().toLowerCase();
  const list=TOOLS.filter(t=>(state.toolCat==='全部'||t.cat===state.toolCat)&&
    (!q||(t.name+' '+t.cat+' '+t.desc+' '+t.note).toLowerCase().includes(q)));
  $('#toolGrid').innerHTML=list.map((t,i)=>`
    <a class="tool-card" href="${esc(t.url)}" target="_blank" rel="noopener noreferrer">
      <div class="tool-top"><div class="tool-name"><span class="tool-favicon">${esc(t.name[0])}</span>${esc(t.name)}</div><span class="tool-arrow">↗</span></div>
      <div class="tool-cat">${esc(t.cat)}</div>
      <div class="tool-desc">${esc(t.desc)}</div>
      <div class="tool-meta">${esc(t.note)}</div>
    </a>`).join('');
  $('#toolEmpty').hidden=list.length>0;
}

/* ---------- training: flashcards ---------- */
function renderFlash(){
  const c=FLASHCARDS[state.flashIdx];
  const known=saved.flashKnown.includes(state.flashIdx);
  $('#train-flash').innerHTML=`
    <div class="stat-row">
      <div class="stat"><b>${FLASHCARDS.length}</b><span>词根总数</span></div>
      <div class="stat"><b style="color:var(--cyan)">${saved.flashKnown.length}</b><span>已掌握</span></div>
      <div class="stat"><b style="color:var(--gold)">${state.flashIdx+1}/${FLASHCARDS.length}</b><span>当前进度</span></div>
    </div>
    <div class="train-layout">
      <div>
        <div class="flashcard ${state.flashFlip?'flipped':''}" id="fcCard">
          <span class="fc-label">${state.flashFlip?'含义 & 用法':'词根 · 先自己想一想'}</span>
          <div class="fc-main">${state.flashFlip?esc(c.back.split('｜')[0]):esc(c.front)}</div>
          <div class="fc-sub">${state.flashFlip?esc(c.back.split('｜').slice(1).join('｜')):'点击卡片翻面 · 想想它能配什么场景？'}</div>
          <span class="fc-hint">点击翻面</span>
        </div>
        <div class="fc-controls">
          <button class="btn" id="fcPrev">← 上一个</button>
          <button class="btn" id="fcNext">下一个 →</button>
          <button class="btn ${known?'done-btn is-done':''}" id="fcKnow">${known?'✓ 已掌握':'标记已掌握'}</button>
          <button class="btn ghost" id="fcShuffle">打乱顺序</button>
          <span class="fc-counter">目标是 ${FLASHCARDS.length} 个词根都能脱口而出对应场景</span>
        </div>
      </div>
      <div>
        <div class="panel" style="margin-bottom:12px">
          <div class="panel-title"><span class="dot cyan"></span>速记表</div>
          ${FLASHCARDS.map((f,i)=>`<div style="display:flex;gap:8px;align-items:center;padding:5px 0;font-size:11.5px;color:${saved.flashKnown.includes(i)?'var(--cyan)':'var(--muted)'}"><span style="width:16px;color:var(--dim)">${saved.flashKnown.includes(i)?'✓':'·'}</span><a href="#" data-fc-jump="${i}" style="font-family:monospace">${esc(f.front)}</a></div>`).join('')}
        </div>
        <div class="panel">
          <div class="panel-title"><span class="dot gold"></span>公式</div>
          <div class="formula" style="font-size:12px;padding:14px">12 词根 <span>×</span> 大领域 <span>=</span> 100 个点子</div>
        </div>
      </div>
    </div>`;
}

/* ---------- training: quiz ---------- */
function renderQuiz(){
  if(state.quizDone){
    $('#train-quiz').innerHTML=`
      <div class="panel" style="text-align:center;padding:48px 20px">
        <div style="font-family:var(--serif);font-size:40px;color:var(--accent)">${state.quizScore>=8?'Ⅰ':state.quizScore>=5?'Ⅱ':'Ⅲ'}</div>
        <h2 style="margin:12px 0 6px">本次得分 ${state.quizScore} / ${QUIZ.length}</h2>
        <p class="prose">历史最佳 ${saved.quizBest} / ${QUIZ.length}。${state.quizScore>=8?'直觉已经成型了。':'错的题回到对应课程再过一遍，然后重测。'}</p>
        <button class="btn primary" id="quizRestart" style="margin-top:14px">重新测试</button>
      </div>`;
    return;
  }
  const q=QUIZ[state.quizIdx];
  $('#train-quiz').innerHTML=`
    <div class="stat-row">
      <div class="stat"><b>${state.quizIdx+1}/${QUIZ.length}</b><span>当前题</span></div>
      <div class="stat"><b style="color:var(--cyan)">${state.quizScore}</b><span>答对</span></div>
      <div class="stat"><b style="color:var(--gold)">${saved.quizBest}</b><span>历史最佳</span></div>
    </div>
    <div class="panel">
      <div class="quiz-scene">${q.scene}</div>
      <div class="quiz-q">${q.q}</div>
      <div style="margin-top:16px">${q.opts.map((o,i)=>`<button class="opt" data-opt="${i}"><span class="k">${'ABCD'[i]}</span><span>${o}</span></button>`).join('')}</div>
      <div id="quizFeedback"></div>
    </div>`;
}

/* ---------- training: ordering ---------- */
function renderOrder(){
  $('#train-order').innerHTML=`
    <div class="panel">
      <div class="panel-title"><span class="dot cyan"></span>把 8 个动作排成正确顺序 <span class="muted">按你心中的流程依次点击</span></div>
      <div class="order-list">${ORDER_STEPS.map(s=>`<div class="order-item" data-step="${s.id}"><span class="idx">·</span><span class="txt">${s.text}</span><span class="tag">${s.tag}</span></div>`).join('')}</div>
      <div class="picked-bar" id="pickedBar">已选：${state.orderPicked.length?state.orderPicked.map(id=>`<span class="tool-inline" style="pointer-events:none">${ORDER_STEPS.find(s=>s.id===id).tag}</span>`).join(' → '):'（还没开始）'}</div>
      <div style="display:flex;gap:9px;margin-top:14px">
        <button class="btn" id="orderUndo">撤销一步</button>
        <button class="btn primary" id="orderSubmit">提交排序</button>
        <button class="btn ghost" id="orderReset">重置</button>
      </div>
      <div id="orderFeedback"></div>
    </div>
    <div class="panel" style="background:var(--panel2)">
      <div class="panel-title"><span class="dot gold"></span>为什么要练这个</div>
      <p class="prose">你不是缺信息，是缺<strong>顺序感</strong>。每次做新站都按这条流水线走，才不会"打开 Lovable 瞎聊"把额度和时间烧光。正确顺序：<code>a → c → b → d → e → f → g → h</code>。</p>
    </div>`;
}

/* ---------- training: checklist ---------- */
function renderChecks(){
  const done=CHECKS.filter((_,i)=>saved.checks[i]).length;
  $('#train-check').innerHTML=`
    <div class="stat-row">
      <div class="stat"><b>${done}/${CHECKS.length}</b><span>研判完成</span></div>
      <div class="stat"><b style="color:var(--gold)">15</b><span>分钟定生死</span></div>
      <div class="stat"><b style="color:var(--cyan)">80%</b><span>高手放弃率</span></div>
    </div>
    <div class="panel">
      <div class="panel-title"><span class="dot red"></span>拿到新词后，逐条打勾 <span class="muted">状态自动保存</span></div>
      ${CHECKS.map((c,i)=>`<label class="check-item ${saved.checks[i]?'checked':''}"><input type="checkbox" data-check="${i}" ${saved.checks[i]?'checked':''}><div><div class="ct2">${c.t}</div><div class="cd">${c.d}</div></div><span class="time-badge">2 min</span></label>`).join('')}
      <button class="btn ghost" id="checkReset" style="margin-top:10px">清空重来（下一个新词）</button>
    </div>
    <div class="callout gold"><span class="ic">⭐</span><div><span class="ct">用熟之后</span><p>这 ${CHECKS.length} 条应该在看到新词的 15 分钟内自动在脑子里跑完。跑不完的，就说明这个词还不值得你花 10 美元买域名。</p></div></div>`;
}

/* ---------- map ---------- */
function renderMap(){
  $('#mapFlow').innerHTML=MAP_STAGES.map((s,i)=>{
    const open=saved.mapOpen[i]||(i===0);
    return `<div class="map-stage ${open?'open':''}" data-stage="${i}">
      <div class="map-node">${String(i+1).padStart(2,'0')}</div>
      <div class="map-body">
        <div class="map-head"><div><span class="mh-n">阶段 ${i+1}</span><h3>${s.title}</h3></div><span class="mh-sub">${s.sub}</span><span class="chev">⌄</span></div>
        <div class="map-content">
          <p class="prose">${s.text}</p>
          <div class="map-tools">${toolLinksHTML(s.tools)}</div>
          <div class="map-checklist">${s.checks.map((c,j)=>{
            const k=i+'-'+j;
            return `<label class="mc ${saved.mapChecks[k]?'done':''}"><input type="checkbox" data-mc="${k}" ${saved.mapChecks[k]?'checked':''}><span>${c}</span></label>`;
          }).join('')}</div>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ---------- workshop ---------- */
function genWorkshop(){
  const niche=$('#wsNiche').value.trim()||'your niche';
  const pain=$('#wsPain').value.trim()||'用户有一个反复出现的麻烦';
  const model=$('#wsModel').value;
  const modelText={
    ads:'免费工具 + Google AdSense：核心功能完全免费不用注册，页面边缘放 1–2 个广告，靠 Tier-1 流量赚 CPM。',
    saas:'Micro-SaaS：核心功能免费，Pro 版 $9 解锁无水印 / 批量 / 保存历史，用 Creem 或 Dodo Payments 收款。',
    affiliate:'导航 / 评测 + 联盟佣金：免费工具引流，底部推荐 2–3 个高度相关的付费软件，拿 20–50% 分成，并写 Affiliate Disclosure。'
  }[model];
  const roots=['calculator','generator','converter','checker','estimator','formatter','splitter','extractor','comparator','planner','visualizer','checklist'];
  const combos=roots.map(r=>`${niche} ${r}`).join('\n');
  const prd=`你是资深独立开发者和 SEO 顾问。请为我做一份《产品需求文档（PRD）》，用于让 AI 建站工具一次性生成网站。\n\n领域母词：${niche}\n用户痛点原话：${pain}\n变现方式：${modelText}\n\n要求：\n1. 只保留 1 个核心功能（MVP），列出用户从打开页面到拿到结果的完整点击路径。\n2. 明确这个站为什么不会被 ChatGPT 一句话替代（必须有交互 / 文件处理 / 个性化计算 / 实时数据）。\n3. 列出所有页面、字段、按钮文案（英文）和空状态。\n4. 前端本地处理优先；如果需要 API，给出密钥放后端的方案。\n5. 输出 Privacy Policy / Terms / Contact 三个页面的英文初稿。\n6. 给出 10 个精准长尾关键词，以及首页 FAQ 和对比段落的英文文案（为 GEO 做准备）。`;
  const safety=`上线前，请在对话框里逐字对 AI 下达：\n\n1. "请检查所有代码，确保没有任何隐私密钥（API Key）暴露在前端页面里。"\n2. "如果是图片 / PDF / 文件处理工具，请尽可能全部放在用户自己的浏览器本地处理（Client-side），不要上传到服务器。"\n3. "生成 Privacy Policy、Terms of Service、Contact 三个页面并加到页脚。"\n4. "生成 sitemap.xml 和 robots.txt，不要误写禁止爬虫抓取。"\n5. "输出 Google Analytics 和 Google Search Console 的接入位置。"`;
  const launch=`□ 用无痕浏览器搜主关键词，确认首页没有巨头精准占位\n□ 确认这个需求能接上 online / free / calculator 等动作后缀\n□ 让 AI 输出 PRD，只留 1 个核心功能\n□ v0 / Bolt / Lovable 生成代码并推送 GitHub\n□ 绑定 .com 域名 + Cloudflare Pages，确认 HTTPS 小绿锁\n□ 法律三件套齐全（缺隐私政策 100% 秒拒）\n□ GA + GSC 已安装，sitemap 已提交给 Google 和 Bing\n□ ${modelText}\n□ 上线 14 天内提交 10 个目录站，Reddit 只发干货不硬广`;
  $('#wsOutput').innerHTML=`
    <div class="panel-title" style="margin-bottom:14px"><span class="dot cyan"></span>作战方案 · ${esc(niche)}</div>
    ${[
      ['① 直接复制给 AI 的 PRD 提示词',prd],
      ['② 12 个词根 × 你的领域',combos],
      ['③ 变现路径',modelText],
      ['④ 上线前保命指令',safety],
      ['⑤ 上线执行清单',launch]
    ].map(([title,body])=>`<div class="out-block"><div class="out-head">${title}<button data-copy="${encodeURIComponent(body)}">复制</button></div><div class="out-body">${esc(body)}</div></div>`).join('')}`;
}

/* ---------- navigation ---------- */
function syncURL(){
  try{
    const u=new URL(location.href);
    u.searchParams.set('view',state.view);
    if(state.view==='course') u.searchParams.set('mod',state.mod);
    else u.searchParams.delete('mod');
    history.replaceState(null,'',u.pathname+u.search+u.hash);
  }catch(e){}
}
function setView(v){
  state.view=v;
  $$('.view').forEach(el=>el.classList.toggle('active',el.id==='view-'+v));
  $$('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===v));
  window.scrollTo({top:0,behavior:'instant'});
  syncURL();
}

/* ---------- events ---------- */
document.addEventListener('click',e=>{
  const t=e.target;
  const nav=t.closest('.nav-btn');
  if(nav){ setView(nav.dataset.view); return; }
  if(t.closest('#homeBtn')){ state.mod=0;renderModuleList();renderLesson();setView('course');syncURL();return; }

  const mod=t.closest('[data-mod]');
  if(mod){ state.mod=+mod.dataset.mod;renderModuleList();renderLesson();window.scrollTo({top:0,behavior:'instant'});syncURL();return; }
  const go=t.closest('[data-go]');
  if(go&&go.dataset.go!=='null'){ state.mod=+go.dataset.go;renderModuleList();renderLesson();window.scrollTo({top:0,behavior:'instant'});syncURL();return; }
  if(t.closest('#doneBtn')){
    const id=MODULES[state.mod].id;
    if(saved.done.includes(id)) saved.done=saved.done.filter(x=>x!==id); else saved.done.push(id);
    persist();renderModuleList();renderLesson();return;
  }
  if(t.closest('[data-open-train]')){ setView('training');return; }
  if(t.closest('[data-open-map]')){ setView('map');return; }

  const cat=t.closest('[data-cat]');
  if(cat){ state.toolCat=cat.dataset.cat;renderToolCats();renderTools();return; }
  const trainTab=t.closest('[data-train]');
  if(trainTab){
    state.train=trainTab.dataset.train;
    $$('#trainTabs .tab').forEach(b=>b.classList.toggle('active',b===trainTab));
    $$('.train-panel').forEach(p=>p.classList.toggle('active',p.id==='train-'+state.train));
    return;
  }

  // flashcard
  if(t.closest('#fcCard')){ state.flashFlip=!state.flashFlip;renderFlash();return; }
  const fcj=t.closest('[data-fc-jump]');
  if(fcj){ e.preventDefault();state.flashIdx=+fcj.dataset.fcJump;state.flashFlip=false;renderFlash();return; }
  if(t.closest('#fcPrev')){ state.flashIdx=(state.flashIdx-1+FLASHCARDS.length)%FLASHCARDS.length;state.flashFlip=false;renderFlash();return; }
  if(t.closest('#fcNext')){ state.flashIdx=(state.flashIdx+1)%FLASHCARDS.length;state.flashFlip=false;renderFlash();return; }
  if(t.closest('#fcKnow')){
    const i=state.flashIdx;
    if(saved.flashKnown.includes(i)) saved.flashKnown=saved.flashKnown.filter(x=>x!==i); else saved.flashKnown.push(i);
    persist();renderFlash();return;
  }
  if(t.closest('#fcShuffle')){ state.flashIdx=Math.floor(Math.random()*FLASHCARDS.length);state.flashFlip=false;renderFlash();return; }

  // quiz
  const opt=t.closest('[data-opt]');
  if(opt&&state.quizPicked===null){
    const q=QUIZ[state.quizIdx], pick=+opt.dataset.opt;
    state.quizPicked=pick;
    const ok=pick===q.ans;
    if(ok) state.quizScore++;
    $$('#train-quiz .opt').forEach((el,i)=>{
      if(i===q.ans) el.classList.add('correct');
      else if(i===pick) el.classList.add('wrong');
      el.style.pointerEvents='none';
    });
    $('#quizFeedback').innerHTML=`<div class="feedback ${ok?'ok':'no'}"><b>${ok?'✓ 答对了':'✗ 差一点'}</b> ${q.why}</div>
      <button class="btn primary" id="quizNext" style="margin-top:12px">${state.quizIdx===QUIZ.length-1?'看结果 →':'下一题 →'}</button>`;
    return;
  }
  if(t.closest('#quizNext')){
    if(state.quizIdx===QUIZ.length-1){
      saved.quizBest=Math.max(saved.quizBest,state.quizScore);persist();state.quizDone=true;
    }else state.quizIdx++;
    state.quizPicked=null;renderQuiz();return;
  }
  if(t.closest('#quizRestart')){
    state.quizIdx=0;state.quizScore=0;state.quizPicked=null;state.quizDone=false;renderQuiz();return;
  }

  // ordering
  const step=t.closest('[data-step]');
  if(step){
    const id=step.dataset.step;
    if(state.orderPicked.includes(id)||state.orderResult) return;
    state.orderPicked.push(id);
    $$('#train-order .order-item').forEach(el=>{
      const k=state.orderPicked.indexOf(el.dataset.step);
      if(k>=0){ el.classList.add('picked');$('.idx',el).textContent=k+1; }
    });
    $('#pickedBar').innerHTML='已选：'+(state.orderPicked.length?state.orderPicked.map(id=>`<span class="tool-inline" style="pointer-events:none">${ORDER_STEPS.find(s=>s.id===id).tag}</span>`).join(' → '):'（还没开始）');
    return;
  }
  if(t.closest('#orderUndo')){
    if(state.orderResult) return;
    state.orderPicked.pop();
    $$('#train-order .order-item').forEach(el=>{
      const k=state.orderPicked.indexOf(el.dataset.step);
      el.classList.toggle('picked',k>=0);$('.idx',el).textContent=k>=0?k+1:'·';
    });
    $('#pickedBar').innerHTML='已选：'+(state.orderPicked.length?state.orderPicked.map(id=>`<span class="tool-inline" style="pointer-events:none">${ORDER_STEPS.find(s=>s.id===id).tag}</span>`).join(' → '):'（还没开始）');
    return;
  }
  if(t.closest('#orderReset')){ state.orderPicked=[];state.orderResult=null;renderOrder();return; }
  if(t.closest('#orderSubmit')){
    if(state.orderPicked.length!==ORDER_STEPS.length){
      $('#orderFeedback').innerHTML='<div class="feedback no">还有动作没排进去，先把 8 个都点一遍。</div>';return;
    }
    const ok=state.orderPicked.every((id,i)=>id===ORDER_CORRECT[i]);
    state.orderResult=ok;
    if(ok) saved.orderBest=true;
    persist();
    $$('#train-order .order-item').forEach(el=>{
      const right=ORDER_CORRECT.indexOf(el.dataset.step), mine=state.orderPicked.indexOf(el.dataset.step);
      if(right!==mine) el.classList.add(right===mine?'right':'bad');
    });
    $('#orderFeedback').innerHTML=`<div class="feedback ${ok?'ok':'no'}"><b>${ok?'✓ 全对！肌肉记忆 +1':'✗ 顺序还不对'}</b> 正确顺序：${ORDER_CORRECT.map((id,i)=>`${i+1}. ${ORDER_STEPS.find(s=>s.id===id).tag}`).join(' → ')}。<br>${ok?'以后每次做新站就照这条流水线跑。':'点「重置」再来一次，直到不用想也能排对。'}</div>`;
    return;
  }
  if(t.closest('#checkReset')){ saved.checks={};persist();renderChecks();return; }

  // map
  const mh=t.closest('.map-head');
  if(mh){
    const i=+mh.closest('.map-stage').dataset.stage;
    saved.mapOpen[i]=!saved.mapOpen[i];persist();renderMap();return;
  }

  // workshop
  if(t.closest('#genBtn')){ genWorkshop();return; }
  const cp=t.closest('[data-copy]');
  if(cp){
    const txt=decodeURIComponent(cp.dataset.copy);
    navigator.clipboard.writeText(txt).then(()=>{cp.textContent='已复制 ✓';setTimeout(()=>cp.textContent='复制',1600);})
      .catch(()=>{cp.textContent='请手动复制';});
    return;
  }
  if(t.closest('#themeBtn')){
    saved.theme=saved.theme==='dark'?'light':'dark';
    document.documentElement.dataset.theme=saved.theme;persist();return;
  }
});

document.addEventListener('input',e=>{
  if(e.target.id==='toolSearch'){ state.toolQ=e.target.value;renderTools(); }
  if(e.target.id==='notes'){ saved.notes=e.target.value;persist(); }
});
document.addEventListener('change',e=>{
  if(e.target.matches('[data-check]')){ saved.checks[e.target.dataset.check]=e.target.checked;persist();renderChecks(); }
  if(e.target.matches('[data-mc]')){ saved.mapChecks[e.target.dataset.mc]=e.target.checked;persist();
    e.target.closest('.mc').classList.toggle('done',e.target.checked); }
});

/* ---------- init ---------- */
const themeParam=new URLSearchParams(location.search).get('theme');
document.documentElement.dataset.theme=(themeParam==='light'||themeParam==='dark')?themeParam:saved.theme;
$('#notes').value=saved.notes;
renderModuleList();renderLesson();renderToolCats();renderTools();
renderFlash();renderQuiz();renderOrder();renderChecks();renderMap();

/* 可选深链：index.html?view=tools / ?view=training&tab=quiz / ?view=course&mod=4 */
const params=new URLSearchParams(location.search);
const pv=params.get('view');
if(pv&&['course','tools','training','map','workshop'].includes(pv)) setView(pv);
else setView('course');
const pt=params.get('tab');
if(pt&&['flash','quiz','order','check'].includes(pt)){
  state.train=pt;
  $$('#trainTabs .tab').forEach(b=>b.classList.toggle('active',b.dataset.train===pt));
  $$('.train-panel').forEach(p=>p.classList.toggle('active',p.id==='train-'+pt));
}
const pm=params.get('mod');
if(pm&&+pm>=0&&+pm<MODULES.length){ state.mod=+pm;renderModuleList();renderLesson(); }
syncURL();

})();
