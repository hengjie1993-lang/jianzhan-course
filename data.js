/* ============================================================
   建站教练互动课程 · 内容数据
   内容来源：《阿无的建站教练课程》（WPS 备份版，2026-11-16）
   ============================================================ */

const TOOLS = [
  // --- 找词 & 趋势 ---
  {name:'Google 搜索',cat:'找词洞察',url:'https://www.google.com/',desc:'无痕模式 + 字母汤挖词法：a→z 逐个补下拉词。',note:'最上游、最免费的真实需求源'},
  {name:'Google Trends',cat:'找词洞察',url:'https://trends.google.com/trends/',desc:'看趋势曲线、Related queries 切到 Rising，专抓 Breakout 飙升词。',note:'时间选 Past 7 / 30 days；用基准词测真实体量'},
  {name:'Google Autocomplete',cat:'找词洞察',url:'https://www.google.com/',desc:'输入词根后看下拉补全，直接用真实用户的搜索语言。',note:'配合 12 个美金词根做排列组合'},
  {name:'Exploding Topics',cat:'找词洞察',url:'https://explodingtopics.com/',desc:'趋势爆发词库，捕捉刚冒头的新物种。',note:'重点看新法规、新模型、新游戏'},
  {name:'GitHub Trending',cat:'找词洞察',url:'https://github.com/trending',desc:'每日开源热榜：新工具刚开源，配套网页需求还没人做。',note:'词 = 项目名 + online / free trial'},
  {name:'Hugging Face Spaces',cat:'找词洞察',url:'https://huggingface.co/spaces',desc:'最新 AI 模型的在线试玩集散地，网页工具的原始素材库。',note:'把丑接口套上漂亮极简外壳'},
  {name:'Replicate',cat:'找词洞察',url:'https://replicate.com/explore',desc:'模型 API 市场，快速验证一个 AI 工具创意是否可行。',note:'注意调用成本与密钥安全'},
  {name:'Toolify.ai',cat:'找词洞察',url:'https://www.toolify.ai/',desc:'AI 工具导航站，看 Trending 飙升榜与收入榜。',note:'专挑"域名新但流量暴涨"的小站'},
  {name:'Columbus.tools',cat:'找词洞察',url:'https://columbus.tools/',desc:'AI 工具目录与增长榜单，发现新赛道。',note:'与 Toolify 交叉验证'},
  {name:"There's An AI For That",cat:'找词洞察',url:'https://theresanaiforthat.com/',desc:'海量 AI 工具目录，找空白细分。',note:'看哪些类目还没有好工具'},
  {name:'Semrush',cat:'竞品调研',url:'https://www.semrush.com/',desc:'查关键词搜索量、KD 难度与竞品流量来源。',note:'词库有 30–90 天延迟，新词别只靠它'},
  {name:'Ahrefs',cat:'竞品调研',url:'https://ahrefs.com/',desc:'外链与关键词分析，判断战场拥挤度。',note:'新词阶段优先用实时雷达'},
  {name:'Similarweb',cat:'竞品调研',url:'https://www.similarweb.com/',desc:'看一个陌生爆火小站的流量来自哪个国家、哪些渠道。',note:'与 Semrush 搭配还原爆款路径'},

  // --- 需求 & 竞品 ---
  {name:'Reddit',cat:'需求验证',url:'https://www.reddit.com/',desc:'垂直行业抱怨区：搜 I hate / spend hours / is there a tool。',note:'r/accounting、r/realtors、r/EtsySellers、r/freelance、r/excel'},
  {name:'G2',cat:'需求验证',url:'https://www.g2.com/',desc:'欧美企业软件点评网，筛 1–3 星差评找 Unbundling 机会。',note:'看用户只想用的那个 A 功能'},
  {name:'Capterra',cat:'需求验证',url:'https://www.capterra.com/',desc:'软件点评与对比平台，差评里藏着极简工具的金矿。',note:'与 G2 交叉看'},
  {name:'Shopify App Store',cat:'需求验证',url:'https://apps.shopify.com/',desc:'跨境电商插件市场，低分评论=卖家未被满足的痛点。',note:'适合做电商辅助工具'},
  {name:'Chrome Web Store',cat:'需求验证',url:'https://chromewebstore.google.com/',desc:'浏览器扩展商店，看差评与"只要一个功能"的诉求。',note:'很多扩展需求可以用网页替代'},
  {name:'Product Hunt',cat:'需求验证',url:'https://www.producthunt.com/',desc:'每日新品打榜。重点看第 10–40 名，个人开发者周末作品最多。',note:'也是新站提交外链的重要阵地'},
  {name:'Indie Hackers',cat:'需求验证',url:'https://www.indiehackers.com/',desc:'独立开发者真实收入复盘社区。',note:'培养商业体感的日常读物'},
  {name:'Starter Story',cat:'需求验证',url:'https://www.starterstory.com/',desc:'普通人白手起家的详细案例，含发现需求的过程。',note:'每天 15 分钟'},
  {name:'Flippa',cat:'需求验证',url:'https://flippa.com/',desc:'全球最大中小网站交易市场，免费做市场调研。',note:'筛"上线<2年、月利 $500–3000"'},
  {name:'Acquire.com',cat:'需求验证',url:'https://acquire.com/',desc:'Micro-SaaS 与副业项目交易平台。',note:'看已验证的商业模式'},
  {name:'Microns.io',cat:'需求验证',url:'https://microns.io/',desc:'小型 SaaS 交易，数据透明。',note:'重点看流量结构和利润'},
  {name:'TrustMRR',cat:'需求验证',url:'https://trustmrr.com/',desc:'接入 Stripe 后台验证收入的透明榜单。',note:'收入数据做不了假'},
  {name:'AlternativeTo',cat:'需求验证',url:'https://alternativeto.net/',desc:'替代品发现站，也是新站提交入口。',note:'"alternative to" 词根的来源地'},

  // --- 建站开发 ---
  {name:'ChatGPT',cat:'AI 军师',url:'https://chatgpt.com/',desc:'先写 PRD 产品说明书，再让建站工具一次成型。',note:'30 分钟讨论省下 30 轮对话'},
  {name:'Claude',cat:'AI 军师',url:'https://claude.ai/',desc:'长文档梳理、PRD 与文案打磨。',note:'与 ChatGPT 交叉验证'},
  {name:'Lovable',cat:'建站开发',url:'https://lovable.dev/',desc:'全栈 AI 建站：自动接 Supabase 数据库与登录，支持可视化微调。',note:'需要用户系统 / 数据库的完整小软件'},
  {name:'v0',cat:'建站开发',url:'https://v0.dev/',desc:'Vercel 出品，生成界面审美极现代的纯前端页面。',note:'颜值要求高、不需要登录'},
  {name:'Bolt.new',cat:'建站开发',url:'https://bolt.new/',desc:'浏览器内快速跑通计算器、小工具原型。',note:'几分钟出 MVP'},
  {name:'Cursor',cat:'建站开发',url:'https://cursor.com/',desc:'进阶 AI 代码编辑器，大改或接手时用。',note:'代码先同步 GitHub，随时可迁移'},
  {name:'GitHub',cat:'建站开发',url:'https://github.com/',desc:'免费的代码保险柜，AI 生成的代码全部存这里。',note:'资产永远掌握在自己手里'},
  {name:'Supabase',cat:'建站开发',url:'https://supabase.com/',desc:'免费全能后厨+仓库：500MB 数据库、文件存储、5 万月活登录。',note:'连续 7 天无访问会休眠，注意保活'},
  {name:'Cloudflare',cat:'托管域名',url:'https://dash.cloudflare.com/',desc:'Workers / Pages 静态托管：免费、可商用、无限流量带宽。',note:'个人工具站省钱首选'},
  {name:'Cloudflare Registrar',cat:'托管域名',url:'https://www.cloudflare.com/products/registrar/',desc:'域名注册按成本价，透明无套路、续费不涨价。',note:'.com 约 $10–12/年'},
  {name:'Porkbun',cat:'托管域名',url:'https://porkbun.com/',desc:'便宜透明的域名注册商。',note:'与 Cloudflare Registrar 二选一'},
  {name:'Vercel',cat:'托管域名',url:'https://vercel.com/',desc:'界面丝滑，与前端框架配合极佳。',note:'Hobby 版仅限非商用；赚钱需 $20/月 Pro'},
  {name:'Google Analytics',cat:'流量增长',url:'https://analytics.google.com/',desc:'看哪个国家来了多少人、用户怎么走。',note:'上线第 4 步装上'},
  {name:'Google Search Console',cat:'流量增长',url:'https://search.google.com/search-console',desc:'提交 sitemap、看真实搜索词与排名，做每周 30 分钟调优。',note:'重点盯排名 5–20 名的页面'},
  {name:'Bing Webmaster Tools',cat:'流量增长',url:'https://www.bing.com/webmasters',desc:'2026 不能漏：ChatGPT Search 等 AI 搜索重度依赖必应索引。',note:'拿到被 AI 推荐的入场券'},

  // --- 变现 ---
  {name:'Google AdSense',cat:'收款变现',url:'https://www.google.com/adsense/',desc:'免费工具站的印钞机，按 CPM 展示结算，站长约分 68%。',note:'需独立域名 + HTTPS + 法律三件套'},
  {name:'Creem',cat:'收款变现',url:'https://creem.io/',desc:'对大陆个人最友好的 MoR，费率约 3.9% + $0.40，支持本地提现。',note:'冷启动首选'},
  {name:'Dodo Payments',cat:'收款变现',url:'https://dodopayments.com/',desc:'新兴 MoR，明确支持中国大陆个人开发者。',note:'Creem 的备选'},
  {name:'Stripe',cat:'收款变现',url:'https://stripe.com/',desc:'PSP 收银员，不包税务合规；目前不支持大陆个人/公司直接注册。',note:'做大后配海外主体再用'},
  {name:'PayPal',cat:'收款变现',url:'https://www.paypal.com/',desc:'PSP 支付通道之一，不解决全球数字税问题。',note:'与 MoR 区别要分清'},
  {name:'Paddle',cat:'收款变现',url:'https://www.paddle.com/',desc:'老牌 MoR，费率 5% + $0.50，稳健但审查严格。',note:'新手前期容易被拒'},
  {name:'Lemon Squeezy',cat:'收款变现',url:'https://www.lemonsqueezy.com/',desc:'老牌 MoR，综合费率常超 7%，已并入 Stripe 体系。',note:'目前更适合作备选'},
  {name:'Polar',cat:'收款变现',url:'https://polar.sh/',desc:'欧美开发者喜欢的平台，但不支持直接打款大陆。',note:'注意提现限制'},
  {name:'Mercury',cat:'收款变现',url:'https://mercury.com/',desc:'美国商业银行账户，适合后期注册美国 LLC 时使用。',note:'0→1 阶段不用急着开'},
  {name:'Airwallex',cat:'收款变现',url:'https://www.airwallex.com/',desc:'空中云汇，跨境商业账户方案。',note:'月入 $3000–5000 后再考虑'},
  {name:'PartnerStack',cat:'收款变现',url:'https://www.partnerstack.com/',desc:'优质 B2B SaaS 联盟计划平台。',note:'持续分佣 Recurring Commission'},
  {name:'Impact.com',cat:'收款变现',url:'https://impact.com/',desc:'综合性联盟营销平台。',note:'找高客单软件合作'},
  {name:'Amazon Associates',cat:'收款变现',url:'https://affiliate-program.amazon.com/',desc:'亚马逊联盟，适合实物选品与评测工具。',note:'注意 24 小时 cookie 规则'},

  // --- 流量 & 社区 ---
  {name:'Reddit Pro',cat:'流量增长',url:'https://www.reddit.com/',desc:'盯正在求助的人，先给 100 字干货再顺带提工具。',note:'千万别发硬广，99% 秒删'},
  {name:'X / Twitter',cat:'流量增长',url:'https://x.com/',desc:'#BuildInPublic 公开创业日记，真实数据自带传播。',note:'第 1 天 / 第 15 天复盘'},
  {name:'TikTok',cat:'流量增长',url:'https://www.tikTok.com/',desc:'15 秒屏幕录制：痛点 3 秒 → 点击 5 秒 → 结果 7 秒。',note:'不用露脸、不用英语口语'},
  {name:'YouTube Shorts',cat:'流量增长',url:'https://www.youtube.com/shorts',desc:'视觉系短视频分发，爆一条就灌入大量免费流量。',note:'与 TikTok / Reels 同步发'},
  {name:'Instagram Reels',cat:'流量增长',url:'https://www.instagram.com/reels/',desc:'短视频分发阵地之一。',note:'配热门纯音乐 + 英文大字字幕'},
  {name:'BetaList',cat:'流量增长',url:'https://betalist.com/',desc:'新站提交目录，拿初始外链与种子用户。',note:'备好物料包再批量提交'},

  // --- 游戏专项 ---
  {name:'SteamDB',cat:'游戏专项',url:'https://steamdb.info/',desc:'PC 独立游戏风向标：Trending、Most Followed Upcoming、Next Fest。',note:'发售前 3 天上线工具页'},
  {name:'itch.io',cat:'游戏专项',url:'https://itch.io/',desc:'病毒级网页/轻量游戏的发源地，盯 Top Games 与 New & Popular。',note:'魔性玩法刚出圈就跟'},
  {name:'Roblox',cat:'游戏专项',url:'https://www.roblox.com/',desc:'爆款新图生态：codes / tier list / wiki value list 三大刚需词根。',note:'青少年巨型流量池'},
  {name:'GameDistribution',cat:'游戏专项',url:'https://gamedistribution.com/',desc:'正版 B2B HTML5 游戏分发库。',note:'注意低文本页过不了 AdSense'},
  {name:'GameMonetize',cat:'游戏专项',url:'https://gamemonetize.com/',desc:'正版 HTML5 游戏嵌入与变现平台。',note:'路线 1 备选'},
  {name:'NYT Games',cat:'游戏专项',url:'https://www.nytimes.com/games/',desc:'每日挑战型微游戏的标杆参照。',note:'路线 2 灵感来源'},
  {name:'Neal.fun',cat:'游戏专项',url:'https://neal.fun/',desc:'极简上瘾网页交互小玩法的标杆。',note:'100% 原创无版权风险'},
  {name:'Poki',cat:'游戏专项',url:'https://poki.com/',desc:'网页小游戏巨头，硬碰硬的流量对手。',note:'看清自己的竞争位置'},
  {name:'CrazyGames',cat:'游戏专项',url:'https://www.crazygames.com/',desc:'网页小游戏巨头之一。',note:'纯游玩站 RPM 偏低'},

  // --- 中文视角 ---
  {name:'淘宝',cat:'中文视角',url:'https://www.taobao.com/',desc:'搜"模板 / 工具 / 计算表 / 生成器"，看虚拟商品热销榜。',note:'国内有人付费=全人类刚需'},
  {name:'拼多多',cat:'中文视角',url:'https://www.pinduoduo.com/',desc:'低价虚拟商品销量验证了痛点强度。',note:'9.9 元的表格也能月销几万单'},
  {name:'小红书',cat:'中文视角',url:'https://www.xiaohongshu.com/',desc:'效率吐槽 / 神器推荐，找已被验证的傻瓜式交互。',note:'去英文世界搜有没有网页版'},
  {name:'微信',cat:'中文视角',url:'https://weixin.qq.com/',desc:'国内小程序生态的微痛点工具，是英文网页版的现成蓝本。',note:'做本地化降维打击'}
];

/* block helpers */
const P = (html) => ({t:'p',html});
const H = (text) => ({t:'h3',text});
const UL = (items) => ({t:'ul',items});
const STEP = (items) => ({t:'steps',items});
const GRID = (items) => ({t:'grid',items});
const CALL = (kind,title,text) => ({t:'callout',kind,title,text});
const FORM = (html) => ({t:'formula',html});
const TERMS = (items) => ({t:'terms',items});

const MODULES = [
  {
    id:'m1',title:'从"词句"到"美金"的底层逻辑',sub:'机会识别 · 三种词根雷达',
    kicker:'LESSON 01 · FOUNDATION',
    lede:'新手做网站最容易犯的错，是"我觉得这个功能很酷"。老手只看一件事：人们在搜索什么，或者人们在抱怨什么。',
    quote:'一个"词"之所以能变成赚钱的网站，是因为它背后藏着一个还没被满足得很好的动作（Action）。',
    sections:[
      {title:'雷达一：动词 / 格式转化型',blocks:[
        P('特征词：<span class="inline-code">to</span> 转换、<span class="inline-code">calculator</span> 计算器、<span class="inline-code">generator</span> 生成器、<span class="inline-code">checker</span> 检测器、<span class="inline-code">counter</span> 计数器、<span class="inline-code">resize</span> 调整尺寸。最适合做<b>免费工具站</b>，靠谷歌广告 AdSense 赚钱。'),
        CALL('tip','嗅觉训练','普通人看到"图片大小"无感；有嗅觉的人看到"小红书 / Instagram / LinkedIn 头像老是裁剪不对"，就会联想到 <strong>[具体平台] image resizer</strong> 或 <strong>banner size checker</strong>。'),
        P('哪怕是最枯燥的词：<span class="inline-code">hours calculator</span>（工时计算器）、<span class="inline-code">mortgage payoff calculator</span>（房贷提前还款计算器）。老外非常喜欢只解决一个极小问题、打开就能用、不用登录的网页工具。只要流量大，挂上广告就能躺着收美金。')
      ]},
      {title:'雷达二：抱怨 / 替代型',blocks:[
        P('特征句式：<span class="inline-code">alternative to [大牌]</span>、<span class="inline-code">[大牌] too expensive</span>、<span class="inline-code">how to do X without Y</span>、<span class="inline-code">Is there a simple tool to...</span>。最适合做<b>订阅制小软件 Micro-SaaS</b>。'),
        CALL('insight','听见信号','Reddit 上有人说："我只想把 PDF 里的发票信息提取到 Excel，为什么 Adobe 要收我一个月 20 美元？" —— 叮！你不需要做完整的 Adobe，只做一个"发票转 Excel"的极简网站，每月 $5，或按次 $3/50 张。大厂嫌市场太小，这正是你的黄金缝隙。')
      ]},
      {title:'雷达三：信息整合 / 导航型',blocks:[
        P('特征词：<span class="inline-code">best [工具] for [人群]</span>、<span class="inline-code">[领域] directory</span>、<span class="inline-code">[趋势] tracker</span>。门槛最低，适合靠联盟佣金或广告赚钱。'),
        P('某个新游戏火了、某个新职业兴起了，信息非常分散。做一个专门针对这一小撮人的资源导航站或工具合集，就能吃下这批精准搜索。')
      ]},
      {title:'AI 时代的灵魂拷问',blocks:[
        FORM('为什么用户不去直接问 ChatGPT / Gemini，而要专门点开<b>我的</b>网站？'),
        P('如果一个网站只是"输入一段文字，AI 返回一段文字"，它大概率活不下去。必须至少赢在以下一点：'),
        GRID([
          {icon:'🎛️',title:'可视化与交互体验',text:'拖动滑块实时看结果、所见即所得排版、直接导出 PNG / PDF。',tagline:'Interaction'},
          {icon:'⚡',title:'省去繁琐步骤',text:'用户不想写几百字 Prompt，只想上传文件、点一下、拿走结果。',tagline:'Frictionless'},
          {icon:'🔒',title:'数据聚合与隐私',text:'浏览器本地处理图片/视频，不用担心隐私泄露，速度极快，也不用花服务器钱。',tagline:'Local-first'}
        ])
      ]}
    ],
    tools:['Google 搜索','Reddit','G2','Google Trends'],
    takeaway:['看到具体场景，先想词根：平台 + 动作 + 格式','"输入文字→输出文字"的站已死，必须交互 / 文件 / 本地处理','抱怨越具体，商机越值钱']
  },
  {
    id:'m2',title:'专业玩家的"需求透视眼"',sub:'三板斧 · 意图 / 拥挤度 / 含金量',
    kicker:'LESSON 02 · VALIDATION',
    lede:'很多新手的痛点是："我觉得这个网站挺有用的。" 结果上线一个月，每天访问量个位数（全是自己刷的）。老手用"商业可行性三板斧"扫描一个词。',
    quote:'零竞争往往意味着零需求。真正赚钱的是"池塘有点脏，但里面有鱼"的地方。',
    sections:[
      {title:'第一斧：搜索意图 & AI 免疫度',blocks:[
        P('搜索意图（Search Intent）分四种：'),
        TERMS([
          {term:'信息型',text:'what is bitcoin —— 最难变现，且最危险'},
          {term:'导航型',text:'facebook login —— 没机会，人家直接找官网'},
          {term:'交易 / 工具型 ⭐',text:'compress pdf、youtube thumbnail downloader —— 我们的主战场'},
          {term:'商业调查型',text:'best crm for small business —— 联盟营销战场'}
        ]),
        CALL('warn','2026 红线：AI 免疫度（Zero-Click Risk）','谷歌顶部 AI Overviews 直接总结答案。一句话能说完的词（汇率换算、图片黑白教程），用户看完就走。有免疫力的词必须包含<strong>交互、下载、文件处理、个性化计算、实时数据</strong>。AI 聊天框没法帮你把 20 张图批量裁剪打包 ZIP。'),
        P('判断口诀：如果 ChatGPT 一句话就能替代它 → 放弃；如果必须"点、拖、传、下载" → 可做。')
      ]},
      {title:'第二斧：战场拥挤度（肉眼排雷法）',blocks:[
        P('假设 <span class="inline-code">invoice generator</span> 每月几十万人搜，你兴奋地做了，结果永远排不进首页 —— 这就是不懂 <b>KD（Keyword Difficulty）</b> 吃的亏。不用先买昂贵 SEO 软件，开无痕浏览器搜这个词，盯住第一页（SERP）：'),
        GRID([
          {icon:'🔴',title:'红灯区：快逃',text:'首页全是 Canva、Adobe、Microsoft、Forbes、Wikipedia，标题精准包含你的词。个人进去就是炮灰。',tagline:'Red flag'},
          {icon:'🟢',title:'绿灯区：论坛帖',text:'Reddit / Quora / 小众问答居然排在谷歌前三。说明谷歌找不到好网站，只能拿论坛凑数。',tagline:'Green light'},
          {icon:'🟢',title:'绿灯区：老破小',text:'界面像 2005 年，排版丑陋、满屏弹窗、手机端错位。需求在，供给烂，你用 AI 做干净的现代版就能后来居上。',tagline:'Green light'},
          {icon:'🟢',title:'绿灯区：长尾词',text:'不做 calculator，做 airbnb cleaning fee calculator。月搜 2000，竞争近零，来的全是真实痛点房东。',tagline:'Long-tail'}
        ])
      ]},
      {title:'第三斧：流量含金量',blocks:[
        P('同样 1 万人访问，收益可能差 50 倍。核心看三个指标：'),
        TERMS([
          {term:'1. 地区含金量（Tier-1）',text:'美英加澳（有时加北欧/西欧）习惯为软件付月费，广告主出价高。同样 1000 次展示：美国用户 $5–20，发展中国家可能只有 $0.3。'},
          {term:'2. 行业单价（CPC）',text:'娱乐/壁纸/游戏攻略点击可能只分 $0.05；金融税务、B2B 软件、法律模板、房产装修、医疗健康、教育留学、SaaS 工具可达 $2–5。'},
          {term:'3. MRR 订阅制算账',text:'广告赚钱需每月 10–30 万访问；Micro-SaaS $9/月只需找到 112 个付费用户。B 端用户花 $10 像喝水，因为帮他省了 2 小时。'}
        ]),
        FORM('$1,000 / 月 = 很多独立开发者跨入自由职业的第一道门槛'),
        CALL('gold','行业心法','新手总想找"完全没人做、也没人搜"的蓝海，但互联网上零竞争往往意味着零需求。要找的是"有人搜 + 老站勉强赚钱 + 体验极烂"的地方。')
      ]},
      {title:'本课知识小结',blocks:[
        UL([
          '<strong>搜索意图</strong>：是不是刚需动作？（工具 / 交易型优先）',
          '<strong>AI 免疫力</strong>：ChatGPT 能直接替代吗？（必须交互 / 文件处理 / 特定工作流）',
          '<strong>SERP 扫雷</strong>：首页有没有 Reddit 帖或丑陋老网站？（有 = 机会）',
          '<strong>Tier-1 & CPC</strong>：面向欧美高净值人群或商用场景吗？（高单价 = 事半功倍）'
        ])
      ]}
    ],
    tools:['Semrush','Ahrefs','Similarweb','Google 搜索','Google Trends'],
    takeaway:['先问"AI 能不能一句话替代"','无痕搜一次，看首页对手形态','算清 RPM / CPC / MRR，再决定做不做']
  },
  {
    id:'m3',title:'独立开发者的"黄金狩猎场"',sub:'五个去找点子的地方 + 两个中国优势',
    kicker:'LESSON 03 · HUNTING',
    lede:'需求不是"想"出来的，是在人群里"听"出来的。这一课给你五个每天都能刷的狩猎场，以及两个属于中国自由职业者的独特优势。',
    quote:'把大软件里某个让人头疼的 1% 小功能切出来，做到极致简单 —— 你的机会永远在这里。',
    sections:[
      {title:'狩猎场一：数字资产交易市场（合法抄作业）',blocks:[
        P('核心阵地：Flippa、Acquire.com / Microns.io、TrustMRR（收入接 Stripe 验证，做不了假）。'),
        CALL('tip','侦察技巧','你不是去买网站的，是去免费做市场调研的。卖家会把底裤都亮出来：解决什么问题、每月多少访客、流量来自谷歌还是社媒、净利润多少美金。筛选"<strong>上线不到 2 年 + 月利润 $500–3000</strong>"，你会大开眼界。')
      ]},
      {title:'狩猎场二：大厂软件的差评区',blocks:[
        P('方法叫 <b>Unbundling（大厂功能拆解术）</b>。阵地：G2 / Capterra、Shopify App Store、Chrome Web Store。'),
        P('不要看满分好评，直接筛 1–3 星。你会看到："软件太臃肿，我只想用它的【A功能】，为什么要逼我每月付 $49？" —— 把那个 A 功能单独拎出来，做成打开网页就能用的极简站，收 $5/月或免费+广告。')
      ]},
      {title:'狩猎场三：垂直行业的 Reddit 抱怨区',blocks:[
        P('很多新人只逛 r/SaaS，那里全是和你一样的开发者。真正有钱的客户在自己的职业社区：r/accounting、r/realtors、r/EtsySellers、r/freelance、r/excel。'),
        UL([
          '黄金痛点词：<span class="inline-code">"I hate"</span>、<span class="inline-code">"spend hours"</span>',
          '<span class="inline-code">"spreadsheet"</span> / "Excel" —— 哪里有乱表格，哪里就有小工具机会',
          '<span class="inline-code">"is there a tool"</span> / <span class="inline-code">"willing to pay"</span>'
        ]),
        CALL('insight','2026 隐藏红利','Semrush 等机构研究显示：用户向 ChatGPT / Claude / Perplexity 寻求软件推荐时，<strong>Reddit 是被引用次数最多的第一大信息源</strong>。吃透 Reddit = 未来让全球 AI 免费推荐你的网站。')
      ]},
      {title:'狩猎场四：字母汤与时间差雷达',blocks:[
        STEP([
          {title:'Google Autocomplete 字母汤',text:'无痕打开谷歌，输入词根 pdf to 或 calculator for，后面依次敲 a、b、c…z。谷歌按全球真实热度自动补全，你会瞬间看到大量想不到的刚需长尾词。'},
          {title:'Google Trends & Exploding Topics',text:'专门捕捉"新物种"：新游戏、新法规、新 AI 模型。围绕它立刻产生配套需求 —— 数值模拟器、合规自查生成器、提示词辅助器。旧工具竞争是地狱，新趋势配套工具往往零竞争。'}
        ])
      ]},
      {title:'狩猎场五：案例库养商业体感',blocks:[
        P('每天 15 分钟：Product Hunt（重点看第 10–40 名，个人开发者周末作品）、Starter Story / Indie Hackers（真实复盘"怎么发现冷门需求做到月赚 $3000"）。')
      ]},
      {title:'两大中国独特优势',blocks:[
        GRID([
          {icon:'🦷',title:'不性感但极赚钱',text:'宠物医院、草坪维护、小型物流经纪、牙医诊所、装修承包商 —— 一单客单价几百上千美金，他们非常舍得为软件花钱。"给兽医做的对账小工具"在源源不断印钞。',tagline:'Boring Niches'},
          {icon:'🌏',title:'东西方信息差',text:'国内被做烂的微痛点小工具（图片拼接、排版美化、去水印、二维码美化），英文世界还停留在十年前满屏弹窗的古董站。把成熟交互"翻译"成英语网页版 = 降维打击。',tagline:'Arbitrage'}
        ])
      ]}
    ],
    tools:['Flippa','Acquire.com','Microns.io','TrustMRR','G2','Capterra','Shopify App Store','Chrome Web Store','Reddit','Google 搜索','Google Trends','Exploding Topics','Product Hunt','Starter Story','Indie Hackers'],
    takeaway:['每天固定 20 分钟刷 5 个狩猎场','先筛 1–3 星差评，再看月利润 $500–3000 的已验证项目','国内做烂的微工具 = 英文世界的空白']
  },
  {
    id:'m4',title:'网站到底怎么把钱装进口袋',sub:'三种引擎 · 广告 / 收费 / 联盟',
    kicker:'LESSON 04 · MONETIZATION',
    lede:'面向全球英语用户的网站，主流赚钱引擎有三种：广告分账（AdSense）、直接收费（MoR 订阅/买断）、拿佣金（Affiliate）。资金路径和避坑点完全不同。',
    quote:'98% 的免费用户撑起流量和广告费，2% 的付费用户贡献高利润现金流。',
    sections:[
      {title:'引擎一：Google AdSense（免费工具站印钞机）',blocks:[
        P('底层规则变化：已从 CPC 为主转向 <b>CPM（按千次展示付费）</b>，广告主出钱买展示，谷歌抽成后站长约分 <b>68%</b>。金融、B2B、房产类广告主出价高，同样 1000 次展示收益可能是娱乐站的 10 倍。'),
        CALL('tip','破除三大过审谣言','"必须写够 20 篇文章 / 域名满半年 / 每天几百访客"全是过时的。<strong>真正看重的 4 件事</strong>：① 页面有用且原创（一个核心工具页也行）② 独立顶级域名 + HTTPS + 手机端正常 ③ 法律三件套：Privacy Policy / Terms of Service / Contact·About（缺隐私政策 100% 秒拒）④ 不是粗制滥造垃圾页。'),
        CALL('warn','钱打回国内的两个坑','① <strong>地址 PIN 验证</strong>：赚到约 $10 时谷歌寄 6 位 PIN 明信片，国内平信慢且易丢，地址写极详细并在街道名后加手机号。② <strong>W-8BEN 税务表</strong>：不填默认按最高扣 24% 美国流量收入；填完利用中美税收协定可降到 0–10%。'),
        P('中国大陆个人可用真实身份证和国内住址注册。满 $100 后，次月 21–26 号自动电汇到国内储蓄卡；部分网点结汇可能要出示后台收入流水。')
      ]},
      {title:'引擎二：直接收费（PSP vs MoR 是价值千金的区别）',blocks:[
        TERMS([
          {term:'PSP 支付通道（Stripe / PayPal）',text:'只是"收银员"，把钱刷进你账户。法律上你是直接卖家：卖给英国人要交 VAT，卖给加州人要交销售税，全球 40+ 地区有数字税法。Stripe 目前不支持大陆个人或公司直接注册。'},
          {term:'MoR 名义商户（推荐）',text:'法律上是"全球总经销商"。用户买单对象是平台，平台搞定全球税务合规、发票、拒付欺诈，扣 4–6% 后打给你干净税后利润。个人出海的终极救星。'}
        ]),
        STEP([
          {title:'国内个人首选：Creem / Dodo Payments',text:'明确支持中国大陆个人注册。Creem 费率统一约 3.9% + $0.40，无跨境卡/订阅隐形叠加费，支持直接提现回国（含支付宝等），审核极快，适合冷启动。'},
          {title:'传统老牌：Paddle / Lemon Squeezy',text:'Paddle 5% + $0.50，稳健但合规审查严、需要成熟 SaaS，新手易被拒；Lemon Squeezy 综合费率常超 7%，2024 被 Stripe 收购后正逐步迁移，目前只作备选。'},
          {title:'做大后的终极形态',text:'月入稳定 $3000–5000 后，再考虑注册香港公司或美国 LLC，配 Mercury / Airwallex 开商业账户，用最低费率 Stripe。0→1 阶段千万别先花钱开海外公司。'}
        ])
      ]},
      {title:'引擎三：联盟营销（借鸡生蛋）',blocks:[
        P('注册 SaaS / 电商平台的联盟计划，拿专属追踪链接。推荐一个月费 $30 的软件，用户付费你得 20–50% 分成。<b>Recurring Commission</b>：用户一直续费，你一直拿。高客单（建站、VPN、跨境电商 ERP）一单可达 $50–150。'),
        P('去哪找金主：PartnerStack（优质 B2B SaaS）、Impact.com、Amazon Associates。最土但最有效：把任何海外软件官网拉到 Footer，看到 "Affiliates" / "Partner Program" / "Refer a friend" 就点进去申请。'),
        CALL('warn','铁律：Affiliate Disclosure','美国 FTC 规定：页面里有佣金链接，必须在显眼位置写标准英文声明（大意："本页面可能包含联盟链接，通过链接购买我们可能获得少量佣金，但不增加您的任何费用"）。不写会被联盟平台封号、谷歌降权。')
      ]},
      {title:'一鱼三吃组合拳',blocks:[
        STEP([
          {title:'第 1 层 · 引流层',text:'核心基础功能完全免费、不用注册直接用 —— 靠它吃谷歌免费搜索流量。'},
          {title:'第 2 层 · 兜底层',text:'页面边缘放一两个不破坏体验的 AdSense 广告，或一张高度相关的联盟推荐卡片（"需要自动记账报税吗？试试这款会计软件"）。'},
          {title:'第 3 层 · 高利润层',text:'Pro 按钮 $9 解锁无水印高清导出 / 批量 50 个文件 / 保存历史记录，接入 MoR 收款。'}
        ])
      ]}
    ],
    tools:['Google AdSense','Creem','Dodo Payments','Paddle','Lemon Squeezy','Stripe','PayPal','Polar','Mercury','Airwallex','PartnerStack','Impact.com','Amazon Associates'],
    takeaway:['免费工具站先过 AdSense 四关 + 法律三件套','收款用 MoR（Creem/Dodo），别碰 Stripe 大陆注册','任何佣金链接都必须写 Affiliate Disclosure']
  },
  {
    id:'m5',title:'零代码 AI 建站真实全流程',sub:'5 个零件 · 工具矩阵 · 5 步流水线',
    kicker:'LESSON 05 · BUILD & LAUNCH',
    lede:'别被程序员黑话吓到。任何网站拆到最后都是 5 样东西在配合。用"开餐厅"类比，一次记牢。',
    quote:'先让 AI 军师写产品说明书，再进建站工具 —— 别把付费额度烧在 30 轮对话上。',
    sections:[
      {title:'第一步：用"开餐厅"看懂 5 个核心零件',blocks:[
        GRID([
          {icon:'🏠',title:'域名 Domain = 门牌号',text:'yourtool.com，约 $10–12/年。Cloudflare Registrar 或 Porkbun 买，透明不涨价。',tagline:'~$10/yr'},
          {icon:'🍽️',title:'前端 Frontend = 大堂菜单',text:'用户看到点到的一切。很多纯服务型工具（换算、裁剪、密码生成）只有前端就够了。',tagline:'Browser'},
          {icon:'👨‍🍳',title:'后端 Backend = 后厨',text:'调用昂贵 AI 接口、校验付费权限必须放这里，绝不能把密钥暴露在大堂。',tagline:'Server'},
          {icon:'📦',title:'数据库 Database = 仓库账本',text:'要注册/历史记录/收藏才需要。Supabase 免费版送 500MB + 5 万月活登录。',tagline:'Supabase'},
          {icon:'💡',title:'托管 Hosting = 店面水电',text:'Cloudflare Workers/Pages 免费可商用、无限流量；Vercel 丝滑但 Hobby 禁商用。',tagline:'24/7 Online'},
          {icon:'🔐',title:'GitHub = 代码保险柜',text:'AI 生成的所有代码一键存进去，换平台、请人改，资产永远在你手里。',tagline:'Own your asset'}
        ]),
        CALL('warn','Supabase 休眠机制','免费版连续 7 天没人访问会自动暂停。上线后注意保活，有收入再升 $25/月。'),
        CALL('warn','Vercel 合规红线','Hobby 免费版明确仅限非商业个人使用。一旦挂广告或收费，按合规要求需升级 $20/月 Pro。个人工具站省钱首选 Cloudflare。')
      ]},
      {title:'第二步：AI 建站工具矩阵怎么选',blocks:[
        TERMS([
          {term:'完整小软件（登录 + 数据库 + 上线）→ Lovable',text:'对非技术创业者最友好的全栈工具。中文/英文描述需求，自动接 Supabase、登录注册，支持鼠标点网页可视化微调。免费版每天 5 次对话，重度使用约 $25/月。'},
          {term:'纯前端、颜值高、不用登录 → v0 / Bolt.new',text:'v0 界面审美极现代，不像土味草根站；Bolt.new 纯浏览器跑得飞快，几分钟跑通一个计算器原型。'},
          {term:'做大或卡住 → Cursor',text:'最强的 AI 代码编辑器。前期不用碰，但代码都在 GitHub，未来大改直接拉进 Cursor，掌控力无限。'}
        ]),
        P('圈内把这种"靠嘴说需求、让 AI 写代码"的方式叫 <b>Vibe Coding（氛围编程）</b>。选错工具是新手最大的浪费。')
      ]},
      {title:'第三步：真实 5 步流水线',blocks:[
        STEP([
          {title:'先找 AI 军师写 PRD（最省钱的一步）',text:'新手直接冲进建站工具说"帮我做发票生成器"，改 30 轮烧光额度，还把功能改坏（30 轮对话天花板）。高手先花 30 分钟跟 ChatGPT / Claude 讨论：有哪些页面、点哪里出什么结果、需要什么字段，输出《产品需求文档 PRD》，一次性喂给 Lovable / Bolt，80% 框架一次成型。'},
          {title:'浏览器里对话打磨核心功能',text:'只做最核心 1 个功能（MVP）。不要一上来就搞积分系统、暗黑模式、多语言、社区论坛 —— 功能越少，AI 越不容易出错，上线越快。'},
          {title:'一键托管 + 绑定域名',text:'项目推 GitHub → 连 Cloudflare（或平台一键发布）→ 域名商后台指向托管地址 → 等 5 分钟，全球输入 .com 就能看到小绿锁 HTTPS。'},
          {title:'装上"眼睛"与"收银台"',text:'让 AI 把 Google Analytics 和 Google Search Console 代码贴进网页，每天看哪个国家来了多少人、搜什么词进来。要赚钱就接 Creem / AdSense。'},
          {title:'上线前必下的 2 句保命指令',text:'① "请检查所有代码，确保没有任何隐私密钥（API Key）暴露在前端页面里。" ② "如果是图片/PDF/文件处理工具，请尽可能全部放在用户浏览器本地处理（Client-side），不要上传到服务器。" —— 省后端钱、速度快、规避欧美隐私合规风险。'}
        ])
      ]}
    ],
    tools:['ChatGPT','Claude','Lovable','v0','Bolt.new','Cursor','GitHub','Supabase','Cloudflare','Cloudflare Registrar','Porkbun','Vercel','Google Analytics','Google Search Console','Creem','Google AdSense'],
    takeaway:['5 个零件：域名 / 前端 / 后端 / 数据库 / 托管','先用 ChatGPT 写 PRD，再进 Lovable / v0 / Bolt','上线前必查密钥暴露 + 强制本地处理文件']
  },
  {
    id:'m6',title:'上线后如何从 0 到 1 搞到全球免费流量',sub:'脉冲型 × 复利型 · 四阶段作战',
    kicker:'LESSON 06 · TRAFFIC',
    lede:'先建立核心认知 —— 两种完全不同性格的流量。成熟操盘手永远是：第 1 个月用脉冲打法破冰，同时种下复利打法的种子。',
    quote:'哪怕谷歌 SEO 流量再香，本质上也是"租用"谷歌的地盘。从第一天起就要把过路流量变成自己的私域资产。',
    sections:[
      {title:'两种流量性格',blocks:[
        GRID([
          {icon:'⚡',title:'脉冲型（社媒 / 打榜）',text:'Reddit、X、短视频爆一条今天 5000 人、后天归零。作用：冷启动测试、拿第一批真实反馈和第一笔试水收入。',tagline:'Pulse'},
          {icon:'📈',title:'复利型（SEO + AI 推荐）',text:'需要 2–6 个月爬坡，但一旦排到谷歌第一页，半年不管它，每月仍有几千上万精准需求的人自动点进来。',tagline:'Compound'}
        ])
      ]},
      {title:'第 1–14 天：冷启动基建',blocks:[
        STEP([
          {title:'去两大搜索引擎"报户口"',text:'Google Search Console 提交 sitemap.xml，检查 robots.txt 没有误写禁止抓取。Bing Webmaster Tools 千万别漏 —— ChatGPT Search 等 AI 搜索底层重度依赖必应索引，提交等于拿到被 AI 推荐的入场券。'},
          {title:'批量提交全球导航目录站',text:'新站没外链，最省钱是"刷目录站"。先一次性备好物料包：1 个 512×512 透明底 Logo、1 句 60 字符内英文标语、1 段 200 字符简介、3 张高清功能截图。花两三个晚上提交给 Product Hunt、AlternativeTo、BetaList、Indie Hackers 及细分 AI/工具目录，拿几十条高质量外链 + 第一批种子用户。'}
        ])
      ]},
      {title:'前 30 天：不花一分钱的社媒游击战',blocks:[
        TERMS([
          {term:'Reddit 精准狙击（别发硬广）',text:'新手发帖 "Hi guys, I built a cool tool" → 99% 秒删封号。老手用搜索框盯正在抱怨求助的人（"how do I..." / "looking for a free tool"），先写 100 字真诚干货帮解决问题，最后顺带一句："我自己也被这事烦死，顺手做了个免费工具，不用登录，希望能帮到你。" 这种回复不会删，还能收获点赞；几个月后继续有人顺着链接摸过来。'},
          {term:'X #BuildInPublic',text:'发真实进展："第 1 天发现没人做好用的 XX 工具，用 AI 搭了原型"、"第 15 天赚到人生第一笔 $9 订阅，复盘做对了 3 件事"。真实数据和前后对比截图自带传播。'},
          {term:'视觉系短视频',text:'不用露脸、不用说英语。录 15 秒屏幕：痛点 3 秒 → 点击 5 秒 → 惊艳结果 7 秒，配欧美热门纯音乐 + 英文大字字幕，同步发 TikTok / YouTube Shorts / Instagram Reels。'}
        ])
      ]},
      {title:'第 2–12 个月：SEO 与 GEO',blocks:[
        CALL('warn','生死红线：Scaled Content Abuse','用 AI 一键生成 5000 篇千篇一律的垃圾文，或几千个只换城市名的空壳页（"纽约最好的水管工"…）—— 2026 谷歌核心算法专门打击，无数站流量一夜跌 50–80% 甚至整站被拔毛。'),
        UL([
          '<strong>真数据 / 真功能的工具矩阵页（高质量 pSEO）</strong>：Wise 汇率、Canva 模板库每年白拿上亿搜索流量，因为每页都有不可替代的交互或独特数据。图片转换站不要只有一个首页，拆出 PNG to WebP、HEIC to JPG、SVG to PNG 等 20 个精准落地页。',
          '<strong>专啃超细长尾 + 每周 30 分钟调优</strong>：新站前半年别抢 "PDF Editor"。每周打开 GSC，找排名 5–20 名的页面 —— 谷歌已认可它们，只需改更吸引人的标题、补内容、加内链，很快冲进前三。',
          '<strong>顺手做 GEO（让 AI 推荐你）</strong>：首页底部用清晰英语写 FAQ 和核心对比（"谁最适合用？" "和收费软件 X 的区别？"），AI 极爱抓结构化问答。配合 Reddit 真实讨论 + 目录站收录，多处被客观提到，AI 就会把你当权威答案。'
        ])
      ]},
      {title:'终极护城河：别一辈子给谷歌当佃户',blocks:[
        GRID([
          {icon:'📧',title:'留住邮箱 Email List',text:'免费工具也可以给轻量诱饵："输入邮箱，发你完整报告 / 高级模板"。手里 2000 个真实欧美用户邮箱，上新站群发一封就能卖几十单。',tagline:'Own audience'},
          {icon:'🔤',title:'养成品牌词搜索',text:'起一个好记朗朗上口的名字，体验做到极致。当用户直接搜你的站名而不是"在线压缩图片"，没有算法能打垮你。',tagline:'Brand search'}
        ])
      ]}
    ],
    tools:['Google Search Console','Bing Webmaster Tools','Google Analytics','Product Hunt','AlternativeTo','BetaList','Indie Hackers','Reddit','X / Twitter','TikTok','YouTube Shorts','Instagram Reels','Google 搜索','Semrush'],
    takeaway:['先报户口（GSC + Bing），再刷目录站拿外链','Reddit 先给干货再提工具，硬广必死','每周 30 分钟优化排名 5–20 名的页面']
  },
  {
    id:'m7',title:'深度破局：把"发现需求"变成流水线',sub:'4 副 X 光眼镜 · 机械化挖矿 · 大脑推演',
    kicker:'DEEP DIVE 01 · OPPORTUNITY',
    lede:'每次盯着空白屏幕问"我到底该做什么网站"，大脑就死机了。原因不是你没创意，而是你在用错误的方式找需求。',
    quote:'你不需要发明一种新欲望，只需要发现已经存在、但目前解决得很憋屈的麻烦。',
    sections:[
      {title:'先破除 3 个心理误区',blocks:[
        UL([
          '<strong>误区 1 · 需求要"想"出来</strong>：90% 赚钱的点子是在人群中"听"出来的。',
          '<strong>误区 2 · 宏大叙事病</strong>：一提建站就想到 Airbnb / Notion / Canva。实际上"让人皱眉 3 分钟的小麻烦"就是极佳的独立网站 —— 银行流水 PDF 转干净 Excel、一键裁 Twitch 尺寸表情包。',
          '<strong>误区 3 · 大厂已经有了</strong>：Word / Excel 存在四十年，每年仍有无数只做"一种特定表格/排版"的极简站年入几十万美金。大厂追求大而全，代价是臃肿昂贵复杂。'
        ])
      ]},
      {title:'戴上 4 副 X 光眼镜',blocks:[
        GRID([
          {icon:'🔁',title:'摩擦镜：重复动作',text:'重复复制粘贴、手动一个个改、拿计算器反复按 —— 那里就藏着工具站。信号词：Batch/Bulk、Manually、Takes forever、Formatting messed up。',tagline:'Friction'},
          {icon:'🔗',title:'桥梁镜：A 导到 B',text:'人们很少只用一个软件。A→B 对接不顺的地方就是你的网站。ChatGPT 的 Markdown 粘到 Word 全是 ### 乱码 → AI 文本无损转 Word 排版器。',tagline:'Bridge'},
          {icon:'✖️',title:'乘法镜：老工具 × 新场景',text:'【老掉牙的通用工具】×【具体新平台 / 职业 / 国家规则】= 全新蓝海。图片裁剪 × LinkedIn 横幅安全区 = LinkedIn Banner Cropper。',tagline:'Multiply'},
          {icon:'💰',title:'金钱镜：赚钱/省钱/求职/罚款',text:'紧盯人们"为了赚钱、省钱、找工作、避免罚款"的时刻。最舍得找工具的 5 类人：跨境卖家、求职者/自由职业者、内容创作者、小型线下企业主、刚经历新规的人。',tagline:'Money'}
        ]),
        FORM('通用工具 <span>×</span> 具体平台 / 职业 / 规则 <span>=</span> 全新蓝海网站'),
        P('计算器 × Airbnb 房东净收益 / TikTok Shop 卖家利润 / 美国自由职业者时薪反推；合同生成器 × UGC 博主发票 / 健身教练免责协议 / 宠物寄养服务清单 —— 顺着列表排列组合，你能立刻列出 100 个。')
      ]},
      {title:'机械化挖矿动作（直接照抄的搜索指令）',blocks:[
        UL([
          '<span class="inline-code">site:reddit.com "is there a free tool" [行业词]</span>',
          '<span class="inline-code">site:reddit.com "how do I batch" [动作]</span>',
          '<span class="inline-code">site:reddit.com "I spend way too much time"</span>',
          '<span class="inline-code">site:reddit.com "why is [软件] so expensive"</span>'
        ]),
        P('中文互联网是你的宝藏：淘宝 / 拼多多搜"模板、工具、计算表、生成器、排版"，有人月销几万单的 9.9 元装修预算表，说明是全人类刚需。小红书的"效率吐槽 / 神器推荐"里，那些"哇这个小程序真方便"的东西，去英文谷歌搜一下，往往只有 10 年前满是弹窗的老古董。'),
        CALL('gold','记住这 12 个美金制造词根','calculator、generator、converter、checker、estimator、formatter、splitter、extractor、comparator、planner、visualizer、checklist。找一个你感兴趣的大领域（podcast / shopify / real estate / wedding），把大词和这 12 个词根挨个拼进谷歌，看下拉补全 —— 谷歌亲自把老外每天搜的词喂到你嘴边。')
      ]},
      {title:'大脑实时推演：3 次慢动作回放',blocks:[
        STEP([
          {title:'案例 A · 房产中介的通勤截图',text:'中介抱怨：每个客户都问"早高峰开车去我公司/老婆公司/孩子学校各多久"，他要反复输地址再手动截图拼图。<br>→ 摩擦镜：一次只能算 A→B，他要 1 对多。金钱镜：中介一单佣金几千上万美金。<br>→ 做 Multi-Point Commute Card：输入房源 + 3–5 个目的地，生成带地图和通勤时间对比的高级卡片图。租客免费带水印，中介 $9/月去水印 + 加头像联系方式。'},
          {title:'案例 B · 平台规则突然改了',text:'YouTube 推 Shorts、Etsy 调整广告费算法。普通人说"跟我没关系"，建站者看到【新变化 = 零竞争时间差】：规则一改，旧的算账工具全作废，几十万卖家正在疯狂搜新规则。<br>→ 2 小时内用 AI 做 "Etsy 2026 最新费用与利润测算器"，发到对应 Reddit 板块。抢先一周上线，吃下第一波精准流量。'},
          {title:'案例 C · 你自己的亲身怒点',text:'把 AI 生成的一长段文字粘到邮箱，带出一堆灰底和乱字号，调半天调不回来。<br>→ 推己及人：今天恶心到你的小问题，今天也恶心着几万个白领、老师、自由职业者。<br>→ 做 Text Cleaner & Formatter：打开即用，统计字数、去多余空行、一键转干净表格，纯前端零服务器成本，挂广告，十年后还有人搜。'}
        ])
      ]}
    ],
    tools:['Google 搜索','Reddit','淘宝','拼多多','小红书','微信','Google Trends'],
    takeaway:['4 副眼镜：摩擦 / 桥梁 / 乘法 / 金钱','12 个美金词根 × 任意领域 = 100 个点子','粘贴排版这种"自己的怒点"就是常青树工具']
  },
  {
    id:'m8',title:'职业玩家"找新词做新站"作战系统',sub:'新词时间窗 · 4 大雷达 · 15 分钟研判 · 3 小时上线',
    kicker:'DEEP DIVE 02 · NEW KEYWORDS',
    lede:'老词是肉搏战（background remover 首页全是十年巨头）。新词不一样：全世界突然有几万人搜，但全网还没有一个专门针对它的优质网页。',
    quote:'谁能抢在所有人之前做出一个界面干净、标题精准、真正满足意图的页面，哪怕域名刚注册 1 天，谷歌也会把它推上第一页。',
    sections:[
      {title:'底层逻辑与 2026 纠偏',blocks:[
        P('这就是<b>新词时间窗口红利</b>。但要注意：前几年流行的"精准匹配域名 EMD"（抢注 新词.com 躺赢）已被谷歌明确限制 —— 不再仅靠域名匹配关键词自动加权，内容空洞的域名站还会被降权。抢先上线好记域名 <strong>+</strong> 真正有用的交互页面，依然能吃下最高点击率。'),
        CALL('warn','数据延迟陷阱','Ahrefs / Semrush 的词库往往有 30–90 天延迟。等趋势数据出来，你看到的是别人吃完的残羹。职业猎手直接蹲最上游源头。')
      ]},
      {title:'4 大高速新词雷达',blocks:[
        GRID([
          {icon:'🐙',title:'GitHub Trending',text:'每天全球程序员开源爆火新工具（AI 换脸、去水印、音频分离、格式转换）。老外不会装代码，看到新闻就去搜"[项目名] online / free trial"。',tagline:'Daily'},
          {icon:'📣',title:'AI 巨头发布会 / X',text:'OpenAI、Google、Anthropic、Midjourney、Suno 一旦公布新功能代号或模型名，官宣那一秒新词就诞生了。',tagline:'Instant'},
          {icon:'🤗',title:'Hugging Face / Replicate',text:'最新模型在线测试集散地。很多爆款网页工具本质就是把丑陋模型接口套上漂亮极简外壳。',tagline:'Model layer'},
          {icon:'🎮',title:'Steam / itch.io / TikTok 热梗',text:'独立小游戏一爆火，一周内衍生：calculator、tier list maker、interactive map 等海量新词。',tagline:'Viral'}
        ]),
        H('Google Trends 高级玩法'),
        UL([
          'Explore 输入行业母词（AI / generator / converter / calculator），地区 Worldwide 或 US，时间一定要选 <strong>Past 7 / 30 days</strong>。',
          'Related queries 从 Top 切到 <strong>Rising</strong>，右侧写 <strong>Breakout</strong> 的词 = 短期搜索量暴涨 5000% 以上。',
          '<strong>基准词对比测流量</strong>：0–100 曲线只是相对比例。放一个你已知真实搜索量的中等词作参照物对比曲线高度。千万别拿 YouTube / ChatGPT 当基准，会把你的词压成 0 水平直线。',
          '民间奇招：看到新词 <span class="inline-code">AI Homework Helper</span>，搜 <span class="inline-code">AI * Helper</span>，看下拉框弹出的兄弟词（AI Math Helper / AI Essay Helper…）。'
        ]),
        H('榜单雷达：找"刚冒头的陌生站"'),
        P('刷 Toolify.ai（Trending + 收入榜）、Columbus.tools、There\'s An AI For That。高手不看前十明星大厂，专挑"域名注册不到 2 个月，月访问量突然冲到 5–20 万"的小站。把网址扔进 Similarweb 看流量国家，再扔进 Semrush 看是靠哪几个词带火的 —— 一个爆款新站背后的主关键词和衍生词，往往就是一条新赛道。')
      ]},
      {title:'15 分钟生死研判：80% 的词看一眼就放弃',blocks:[
        STEP([
          {title:'瞬时吃瓜词 vs 持续性动作词',text:'奥运冠军、明星绯闻今天暴涨三天归零（趋势里的 Lasted 峰值词），坚决不做。如果新词后面能自然接上 online / free / generator / calculator / how to，说明用户有实操目的，可以做。'},
          {title:'第一页对手形态是否处于真空期',text:'如果首页全是官方新闻稿、YouTube 评测、Reddit 讨论、GitHub 代码库，却<strong>没有一个点进去就能用的工具网页</strong> → 绿灯狂飙。如果大厂官方已把长尾词做成子页占满 → 换下一个。'},
          {title:'搜索意图拆解',text:'同一个新词，意图可能不同。新 AI 生图模型出来：① 免费在线试玩 ② 提示词怎么写 ③ 和 Midjourney 效果对比。第一屏必须 1 秒满足其中一个核心意图，别做成空洞资讯博客。'},
          {title:'1 晚上线可行性',text:'抢新词以小时计。如果需要复杂后端、人工审核，等做完半个月红利早吃光。必须是你用 AI + 现成接口或纯前端，24 小时内能跑出核心功能。'}
        ])
      ]},
      {title:'3 小时上线新站的秘密武器',blocks:[
        CALL('tip','职业选手从不每次从零写整个站','他们提前用 AI 打磨好一套"半成品标准母版"：漂亮的导航栏和移动端框架、法律三件套页面、GA / SEO 标签 / sitemap 自动生成位置、AdSense 广告位占位、Creem / Stripe 支付回调模板。<br><br>新词出现时只需：复制母版文件夹 → 让 AI 专心写中间那个核心工具组件 → 替换文字标题 → 推送上线。核心开发压缩到 <strong>1–3 小时</strong>。'),
        P('另一个高阶打法：长期养 1–2 个 DR 30 以上的"综合型工具箱老站"（如 xxkit.com）。发现新词但不确定能火几天时，不买新域名，直接在老站下开子页面（xxkit.com/新词工具）。老站被谷歌高度信任，新页几小时就能收录，甚至第二天空降首页。验证有长期潜力后再单独买域名孵化品牌站。'),
        CALL('gold','冷静的冷水','"新词新站"是极佳练手武器和第一桶金加速器，但很难单独成为长久护城河。很多追热点的站生命期只有一两个月。它最大的价值是：用极低成本在真实战场体会到"我真的排上谷歌第一页、每天几千老外点进来、真的收到美金"。打通自信后，自然进化到能稳定赚 3–5 年的常青树垂直服务站。')
      ]}
    ],
    tools:['GitHub Trending','Hugging Face Spaces','Replicate','X / Twitter','SteamDB','itch.io','Google Trends','Toolify.ai','Columbus.tools',"There's An AI For That",'Similarweb','Semrush','Google 搜索'],
    takeaway:['新词 = 时间窗，Ahrefs/Semrush 数据滞后 30–90 天','Trends 看 Rising→Breakout，并用基准词测真实量','提前备好母版，才能 1–3 小时上线']
  },
  {
    id:'m9',title:'游戏站专题：3 条路线的生死与上限',sub:'辅助工具伴侣站 · 母站骨架 · 4 个游戏雷达 · 3 根红线',
    kicker:'DEEP DIVE 03 · GAME NICHE',
    lede:'新手说"游戏站"只想到网页小游戏门户。2026 年个人用 AI 做长期英文游戏站，其实有 3 条完全不同的路线。教练最推荐第 3 条。',
    quote:'不提供游戏本体，而是给爆火新游戏做实用小工具 + 深度攻略落地页 —— 开发简单、版权风险低、谷歌爱收录。',
    sections:[
      {title:'3 条路线对比',blocks:[
        GRID([
          {icon:'🕹️',title:'路线 1 · 正版 H5 小游戏门户',text:'接 GameDistribution / GameMonetize 正版库或自己写轻量游戏。坑：只有一个游戏窗口、几乎没有文字 → AdSense 以"低文本站"拒审；还要和 Poki / CrazyGames 硬碰硬，RPM 偏低。',tagline:'Open & play'},
          {icon:'🧠',title:'路线 2 · 魔性微游戏 / 每日挑战',text:'类似 NYT Games / Neal.fun，用 AI 做极简上瘾的原创交互。100% 无版权纠纷、易在 TikTok/Reddit 猎奇传播；难点在创意，不好蹭现成大爆款新词。',tagline:'Original'},
          {icon:'🌟',title:'路线 3 · 辅助工具 & 伴侣站（推荐）',text:'针对新爆火游戏做伤害/收益计算器、配装模拟器、互动地图、Tier List、图鉴筛选、兑换码汇总。AI 写计算器成功率 99%；厂商欢迎社区工具（合理使用），几乎零版权风险；天然有大量文字，AdSense 极易过审。',tagline:'Utility Hub'}
        ]),
        P('高阶玩法：路线 1 和 3 不冲突。"工具/攻略 + 可试玩小组件"混合模式 —— 每页既有实用交互，下方又有扎实详尽的英文指南，既留得住人，谷歌又爱给高排名。后期还能给重度玩家收 $5 解锁"无广告 + 保存配装"。')
      ]},
      {title:'母站基建：名字和 URL 骨架第一天就决定上限',blocks:[
        CALL('warn','致命错误：绑定单一游戏','叫 MinecraftHelper.com 或 Best2026Games.com —— 新游戏爆火时放进来不伦不类，还可能因含大厂商标被投诉仲裁拿走域名。'),
        P('✅ 正确：宽泛、好记、带游戏感的容器型品牌词（Pixel / Loot / Quest / Forge / Arcade / Deck / Pulse），.com 优先（.gg 也很酷但续费稍贵）。今天做像素小游戏，明年做 AI 推理游戏，后年做 Steam 数值计算器，都装得进这个大篮子。'),
        H('专题枢纽结构 Hub Architecture'),
        UL([
          '首页 /：动态展示"本周最火新游 / 热门工具" + 清晰分类导航。',
          '轻量新词：直接开 <span class="inline-code">yoursite.com/new-game-name</span>。',
          '潜力大作：扩展成子专题群 —— <span class="inline-code">/games/palworld/breeding-calculator</span>、<span class="inline-code">/interactive-map</span>、<span class="inline-code">/tier-list</span>。',
          '子页面互相链接 → 谷歌判定"专题权威度 Topical Authority" → 新页排名速度成倍加快。'
        ])
      ]},
      {title:'游戏圈 4 个专属新词雷达（每天 20 分钟）',blocks:[
        GRID([
          {icon:'📊',title:'SteamDB',text:'Trending、Most Followed Upcoming、每周 Next Fest。很多神作发售前 1 周就在试玩圈火了 —— 提前 3 天做好专题页，发售当天舒舒服服躺首页。',tagline:'PC indie'},
          {icon:'👾',title:'itch.io',text:'Top Games 与 New & Popular。病毒级网页小游戏的摇篮，发现魔性玩法就做攻略站、同款网页微替代或成绩记录工具。',tagline:'Web games'},
          {icon:'▶️',title:'YouTube / TikTok 大主播',text:'CaseOh、Markiplier、Splattercatgaming、Wanderbots 等。大主播昨晚试玩视频几小时破 50 万 → 立刻看标题里的游戏名，未来 48 小时搜索量垂直暴起。',tagline:'48h window'},
          {icon:'🧱',title:'Roblox 新图生态',text:'三大永恒刚需词根：codes（每周都搜）、tier list、wiki / value list。词搜量几万到几十万，大媒体懒得写，非常适合个人站持续收割。',tagline:'Teen traffic'}
        ])
      ]},
      {title:'双轮冷启动：基石词 + 冲锋词',blocks:[
        STEP([
          {title:'第 1 周：3–5 个常青基石落地页',text:'挑稳定搜索、竞争不大的经典游戏辅助工具（FPS 鼠标灵敏度跨游戏换算器、战队起名/Logo 配色生成器等），撑起网站框架，写好高质量说明和法律三件套，第一时间申请通过 AdSense —— 先把收钱管道接通。'},
          {title:'第 2 周起：新词落地页常态化冲锋',text:'每周用 4 个雷达挑 1–2 个刚冒头的新游戏词，半天复制母版组件快速上线一个页。就算一个月后过气，没多花域名费，还给母站带来几千真实点击和外链、垫高权重；撞上长寿爆款就能持续印钞一整年。'}
        ])
      ]},
      {title:'活过第 1 年的 3 根高压线',blocks:[
        CALL('warn','① 远离低龄儿童游戏','别做明显针对 13 岁以下的早教/换装/卡通游戏。欧美 COPPA 极严，被判定儿童向站后个性化广告强制关闭，收益腰斩甚至合规封号。瞄准 16+ 青少年和成年玩家。'),
        CALL('warn','② 广告绝不能挨着游戏/工具按钮','玩家点击频率极高，广告紧贴画布或操作按钮导致误点，谷歌判定"诱导无效点击"直接封 AdSense 账号。必须与核心交互区保持明显留白。'),
        CALL('warn','③ 每页文字含金量必须达标','首屏放干净的工具，下半屏一定要有扎实漂亮的攻略、操作技巧、数值说明和 FAQ。既能过 AdSense 审核，又吃下长尾文字搜索和 AI 推荐。')
      ]}
    ],
    tools:['SteamDB','itch.io','YouTube Shorts','TikTok','Roblox','GameDistribution','GameMonetize','NYT Games','Neal.fun','Poki','CrazyGames','Google AdSense','Google Search Console','Creem'],
    takeaway:['路线 3 工具伴侣站：开发易、版权低、 AdSense 易过','母站用容器型品牌名 + Hub 骨架，别绑单一游戏','3 根红线：COPPA / 广告间距 / 文字含金量']
  }
];

/* ================= Training data ================= */
const FLASHCARDS = [
  {front:'calculator',back:'计算器｜最经典的免费工具站词根。永远配一个具体场景：Airbnb 清洁费、自由职业时薪、房贷提前还款。'},
  {front:'generator',back:'生成器｜发票、二维码、简历、配装、卡片…用户要的是"点一下拿走成品"。'},
  {front:'converter',back:'转换器｜格式互转是常青树。拆成独立落地页（PNG to WebP / HEIC to JPG）比一个大首页更精准。'},
  {front:'checker',back:'检测器｜尺寸检查、合规自查、状态检测。配"平台 + 规则"就是新场景。'},
  {front:'estimator',back:'估算器｜费用、利润、收益估算。平台改规则时，第一时间做新费率估算器 = 时间差红利。'},
  {front:'formatter',back:'格式化工具｜Markdown 转 Word、文本清理、表格整理。粘贴排版痛点十年不过时。'},
  {front:'splitter',back:'拆分器｜PDF 拆页、长图切割、批量分割。信号词：手动一个个改。'},
  {front:'extractor',back:'提取器｜从 PDF 提发票、从网页提邮箱、从图片提文字。大厂嫌小，你在中间赚钱。'},
  {front:'comparator',back:'对比器｜费率/规格/方案对比。天然带商业调查意图，适合联盟佣金。'},
  {front:'planner',back:'规划器｜配装、行程、排班、预算。用户愿意为"省两小时"付 $9。'},
  {front:'visualizer',back:'可视化工具｜数据、地图、时间线。视觉直观的站最适合短视频分发。'},
  {front:'checklist',back:'自查清单｜新法规合规自查、新游戏全收集清单。结构化问答还容易被 AI 引用（GEO）。'}
];

const QUIZ = [
  {scene:'你在 Reddit 看到有人吐槽："我只想把 PDF 里的发票信息提取到 Excel，为什么 Adobe 每月收我 $20？"',q:'最合理的下一步动作是？',opts:['立刻用 Lovable 做一个类似 Adobe 的全功能 PDF 编辑器','做一个只解决"发票转 Excel"的极简网页工具，按次或月费收费','写一篇"Adobe 太贵了"的中文评测发到公众号','抢注 adobe-alternative.com 然后先看域名能不能涨价'],ans:1,why:'Unbundling：把大厂里那个让人头疼的 1% 功能切出来做到极致简单。做全功能编辑器会和巨头硬碰硬；抢域名躺赢是过时的 EMD 玩法。'},
  {scene:'谷歌搜 "compress pdf"，第一页全是 Adobe、Canva、Microsoft，标题都精准包含这个词。',q:'这个词现在应该？',opts:['绿灯狂飙，说明需求大，立刻做','先买 Semrush 查 KD，如果 KD 低于 50 就做','红灯快逃，换长尾词如 "compress pdf for email under 5mb"','做一个便宜域名蹭这些巨头的流量'],ans:2,why:'首页全是巨头精准占位 = 巨头肉搏区。个人新站应做超细长尾，避开正面战场。'},
  {scene:'你做了个网站：用户输入一段文字，调用 AI 返回一段润色后的文字。界面很干净。',q:'按 2026 标准，最大风险是？',opts:['界面不够漂亮','ChatGPT 一句话就能替代，AI 免疫度为零，活不下去','没有做多语言版本','没有用 Cloudflare 托管'],ans:1,why:'"输入文字→输出文字"没有交互、文件处理、个性化计算或实时数据，用户直接问 ChatGPT 就走了。'},
  {scene:'你的免费工具站开始有收入了，目前托管在 Vercel Hobby 免费版。',q:'合规上应该？',opts:['继续用 Hobby，反正是个人项目','升级到 Vercel Pro（$20/月），或迁到可商用的 Cloudflare Pages','把广告撤掉就不算商用了','换一个免费的国内托管商'],ans:1,why:'Vercel Hobby 明确仅限非商业个人使用。挂广告/收费后按合规要求需升级 Pro；Cloudflare Pages 免费版允许商用且无限流量。'},
  {scene:'一个欧洲用户付费 $9 买了你的工具。你用的是 Stripe 直接收款。',q:'最大的隐患是？',opts:['Stripe 界面是英文的','你是法律上的直接卖家，要自己处理各国 VAT 和销售税，$9 可能被税务吃掉','Stripe 不支持信用卡','欧洲用户不会付款'],ans:1,why:'PSP 只是收银员，税务合规责任在你。MoR（Creem/Dodo/Paddle）作为名义商户会搞定全球税务，扣费后打给你干净利润。'},
  {scene:'你的新游戏工具页上线两周，GSC 显示某个词排名在第 12 名，有少量展示但点击少。',q:'最高杠杆的动作是？',opts:['删掉这个页面重做','去改标题让它更吸引点击、补全内容、加内链，把 5–20 名的页面推向前三','立刻再去买 10 个新域名','批量生成 5000 篇 AI 文章'],ans:1,why:'排名 5–20 名说明谷歌已认可页面，稍作优化就可能冲进前三，这是 weekly 30 分钟的最高杠杆动作。批量 AI 水文会触发 Scaled Content Abuse 惩罚。'},
  {scene:'你想在 Reddit 行业板块推广刚上线的免费工具。',q:'哪种做法最不容易被删帖封号？',opts:['发帖 "Hi guys, I built a cool tool, check it out!"','找到正在求助的帖子，先写 100 字真诚干货，最后顺带提一句免费工具','每天在同一板块发三次链接','私信所有版主求置顶'],ans:1,why:'先给价值再提工具是老手"温水煮青蛙"打法；硬广 99% 秒删甚至封号，而且高赞干货帖会在几个月后持续带来长尾流量。'},
  {scene:'一个刚发布的 AI 视频模型突然火了，谷歌趋势显示 Breakout，但 Ahrefs 还没收录这个词。',q:'正确的判断和动作？',opts:['Ahrefs 没数据说明没需求，放弃','搜这个词看首页：若只有新闻/论文/讨论、没有能直接用的工具页，就 24 小时内上线一个极简在线试玩页','先花两周做详细市场调研再决定','等 Semrush 更新词库后再说'],ans:1,why:'第三方词库有 30–90 天延迟。新词红利就看时间窗；首页没有可用工具页 = 真空期，应快速用纯前端/现成接口上线。'},
  {scene:'你准备做一个游戏站，域名想叫 MinecraftHelper.com，因为现在 Minecraft 很火。',q:'问题在哪？',opts:['没有问题，精准匹配域名最好','绑定单一游戏：新游戏来了装不进去，还可能因商标被仲裁；应取容器型品牌名','.com 太贵了，应该用 .gg','游戏站不能用 AdSense'],ans:1,why:'EMD 精准匹配域名的自动加权已被谷歌限制。容器型品牌（Pixel / Forge / Quest 等）才能长期装进不同游戏专题。'},
  {scene:'你的图片处理工具上线前，AI 生成的代码里有一个调用 AI 接口的 Key 直接写在前端 JS 里。',q:'必须做什么？',opts:['Key 藏在 JS 里别人看不到，没关系','把 Key 移到后端，并在对话框里要求 AI 检查全代码无密钥暴露；图片处理尽量放浏览器本地','把 Key 换个复杂一点的名字','等有人刷爆账单再说'],ans:1,why:'前端密钥会被任何人扒走刷爆账单。保命指令 ①：绝不让 API Key 暴露在前端；② 文件处理尽量 Client-side，省服务器又规避隐私合规。'}
];

const ORDER_STEPS = [
  {id:'a',text:'在 Reddit / G2 / 谷歌下拉里收集抱怨词与长尾词',tag:'找词'},
  {id:'b',text:'过 15 分钟研判：意图、真空期、AI 免疫度、24h 可上线',tag:'验证'},
  {id:'c',text:'无痕搜 SERP 扫雷：看首页对手形态是否处于真空期',tag:'验证'},
  {id:'d',text:'让 AI 军师输出 PRD 产品说明书，明确页面与字段',tag:'设计'},
  {id:'e',text:'用 v0 / Bolt / Lovable 做出只有 1 个核心功能的 MVP',tag:'开发'},
  {id:'f',text:'代码推 GitHub → 连 Cloudflare 托管 → 绑定域名开 HTTPS',tag:'上线'},
  {id:'g',text:'装 GA + GSC，接 AdSense / Creem，提交 sitemap 和 Bing',tag:'变现'},
  {id:'h',text:'Reddit 干货引流 + 目录站提交 + 每周优化排名 5–20 名页面',tag:'增长'}
];
const ORDER_CORRECT = ['a','c','b','d','e','f','g','h'];

const CHECKS = [
  {t:'① 瞬时词还是动作词？',d:'明星绯闻 / 奥运冠军 = 三天归零，放弃。能接上 online / free / calculator / how to = 有实操目的，继续。'},
  {t:'② 第一页有没有"真空"？',d:'首页只有新闻稿、YouTube、Reddit、GitHub，却没有一个能直接用的工具页 → 绿灯。大厂长尾全占满 → 换词。'},
  {t:'③ 搜索意图能否 1 秒满足？',d:'用户是想过？想试玩？想看对比？你的第一屏必须命中一个，别做成空洞博客。'},
  {t:'④ AI 免疫度够不够？',d:'ChatGPT 一句话能答完 → 不做。必须有交互 / 文件处理 / 个性化计算 / 实时数据。'},
  {t:'⑤ 24 小时内能不能上线？',d:'需要复杂后端或人工审核 → 放弃。纯前端 + 现成接口能用 AI 一晚跑通 → 动手。'},
  {t:'⑥ 流量含金量如何？',d:'面向 Tier-1 国家？商用 / 金融 / SaaS 场景？CPC 高不高？同样 1 万人访问收益差 50 倍。'},
  {t:'⑦ 变现路径想清楚了吗？',d:'免费工具 + AdSense？还是 $9 Pro 用 Creem 收款？还是导航站拿联盟佣金？至少确定一条。'}
];

const MAP_STAGES = [
  {icon:'🔍',n:'STAGE 01',title:'找词 · 从抱怨里挖出动作',sub:'目标：3–5 个候选长尾词',
   text:'先戴上 4 副眼镜（摩擦 / 桥梁 / 乘法 / 金钱），把 12 个美金词根和你的领域排列组合。每天机械刷 5 个狩猎场，把看到的原话记进笔记。',
   tools:['Google 搜索','Reddit','Google Trends','Exploding Topics','GitHub Trending','Product Hunt','Flippa','淘宝','小红书'],
   checks:['记下 10 条用户的原话抱怨','用 12 词根拼出至少 30 个组合词','关注一个刚冒头的新事物']},
  {icon:'🎯',n:'STAGE 02',title:'验证 · 15 分钟定生死',sub:'目标：淘汰 80% 的伪需求',
   text:'无痕搜 SERP 看对手形态，判断搜索意图和 AI 免疫度。用基准词在 Google Trends 测真实体量。别用滞后的 Ahrefs 数据判断新词。',
   tools:['Semrush','Ahrefs','Similarweb','Google Trends','Google 搜索','G2','Capterra'],
   checks:['首页无巨头精准占位','有 Reddit 帖 / 老破小网站','必须交互而非一句话答案','面向 Tier-1 或商用场景','24h 内可做出 MVP']},
  {icon:'🧩',n:'STAGE 03',title:'设计 · 先写 PRD 再写代码',sub:'目标：一份可喂给 AI 的说明书',
   text:'花 30 分钟和 ChatGPT / Claude 讨论清楚：有哪些页面、用户点哪里出什么结果、需要什么字段、哪些功能砍掉。只留 1 个核心功能（MVP）。',
   tools:['ChatGPT','Claude'],
   checks:['写明核心功能只有 1 个','列出所有页面与字段','确定免费 / Pro 分界线','写下上线前两句保命指令']},
  {icon:'🛠️',n:'STAGE 04',title:'开发 · 选对工具一次成型',sub:'目标：可运行的核心功能',
   text:'有登录和数据库选 Lovable；纯前端高颜值选 v0 或 Bolt.new。所有代码同步 GitHub。图片/PDF 处理尽量放浏览器本地，密钥绝不进前端。',
   tools:['Lovable','v0','Bolt.new','Cursor','GitHub','Supabase'],
   checks:['MVP 只有一个核心功能','代码已推 GitHub','无 API Key 暴露在前端','文件处理在本地完成','有手机端自适应']},
  {icon:'🚀',n:'STAGE 05',title:'上线 · 域名托管与收银台',sub:'目标：全球可访问 + 能收钱',
   text:'Cloudflare Pages/Workers 托管，绑定 .com 域名开 HTTPS。装上 GA + GSC，接 AdSense 或 Creem。网站底部必须有 Privacy Policy / Terms / Contact 法律三件套。',
   tools:['Cloudflare','Cloudflare Registrar','Porkbun','Google Analytics','Google Search Console','Google AdSense','Creem','Dodo Payments','Vercel'],
   checks:['独立域名 + HTTPS + 手机正常','隐私政策 / 条款 / 联系页齐全','GA 与 GSC 已装','收款通道已接通','robots.txt 未误禁抓取']},
  {icon:'📈',n:'STAGE 06',title:'增长 · 脉冲破冰 + 复利爬坡',sub:'目标：第一批真实用户与长尾排名',
   text:'前 14 天提交 GSC 和 Bing、批量刷目录站；前 30 天 Reddit 干货回复 + #BuildInPublic + 短视频；2–12 个月做真功能工具矩阵页和 FAQ，每周优化排名 5–20 名的页面。',
   tools:['Google Search Console','Bing Webmaster Tools','Reddit','X / Twitter','TikTok','YouTube Shorts','Product Hunt','AlternativeTo','BetaList','Indie Hackers'],
   checks:['sitemap 已提交给谷歌和必应','至少提交 10 个目录站','Reddit 只发干货不硬广','每周 30 分钟调优 GSC','首页有 FAQ 和对比（GEO）','开始沉淀邮箱列表']}
];
