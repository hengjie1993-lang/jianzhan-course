/* ============================================================
   建站教练互动课程 · 内容数据
   内容来源：《阿无的建站教练课程》（桌面完整版，2026-11-18；含 9 节基础/专题课 + 6 堂深度进阶课 + 6 个实战增补）
   当前结构：15 课（00–14），导论篇 + 第一篇至第五篇；原 21 课全文完整保留于 OLD_MODULES。
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
  {name:'微信',cat:'中文视角',url:'https://weixin.qq.com/',desc:'国内小程序生态的微痛点工具，是英文网页版的现成蓝本。',note:'做本地化降维打击'},
  // --- 进阶深度课：信任 / 工程 / 分析 ---
  {name:'Pew Research Center',cat:'竞品调研',url:'https://www.pewresearch.org/',desc:'权威调研：AI Overviews 出现时自然结果 CTR 从 15% 跌到 8% 的原始出处。',note:'引用硬数字前回源头核对'},
  {name:'StackExchange',cat:'需求验证',url:'https://stackexchange.com/',desc:'技术问答社区，SERP 里出现就是"软柿子信号"。',note:'Reddit / Quora / StackExchange 三件套'},
  {name:'Quora',cat:'需求验证',url:'https://www.quora.com/',desc:'问答平台，首页出现往往说明谷歌找不到好工具页。',note:'与 Reddit 同为软柿子信号'},
  {name:'Next.js',cat:'建站开发',url:'https://nextjs.org/',desc:'App Router 的 SSR / SSG / ISR，让源码里直接躺完整标题与正文。',note:'SEO 页面别用纯 CSR'},
  {name:'Astro',cat:'建站开发',url:'https://astro.build/',desc:'内容型静态站框架，默认零 JS，SEO 页面天然友好。',note:'与 Next.js 二选一做 SSG'},
  {name:'Cloudflare Turnstile',cat:'建站开发',url:'https://www.cloudflare.com/products/turnstile/',desc:'免费无感人机盾，挡掉约 95% 自动化脚本，不用找红绿灯。',note:'套在所有消耗算力的按钮 / 接口前'},
  {name:'Upstash',cat:'建站开发',url:'https://upstash.com/',desc:'Serverless Redis，做后端硬限流与结果缓存，防 API 账单爆炸。',note:'前端限流没用，必须服务端锁'},
  {name:'Plausible',cat:'流量增长',url:'https://plausible.io/',desc:'隐私友好的轻量统计，看流量来源与关键事件漏斗。',note:'GA4 的轻量化替代'},
  {name:'Umami',cat:'流量增长',url:'https://umami.is/',desc:'开源可自托管的简洁统计，免费档够用。',note:'与 Plausible 二选一'},
  {name:'PostHog',cat:'流量增长',url:'https://posthog.com/',desc:'产品分析 + 漏斗 + 会话回放，免费档可用。',note:'埋好首页→工具→付费墙→支付四事件'},
  {name:'Microsoft Clarity',cat:'流量增长',url:'https://clarity.microsoft.com/',desc:'免费录下真实欧美访客的鼠标轨迹、热力图与愤怒点击。',note:'看 15 分钟回放就能找到 UX 致命伤'},
  {name:'USPTO 商标搜索',cat:'托管域名',url:'https://tmsearch.uspto.gov/',desc:'美国专利商标局官网，买域名前查核心词在 Class 9 / 42 是否已被巨头独占。',note:'避开 NotionHelper 这类商标自杀名'},
  {name:'Wayback Machine',cat:'托管域名',url:'https://web.archive.org/',desc:'查二手/过期域名的历史快照，看过去 3–5 年有没有博彩/仿牌/灰产黑历史。',note:'买老域名前必做的案底体检'},
  {name:'Cloudflare Email Routing',cat:'托管域名',url:'https://dash.cloudflare.com/?to=/:account/email/routing',desc:'免费把 hello@你的域名.com 转发到个人邮箱，零成本拥有品牌联系邮箱。',note:'配合 Gmail"以其他身份发送"可收发'},
  {name:'Zoho Mail',cat:'托管域名',url:'https://www.zoho.com/mail/',desc:'低价企业邮箱，信誉高，适合做冷邮件和商务合作。',note:'Google Workspace 的平替'},
  {name:'Google Workspace',cat:'托管域名',url:'https://workspace.google.com/',desc:'企业域名邮箱，信誉极高，审核人员更信任。',note:'月费低，适合正经商务'},
  {name:'Resend',cat:'建站开发',url:'https://resend.com/',desc:'开发者事务邮件 API，免费额度够早期用，Next.js 集成极快。',note:'验证码 / 收据 / Magic Link 用它发'},
  {name:'Postmark',cat:'建站开发',url:'https://postmarkapp.com/',desc:'事务邮件 API，送达率高，比自建 SMTP 可靠得多。',note:'Resend 的备选'}
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
const CODE = (text,label) => ({t:'code',text,label});

const OLD_MODULES = [
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
  },
  {
    id:'m10',title:'需求深潜与 SERP 解剖学',sub:'两个幻觉 · 意图四象限 · 解剖五步法',
    kicker:'DEEP DIVE 04 · SERP ANATOMY',
    lede:'前面是"拿着雷达在地图上扫目标"，这一课是用手术刀剖开 Google 搜索结果页（SERP），判断这个需求是真金白银的矿，还是一脚踩空的沼泽。',
    quote:'凡是"用一段文字就能回答清楚"的需求，在 2026 年几乎都没有独立开发的商业价值。',
    sections:[
      {title:'先破除两个致命幻觉',blocks:[
        P('幻觉一：<b>"月搜 5 万，排第一就躺赚"</b>。Similarweb 数据：约 68%–69% 的 Google 搜索零点击结束；Pew Research 研究显示出现 AI Overviews 后自然结果 CTR 从 15% 跌到 8%。'),
        CALL('warn','教练铁律 ①','凡是"一段文字就能回答清楚"的需求，2026 年几乎没有独立开发价值。必须提供 AI 文本框给不了的东西：<strong>文件处理、实时计算、可视化交互、工作流集成、专属数据集</strong>。'),
        P('幻觉二：<b>"Ahrefs / Semrush 显示 KD 只有 10，稳了"</b>。第三方 KD 只统计"排名前 10 的页面有多少外链域名"，它不知道页面有没有塞满广告、顶部是不是 AI 摘要、前排是不是 Reddit 或微软 / Adobe 官方子页。'),
        CALL('warn','教练铁律 ②','工具数据只是初筛。<strong>用美国 IP 无痕浏览器亲眼看 Google 第一页（SERP），才是唯一真理。</strong>')
      ]},
      {title:'搜索意图四象限与 2026 存活率',blocks:[
        P('同样敲进 Google 的词，意图天差地别。放进四个象限，一眼知道该碰谁、该躲谁：'),
        GRID([
          {title:'1 · 纯信息型（别碰）',text:'how to convert pdf to word / what is CAC in SaaS。AI Overviews 重灾区，用户看完顶部 123 步骤就关页面。存活率极低。'},
          {title:'2 · 商业调研型（小心切入）',text:'best AI headshot generator / Notion vs Obsidian。商业调研词出现 AI 摘要比例暴涨 71%。用户做决定前仍想看真实对比表和价格陷阱，可做母站辅助文章，别当核心卖点。'},
          {title:'3 · 工具交互型（主攻）',text:'compress jpg to 50kb / JSON to TypeScript converter。AI 没法把本地图片精准压到 50KB 还不糊，用户必须点进网页才能完成。黄金矿区。'},
          {title:'4 · 交易 / 行动型（必抢）',text:'free online invoice generator no sign up / buy bulk QR code。交易型词触发 AI 摘要比例反而下降 5%，Google 知道用户已准备干活，直接给工具页最有效。'}
        ]),
        FORM('砍掉 1（纯信息），慎用 2（商业评测），All-in 3（工具交互）和 4（交易行动）。')
      ]},
      {title:'SERP 解剖学五步法',blocks:[
        P('挖到词后先别写代码、别买域名。开无痕（挂美国 IP，或在 URL 末尾加 <span class="inline-code">&amp;gl=us&amp;hl=en</span> 强制看美国英文结果），按 5 步解剖：'),
        STEP([
          {title:'第 1 步 · 测首屏含金量',text:'只看第一眼：顶部 4 条广告 + 半屏 AI Overview + Google 自带小工具 = 致命红灯，就算排自然第一也在第 2、3 屏。广告 ≤1–2 条、无官方工具 = 健康绿灯。'},
          {title:'第 2 步 · 查形态匹配度',text:'看自然前 5 名是什么形态。全是单页小工具 → Google 判定用户要"立刻动手用"，别写评测长文去竞争。全是长文 / Reddit → 可能是市场缺好工具，谷歌被迫拿文章凑数。'},
          {title:'第 3 步 · 盯软柿子信号（关键）',text:'前 5 名若全是 DR 90+ 巨头，新站硬碰就是送死。出现以下任意 2 个即可钻：Reddit / Quora / StackExchange 帖子；DR&lt;20 的老破小站；标题答非所问（意图未满足）。'},
          {title:'第 4 步 · 痛点体检（止痛药 vs 维生素）',text:'卡点强度：用户是否卡在工作流里，不解决就干不了下一步？时间 / 金钱杠杆：帮 SaaS 创始人算清 ROI 是止痛药，帮学生生成艺术字是维生素。复购频率：一次性做流量入口页，高频复用才值得深做订阅。'},
          {title:'第 5 步 · 测长尾裂变潜力',text:'去 Google 下拉框、People Also Ask、竞品 sitemap.xml 看能否按格式 / 平台（for Instagram / Shopify / US Visa）或对象 / 行业（for Dentists / Podcasters）裂变。每个裂变页参数必须真不一样，才符合下一课的抗惩罚 pSEO。'}
        ])
      ]},
      {title:'实战对比：同样的"Email 营销"，一死一活',blocks:[
        GRID([
          {title:'A · how to write a cold email',text:'纯信息型；首屏被 AI Overview 给出 5 段完整邮件模板；前 5 名 HubSpot / Indeed / Harvard Business Review（DR 90+）。判词：死路一条，零点击率极高，巨头环伺，毫无付费理由。'},
          {title:'B · cold email spam word checker',text:'工具交互型；AI 没法实时标红高危触发词；工作流强卡点（进垃圾箱域名就废）；前排有简陋工具和 Reddit"求推荐"帖；还能裂变 Gmail spam checker 等。判词：极品切入点。'}
        ])
      ]}
    ],
    tools:['Google 搜索','Similarweb','Semrush','Ahrefs','Pew Research Center','Reddit','Quora','StackExchange'],
    takeaway:['先破幻觉：文字能答完的需求没价值，KD 分数只是初筛','四象限：砍信息型，主攻工具交互 + 交易行动型','五步解剖 SERP，找到 ≥2 个软柿子信号才动手']
  },
  {
    id:'m11',title:'欧美原生感与信任工程',sub:'黄金 5 秒 · 信任工程 · 15 秒 Aha!',
    kicker:'DEEP DIVE 05 · TRUST ENGINEERING',
    lede:'技术极强、SEO 也通，网站却没留存没人付钱？根因往往不是功能，而是欧美用户打开那一瞬间响了警报："这看着像 AI 批量生成的套壳垃圾，我不敢交信用卡号。"',
    quote:'欧美科技圈尊重 Indie Hacker —— 真诚反而比假装大公司更有安全感。',
    sections:[
      {title:'第一印象：首屏黄金 5 秒',blocks:[
        P('研究显示 78% 的访问者前 5 秒仅凭首屏决定去留。三个常见坑：<b>AI 味翻译腔</b>（Unlock the power of AI / Elevate your workflow）、<b>功能自嗨</b>（用户只知道自己有麻烦，不关心你用了什么大模型）、<b>装饰性废像素</b>把干活区域挤到屏幕下面。'),
        GRID([
          {title:'1 · 通过具体性测试的 H1',text:'把标题放到 3 个竞品网站上是否也成立？成立就是废话。公式：具体人群/场景 + 明确结果 + 核心机制。反例 Streamline your email marketing with AI；正例 Spot spam triggers in your cold emails in 5 seconds — before you hit send.'},
          {title:'2 · 直击痛点的副标题',text:'1–2 句说明"用我能具体省下什么"。例：Paste your draft below. Get an instant deliverability score and word-by-word fixes. No sign-up required.'},
          {title:'3 · 结果导向的单一 CTA',text:'别写 Submit / Start，写用户点完立刻得到什么：Check My Email Free → / Compress Image Now / Generate My Invoice。'},
          {title:'4 · 轻量信任微标',text:'按钮下方一行小字：Free to try · No credit card required · Processed locally in browser。'}
        ])
      ]},
      {title:'一眼可信的信任工程',blocks:[
        TERMS([
          {term:'千万别用假老外头像 + 假好评',text:'2026 年欧美用户一眼识破 AI 假头像和假评论，不仅不增信，反而摧毁信任（Google 也明确打击伪造背书）。用真实"独立匠人故事"：Hi, I\'m [英文名]. I built this tool because I got tired of paying $29/mo just to convert a few files safely. 没评价就先放真实使用数据（14,200+ PDFs merged safely），或上线后去 Reddit / X 收 2 条真人留言。'},
          {term:'隐私与数据安全声明（工具站核武器）',text:'纯前端工具在操作框下方写明：🔒 100% Private: processing happens inside your browser. Your files never leave your device. 需上传服务器则写 Files are encrypted and auto-deleted within 1 hour. Never used for AI training. 一句就能拉高冷流量转化。'},
          {term:'交易与法律透明',text:'页脚三件套：Privacy Policy（提 GDPR / CCPA）、Terms of Service、Refund Policy（7-day money-back）。订阅制再加一句 Cancel anytime in 1 click from your dashboard —— 美国 FTC 推"一键取消"，这能极大消除付费犹豫、压低拒付率（Chargeback）。'}
        ])
      ]},
      {title:'15 秒 Aha! Moment 与去 AI 廉价感',blocks:[
        P('服务的是从 Google 点进来、没耐心的陌生人。国内常见反面习惯：进来先弹登录注册墙 —— 冷流量场景这道墙直接杀死 80% 以上访客。'),
        STEP([
          {title:'体验前置，登录墙后置',text:'工具站把核心交互区（输入框 / 上传区 / 示例按钮）摆首屏。放一个 Try an example 按钮，用户懒得找文件时点一下，3 秒看到惊艳结果 = Aha! Moment。'},
          {title:'在对的时刻拦人',text:'等他看到成果、准备下载高清无水印版、导出完整报告、或第 3 次操作时，再弹登录或付费框。此时已体验到价值，转化意愿翻倍。'},
          {title:'视觉去 AI 廉价感',text:'避开"深色背景 + 紫蓝渐变发光边框 + 满屏默认图标 + 无重点 6 宫格"（AI Slop Aesthetic）。学 Stripe / Linear / Notion：大量留白；黑白灰 + 1 种主色只涂 CTA；Inter / Plus Jakarta Sans / Geist，行高 1.5–1.6、单行 60–75 字符；真实产品截图 / 5 秒 GIF &gt; 抽象插画。'}
        ])
      ]},
      {title:'上线前速查清单',blocks:[
        UL([
          '5 秒测试：陌生人能 3 秒说出"这站给谁用、解决什么具体问题"吗？',
          '微文案测试：还有没有 Unlock / Elevate / Revolutionary 这类空洞词？按钮是不是具体行动结果？',
          '零门槛体验：不登录能否 15 秒内体验核心功能或看到真实 Demo？',
          '真实验证：去掉假头像假评价，换成真诚创始人邮箱和真实隐私声明了吗？',
          '合规底线：页脚隐私政策、退款政策、域名专属邮箱（support@你的域名.com，绝不用 QQ / 163 / Gmail）齐了吗？'
        ])
      ]}
    ],
    tools:['ChatGPT','Claude','v0','Microsoft Clarity'],
    takeaway:['首屏 4 要素：具体 H1 + 痛点副标题 + 结果 CTA + 信任微标','真诚 > 假背书；隐私与安全声明是工具站核武器','体验前置、登录墙后置，15 秒造出 Aha! Moment']
  },
  {
    id:'m12',title:'抗算法惩罚的高级 pSEO',sub:'规模化内容滥用 · 四大法则 · 灰度放量',
    kicker:'DEEP DIVE 06 · PSEO',
    lede:'品牌母站沉淀信任，招牌创意惊艳留存，而真正每天从 Google 白嫖几千精准流量的发动机，是"确定性搜索长尾页"—— 程序化 SEO。这也是 2026 死伤最惨重的战场。',
    quote:'500 个个个能排进前十且有真实点击的页面，完胜 5,000 个无人问津的僵尸页。',
    sections:[
      {title:'2026 生死红线：Google 到底杀死了什么',blocks:[
        P('2026 年 3 月起 Google 严格执行 <b>Scaled Content Abuse（规模化内容滥用）</b>，大批老式 pSEO 站一夜流量暴跌 50%–80%，甚至整站归零。'),
        P('逻辑变了：过去看"怎么生产的"（AI 写完再人工改改就安全）；2026 看"为什么而存在、有没有独特价值" —— 无论 AI 生成还是纯手写，只要批量铺高度相似、没有独立价值的页面抢排名，统统算作弊，且往往触发整站降权（Sitewide Demotion）。'),
        CALL('insight','为什么 Zapier / Wise / Canva 活得滋润','Zapier 5 万+集成页月流量 1600 万、Wise 汇率页 6000 万、Canva 模板库破亿。区别只有一句：❌ 已死的 pSEO = 批量铺"换汤不换药的文本"；✅ 永生的 pSEO = 批量铺<strong>微工具 / 预设工作台 / 独有数据集</strong>，每页独立解决一个具体场景问题。')
      ]},
      {title:'防弹 pSEO 四大法则',blocks:[
        STEP([
          {title:'法则 1 · 条件渲染，绝不换词填空',text:'做图片裁剪工具吃平台长尾：/resize-for-shopify 自动锁 2048×2048、1:1、≤20MB、推荐 WebP/JPG + 真实官方规格表；/resize-for-us-visa 切到 2×2 英寸（600×600）、&lt;240KB、带人脸辅助线和白底检测。遮住标题，用户能一眼看出两页不是同一个东西吗？能，就安全。'},
          {title:'法则 2 · 合并同类意图（Intent Cluster）',text:'compress jpg for email 和 reduce jpg size for email 在 Google 眼里 100% 重合。拆两页 = 关键词互搏（Cannibalization）+ 冗余判定。若两词前 5 名有 3 个以上完全相同，合并成一个超强页面，集中火力。'},
          {title:'法则 3 · 枢纽-辐射架构（Hub-and-Spoke）',text:'Hub（/tools 或 /image-resizer）承接大词和外链；Spokes（所有场景页）挂在下面，从首页点击 ≤3 次可达。每页顶部面包屑把信号反哺母站，底部 Related Scenarios 让爬虫爬完全站、提升多页停留时间。'},
          {title:'法则 4 · 拒绝首日万页',text:'新站第一天生成 5000 页 = Index Bloat，被贴"低质批量站"标签，核心首页一起拖下水。三阶段灰度：① 冷启动 30–50 页观察 2–4 周；② 收录率 &gt;80% 后每周加 50–100 页到 200–500 页；③ 写死 Quality Gates，缺独有数据的组合不生成或加 noindex。'}
        ])
      ]},
      {title:'两件技术防弹衣',blocks:[
        TERMS([
          {term:'自指 Canonical 标签',text:'每个合法长尾页 <head> 里放指向自己干净 URL 的 <span class="inline-code">&lt;link rel="canonical" ... /&gt;</span>。别人带 ?utm_source=xxx 分享也不会被判成重复页面。'},
          {term:'诚实的 Schema 结构化数据',text:'用 JSON-LD 标明这是 SoftwareApplication 还是 FAQPage。铁律：页面上肉眼看得到的内容才能写进 Schema，虚标假的 4.9 分 1000 评价，2026 年查到就是惩罚。'}
        ]),
        FORM('pSEO 不是"找 1000 个词让 AI 批量写文章"，而是"找一个可复用的刚需处理模型，为每个高价值场景用真实差异化参数定制独立微产品页，再分批有序地喂给 Google"。')
      ]}
    ],
    tools:['Google Search Console','Google 搜索','Semrush','Ahrefs','GitHub'],
    takeaway:['Google 杀的是"无独特价值的相似页"，不是程序化本身','条件渲染 + 真实参数，让每页都是独立好用的微工具','30–50 页起步灰度放量，写死质量门控防 Index Bloat']
  },
  {
    id:'m13',title:'生产级工程素养',sub:'渲染与指标 · 防破产 · P0 安全 · 千里眼',
    kicker:'DEEP DIVE 07 · ENGINEERING',
    lede:'2026 行业审计：用 Cursor / Lovable / Bolt / v0 快速做出的站，上线前安全与工程就绪平均分只有 42/100，89% 存在数据库权限裸奔。AI 的目标是"跑通 Demo"，不是替你扛住黑客和高并发账单。',
    quote:'功能跑通只完成了 50%，补齐渲染、限流、权限和埋点，才有上线印美金的资格。',
    sections:[
      {title:'渲染模式生死线与核心网页指标',blocks:[
        P('很多 AI 生成器默认产出 CSR（客户端渲染）：右键查看源代码只有 <span class="inline-code">&lt;div id="root"&gt;&lt;/div&gt;</span>，全靠 JS 拼字。这是双重自杀：Google 要二次渲染（Two-Wave Indexing），页面一多收录极慢；ChatGPT / Perplexity / Claude 等 AI 爬虫<strong>根本不执行 JavaScript</strong>，你在 AI 搜索眼里直接隐形，GEO 流量归零。'),
        TERMS([
          {term:'渲染铁律',text:'所有要从 Google / AI 抢流量的页面（母站、长尾工具页、文档博客），第一天就指定 Next.js App Router 的 SSR / SSG / ISR 或 Astro，确保"查看源代码"时标题、正文、Meta、内链都在 HTML 里。只有登录后的后台才用 CSR。'},
          {term:'Core Web Vitals（移动端 75 分位）',text:'LCP &lt; 2.5s（首屏核心框出来快）；CLS &lt; 0.1（按钮别跳）；INP &lt; 200ms（工具站命门：每次点击 / 输入多久出反馈）。让 AI 别把重型图标图表库打包进首屏，耗时计算放后端或 Web Worker，非首屏懒加载。'},
          {term:'爬虫基建三件套',text:'动态 sitemap.xml 只放已放量的有效页；精准 robots.txt 放行 Googlebot / OAI-SearchBot / PerplexityBot，屏蔽 /api/ /admin/ /dashboard/；不存在的 URL 返回真 404 / 410，别搞 Soft 404 一律 200。'}
        ])
      ]},
      {title:'防破产四件套：保护你的 API 钱包',blocks:[
        GRID([
          {title:'① 无感人机盾 Turnstile',text:'Cloudflare Turnstile 完全免费，不逼用户找红绿灯。域名托管到 Cloudflare，在所有消耗算力的按钮 / 接口前套上，挡掉约 95% 自动化脚本。'},
          {title:'② 后端硬限流',text:'前端弹窗"每天只能用 3 次"没用，懂技术的人绕过前端直接调接口。用 Upstash Redis 或 Cloudflare Rate Limiting 在服务端按 IP + 用户 ID 锁死每分钟 / 每天上限。'},
          {title:'③ 输入与 Token 硬天花板',text:'后端强制截断最大输入（如 3000 字符）、写死 max_tokens，拒绝超长文本和递归死循环。再去 OpenAI / Claude 后台设 Hard Spend Limit 兜底。'},
          {title:'④ 高频结果缓存',text:'1000 人点同一个 Demo 示例不能调 1000 次付费 API。把输入做 Hash，结果存 Redis / 数据库 50ms 秒回，省 90% 成本还更快。'}
        ])
      ]},
      {title:'部署前必查的 4 个 P0 安全底线',blocks:[
        CALL('warn','把这条 Checklist 丢给 AI 审计','① <strong>严禁前端暴露私密 Key</strong>：NEXT_PUBLIC_ 前缀和前端组件里的代码全世界按 F12 可见；OPENAI_API_KEY / 支付 Secret / SUPABASE_SERVICE_ROLE_KEY 只能在服务端环境变量和后端路由。<br>② <strong>数据库强制严格 RLS（Row Level Security）</strong>：别让 AI 写 USING (true) 全放行，否则路人一个公开请求就拖走整张用户表。要求 AI："Every table must have strict Row Level Security enabled so users can only access their own rows."<br>③ <strong>支付验证 + 幂等性</strong>：绝不能信前端 /success?paid=true，必须服务端收 Stripe / Paddle / Lemon Squeezy / Creem 的 Webhook 并校验签名，再加幂等防重复。<br>④ <strong>安全报错屏蔽</strong>：生产环境只返回 Something went wrong, please try again，别把 SQL 错误栈和表名吐到前端。')
      ]},
      {title:'上线必装的"千里眼"',blocks:[
        GRID([
          {title:'Google Search Console',text:'免费且不可替代。看收录情况、抓取报错、真实搜索词排名 —— 后面运营课的核心武器。'},
          {title:'轻量统计（Plausible / Umami / PostHog）',text:'盯两个维度：流量来源拆分（Google / chatgpt.com / perplexity.ai / Reddit）；关键事件漏斗（首页曝光 → 点核心工具 → 触付费墙 → 支付成功），哪步掉崖修哪步。'},
          {title:'Microsoft Clarity',text:'微软免费。合规录下真实欧美访客的鼠标轨迹、热力图、愤怒点击（连点没反应的按钮）。看 15 分钟回放，你会发现无数开发时意识不到的 UX 致命伤。'}
        ])
      ]}
    ],
    tools:['Next.js','Astro','Cloudflare Turnstile','Upstash','Supabase','Stripe','Google Search Console','Microsoft Clarity','Plausible'],
    takeaway:['公开 SEO 页绝不纯 CSR：AI 爬虫不执行 JavaScript','API 钱包四件套：Turnstile + 后端限流 + Token 上限 + 缓存','RLS 严格 + Webhook 幂等 + Key 不进前端，三条保命']
  },
  {
    id:'m14',title:'变现转化 CRO 与 GEO 增长引擎',sub:'定价防亏 · 付费墙心理学 · AI 引擎引用 · 可链接资产',
    kicker:'DEEP DIVE 08 · CRO & GEO',
    lede:'两个最现实的问题：怎么把进站流量变成更多美金？怎么让 Google 和 ChatGPT 主动帮你源源不断拉人头？',
    quote:'变现靠"按价值 / 积分防亏 + 沉没成本后卡付费墙"；增长靠"结构化事实喂饱 AI 引擎 + 免费微资产换真实外链"。',
    sections:[
      {title:'选对定价模型，别被无限量包月搞破产',blocks:[
        P('接了大模型 / 生图 / 视频算力的站，千万别学传统 SaaS 搞 $9.9/月无限量。同一套餐下最重度的 10% 用户（90th percentile）的算力成本可能是普通用户几十倍 —— 收他 $9.9，他一个月跑掉你 $25 的 API 账单，卖越多亏越多。'),
        TERMS([
          {term:'一次性积分包（Pay-as-you-go Credits）',text:'冷流量转化之王。欧美用户对"什么都要绑卡按月扣费"极度反感（Subscription Fatigue）。中低频工具（修证件照、生成简历合同、批量转格式）卖 $9 买 50 Credits 永不过期，转化率常是包月 2–3 倍。'},
          {term:'混合定价（Hybrid Pricing）',text:'Stripe 数据："基础订阅 + 用量额度"的 AI / 工具产品，中位收入增长率比纯订阅或纯按量高 21%。例：$12/月含 200 次，用完 $5 加购 100 次 —— 锁住 MRR 现金流，又封死算力亏损。'},
          {term:'长尾免费 + 招牌付费 + 广告 / 联盟兜底',text:'用完即走的极轻度用户强设付费墙只会把人逼走。这类页保留免费，用克制的 AdSense 或相关软件联盟（Shopify / Hostinger）吃残余价值；付费墙精准留给高算力、批量导出、高清无水印。'}
        ])
      ]},
      {title:'定价页与付费墙的 3 个高转化技巧',blocks:[
        STEP([
          {title:'三档锚定效应',text:'永远设计 3 档：$9 Starter / $19 Pro (Most Popular) / $49 Studio。中间档才是真想卖的主力，最贵那档存在的意义就是衬托它性价比极高。'},
          {title:'卡在沉没成本最高的一秒',text:'正确顺序：上传文件 → 花时间调好参数 → 系统处理 3 秒 → 展示带水印预览图或前 2 条核心诊断结果 → 弹出解锁高清 / 完整报告的付费框。用户已投入心血、亲眼看到效果，掏卡率最高。'},
          {title:'把账算成人话',text:'积分包 / 年付写一句直观的：Just $0.18 per image / Save 25% with yearly。帮大脑 1 秒算清这笔账有多划算。'}
        ])
      ]},
      {title:'2026 版 GEO：让 AI 引擎主动推荐你',blocks:[
        P('先戳破泡沫：Google 官方明确表态 —— 针对 Google 搜索与 AI Overviews，不存在 llms.txt 快捷通道，刷虚假品牌提及也没用，底层仍是硬内容质量和传统 SEO 权重。但 ChatGPT / Perplexity / Claude 有独立检索逻辑，用户买工具前已习惯直接问它们。'),
        GRID([
          {title:'① 首段直给可引用事实块',text:'大模型眼里废话开场毫无提取价值。每个 H2 下第一句就给完整、客观、带具体数字的结论，多用 HTML 对比表格。结构化段落被直接引用的概率最高。'},
          {title:'② 全网实体口碑铺设',text:'AI 判断值不值得推荐，看你品牌名在第三方社区怎么被讨论。把招牌创意有节奏提交到 Product Hunt / AlternativeTo / There\'s An AI For That；去 Reddit 板块或 Indie Hackers 分享"我为解决 XX 痛点做了个免费工具 + 实测数据"，别发硬广。真实讨论帖是 ChatGPT / Perplexity 最爱引用的权威信源。'},
          {title:'③ llms.txt + 精细 Schema',text:'根目录放纯文本 llms.txt（用 Markdown 列出网站干嘛、核心工具链接、定价），Google 不看但对其他 AI 爬虫友好；配合 SoftwareApplication 和 FAQPage 的 JSON-LD，让机器 100% 读懂你的产品。'}
        ])
      ]},
      {title:'不花钱买垃圾外链：可链接资产打法',blocks:[
        P('新站（DR 0）最大痛点是没有反向链接，确定性长尾页难进 Google 前三。绝对别去 Fiverr 买几百条廉价垃圾外链 —— 那只会招来惩罚。'),
        STEP([
          {title:'做一个免费微工具 / 小报告',text:'在母站上做完全免费、无广告、不用注册、能生成独特数据结论或行业基准测算的东西。例：2026 电商广告 ROAS 健康度免费测算器、各行业冷邮件平均回复率实时数据库。'},
          {title:'发 3 句话真诚邮件',text:'去 Google 搜排名靠前的行业科普大文章找作者邮箱："Hi [Name], loved your guide on [主题]. I built a free interactive calculator (no sign-up, no ads) that lets readers test their own numbers: [链接]. Thought it might help your readers!"'},
          {title:'5% 转化就是胜利',text:'只要 5% 博主顺手加个引用链接，你就拿到极珍贵的真实高权重（DR 60+）行业相关外链。母站权重一抬，下面所有确定性长尾页排名集体上蹿。'}
        ])
      ]}
    ],
    tools:['Stripe','Creem','Paddle','Lemon Squeezy','Product Hunt','AlternativeTo',"There's An AI For That",'Indie Hackers','Reddit','Bing Webmaster Tools'],
    takeaway:['接 AI 算力别卖无限量包月：积分 / 混合定价防亏','付费墙卡在沉没成本最高的一秒，三档锚定','GEO = 可引用事实块 + 真实第三方讨论 + llms.txt；外链靠免费微资产换']
  },
  {
    id:'m15',title:'手术刀式运营循环',sub:'近战打击词 · 僵尸页修剪 · 长期复利节律',
    kicker:'DEEP DIVE 09 · OPERATIONS',
    lede:'90% 的站做不起来不是代码烂，是"只管生不管养"。Google 对新站的信任考察要 3–6 个月，真正的指数增长曲线，是上线后每周花 1 小时用 GSC 做"手术刀式"调优出来的。',
    quote:'把 10 个新页面铺在第 15 名，不如把 1 个第 9 名推进第 3 名 —— 流量翻 4 倍甚至 10 倍。',
    sections:[
      {title:'为什么 2026 年只盯前三名',blocks:[
        P('残酷现实：AI 摘要和广告占据页面上方，Google 第 8–10 名点击率已趋近于零，自然搜索前 3 名吃掉近 70%（约 68.7%）总点击。把第 9 名推进第 3 名几乎不用从零积累外链，只要微调就能让流量翻几倍。')
      ]},
      {title:'每周 30 分钟：GSC 近战打击词提权术',blocks:[
        STEP([
          {title:'第 1 步 · 把潜力股筛出来',text:'效果 → 搜索结果，勾全四个指标（点击、展现、CTR、平均排名），时间选最近 28 天或 3 个月，按展现量降序。A 类潜力词：第 4–20 名且展现高（Striking Distance）；B 类漏水词：前 5 名但 CTR &lt; 2%（标题和描述没吸引力）。'},
          {title:'第 2 步 · 对症下药四件套',text:'点开词看是哪个页面胜出（若两个页面抢同一个词 = 内部互搏，合并）。然后：① 高展现词自然进 title / h1 / 首段直答；② 补前 1–3 名有而你漏的参数、功能、FAQ，加一条母站内链；③ 改标题钩子（Cold Email Checker → Free Cold Email Spam Checker (Instant Score, No Sign-Up)）；④ 记录日期，28 天后对比。'},
          {title:'第 3 步 · 顺手捡新点子',text:'看 GSC 查询列表常发现"我只做了 A，老外却搜 B 词进来"。这些意外词就是最真实、市场上最缺供给的新需求雷达，直接顺着裂变下一批确定性长尾页。'}
        ])
      ]},
      {title:'每季度：僵尸页修剪（Content Pruning）',blocks:[
        P('到第 3–6 个月，站里可能躺着几百个长尾页。新手舍不得删没人看的旧页 —— 但大量零点击、零展现、互相重叠的薄弱页会浪费抓取预算（Crawl Budget），拉低整站质量评分，连累明星页。修剪 1 个烂页，有时胜过新发 5 个普通页。'),
        GRID([
          {title:'Keep · 保留放行',text:'持续有自然流量、或转化率极高的明星页 —— 别乱动 URL 和核心结构。'},
          {title:'Refresh · 保鲜升级',text:'以前流量好、最近掉排名（Content Decay）的页。更新 2026 最新数据、优化交互、改发布 / 修改日期。Perplexity 和 Google 都偏爱近期维护过的页，ROI 远高于写新页。'},
          {title:'Consolidate · 合并归拢',text:'意图高度重合、互抢排名的两页，把内容和参数合并进表现更好的那个，弱页 URL 用 301 永久重定向过去。'},
          {title:'Prune · 果断修剪',text:'上线 &gt;6 个月、几乎无外链、展现点击近零的僵尸页：删掉返回 410 / 404；必须留着但不想被索引的（站内搜索、标签页、感谢页）加 noindex 并从 sitemap 踢出。'}
        ]),
        CALL('warn','算法波动期别动刀','如果撞上 Google 全球核心算法更新（Core Update，如 2026 年 11 月刚开启的那次），通常要 2 周左右才尘埃落定。波动期千万别惊慌大改结构或乱删页面，等官方宣布结束再观察 1 周，用干净基线动手。')
      ]},
      {title:'一张拿来即用的运营节律表',blocks:[
        STEP([
          {title:'第 1 个月 · 冷启动验证期',text:'发 30–50 个黄金确定性长尾页 + 1 个招牌创意 → 去 Reddit / 目录站拿首批真实用户和初始外链 → 在 Microsoft Clarity 看 20 个真实用户的操作录屏，修掉所有 UX 卡点。'},
          {title:'每周固定 1 小时 · 常规外科手术',text:'看 GSC 已编入索引曲线是否健康增长 → 挑 3–5 个近战打击词（第 4–20 名）或高展现低 CTR 词优化标题与内容 → 按模块三的节奏分批释放下一批 30–50 个长尾页。'},
          {title:'每季度 1 次 · 整站大扫除',text:'做一次全站四象限体检，合并 / 修剪僵尸页，翻新核心高价值页 → 盘点过去 90 天哪类长尾词转美金最多，把招牌创意和免费可链接资产继续往最赚钱的垂直方向深挖。'}
        ])
      ]},
      {title:'教练总结：全链路能力图谱已闭环',blocks:[
        UL([
          '<b>看需求</b>：SERP 解剖学 + 意图四象限，绕开 AI 零点击和巨头坑，只抓痛点交互需求（模块一）',
          '<b>建产品</b>：欧美 5 秒首屏、去翻译腔、真实信任工程与 15 秒 Aha! Moment（模块二）',
          '<b>铺流量</b>：条件渲染长尾页 + 母站枢纽架构 + 分批灰度，免疫规模化内容滥用打击（模块三）',
          '<b>保工程</b>：SSR / SSG 保收录、INP 保流畅、Turnstile + 限流缓存防破产、RLS + Webhook 守安全（模块四）',
          '<b>赚美金</b>：积分 / 混合定价防亏、沉没成本后置付费墙、多引擎 GEO + 免费可链接资产（模块五）',
          '<b>吃复利</b>：每周 GSC 近战提权 + 每季度僵尸页修剪，把网站养成像房产一样持续生钱的数字资产（模块六）'
        ])
      ]}
    ],
    tools:['Google Search Console','Google Analytics','Microsoft Clarity','Plausible','Bing Webmaster Tools','Reddit','Product Hunt'],
    takeaway:['前 3 名吃掉近 70% 点击，优先推第 4–20 名潜力词','每周 30 分钟 GSC 提权，28 天后看对比','每季度四象限体检：Keep / Refresh / Consolidate / Prune']
  },
  {
    id:'m16',title:'域名排雷与黑历史体检',sub:'后缀选择 · 商标自杀排雷 · 二手域名案底',
    kicker:'DOMAIN SAFETY',
    lede:'很多开发者选品、建站全做对了，却因为域名踩了商标或黑历史雷区，导致域名被强制收回、收款账号被封，或者网页怎么写都不被 Google 信任。这一节放在最前面看。',
    quote:'花 1 分钟查商标和案底，能省掉几个月的心血和一次封号。',
    sections:[
      {title:'域名后缀怎么选',blocks:[
        TERMS([
          {term:'首选 .com',text:'欧美用户心智里 .com = 正规商业实体。若品牌名 .com 被高价占注，宁可换更短易拼的词根加后缀（usexxx.com / tryxxx.com / getxxx.com / xxxapp.com），也别轻易买生僻廉价后缀。'},
          {term:'次选 .io / .ai / .app',text:'适合明确面向开发者、AI 工具或移动应用受众的产品，欧美科技圈接受度高。'},
          {term:'避坑后缀',text:'.xyz / .top / .site / .click 长期被垃圾群发和钓鱼站滥用，容易引起欧美用户警惕，在邮件送达和部分广告 / 联盟审核中也天然劣势。别用于面向主流商业用户的主站。'}
        ])
      ]},
      {title:'商标自杀排雷（买前 1 分钟）',blocks:[
        CALL('warn','千万别在域名里放大厂商标','NotionHelper.com、SpotifyDownloader.com、ChatGPTPrompts.com 这类名字：轻则收到律师函，被对方通过 UDRP（统一域名争议解决政策）无偿没收域名；重则触发 Stripe / MoR 支付平台和 Google AdSense 的"知识产权侵权"风控，账户冻结、资金无法提现。'),
        P('自检动作：买域名前去 <span class="inline-code">tmsearch.uspto.gov</span> 搜你想用的核心词，避开在科技 / 软件分类（Class 9 / Class 42）下已被巨头注册的独占词。')
      ]},
      {title:'二手 / 过期域名的案底体检',blocks:[
        P('别因为"带老年份"就直接买下释放出来的老域名 —— 很多是被 Google 永久降权后才被抛弃的。必查 3 步：'),
        STEP([
          {title:'查历史快照',text:'去 Wayback Machine（web.archive.org）输入域名，抽查过去 3–5 年截图，确认以前是正常英文站，没有中文博彩、医药垃圾或跳转页。'},
          {title:'查外链锚文本',text:'用 Ahrefs 免费外链检查工具看一眼，若历史外链充斥不相关的俄语 / 日语垃圾词或灰产词，立刻放弃。'},
          {title:'查 Google 残余收录',text:'在 Google 搜 <span class="inline-code">site:目标域名.com</span>，看是否还有遗留的违规标题。'}
        ])
      ]}
    ],
    tools:['USPTO 商标搜索','Wayback Machine','Ahrefs','Google 搜索','Porkbun','Cloudflare Registrar'],
    takeaway:['.com 优先；生僻廉价后缀别做欧美主流商业主站','域名别含大厂商标：UDRP 没收 + 收款风控双重雷','老域名先查快照 / 外链 / 残余收录三件事']
  },
  {
    id:'m17',title:'邮件送达率与域名邮箱',sub:'SPF · DKIM · DMARC · 零成本邮箱架构',
    kicker:'EMAIL DELIVERABILITY',
    lede:'网站要发验证码、Magic Link、付款收据，或用 support@你的域名.com 与老外和审核人员沟通。如果邮件全进垃圾箱甚至被拒收，留存和信任瞬间归零。',
    quote:'2026 年没配 SPF / DKIM / DMARC 的发件域名，不是进垃圾箱，而是直接被退信拒收。',
    sections:[
      {title:'2026 年的邮件严管现实',blocks:[
        P('自 2024 年底至 2026 年，Gmail 和 Outlook / Hotmail 已正式执行严格邮件拦截：未通过身份验证（SPF / DKIM / DMARC）的发件域名，不再只是进垃圾箱，而是被对方服务器直接退信拒收（SMTP 550 错误）。'),
        CALL('warn','自建 SMTP 是死路','用自己服务器发信的 IP 信誉极差，必进垃圾箱。验证码 / 收据这类事务邮件一律用专门的邮件 API。')
      ]},
      {title:'零成本 / 极简邮件架构',blocks:[
        TERMS([
          {term:'收信 · 品牌联系邮箱',text:'免费方案：域名托管到 Cloudflare 后开 Email Routing，把 hello@ 和 support@ 免费转发到个人 Gmail，再配 Gmail"以其他身份发送"，低成本实现企业域名邮箱收发。进阶：Zoho Mail 或 Google Workspace，信誉高，适合冷邮件与商务合作。'},
          {term:'发信 · 系统通知 / 验证码 / 收据',text:'别用自建服务器。用专为开发者造的事务邮件 API：Resend 或 Postmark，免费额度够早期项目，Next.js 集成极快。'}
        ])
      ]},
      {title:'必须配齐的三条 DNS 防伪记录',blocks:[
        STEP([
          {title:'SPF（TXT）',text:'声明"哪些服务器被允许代表我的域名发邮件"。'},
          {title:'DKIM（CNAME / TXT）',text:'给每封发出的邮件盖加密"数字防伪公章"，防止途中被篡改。'},
          {title:'DMARC（TXT，主机名 _dmarc）',text:'告诉 Gmail / Outlook 遇到伪造你域名发信时怎么处理。新手先设 v=DMARC1; p=none;，验证稳定后改 p=quarantine;，并保持用户投诉率低于 0.1%。'}
        ]),
        CALL('tip','落地位置','在 Resend / Postmark 后台绑定域名时，把三条记录完整填进 Cloudflare DNS 并验证通过。这一步属于模块四"上线前工程基建"。')
      ]}
    ],
    tools:['Cloudflare','Cloudflare Email Routing','Resend','Postmark','Zoho Mail','Google Workspace'],
    takeaway:['未配 SPF/DKIM/DMARC = 直接被 Gmail/Outlook 退信','收信用 Cloudflare Email Routing + 域名邮箱，别用 QQ/163','发信用 Resend/Postmark，别自建 SMTP']
  },
  {
    id:'m18',title:'MoR 与 AdSense 审核通关',sub:'收款防秒拒 · 低价值内容魔咒',
    kicker:'PAYMENT & ADSENSE',
    lede:'很多开发者功能写完了，却卡在"收款平台屡次拒审"或"AdSense 永远提示低价值内容"。这一节把过审清单摊开讲。',
    quote:'审核看的不是代码多牛，而是网站像一个真实、完整、能用的产品。',
    sections:[
      {title:'主流 MoR 平台 2026 选型',blocks:[
        TERMS([
          {term:'Lemon Squeezy',text:'已被 Stripe 收购。基础费率 5% + $0.50（国际卡 / PayPal 另加 1.5%）。对独立开发者、数字产品和早期 SaaS 最友好，审核较快（通常 24–48 小时）。'},
          {term:'Paddle',text:'基础费率 5% + $0.50 全包，支持全球 200+ 本地支付方式（如 iDEAL），无国际卡加价。审核更严格，适合中长期正经 SaaS 订阅和大额 B2B 收款。'},
          {term:'Creem 等新兴 MoR',text:'适合非 Stripe 支持地区的备份收款通道，注册门槛对独立开发者较友好。'}
        ])
      ]},
      {title:'MoR 提交审核前"防秒拒"5 项',blocks:[
        UL([
          '<b>禁止半成品</b>：不能出现 Coming Soon、占位假数据或点不动的按钮，必须是功能可测的真实在线站。',
          '<b>公开清晰的定价页</b>：明确写出套餐包含什么、买断还是按月扣费。',
          '<b>页脚合规三件套齐全</b>：Terms、Privacy Policy、Refund Policy（写明具体天数和条件）。',
          '<b>域名邮箱一致</b>：申请 MoR 用 support@你的产品域名.com，别用个人 QQ / 163。',
          '<b>避开禁售类目</b>：未授权的下载器、AI 擦边 / 换脸、绕版权或爬虫代刷类工具，99% 被拒或后期清退。'
        ])
      ]},
      {title:'纯工具站绕过 AdSense"低价值内容"魔咒',blocks:[
        CALL('warn','只有一个上传框必被拒','爬虫看不懂 JS 交互框，只看到页面不到 50 个单词。孤零零一个工具页去申 AdSense，极易被判 Low Value Content。'),
        P('过审标准做法：'),
        UL([
          '工具交互区下方为每页补 <b>400–800 词</b>高质量内容：分步使用说明、参数对比表、适用场景、4–5 个真实 FAQ。',
          '全站要有规范导航、独立 <span class="inline-code">/about</span>（真实介绍工具解决的问题与创始人）、<span class="inline-code">/contact</span>、<span class="inline-code">/privacy-policy</span>。',
          '至少已有 <b>15–25 个</b>被 Google 索引的优质页面再提交审核。'
        ])
      ]}
    ],
    tools:['Creem','Paddle','Lemon Squeezy','Google AdSense','Google Search Console'],
    takeaway:['MoR 过审五件套：成品站 + 定价页 + 合规三件套 + 域名邮箱 + 避开禁售','AdSense 低价值内容：每页补 400–800 词 + FAQ','先有 15–25 个被索引的优质页再申 AdSense']
  },
  {
    id:'m19',title:'多语言扩张的黄金时机',sub:'i18n · 别一上线就翻 10 种语言',
    kicker:'I18N EXPANSION',
    lede:'破除"一上线就翻译成 10 种语言 = 流量乘以 10"的致命误区。多语言是放大器，不是起死回生药。',
    quote:'先打透英文区，再挑高净值第二市场，最后本地化选词而非字面直译。',
    sections:[
      {title:'新站第一天绝对不要铺多语言',blocks:[
        TERMS([
          {term:'索引膨胀（Index Bloat）',text:'50 个英文页一上线机翻成 10 种语言，DR 0 新站瞬间变 500 页。Google 会认为在用机器批量制造低质内容，严重拖累抓取预算和全站评分。'},
          {term:'搜索词水土不服',text:'把英文关键词机翻成日语、德语、西语，往往根本不是当地人真正在 Google 敲的词。翻译一堆页面却毫无搜索量。'},
          {term:'技术坑多',text:'一旦漏配或配错 <span class="inline-code">&lt;link rel="alternate" hreflang="..." /&gt;</span>，不同语言页面会互相抢排名甚至被判重复。'}
        ])
      ]},
      {title:'正确的多语言扩张三步走',blocks:[
        STEP([
          {title:'阶段一 · 先打透单一市场',text:'集中 100% 精力先把英文区（en-US）跑通 —— 验证哪些长尾页有排名、有点击、且真的能赚到美金。'},
          {title:'阶段二 · 挑高净值第二市场',text:'英文跑通后，优先从消费能力强且非英语本土搜索习惯强的语种切入：德语 de、法语 fr、日语 ja、西班牙语 es。'},
          {title:'阶段三 · 本地化选词，而非字面直译',text:'针对目标语种重新做一遍本地关键词调研。用清晰的子目录结构（域名.com/de/... 优于子域名），并严格配好双向闭合的 hreflang 标签。'}
        ])
      ]}
    ],
    tools:['Google Search Console','Semrush','Ahrefs','Google 搜索'],
    takeaway:['新站首日铺多语言 = Index Bloat + 无效词 + hreflang 坑','英文区先跑通到能赚钱，再开第二语种','按子目录 + 本地重新选词 + 双向 hreflang']
  },
  {
    id:'m20',title:'防过载执行路线图',sub:'三阶段轻重缓急 · 治好完美主义瘫痪',
    kicker:'EXECUTION ROADMAP',
    lede:'课程信息密度高，新手容易陷入"完美主义瘫痪"——什么都想做，结果迟迟不敢上线。这张表把所有知识点按时间轴切成三步，只做当前阶段该做的事。',
    quote:'每个阶段只做清单里的事，其余一律暂缓。上线比完美更重要。',
    sections:[
      {title:'阶段一 · MVP 上线（第 1–2 周）',blocks:[
        P('<b>核心目标：</b>把车开上路，验证核心痛点与可用性。'),
        UL([
          '选好合规 .com 域名（先过商标 + 案底排雷）',
          'SERP 验真，避开纯信息词',
          'SSR / SSG 架构搭出母站 + 1 个招牌创意',
          '首屏 5 秒文案 + 15 秒免注册体验',
          'Turnstile 防刷 + API 硬消费上限',
          '配好 SPF / DKIM / DMARC 与隐私三件套',
          '接入 GSC + PostHog / Clarity'
        ]),
        CALL('warn','这个阶段别做','别一次铺 500 个长尾页；别搞 10 国多语言；别花时间死磕复杂外链；别纠结全站精细化 Schema。')
      ]},
      {title:'阶段二 · 冷启动验证（第 1–3 个月）',blocks:[
        P('<b>核心目标：</b>拿到首批自然流量与第 1 笔美金。'),
        UL([
          '灰度放出前 30–50 个确定性长尾页',
          '盯紧 Clarity 录屏修补 UX 卡点',
          '提交垂直目录站 + Reddit 真诚分享拿初始外链',
          '完善页面内容并跑通 MoR / AdSense 审核',
          '每周看 GSC，把第 4–20 名的词往前提'
        ]),
        CALL('warn','这个阶段别做','别因前两周没流量就推倒重来；别在没验证需求前盲目扩充几千页。')
      ]},
      {title:'阶段三 · 规模化复利（第 3–6 个月+）',blocks:[
        P('<b>核心目标：</b>放大护城河，吃稳长期复利。'),
        UL([
          '收录率 >80% 后分批扩充至 200–500+ 长尾页',
          '推出 1–2 个免费"可链接资产"主动换高 DR 外链',
          '针对高转化长尾页做 GEO 结构化事实与对比表优化',
          '每季度做一次四象限"僵尸页修剪"与老页翻新',
          '对最赚钱的页面开启德 / 日 / 法语本地化'
        ]),
        CALL('warn','这个阶段别做','别买 Fiverr 垃圾外链；别在 Google 核心算法滚动更新期间恐慌乱改 URL。')
      ]}
    ],
    tools:['Google Search Console','Microsoft Clarity','PostHog','Cloudflare Turnstile'],
    takeaway:['第 1–2 周只管上线 MVP，别贪多','第 1–3 个月只管拿首批流量和第 1 笔钱','第 3–6 个月才做规模化、GEO、多语言和换外链']
  },
  {
    id:'m21',title:'AI 实战提示词工具箱',sub:'3 条直接复制可用的提示词',
    kicker:'PROMPT TOOLKIT',
    lede:'把课程里的方法论直接落地成代码和文案。下面三条提示词分别喂给你的 AI（或 Cursor）即可，点右上角"复制"直接拿走。',
    quote:'方法记住了不算数，能把它变成一条提示词随时调用，才算长在手里。',
    sections:[
      {title:'提示词 1 · 美式微文案 & 去翻译腔改写（模块二用）',blocks:[
        CODE(`你是一位拥有 10 年经验的美国硅谷 SaaS 转化率优化（CRO）文案专家。请帮我审阅并重写以下网页着陆页文案，目标受众是欧美用户。

我的产品信息：
- 目标用户：[例如：B2B 销售人员 / 独立开发者 / Shopify 卖家]
- 解决的核心痛点：[例如：发送的冷邮件经常进垃圾箱]
- 核心机制/卖点：[例如：5 秒检测草稿里的垃圾触发词，无需注册]

我目前的草稿文案：
[在这里贴入你的 H1、副标题和按钮文字]

请严格按照以下规则输出优化方案：
1. 严禁使用 "Unlock the power of"、"Elevate"、"Revolutionize"、"Seamless"、"All-in-one" 等空洞的 AI 套话。
2. 遵循"具体性测试"和"痛点优先"原则：H1 必须包含【具体场景/人群 + 量化或可感知的结果 + 免除的麻烦】。
3. 按钮（CTA）文案必须体现用户点击后立刻获得的结果（如 "Check My Email Free →"），不要用 "Submit" 或 "Get Started"。
4. 请给出 3 个不同风格的美式地道版本（极简直接风 / 强调速度风 / 强调隐私安全风），并简要说明为什么这么改。`,'PROMPT 01 · COPYWRITING')
      ]},
      {title:'提示词 2 · 上线前安全与 Technical SEO 审计（模块四用）',blocks:[
        CODE(`请你作为一名资深全栈安全工程师与 Google Technical SEO 专家，对当前项目代码库进行上线前 P0 级全面审计。请逐项检查以下清单，指出具体的文件路径和漏洞风险，并给出修复代码建议：

【Technical SEO 审计】
1. 公开展示页面（首页、工具页、长尾页）是否全部采用 SSR/SSG/ISR 渲染，确保关闭 JavaScript 后 HTML 源码中依然包含完整的 H1、正文和 Meta 标签？
2. 每个合法公开页面是否都正确配置了唯一且干净的自指 Canonical 标签（<link rel="canonical">），以及唯一的 Title 和 Description？
3. 动态 sitemap.xml 和 robots.txt 是否已配置，且没有把需要屏蔽的后台/API 路径或低质参数页暴露出来？
4. 访问不存在的动态长尾路径时，是否真实返回 HTTP 404 状态码（而非 Soft 404）？

【防破产与数据安全审计】
5. 检查所有前端代码与环境变量，是否绝对没有泄露任何服务端私密 API Key（如非 NEXT_PUBLIC_ 前缀的密钥）？
6. 检查后端 API 路由：消耗大模型/第三方算力的接口是否已加入后端 IP/用户级 Rate Limiting（限流）、输入长度硬截断，以及防机器人校验？
7. 检查数据库权限（如 Supabase RLS）：是否每一张表都开启了严格的 Row Level Security，确保用户只能读写属于自己的行数据，绝对不存在 'USING (true)' 的越权漏洞？
8. 检查支付与积分回调接口：是否验证了支付平台（Stripe/Paddle/Lemon Squeezy 等）的 Webhook 加密签名，并做好了防重复并发请求的幂等性处理？`,'PROMPT 02 · PRE-LAUNCH AUDIT')
      ]},
      {title:'提示词 3 · GSC 数据"手术刀"诊断（模块六用）',blocks:[
        CODE(`你是一位精通 Google Search Console（GSC）数据分析的资深 SEO 增长专家。以下是我从 GSC 导出的最近 28 天【查询词与网页表现数据】（CSV/表格格式）。

[在这里贴入你筛选出的前 50–100 条数据，包含：Query, Page, Clicks, Impressions, CTR, Position]

请帮我做一次外科手术式诊断，并按优先级输出行动清单：
1. 【近战打击词（Striking Distance）】：挑出平均排名在 4.0 到 20.0 之间、但展示量（Impressions）较高的关键词。针对其中最值得优化的 5 个词，告诉我应该如何在对应页面修改 H1、补充哪些子话题或增加哪些内链来把它们推进前 3 名。
2. 【高展现低点击漏水词】：挑出排名在前 5 名（Position <= 5）、展现量高但点击率（CTR）明显偏低的词，为对应页面各写出 2 个更有吸引力的英文新 Title 和 Meta Description 建议。
3. 【关键词自相残杀排查】：检查是否有同一个核心查询词同时分散在多个不同 URL 上互相抢流量，指出冲突的 URL 并建议保留哪一个、301 合并哪一个。
4. 【意外新需求雷达】：找出我可能没专门做过主推优化、但已经开始获得自然展现的"意外长尾词"，建议我可以据此裂变出哪 3 个新的"确定性长尾工具页"。`,'PROMPT 03 · GSC DIAGNOSIS')
      ]}
    ],
    tools:['ChatGPT','Claude','Cursor'],
    takeaway:['提示词 1：把空话文案改成具体性测试通过的美式 H1','提示词 2：上线前 8 项 SEO + 安全 P0 审计','提示词 3：GSC 导出数据直接出优先级行动清单']
  }
];


/* ============================================================
   重构版课程结构：15 课（00–14）
   规则：OLD_MODULES 完整保留原 21 课全部原文；以下仅做合并、前置、
        分组与编号，不删任何原有案例 / 表格 / 干货。
        模块 A–H 为用户提供的全新原文，逐字融入。
   ============================================================ */
const TABLE = (head, rows) => ({t:'table', head, rows});
const QUOTE = (text) => ({t:'quote', text});
const M = i => OLD_MODULES[i-1];
const DEDUP = arr => Array.from(new Set(arr));

/* ---------- 模块 A · 48 小时发射哲学（原文） ---------- */
const MODULE_A_SECTIONS = [
  {title:'写在动手之前：顶尖选手根本不是“背完 15 课再建站”',blocks:[
    P(`在开始学习这门课之前，我必须先打破一个最容易让你行动瘫痪的幻觉：没有任何一个年入十万、百万美金的独立开发者，是先把这 15 节课全部背熟、把所有工具链配到 100 分才上线第一个网站的。`),
    P(`在真实的一线战场上，海外顶流独立开发者（例如提倡“12 个月做 12 个产品”的极客派）和国内出海实战高手的成长路径几乎完全一致——痛苦驱动学习（Pain-Driven Learning）：`),
    P(`前 3 个站大概率是“丑陋的试验品”：看到一个痛点后，用 48 小时 拼出最粗糙、甚至没有完美配色和复杂后端的 MVP 直接推上公网，丢到 Reddit、X 或 Google 里去接受真实用户的毒打。`),
    H('带着具体的报错和羞耻感回来查字典：'),
    UL([
      `只有当你亲眼看着 500 个访客进来却 0 人注册，你才会带着强烈的饥渴感去死磕《第 05 课：黄金 5 秒首屏与 15 秒 Aha!》；`,
      `只有当你被脚本一夜刷掉 50 美金 API 费用，你才会真正把《第 06 课：Turnstile 与后端限流》刻进骨子里；`,
      `只有当你辛辛苦苦做了 1000 个长尾页却一个没被收录，你才会彻底理解《第 08 课：防惩罚 pSEO》的价值。`
    ]),
    P(`所以，请把这门课程当成“战地避雷针 + 急诊字典”，而不是“入学考试教材”。 看完第 00 课的《阶段一：MVP 必做清单》后，立刻合上课程去敲第一行代码，遇到卡点再回来翻对应的章节！`)
  ]}
];

/* ---------- 模块 B · 真人访谈与竞品黑箱逆向（原文） ---------- */
const MODULE_B_SECTIONS = [
  {title:'别只盯着关键词工具猜人心：顶级高手的 2 个实操动作',blocks:[
    P(`工具上的搜索量和 KD 分数都是“冰冷的滞后数据”。真正稳扎稳打的高手，在写代码之前，一定会花两天时间干这两件大多数程序员最懒得干的“脏活”：`),
    P(`别在脑海里臆想“我觉得美国人应该愿意为这个付 $9”。去 Google 搜出这个需求排名前几的 Reddit 帖子、Discord 社群或 Facebook 群组，找到最近 7 天内正在抱怨这个痛点的真实账号，直接发私信（不要推销，只要请教）：`),
    QUOTE(`"Hey [Name], saw your comment on r/[版块名] about struggling with [具体痛点]. I'm an indie dev exploring building a lightweight tool to fix this—not selling anything! Curious: how are you duct-taping this problem together right now, and what's the most annoying part?"`),
    P(`只要能聊透 5 个目标用户，你不仅能提前知道这个需求到底值不值得做，他们吐槽时原话里用的词汇，直接复制粘贴就是你官网最能打动老外的 H1 主标题！`),
    P(`当你用 SERP 锁定了一个已经验证赚到钱的竞品小站时，别只看它的首页，花 $10–$20 买它一个月的会员，把它彻底“扒光”：`),
    UL([
      `流量结构逆向：用类似 Semrush/Ahrefs 的免费版或检查它的 竞品域名.com/sitemap.xml，看它过去半年到底在疯狂更新哪类长尾页（通常占它 80% 自然流量的只有不到 20% 的核心页面）。`,
      `漏斗与邮件逆向：用你的小号走一遍它的完整流程——从点击广告/自然结果进站，到注册、体验免费版、触发付费墙弹窗、再到故意“把东西加进购物车但不付款”退出。把它的每一屏文案、价格锚点以及随后几天发给你邮箱的每一封跟进邮件全部截图保存，这就是价值数万美金的实战教材。`
    ])
  ]}
];

/* ---------- 模块 C · 两条终局路线抉择（原文） ---------- */
const MODULE_C_SECTIONS = [
  {title:'你想打“游击战”，还是养一头“现金奶牛”？',blocks:[
    P(`在欧美建站圈里，一直存在两条截然不同的路线。没有绝对的对错，但你在出发前必须看清各自的天花板：`),
    TABLE(
      ['对比维度','路线 A：游击套利派（找新词做新站 / 轻工具站群）','路线 B：品牌资产派（“主战车”深耕垂直品牌）'],
      [
        ['核心打法','紧盯 Google 新词、热点事件或新游戏/新 AI 模型爆发窗口，48 小时快速建单页小站抢早期流量','围绕一个明确垂直人群，沉淀“品牌母站 + 招牌创意 + 实用型长尾页矩阵”，打磨留存'],
        ['见效速度','⚡ 极快（蹭到风口往往 1–2 周就有自然流量和广告点击）','🐢 慢热（Google 信任与权重积累通常需要 3–6 个月）'],
        ['主要变现','AdSense 展示广告、联盟推广（Affiliate）','积分包（Credits）、SaaS 订阅制、高客单价 B2B 工具'],
        ['抗算法风险','💀 极脆弱（新词热潮退去或 Google 核心更新，流量极易一夜归零）','🛡️ 极强（拥有品牌搜素量、用户留存和高质量外链护城河）'],
        ['终局上限','赚取短期现金流，但极难形成复利，往往要不停开新站','越老越值钱，月利润稳定后可按年利润 3–5 倍高价出售退出[1]']
      ]
    ),
    P(`教练建议： 如果你是零基础纯新手，可以用路线 A（花 1 周做一个极简新词小站）练手找信心、赚到人生第一笔 10 美金；但一旦跑通了全流程，一定要尽早切换回路线 B（主战车模型），把时间复利沉淀在同一个能越养越值钱的域名资产上。`)
  ]}
];

/* ---------- 模块 D · 站外声量反哺排名（原文） ---------- */
const MODULE_D_SECTIONS = [
  {title:'为什么顶尖选手拼命在 X / Reddit 做“站外声量”？',blocks:[
    P(`很多技术出身的开发者有个误区：“我把站内 SEO、长尾页和外链做好就行了，干嘛还要去 X（Twitter）或 Reddit 抛头露面做 Build in Public？”`),
    P(`在 2026 年的 Google 排名逻辑里，站外曝光不再只是“多一条引流渠道”，它本身就是护航你 Google 排名的最强信号：`),
    UL([
      `品牌搜索量（Branded Search）是抗算法的免死金牌：当越来越多老外在 Reddit 讨论或 X 上刷到你的产品，转而直接去 Google 搜你的品牌词（例如搜 你的品牌名 + review 或直接搜你的域名），Google 算法会立刻判定：“这是一个真实世界里有人讨论、被人们记住的真品牌，而不是一个躲在暗处的 SEO 垃圾站。”`,
      `直接访问（Direct Traffic）与高参与度信号：通过站外社区沉淀下来的老用户，会直接把你的工具加进浏览器书签反复打开。这些零跳出率、高停留时长的真实人类访问行为，会在 Chrome 用户体验体系里持续喂给 Google 正向权重，把你主战车里的“确定性长尾页”集体往上推！`
    ])
  ]}
];

/* ---------- 模块 E · Digital PR（原文） ---------- */
const MODULE_E_SECTIONS = [
  {title:'Digital PR（数字公关）：从“乞讨外链”到“被媒体与 AI 主动引用”',blocks:[
    H('1. 为什么传统“群发冷邮件换外链”在 2026 年已经失效？'),
    P(`十年前，买套群发软件给 1000 个站长发模板邮件说“我发现你文章里有个坏链，能换成我的链接吗”还能拿到不少外链。但在 2026 年，数据表明高达 91.5% 的传统群发外链请求邮件会被直接忽略或删进垃圾箱[2]。`),
    P(`与此同时，48.6% 的一线 SEO 专家已将 Digital PR（数字公关/挣来的媒体曝光）评为最有效的外链获取方式（效果是发客座博客 Guest Post 的 3 倍）[3]。更重要的是，在生成式 AI 搜索时代，94% 的 AI 引用推荐来自第三方挣来的权威媒体报道（Earned Media），而非品牌自卖自夸的内容[4]——且第三方品牌提及对 AI 搜索可见度的影响，是普通外链的 3 倍[3]！`),
    H('2. 独立开发者低成本做 Digital PR 的 3 个高回报动作'),
    P(`你不需要花每月几千美金请公关公司，一个人用好这三招就够了：`),
    STEP([
      {title:`做“新闻级免费数据研究/基准报告”（效果最强）：`,text:`记者和行业博主每天都在愁“文章里缺一个最新数据引用”。如果你运营着一个工具站（哪怕脱敏统计你工具处理过的 1000 份公开样本，或者爬取整理公开行业数据），写一篇《2026 年北美独立卖家图片体积与加载耗时实测报告》（带清晰图表和透明方法论，样本量尽量扎实）[2][5]。发布后，把这份一手数据摘要发给写相关话题的科技专栏作者，一旦被引用，拿到的就是 DR 70–90 的顶级新闻外链！`},
      {title:`极速响应记者求助（Reactive PR）：`,text:`海外记者写稿前常在 Connectively（原 HARO）、Featured、Qwoted 或 X 上的 #journorequest 标签发帖寻找行业专家观点。行业数据表明，在记者发出询问后 15 分钟内给出专业回复，采纳转化率高达 18.4%；超过 24 小时再回复，转化率跌到只有 1.8%[2]。作为独立开发者，盯紧你所在领域的专家征集，写一段有干货、带数据、无硬广的简短引述发过去，极容易免费登上福布斯、TechRadar 等高权重媒体。`},
      {title:`1 对 1 极简“非乞讨式”冷邮件公式：`,text:`62% 的编辑和记者只看高度契合自己领域的 1 对 1 短邮件，88% 会秒删跑题模板[3]。给博主或专栏作家写信，永远先给价值（你的免费工具或独家数据能直接帮他的读者省事），绝不在第一封信里直接开口要 DoFollow 外链——东西足够好用，链接是自然而然的副产品[5]。`}
    ])
  ]}
];

/* ---------- 模块 F · 生命周期邮件营销（原文，作为全新第 11 课） ---------- */
const MODULE_F_SECTIONS = [
  {title:'为什么你的网站只赚走了不到一半的钱？',blocks:[
    P(`很多独立开发者以为：用户点进网站 ➔ 看了一眼没付款关掉 ➔ 这单就永久黄了。但 2026 年的 SaaS 转化基准数据揭示了一个惊人差距：所有注册用户的平均激活率只有约 37%（将近三分之二的人根本没真正用明白你的核心功能就走了）[6]；而一旦用户在注册前 3 天触达了核心功能，他的付费转化率会直接暴涨 4 倍[6]！`),
    P(`如果你的网站拿到用户邮箱后只发一封“欢迎注册”，你就白白丢掉了 50% 以上的潜在美金。把以下两套系统搭起来，你的网站才算真正拥有了“睡后自动化印钞能力”。`)
  ]},
  {title:'一、 独立开发者必配的 3 条自动化生命周期邮件流（Lifecycle Drip）',blocks:[
    P(`千万不要搞成每周群发废话的新闻通讯（Newsletter），SaaS 和工具站的邮件必须由用户行为和账单状态自动触发[6][7]。用 Resend / Loops / Postmark 配合数据库状态，先搭起最核心的三条序列：`),
    P(`研究显示，没有引导邮件的试用转付费率通常只有 2%–5%；配有清晰行为引导序列的产品，转化率可以跃升至 10%–25%（激活率从 30–40% 提升至 60–80%）[8]。你可以直接套用这套经过验证的 5 封轻量级黄金序列（注意：一旦用户在中间任何一步付款了，立刻自动踢出未付费引导序列！）：`),
    STEP([
      {title:`Day 0（注册/留资即刻发送——打开率最高，2026 数据约 83%[6]）：欢迎 + 直达“第一胜利（First Win）”`,text:`内容：别废话介绍公司愿景！只给 1 个最清晰的按钮，带他回到刚才没做完的那步操作（比如：Your draft is ready — click here to see the 3 spam triggers we found →）。`},
      {title:`Day 1（24 小时后——针对“注册了但还没跑通核心功能”的人）：消除障碍 + 1 分钟示范`,text:`内容：放一张 10 秒 GIF 动图或 3 步极简说明，展示别人怎么用 30 秒搞定这个痛点，并在末尾真诚问一句：“Hit any snags? Just hit reply—I read every email.”（很多独立开发者靠这句拿到海量高价值反馈和第一批铁粉）。`},
      {title:`Day 3（72 小时后——针对已体验过一次的人）：隐藏杀手锏 / 真实场景案例`,text:`内容：展示一个他还没用过的高级场景或真实用户前后对比数据（Case Study）[8]：“一位 Shopify 卖家用我们的批量压缩+白底检测功能，把页面加载从 4 秒压到了 0.9 秒。”`},
      {title:`Day 6/7（免费额度快用完 / 试用倒计时）：紧迫感 + 痛点唤醒`,text:`内容：明确告知剩余额度或试用期即将结束，清晰对比“升级后能立刻拿走什么结果”，附上一键直达结算页的链接（如果合适，可附带一个 48 小时有效的早鸟 8 折码）。`},
      {title:`Day 14（未付费沉默用户）：单句极简问询（Nine-Word Email）`,text:`内容：纯文本发一封像真人敲出来的短邮件："Hey [Name], are you still looking to fix [核心痛点]?" 这种看起来完全不像群发广告的邮件，回复率和挽回率出奇地高。`}
    ]),
    P(`做月度订阅制最可惜的流失不是“用户主动取消”，而是<strong>“信用卡过期或余额不足导致的静默扣款失败（被动流失）”</strong>。利用 Paddle / Lemon Squeezy 自带的 Dunning 功能，或在收到 payment_failed Webhook 时自动在 Day 1、Day 3、Day 7 发 3 封友好提醒邮件附带一键换卡链接，通常能无痛挽回 30%–50% 的意外流失收入！`),
    P(`用户点击取消订阅时，在后台做个简短单选调查（太贵 / 暂时用不上了 / 缺某个功能）。过 45–60 天后，当你上线了针对性的新功能或大幅优化了体验时，给这批老用户发一封诚恳的更新通知附上回归折扣，获客成本几乎为零。`)
  ]},
  {title:'二、 上线后的持续转化 A/B 实验（别靠拍脑袋定价）',blocks:[
    P(`当你的网站每月已经有几千独立访客后，不要再凭感觉改版了。每次只改一个变量，跑 2–4 周观察最终的“每千名访客净收入（Revenue per 1,000 Visitors）”[9]：`),
    UL([
      `首屏文案测试：测试“强调省时间” vs “强调避免损失/赚钱”哪句带来的点击核心按钮率更高。`,
      `价格锚点测试：把主力套餐从 $9 调到 $15 或 $19，转化率可能只跌了 15%，但总利润直接涨了 60%！很多中国开发者最大的通病就是在欧美市场定价太便宜，反而显得产品廉价不可信。`,
      `付费墙卡点时机测试：测试“免费试用 1 次就弹窗” vs “让用户免费导出低清版 3 次后再对高清/批量弹窗”，找到收入最大化的甜蜜点。`
    ])
  ]}
];

/* ---------- 模块 G · Build to Sell（原文） ---------- */
const MODULE_G_SECTIONS = [
  {title:'独立开发者的终极退出路径：卖掉它，拿走几年利润的现金！',blocks:[
    P(`很多人做独立开发，以为唯一的赚钱方式就是“自己一直运营下去，每月赚几千美金辛苦钱”。但欧美一线玩家从立项第一天起，心里就藏着另一张底牌：Build to Sell（把网站养大后整体出售退出）。`),
    P(`根据 Acquire.com（全球最大的独立 SaaS/线上生意交易平台）2026 年交易报告：`),
    UL([
      `一个财务干净、持续盈利的独立 SaaS 或工具网站，真实成交估值中位数稳定在 年净利润的 3.9 倍（主流区间为 3x–5x 年利润，或 1x–3x 年营收），平均净利润率高达 71%[1][10][11]；`,
      `而且 体量在 $75,000–$200,000 美金（即月净利润约 $2,000–$4,500）的中小型网站反而卖得最快（优质项目从挂牌到交割平均仅需 80–90 天）[12][13]——因为这个价格区间正好完美契合欧美个人操盘手、微型收购基金（Micro-PE）的现金预算[12]！`
    ]),
    P(`如果你想保留“随时能把网站高价卖掉”的选择权，从今天起必须守住这 4 条资产规范：`),
    STEP([
      {title:`财务流水绝对干净（Clean Financials）：`,text:`一个网站尽量对应一个独立的 Stripe / MoR 收款子账号和独立的云服务器账单，绝不把个人消费和多个网站的成本混在一本糊涂账里[1]。`},
      {title:`极低的“创始人依赖度”（Low Founder Dependence）：`,text:`如果网站离开你每天手写 2 小时文章或手动处理客服就会瘫痪，买家就会疯狂压价[1]。把重复性运营写成清晰的 SOP 文档，尽量用自动化工具和邮件序列跑起来。`},
      {title:`代码与文档可交接（Transferable Stack）：`,text:`使用主流、干净的技术栈（如 Next.js + Supabase + Vercel + Resend），写好清晰的 README.md 和环境变量清单，确保买家工程师 1 天内能接管部署。`},
      {title:`健康的流量与留存曲线：`,text:`避免单纯依赖单一灰色流量或易被一键复制的薄弱 AI 套壳[1]——这也正是为什么我们前面反复强调“主战车品牌母站 + 实用型 pSEO + 生命周期留存”的根本原因！`}
    ])
  ]}
];

/* ---------- 模块 H · 竞品黑箱逆向提示词（原文） ---------- */
const MODULE_H_SECTIONS = [
  {title:'提示词 4：竞品黑箱逆向拆解（用于第 02 课与第 10 课）',blocks:[
    CODE(`你是一位顶尖的欧美 SaaS 产品战略官与资深 Google SEO 逆向工程专家。我正在研究一个在欧美市场已经验证盈利的竞争对手网站，希望你帮我做一次彻底的黑箱逆向拆解，找到它的核心护城河与我能弯道超车的切入点。

【竞品信息】
- 竞品名称与网址：[例如：xxx.com]
- 我抓取/复制到的竞品首页及定价页文案：
  [在这里粘贴竞品首屏 H1、副标题、核心功能卖点和价格方案]
- 我在竞品 sitemap.xml 或 Google ` + '`site:竞品域名`' + ` 中观察到的主要页面类型：
  [例如：1 个主工具页 + 80 个针对不同文件格式的长尾转换页 + 20 篇对比文章]
- 我在 Reddit / G2 / Trustpilot 上收集到的该竞品用户真实吐槽（如有）：
  [粘贴 3~5 条真实用户的差评或抱怨]

请按以下 4 个维度为我输出一份手术刀级分析报告：
1. 【核心价值与变现结构拆解】：它到底靠什么功能完成“Aha! Moment”？它的付费墙卡在哪一步？它的三档定价心理锚点设计得高明在哪里、有哪些明显缺陷？
2. 【流量获取飞轮分析】：在它的页面结构里，哪些页面是用来从 Google 抢流量的“确定性长尾页”，哪些页面是用来沉淀信任或拿外链的？
3. 【致命软肋定位】：基于用户吐槽和现有页面体验（比如 UI 老旧、强制登录才能试用、按月强制订阅太贵、缺某个细分场景预设），指出我最有机会完成“体验降维打击”的 3 个突破口。
4. 【差异化切入方案】：如果我要在 7 天内做一个体验比它好 10 倍的轻量级竞争产品，我的首屏 H1 应该怎么写才能精准抢走对它不满的用户？`,'Text')
  ]}
];

/* ================= 新目录：15 课（00–14） ================= */
const MODULES = [
  /* ---------- 导论篇 ---------- */
  {
    ...M(20), id:'L00', group:'导论篇',
    title:'先跑通再完美：防过载执行路线图',
    sub:'48 小时发射哲学 · 三阶段防超载清单',
    kicker:'LESSON 00 · EXECUTION ROADMAP',
    sections:[...MODULE_A_SECTIONS, ...M(20).sections],
    takeaway:[...M(20).takeaway,
      `所以，请把这门课程当成“战地避雷针 + 急诊字典”，而不是“入学考试教材”。`]
  },

  /* ---------- 第一篇 ---------- */
  {
    ...M(1), id:'L01', group:'第一篇：需求发现与降维验证',
    title:'需求雷达：从“词句”到“美金”的流水线挖矿',
    sub:'三种词根雷达 · 四副 X 光眼镜 · 机械化挖矿',
    kicker:'LESSON 01 · OPPORTUNITY RADAR',
    sections:[...M(1).sections, ...M(7).sections],
    tools:DEDUP([...M(1).tools,...M(7).tools]),
    takeaway:[...M(1).takeaway,...M(7).takeaway]
  },
  {
    ...M(2), id:'L02', group:'第一篇：需求发现与降维验证',
    title:'专业玩家的“需求透视眼”与 SERP 解剖学',
    sub:'三板斧 · 意图四象限 · 五步解剖 · 真人验真',
    kicker:'LESSON 02 · VALIDATION & SERP',
    sections:[...M(2).sections, ...M(10).sections, ...MODULE_B_SECTIONS],
    tools:DEDUP([...M(2).tools,...M(10).tools]),
    takeaway:[...M(2).takeaway,...M(10).takeaway,
      `只要能聊透 5 个目标用户，你不仅能提前知道这个需求到底值不值得做，他们吐槽时原话里用的词汇，直接复制粘贴就是你官网最能打动老外的 H1 主标题！`]
  },
  {
    ...M(3), id:'L03', group:'第一篇：需求发现与降维验证',
    title:'黄金狩猎场与两条路线：游击套利 vs 品牌资产',
    sub:'五大狩猎场 · 新词时间窗 · 终局路线抉择',
    kicker:'LESSON 03 · HUNTING & ENDGAME',
    sections:[...M(3).sections, ...MODULE_C_SECTIONS, ...M(8).sections],
    tools:DEDUP([...M(3).tools,...M(8).tools]),
    takeaway:[...M(3).takeaway,...M(8).takeaway,
      `教练建议： 如果你是零基础纯新手，可以用路线 A（花 1 周做一个极简新词小站）练手找信心、赚到人生第一笔 10 美金；但一旦跑通了全流程，一定要尽早切换回路线 B（主战车模型），把时间复利沉淀在同一个能越养越值钱的域名资产上。`]
  },

  /* ---------- 第二篇 ---------- */
  {
    ...M(16), id:'L04', group:'第二篇：战前基建与产品打磨',
    title:'开局扫雷：域名选择、商标避坑与案底体检',
    sub:'后缀选择 · 商标自杀排雷 · 二手域名案底',
    kicker:'LESSON 04 · DOMAIN SAFETY',
    lede:'很多开发者选品、建站全做对了，却因为域名踩了商标或黑历史雷区，导致域名被强制收回、收款账号被封，或者网页怎么写都不被 Google 信任。这一节放在最前面看。'
  },
  {
    ...M(11), id:'L05', group:'第二篇：战前基建与产品打磨',
    title:'欧美原生感与信任工程（黄金 5 秒 + 15 秒 Aha!）',
    sub:'首屏 5 秒 · 信任工程 · 15 秒 Aha!',
    kicker:'LESSON 05 · TRUST ENGINEERING'
  },
  {
    ...M(5), id:'L06', group:'第二篇：战前基建与产品打磨',
    title:'零代码 AI 建站与生产级工程素养',
    sub:'5 个零件 · 工具矩阵 · 渲染 / 限流 / 安全 / 邮件送达',
    kicker:'LESSON 06 · BUILD & ENGINEERING',
    sections:[...M(5).sections, ...M(13).sections, ...M(17).sections],
    tools:DEDUP([...M(5).tools,...M(13).tools,...M(17).tools]),
    takeaway:[...M(5).takeaway,...M(13).takeaway,...M(17).takeaway]
  },

  /* ---------- 第三篇 ---------- */
  {
    ...M(6), id:'L07', group:'第三篇：流量矩阵与权威增长',
    title:'冷启动破冰：从 0 到 1 搞定全球免费流量',
    sub:'脉冲型 × 复利型 · 四阶段作战 · 站外声量',
    kicker:'LESSON 07 · TRAFFIC & OFF-SITE SIGNAL',
    sections:[
      ...M(6).sections.slice(0,3), ...MODULE_D_SECTIONS, ...M(6).sections.slice(3)
    ],
    takeaway:[...M(6).takeaway,
      `在 2026 年的 Google 排名逻辑里，站外曝光不再只是“多一条引流渠道”，它本身就是护航你 Google 排名的最强信号：`]
  },
  {
    ...M(12), id:'L08', group:'第三篇：流量矩阵与权威增长',
    title:'抗算法惩罚的高级 pSEO 与多语言扩张时机',
    sub:'规模化内容滥用 · 四大法则 · i18n 时机',
    kicker:'LESSON 08 · PSEO & I18N',
    sections:[...M(12).sections, ...M(19).sections],
    tools:DEDUP([...M(12).tools,...M(19).tools]),
    takeaway:[...M(12).takeaway,...M(19).takeaway]
  },
  {
    ...M(14), id:'L09', group:'第三篇：流量矩阵与权威增长',
    title:'GEO 生成式引擎优化与数字 PR（外链公关）',
    sub:'可引用事实块 · 可链接资产 · 挣来的媒体曝光',
    kicker:'LESSON 09 · GEO & DIGITAL PR',
    sections:[...M(14).sections.slice(2), ...MODULE_E_SECTIONS],
    tools:DEDUP([...M(14).tools,'Pew Research Center','Quora','StackExchange']),
    takeaway:[
      M(14).takeaway[3],
      `与此同时，48.6% 的一线 SEO 专家已将 Digital PR（数字公关/挣来的媒体曝光）评为最有效的外链获取方式（效果是发客座博客 Guest Post 的 3 倍）[3]。`,
      `在生成式 AI 搜索时代，94% 的 AI 引用推荐来自第三方挣来的权威媒体报道（Earned Media），而非品牌自卖自夸的内容[4]`
    ]
  },

  /* ---------- 第四篇 ---------- */
  {
    ...M(4), id:'L10', group:'第四篇：商业变现与资产退出',
    title:'变现引擎：定价防亏、付费墙 CRO 与 MoR/AdSense 通关',
    sub:'三种引擎 · 定价模型 · 审核通关',
    kicker:'LESSON 10 · MONETIZATION & CRO',
    sections:[...M(4).sections, ...M(14).sections.slice(0,2), ...M(18).sections],
    tools:DEDUP([...M(4).tools,...M(18).tools]),
    takeaway:[...M(4).takeaway, M(14).takeaway[0], M(14).takeaway[1], M(14).takeaway[2], ...M(18).takeaway]
  },
  {
    id:'L11', group:'第四篇：商业变现与资产退出',
    title:'留存印钞机：生命周期邮件营销与转化 A/B 实验',
    sub:'Lifecycle Drip · Dunning · 转化率实验',
    kicker:'LESSON 11 · LIFECYCLE & EXPERIMENT',
    lede:'为什么你的网站只赚走了不到一半的钱？',
    quote:'所有注册用户的平均激活率只有约 37%（将近三分之二的人根本没真正用明白你的核心功能就走了）[6]；而一旦用户在注册前 3 天触达了核心功能，他的付费转化率会直接暴涨 4 倍[6]！',
    sections:MODULE_F_SECTIONS,
    tools:['Resend','Postmark','Paddle','Lemon Squeezy','Creem','Stripe','Google Analytics'],
    takeaway:[
      `所有注册用户的平均激活率只有约 37%（将近三分之二的人根本没真正用明白你的核心功能就走了）[6]`,
      `一旦用户在注册前 3 天触达了核心功能，他的付费转化率会直接暴涨 4 倍[6]！`,
      `每次只改一个变量，跑 2–4 周观察最终的“每千名访客净收入（Revenue per 1,000 Visitors）”[9]：`
    ]
  },
  {
    ...M(15), id:'L12', group:'第四篇：商业变现与资产退出',
    title:'手术刀式运营循环与资产退出（Build to Sell）',
    sub:'GSC 提权 · 僵尸页修剪 · 卖掉网站',
    kicker:'LESSON 12 · OPERATIONS & EXIT',
    sections:[...M(15).sections, ...MODULE_G_SECTIONS],
    tools:DEDUP([...M(15).tools,'Acquire.com','Flippa']),
    takeaway:[...M(15).takeaway,
      `独立开发者的终极退出路径：卖掉它，拿走几年利润的现金！`,
      `一个财务干净、持续盈利的独立 SaaS 或工具网站，真实成交估值中位数稳定在 年净利润的 3.9 倍（主流区间为 3x–5x 年利润，或 1x–3x 年营收），平均净利润率高达 71%[1][10][11]；`]
  },

  /* ---------- 第五篇 ---------- */
  {
    ...M(9), id:'L13', group:'第五篇：垂直专题与实战附录',
    title:'垂直专题：游戏站 3 条路线的生死与上限',
    sub:'辅助工具伴侣站 · 母站骨架 · 4 个游戏雷达',
    kicker:'LESSON 13 · GAME NICHE',
    sections:[
      {title:M(9).sections[0].title, blocks:[P('本节为垂直赛道参考专题。'), ...M(9).sections[0].blocks]},
      ...M(9).sections.slice(1)
    ]
  },
  {
    ...M(21), id:'L14', group:'第五篇：垂直专题与实战附录',
    title:'实战附录：独立开发者 AI 提示词工具箱',
    sub:'4 条直接复制可用的提示词',
    kicker:'LESSON 14 · PROMPT TOOLKIT',
    lede:`把课程里的方法论直接落地成代码和文案。下面四条提示词分别喂给你的 AI（或 Cursor）即可，点右上角“复制”直接拿走。`,
    sections:[...M(21).sections, ...MODULE_H_SECTIONS],
    takeaway:[...M(21).takeaway,
      '提示词 4：竞品黑箱逆向拆解（用于第 02 课与第 10 课）']
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
  {front:'checklist',back:'自查清单｜新法规合规自查、新游戏全收集清单。结构化问答还容易被 AI 引用（GEO）。'},
  {front:'SERP',back:'搜索结果页｜拿到词先别写代码，开美国 IP 无痕亲眼看第一页，才是唯一真理。'},
  {front:'AI Overviews',back:'谷歌顶部 AI 摘要｜出现后自然结果 CTR 从 15% 跌到 8%，文字能答完的需求直接放弃。'},
  {front:'Zero-Click',back:'零点击｜约 68% 的 Google 搜索没点击就结束。有免疫力的词必须交互 / 文件处理 / 实时数据。'},
  {front:'KD',back:'关键词难度｜只统计前 10 页面外链域名数，不知道页面塞没塞广告、前排有没有 Reddit。只能初筛。'},
  {front:'软柿子信号',back:'Reddit 帖 / DR<20 老破小站 / 标题答非所问｜首页出现任意 2 个，说明有缝隙可钻。'},
  {front:'意图四象限',back:'信息型别碰、商业调研慎用、工具交互主攻、交易行动必抢。'},
  {front:'条件渲染',back:'同一工具按场景切换真实参数：Shopify 2048×2048，US Visa 600×600 & <240KB。遮住标题能看出不同，才安全。'},
  {front:'Intent Cluster',back:'同类意图合并｜两词前 5 名有 3 个以上相同，就做成一个超强页，别自己打自己。'},
  {front:'Hub-and-Spoke',back:'枢纽-辐射｜母站 Hub 承接权重，场景页 Spoke 全挂在下面，首页点击 ≤3 次可达，配面包屑 + Related Scenarios。'},
  {front:'Index Bloat',back:'索引膨胀｜新站首日万页会被贴"低质批量站"标签。500 个能排前十的页胜过 5000 个僵尸页。'},
  {front:'CSR / SSR',back:'客户端渲染源码是空壳，AI 爬虫根本不执行 JS。SEO 页必须 Next.js SSR / SSG 或 Astro。'},
  {front:'INP',back:'交互响应延迟 < 200ms｜工具站的命门，测的是每次点击 / 输入多久出画面反馈。'},
  {front:'RLS',back:'行级安全｜Supabase 每张表都要开严格 RLS，USING (true) 全放行 = 路人可拖走整张用户表。'},
  {front:'Webhook 幂等',back:'别信前端 /success?paid=true。服务端验支付平台 Webhook 签名 + 防重复，否则黑客无限白嫖。'},
  {front:'Turnstile',back:'Cloudflare 免费无感人机盾｜套在消耗算力的按钮前，挡约 95% 自动化脚本。'},
  {front:'混合定价',back:'低月费 + 用量额度｜锁住 MRR 又封死算力亏损，收入增长比纯订阅 / 纯按量高约 21%。'},
  {front:'沉没成本付费墙',back:'上传 → 调参 → 处理 → 看到带水印结果 → 再弹解锁。先给价值再要钱，掏卡率最高。'},
  {front:'GEO',back:'生成式引擎优化｜首段给可引用事实块 + 第三方真实讨论 + llms.txt，让 ChatGPT / Perplexity 主动引用你。'},
  {front:'可链接资产',back:'免费无注册的微工具 / 基准报告，发给行业文章作者换真实 DR 60+ 外链，别买垃圾链。'},
  {front:'Striking Distance',back:'近战打击词｜GSC 里第 4–20 名、展现高的词。微调标题和内容就能推进前三，杠杆最高。'},
  {front:'Content Pruning',back:'僵尸页修剪｜每 90 天四象限体检：Keep / Refresh / Consolidate / Prune，算法更新期别动刀。'},
  {front:'Aha! Moment',back:'15 秒顿悟｜工具摆首屏、Try an example 一键体验，看到成果后再弹登录墙。'},
  {front:'AI Slop Aesthetic',back:'AI 流水线审美｜深色 + 紫蓝渐变发光 + 满屏默认图标。欧美用户警惕，要留白 + 单主色 + 真实截图。'},
  {front:'UDRP',back:'统一域名争议解决政策｜域名含大厂商标可被无偿没收。买前先去 USPTO 查 Class 9/42。'},
  {front:'SPF / DKIM / DMARC',back:'邮件三件套｜没配齐 Gmail/Outlook 直接 SMTP 550 退信。收信用 Email Routing，发信用 Resend/Postmark。'},
  {front:'Low Value Content',back:'AdSense 低价值内容｜只有上传框的页爬虫只看到 <50 词。补 400–800 词 + FAQ + 15–25 个索引页再申。'},
  {front:'hreflang',back:'多语言标签｜配错会让不同语言页互抢排名。用子目录 /de/，等英文区跑通再扩。'},
  {front:'完美主义瘫痪',back:'什么都想做导致不敢上线。按三阶段路线图：1–2 周 MVP，1–3 月首批流量，3–6 月才规模化。'}
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
  {scene:'你的图片处理工具上线前，AI 生成的代码里有一个调用 AI 接口的 Key 直接写在前端 JS 里。',q:'必须做什么？',opts:['Key 藏在 JS 里别人看不到，没关系','把 Key 移到后端，并在对话框里要求 AI 检查全代码无密钥暴露；图片处理尽量放浏览器本地','把 Key 换个复杂一点的名字','等有人刷爆账单再说'],ans:1,why:'前端密钥会被任何人扒走刷爆账单。保命指令 ①：绝不让 API Key 暴露在前端；② 文件处理尽量 Client-side，省服务器又规避隐私合规。'},
  {scene:'你搜一个词，首屏是 4 条广告 + 半屏 AI Overview + Google 自带的小工具，自然前 5 名全是 HubSpot 这类 DR 90+ 巨头。',q:'按 SERP 解剖学，应该？',opts:['需求这么大，立刻做，抢自然第一','致命红灯，直接放弃；换个能接上具体动作的长尾词','先买 Ahrefs 看 KD，低于 20 就做','写一篇更详细的评测长文跟巨头竞争'],ans:1,why:'首屏被广告+AI摘要+官方工具占满，就算排自然第一也在第 2、3 屏；DR 90+ 巨头环伺，个人新站是炮灰。'},
  {scene:'你在做图片裁剪工具，打算批量生成 100 个页面：只把 H1 换成 Resize Image for {Platform}，正文让 AI 各写 300 字平台介绍。',q:'2026 年这套做法的结局是？',opts:['没问题，Zapier 就是这么做的','会被判 Doorway Page / Scaled Content Abuse，可能整站降权','只要每页标题不同就安全','加上 canonical 就没事'],ans:1,why:'换汤不换药的相似页就是被打击的对象。Zapier 活下来是因为每页有真实不同的集成数据和功能，不是文字替换。'},
  {scene:'你用 Bolt 生成了一个工具站，右键查看源代码只有 <div id="root"></div>，内容全靠 JS 拼出来。',q:'最大的风险是？',opts:['页面加载慢一点点','Google 收录慢且 ChatGPT / Perplexity 等 AI 爬虫看不到你，GEO 流量归零','JS 太多不安全','没有 favicon'],ans:1,why:'CSR 对 Google 是二次渲染、收录慢；对不执行 JS 的 AI 爬虫则是完全隐形。SEO 页第一天就该用 SSR / SSG / Astro。'},
  {scene:'你的工具接了付费 AI 接口。你打算卖 $9.9/月无限量使用，但没做限流和缓存。',q:'最可能的结果？',opts:['稳赚，用户很喜欢','最重 10% 用户会跑掉远超 $9.9 的 API 账单，卖越多亏越多','Google 会 penalize 定价','用户嫌贵不会买'],ans:1,why:'重度用户算力成本可能是普通用户几十倍。要卖积分包或混合定价，并用 Turnstile + 后端限流 + Token 上限 + 缓存兜底。'},
  {scene:'你刚上线工具站，AI 生成的代码把 Supabase 表设成了 USING (true)，支付成功靠前端跳 /success?paid=true 判断。',q:'这两处合起来意味着什么？',opts:['开发效率高，先上线再说','任何人能拖走整张用户表，且自己输网址就能无限白嫖付费功能','没问题，Supabase 默认就安全','只要不公开网址就没事'],ans:1,why:'RLS 全放行 = 数据库裸奔；前端成功页不可信 = 支付可伪造。必须开严格 RLS，服务端验 Webhook 签名并做幂等。'},
  {scene:'一个欧美用户打开你的工具站，首屏写着 Elevate your workflow with AI，按钮是 Submit，还没怎么用就弹登录注册框。',q:'按信任工程，最该改什么？',opts: ['换个更漂亮的渐变背景','H1 改成具体人群+结果+机制，按钮写 Check My Email Free，把登录墙后置到看到结果之后','加 4 个 AI 生成的假好评','多放几个 3D 插画'],ans:1,why:'空洞 AI 口号 + 无意义按钮 + 前置登录墙是冷流量三大杀手。要具体性测试、结果导向 CTA、Try-before-signup、去 AI Slop 审美。'},
  {scene:'GSC 里一个词排第 9 名、展现很高但点击少；同时你还有 10 个新页躺在第 15 名。',q:'这周 30 分钟应该优先做什么？',opts:['给 10 个新页各写 5 篇外链文章','优化第 9 名那页的 title/H1/首段并补齐竞品有的参数，28 天后看对比','再批量发 100 个新页','删掉第 9 名的页重做'],ans:1,why:'前 3 名吃掉近 70% 点击，第 8–10 名趋近于零。把第 9 名推进前三几乎不用从零攒外链，杠杆远高于铺新页。'},
  {scene:'运营第 5 个月，站里有 200 个长尾页。其中 60 个半年零点击零展现，还有两页目标意图完全重合、互抢排名。',q:'季度修剪该怎么处理？',opts:['全部保留，页面越多权重越高','零点击僵尸页删掉返 410/404；意图重合的两页合并，弱页 301 到强页；正在掉排名的页做 Refresh','给这 60 页各买一条外链','把整站 noindex 一周再恢复'],ans:1,why:'四象限体检：Keep / Refresh / Consolidate / Prune。零价值页浪费抓取预算、拉低整站质量；重合页要合并集中权重。注意算法更新期别动刀。'},
  {scene:'你想让 ChatGPT / Perplexity 在用户问"好用的冷邮件垃圾词检测器"时推荐你的站。',q:'哪个动作最有效？',opts:['在官网写 100 篇"我们最好"的文章','在 H2 下第一句给带数字的可引用事实块，并把工具提交到 Product Hunt / AlternativeTo，去 Reddit 真实分享实测数据','刷 1000 个虚假品牌提及','给 Google 专门做 llms.txt 走快捷通道'],ans:1,why:'AI 引擎看的是结构化可引用内容 + 第三方真实讨论。Google 官方说 llms.txt 对它不是快捷通道，刷虚假提及也没用。'},
  {scene:'你发现一个长尾词能裂变出 for Shopify / for US Visa / for Kindle 等 50 个页面，但数据库里共有 5000 种组合，新域名 DR 0。',q:'正确放量节奏是？',opts:['第一天全生成 5000 页提交给 Google，抢先占坑','先上 30–50 个需求最确定的页，观察 2–4 周；收录率 >80% 后每周加 50–100 页；缺独有数据的组合加 noindex','只做 5 个页，其余永远不做','按 Excel 排列组合全部生成，但每个页面标题不同'],ans:1,why:'新站首日万页 = Index Bloat，会被贴低质批量站标签甚至拖累核心首页。要三阶段灰度 + Quality Gates 质量门控。'},
  {scene:'你准备注册 NotionHelper.com，因为 Notion 很火，你觉得精准匹配域名SEO最好。',q:'最该先做什么？',opts:['直接买，抢注要紧','先去 USPTO 查商标：含大厂商标名可能被 UDRP 无偿没收，还会触发收款和 AdSense 风控','换个 .xyz 便宜后缀就没事','买了再说，做起来后大厂会来合作'],ans:1,why:'商标自杀是双重雷：UDRP 没收域名 + Stripe/MoR/AdSense 知识产权风控冻结资金。买前 1 分钟查 USPTO。'},
  {scene:'你的工具站要给用户发注册验证码和付款收据，但你打算用自己的服务器 SMTP 发信，没配任何 DNS 记录。',q:'会发生什么？',opts:['正常进收件箱','Gmail/Outlook 直接 SMTP 550 退信，因为没过 SPF/DKIM/DMARC 验证','会被当成垃圾邮件但不影响','只要邮件写得好就行'],ans:1,why:'2026 年未验证发件域名会被直接退信。用 Resend/Postmark 发事务邮件，并在 Cloudflare DNS 配齐 SPF/DKIM/DMARC。'},
  {scene:'你的英文工具站刚上线 1 周，你想顺便机翻成 10 种语言，把流量乘以 10。',q:'正确判断是？',opts:['立刻翻，越早覆盖越多流量','别急：英文区没跑通就铺多语言 = Index Bloat + 机翻词无搜索量 + hreflang 坑','翻成 3 种就够了','用子域名每个语种开一个站'],ans:1,why:'多语言是放大器不是救命药。先把 en-US 跑到有排名有美金，再挑德语/日语等高净值市场，用子目录 + 本地重新选词 + 双向 hreflang。'},
  {scene:'你的工具页只有一个上传框，功能完美，你去申请 AdSense 却一直被拒，提示低价值内容。',q:'最有效的解法是？',opts:['再做个更好看的上传框','工具下方补 400–800 词实用内容 + FAQ，配齐 about/contact/privacy，等 15–25 个页被索引再申','反复提交审核','换一个广告平台'],ans:1,why:'爬虫看不懂 JS 交互，只看到不到 50 词。补实打实的文字内容和完整站点结构，是过 Low Value Content 审核的标准做法。'}
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
  {t:'⑦ 变现路径想清楚了吗？',d:'免费工具 + AdSense？还是 $9 Pro 用 Creem 收款？还是导航站拿联盟佣金？至少确定一条。'},
  {t:'⑧ 首屏含金量够吗？',d:'4 条广告 + 半屏 AI Overview + Google 自带工具 = 直接放弃。广告 ≤1–2 条、无官方工具才继续。'},
  {t:'⑨ 前 5 名是什么形态？',d:'全是单页小工具 = 用户要立刻动手，别写评测长文；全是长文 / Reddit = 可能市场缺好工具。'},
  {t:'⑩ 有 ≥2 个软柿子信号吗？',d:'Reddit / Quora / StackExchange 帖、DR<20 老破小站、标题答非所问 —— 任意 2 个才有缝隙可钻。'},
  {t:'⑪ 是止痛药还是维生素？',d:'卡在工作流里、能省钱省时间、高频复用 = 止痛药；一时好玩、用一次就走 = 维生素。'},
  {t:'⑫ 能裂变成差异化长尾页吗？',d:'按平台 / 对象裂变时，每个页面的参数预设必须真不一样，否则就是会被惩罚的门页。'},
  {t:'⑬ 上线前工程四件套齐了吗？',d:'SSR/SSG 保收录、Turnstile + 后端限流 + Token 上限 + 缓存防破产、严格 RLS + Webhook 幂等、GSC + 统计 + Clarity 埋点。'},
  {t:'⑭ 定价会亏本吗？',d:'接 AI 算力就别卖无限量包月。用积分包或混合定价，付费墙卡在用户看到成果之后。'}
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
   checks:['独立域名 + HTTPS + 手机正常','域名过商标与案底排雷','隐私政策 / 条款 / 联系页齐全','SPF / DKIM / DMARC 已配','GA 与 GSC 已装','收款通道已接通','robots.txt 未误禁抓取']},
  {icon:'📈',n:'STAGE 06',title:'增长与运营 · 脉冲破冰 + 手术刀复利',sub:'目标：第一批真实用户 + 长期复利曲线',
   text:'前 14 天提交 GSC 和 Bing、批量刷目录站；前 30 天 Reddit 干货回复 + #BuildInPublic + 短视频；2–12 个月用条件渲染的差异化长尾页分批灰度放量，每周 30 分钟用 GSC 推进第 4–20 名潜力词，每季度做一次僵尸页四象限修剪。',
   tools:['Google Search Console','Bing Webmaster Tools','Reddit','X / Twitter','TikTok','YouTube Shorts','Product Hunt','AlternativeTo','BetaList','Indie Hackers','Microsoft Clarity','Plausible'],
   checks:['sitemap 已提交给谷歌和必应','至少提交 10 个目录站','Reddit 只发干货不硬广','长尾页分批灰度，首月 ≤50 页','每周 30 分钟推进第 4–20 名潜力词','首页有可引用事实块和对比表（GEO）','每季度四象限体检，修剪僵尸页','看 Clarity 录屏修掉 UX 卡点']}
];
