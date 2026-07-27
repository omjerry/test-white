# A股复盘知识库

这是一个以 Obsidian 维护、VitePress 发布、Vercel 托管的公开 Markdown 知识库。

## 本地使用

1. 安装依赖：`npm install`
2. 用 Obsidian 打开 `docs/` 目录作为 Vault。
3. 本地预览：`npm run docs:dev`
4. 生产构建：`npm run docs:build`

## 内容约定

- 所有可发布笔记都放在 `docs/` 对应栏目下。
- 每篇研究必须包含 `title`、`date`、`period`、`tags`、`status` 五个 Frontmatter 字段。
- 本地私密草稿放在 `docs/private/`；该目录不会提交或部署。
- 图片和附件放在 `docs/assets/`，使用相对 Markdown 路径引用。

## 协作与发布

1. 从 `main` 创建分支编辑笔记。
2. 推送分支后，在 Vercel 预览部署中检查页面。
3. 通过 Pull Request 合并到 `main` 后，Vercel 自动发布生产站。

## Vercel 设置

- Framework Preset：VitePress
- Build Command：`npm run docs:build`
- Output Directory：`docs/.vitepress/dist`
- Node.js：22
- 生产分支：`main`
