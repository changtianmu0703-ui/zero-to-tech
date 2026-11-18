# 林间空地

个人博客网站，记录读书、生活、随想与工具。

## 架构

纯静态文件，无构建步骤，可直接部署到任何静态托管。

```
web_pr/
├── index.html          (页面结构)
├── style.css           (样式)
├── script.js           (前端逻辑)
├── README.md           (本文档)
└── posts/              (文章目录)
    ├── walden-reread.md
    ├── midnight-noodles.md
    ├── benefits-of-slow.md
    ├── digital-minimalism.md
    └── before-thirty.md
```

## 技术栈

- **Markdown 解析**: [marked.js](https://marked.js.org/) v14.1.3 (CDN)
- **Frontmatter 解析**: 内置自定义函数，无额外依赖
- **字体**: Google Fonts — Noto Serif SC

## 添加新文章

1. 在 `posts/` 目录下新建 `.md` 文件
2. 文件顶部添加 YAML frontmatter：

```markdown
---
slug: article-slug
date: 2026.01.01
tag: 读书
title: 文章标题
excerpt: 摘要文字
---

正文内容（支持标准 Markdown 语法）
```

3. 将 `slug` 添加到 `script.js` 顶部的 `SLUGS` 数组中

## 本地预览

必须通过 HTTP 服务器访问（`fetch()` 不支持 `file://` 协议）：

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# VS Code
# 使用 Live Server 插件
```

然后打开 http://localhost:8000

## 特性

- 文章列表带标签筛选与本期特写标记
- 阅读视图含字数统计、阅读时长估算
- 上一篇 / 下一篇导航
- 阅读进度条
- 单篇文章加载失败不影响整体页面
