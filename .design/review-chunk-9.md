375px ✅ / 对比度 ✅"。否则 4.3/4.5 的"截图人工检查"形同虚设。
3. **明确"简单 vs 复杂"的量化判据**。把"提示词完整"替换为可判的客观条件，例如：用户消息里明确给出了 ≥2 个页面结构 + ≥1 个视觉关键词 → 简单；否则 baton。消除主观判断。

### P1（影响系统一致性）

4. **补齐 taste-skill 子 skill 选择表**，与 available_skills 实际清单对齐，并标注每个子 skill 的"是否已验证可用"。避免选到路径为空或不存在的 skill。
5. **解决"anti-slop 是硬门槛、taste-skill 是可选增强"的逻辑裂缝**。二选一：要么把 anti-slop 门槛的达成责任明确指派给 ultimate 引擎（并验证它单独做得到），要么把 taste-skill 的启用从"可选"改为"默认（除非用户明确不要）"。
6. **合并 next-prompt.md 与 history.md 的"下轮计划"职责**。建议：next-prompt.md 只存当前轮任务，history.md 只做已