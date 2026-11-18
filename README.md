# 建站教练 · 互动实战课程

> 从「找到一个词」到「网站上线并赚到第一笔美金」的全流程互动课程。

[![Live Site](https://img.shields.io/badge/在线课程-GitHub%20Pages-1f5fe0?style=flat-square)](https://hengjie1993-lang.github.io/jianzhan-course/)
[![License: MIT](https://img.shields.io/badge/license-MIT-1a2434?style=flat-square)](LICENSE)
[![Modules](https://img.shields.io/badge/课程-21%20节-1f5fe0?style=flat-square)](#课程结构)
[![Tools](https://img.shields.io/badge/工具库-91%20个-1f5fe0?style=flat-square)](#功能)

**在线访问：** https://hengjie1993-lang.github.io/jianzhan-course/

手机浏览器直接打开即可使用，可「添加到主屏幕」当作离线 App。

---

## 项目简介

这是一门把《阿无的建站教练课程》转化为**可交互、可训练、可落地**的网页课程。目标不是「读完」，而是把「找词 → 验证 → 设计 → 开发 → 上线 → 变现 → 增长」这套流程练成肌肉记忆。

课程面向想做英文利基站 / 微 SaaS 的独立开发者与中国自由职业者，全部内容基于 2026 年欧美市场实战经验，覆盖 AI 时代的 SEO / GEO 新规则、AI 建站工程安全、收款合规与运营复利。

整个项目是**纯静态网页**，无后端、无数据库、无第三方运行时依赖。所有数据存在浏览器 `localStorage`，进度和笔记只属于你自己。

## 功能

| 模块 | 说明 |
| --- | --- |
| **课程** | 21 节正课与深度课，含要点、案例、术语卡、一键跳转的工具链接 |
| **工具库** | 91 个实战工具，按「找词洞察 / 需求验证 / 建站开发 / 托管域名 / 收款变现 / 流量增长」等分类，支持搜索与筛选，点击直达官网 |
| **训练场** | 40 张术语闪卡（翻转 + 标记掌握）、24 道情境测验（含错因解析）、8 步流程排序、14 条新词研判清单 |
| **作战地图** | 六阶段流程主線（找词 → 验证 → 设计 → 开发 → 上线 → 增长），每阶段带工具与验收清单 |
| **实战工坊** | PRD 提示词生成器、三条可直接复制的 AI 实战提示词（文案改写 / 上线审计 / GSC 诊断）、本地笔记 |
| **进度与主题** | 学习完成度自动保存，明暗双主题切换，支持深链参数直达 |

所有学习内容集中在 [`data.js`](data.js)，渲染与交互在 [`app.js`](app.js)，视觉在 [`styles.css`](styles.css)。

## 课程结构

**基础六课（1–6）**
从词句到美金的底层逻辑、需求透视眼、黄金狩猎场、变现引擎、零代码建站全流程、上线后的免费流量。

**深度专题（7–15）**
发现需求流水线、新词作战系统、游戏站专题、SERP 解剖学、欧美原生感与信任工程、抗惩罚 pSEO、生产级工程素养、CRO 与 GEO 增长、手术刀式运营循环。

**实战补丁（16–21）**
域名排雷与黑历史体检、邮件送达率（SPF / DKIM / DMARC）、MoR 与 AdSense 过审、多语言扩张时机、防过载执行路线图、AI 提示词工具箱。

## 快速开始

### 在线使用

直接打开 https://hengjie1993-lang.github.io/jianzhan-course/

### 本地运行

```bash
git clone https://github.com/hengjie1993-lang/jianzhan-course.git
cd jianzhan-course
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

也可以直接双击 `index.html` 用浏览器打开，无需构建步骤。

### 深链参数

```
?view=course|tools|training|map|workshop   指定视图
?tab=flash|quiz|order|checks               训练场标签
?mod=0-20                                  跳转指定课程（从 0 计数）
?theme=light|dark                          指定主题
```

## 技术栈

原生 HTML + CSS + JavaScript，零依赖、零构建、零框架。视觉采用 Cobalt 技术排版风格：Grotesk 标题、IBM Plex Sans 正文、JetBrains Mono 代码、单一钴蓝强调色、细线与切角面板。

通过 GitHub Pages 从 `main` 分支根目录自动部署，推送即上线。

## 项目结构

```
.
├── index.html     页面骨架与五个视图
├── styles.css     Cobalt 风格样式（明暗双主题）
├── data.js        全部课程内容、工具、训练题与作战地图
├── app.js         渲染逻辑、交互与本地存储
├── LICENSE        MIT 许可证
└── README.md      本文件
```

## 更新记录

### 2026-11-18
- 同步 Word 文档新增的 6 个深度进阶课（SERP 解剖 / 信任工程 / pSEO / 工程素养 / CRO+GEO / 运营循环）
- 同步 6 个实战补丁（域名排雷 / 邮件送达 / 收款过审 / 多语言 / 执行路线图 / 提示词工具箱）
- 新增可一键复制的代码块，承载 3 条 AI 实战提示词
- 工具库扩充至 91 个，闪卡 40 张，测验 24 道

### 2026-11-16
- 项目初始化：9 节课程、73 个工具、四类训练与六阶段作战地图
- 部署到 GitHub Pages

## 免责声明

课程内容中的费率、政策、平台规则与行业数据会随时间变化，请以各平台官方最新信息为准。项目仅供学习与参考，不构成投资、法律或税务建议。

## 许可证

[MIT](LICENSE) © hengjie1993-lang
