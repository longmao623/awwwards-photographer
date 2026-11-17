3. **冲突解决优先级第 4 条"如仍有模糊，在 DESIGN_BRIEF.md 显式声明"是纸面规则**。没有定义"声明格式"，也没有定义"谁来最终拍板"。实战中这条大概率被跳过。

---

## 四、baton 模式评估

### 优点

1. **文件结构完整且自洽**：`SITE.md / DESIGN.md / DESIGN_BRIEF.md / REFERENCES.md / next-prompt.md / history.md` 六件套覆盖了站点地图、视觉系统、风格简报、参考来源、当前任务、历史记录。从 awwwards-photographer 的 history.md 看，这个结构确实被落地执行了（4 轮，每轮有明确产物和 `npx vite build` 验证）。
2. **执行规则里的"每轮只做一件事，不跨轮偷跑"是极好的约束**。这直接防止了意识流式的一口气生成全家桶，是 baton 模式最值得保留的一条。
3. **"每轮开始读取 .design/ 下所有文件，不依赖会话记忆"** 是对 agent 失忆症的准确对冲。

### 问题

1. **aww