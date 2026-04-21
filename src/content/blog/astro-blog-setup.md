---
title: '我用 Astro 搭了一个博客'
description: '记录从零开始搭建 Astro 博客的完整过程，以及我学到的东西。'
publishDate: 2026-04-21
tags: ['study']
---

# 我用 Astro 搭了一个博客

作为一个之前只会写点 HTML/CSS 的高中生，这次用 Astro 搭建博客的经历让我对现代前端开发有了全新的认识。这篇文章记录整个搭建过程，以及我学到的一些关键概念。

## 什么是 Astro

Astro 是一个**静态网站生成器**（Static Site Generator）。简单来说，你写一些 `.astro` 文件和 Markdown 文章，Astro 会帮你把它们编译成纯 HTML/CSS/JS，然后你可以把这些静态文件丢到任何服务器上运行。

它最大的特点是**"默认零 JavaScript"**——页面加载时不会发送任何 JS 到浏览器，除非你真的需要交互功能。这让 Astro 网站的加载速度极快，非常适合博客、文档这类内容型网站。

## 搭建过程回顾

### 1. 环境准备

首先需要安装 Node.js 和 Bun（一个更快的包管理器）。然后克隆模板、安装依赖：

```bash
git clone https://github.com/cworld1/astro-theme-pure.git
cd astro-theme-pure
bun install