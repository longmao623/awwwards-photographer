题

1. **taste-skill 启用是"可选"的，但 anti-slop 是"必达"的**。这里有个逻辑裂缝：`4.5 视觉独特性`把"非默认字体/非默认色彩/非对称布局/禁用 AI 三件套"列为**硬性交付门槛**，但 taste-skill 却是"满足条件才启用"。也就是说，不启用 taste-skill 时，ultimate 引擎能否单独满足这些 anti-slop 门槛并未验证。retro-musician 和 awwwards-photographer 的产物都合格，但**我们不知道该归功于 ultimate 的能力，还是 taste-skill 的注入，还是两者缺一不可**。
2. **子 skill 选择表残缺**。「默认 anti-slop，设计感更强」→ `design-taste-frontend`，但其他子 skill（`imagegen-frontend-web`、`full-output-enforcement`、`stitch-design-taste` 等）没有进入这张表。表里列出的路径和 available_skills 清单有出入，容易选空。
