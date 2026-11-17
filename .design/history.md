# 项目历史

## 第 1 轮：首页
- 状态：✅ 完成
- 产物：`src/App.tsx`（首页）、`src/index.css`、`tailwind.config.js`
- 验证：`npm run build` 通过
- 内容：全屏 hero、摄影师简介、精选作品入口、联系 footer

## 第 2 轮：作品集页
- 状态：✅ 完成
- 产物：`src/App.tsx`（重构为多页路由）、`src/main.tsx`、`src/Work.tsx`
- 验证：`npx vite build` 通过
- 内容：3 个摄影系列（Altitude / Still Rooms / Quiet Faces），每个系列 4 张作品的非对称网格画廊，支持 lightbox 放大查看

## 第 3 轮：关于页
- 状态：✅ 完成
- 产物：`src/About.tsx`、更新后的 `src/App.tsx` 路由
- 验证：`npx vite build` 通过
- 内容：编辑式排版故事区、肖像照、设备列表、合作客户/出版物列表、页面导航

## 第 4 轮：联系页（最终轮）
- 状态：✅ 完成
- 产物：`src/Contact.tsx`、最终版 `src/App.tsx` 路由
- 验证：`npx vite build` 通过
- 内容：大标题 CTA、极简联系表单、邮箱/地址/社交媒体信息、底部全站导航
