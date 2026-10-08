# Google Antigravity Teamwork Architecture & Implementation

> The definitive technical breakdown and reverse-engineering of Google Antigravity's autonomous multi-agent swarm framework.

Published live as a GitHub Pages site: **[https://arterialist.github.io/antigravity-teamwork-architecture/](https://arterialist.github.io/antigravity-teamwork-architecture/)**

Formatted to fully replicate the design language and visual aesthetic of the official [Google Antigravity Blog](https://antigravity.google/blog/teamwork-when-ai-becomes-a-research-partner/).

---

## Highlights Covered

1. **The "Decoy Rule" Discovery**: Reverse-engineered extraction of the `SYSTEM PROMPT PROTECTION` policy embedded within Antigravity's native `language_server` binary that causes agents to deflect prompt-injection queries with:
   > *"I'm a Teamwork agent. What task can I help you with?"*
2. **Phase 1: The 9-Step Prompt Elicitation Protocol**: How `/teamwork-preview` gathers requirements, chooses integrity modes (development, demo, benchmark), configures verification forcing functions, and delegates to the swarm.
3. **Phase 2: Project Sentinel & Task Routing**: The permanent supervisor enforcing verbatim user logs (`ORIGINAL_REQUEST.md`), situational memory (`BRIEFING.md`), and the Routing Decision Table.
4. **The 5 Topological Execution Tracks**:
   - **Track 1: General Software Engineering Orchestrator** (`teamwork_preview_orchestrator`): Parallel surveys, 3–7 milestone decomposition, Dual-Track coordination (Implementation vs. E2E Testing Tiers 1–4), Iteration Loop 2B (Explorers $\rightarrow$ Worker $\rightarrow$ Reviewers $\rightarrow$ Challengers $\rightarrow$ Forensic Auditor), and Tier 5 white-box hardening.
   - **Track 2: SWE Light Loop** (`teamwork_preview_swe`): Fast single-task refinement with inductive cognitive isolation, adversarial attacks, and test tampering detection.
   - **Track 3: Academic Document Review** (`teamwork_preview_document`): PDF page conversion via `pypdfium2`, No-Truncation policy, segmentation triage, and `[4, 2, 1]` RSA tournament trees.
   - **Track 4: Colosseum Theorem Proving** (`teamwork_preview_proof`): 5-phase tournament trees deploying up to **128 concurrent agents**, strategy cards, LaTeX token placeholders, dependency solving, blind peer referees, and temperature asymmetry ($T=1.0$ vs $T=0.2$).
   - **Track 5: Blackboard Swarm** (`pipeline_conductor`): Single-writer concurrency isolation via `blackboard_manager` and live pipeline telemetry via `pipeline_blackboard_updater`.
5. **Critical System Protocols**:
   - **Situational Awareness & BRIEFING.md**: Append-only `🔒 My Identity` and `🔒 Key Constraints`.
   - **5-Component Handoff Protocol (`handoff.md`)**: Observation, Logic Chain, Caveats, Conclusion, Verification Method.
   - **Succession Protocol**: 16-spawn lifecycle cutoff to defend against context degradation.
   - **Pre-flight Dependency Auditor (`teamwork_preview_dependency`)**: System and library probing (`READY`, `MISSING`, `OUTAGE`).
   - **Independent Victory Auditing (`teamwork_preview_victory_auditor`)**: 3-phase verification (Timeline, Integrity Anti-Cheating Hard Veto, Independent Execution).
6. **Subagent Catalog**: Complete taxonomy of all 20+ specialized agent archetypes and tool suites.

---

## Directory Layout

```
antigravity-teamwork-architecture/
├── index.html                   # Static HTML publication replicating the Google Blog aesthetic
├── README.md                    # Repository documentation
├── assets/
│   ├── css/
│   │   └── style.css            # Exact Google Blog styles & responsive design tokens
│   ├── js/
│   │   └── main.js              # Client script (reading bar, code copy, share dropdown, Mermaid.js)
│   └── images/
│       ├── antigravity-logo.png
│       ├── teamwork-wide.jpg
│       ├── teamwork-patterns-grid.svg
│       ├── teamwork-distributed-coding-flow.svg
│       ├── teamwork-long-proof-architecture.svg
│       ├── teamwork-argos-boom-cycle-alignment.svg
│       ├── teamwork-cpu-stats.svg
│       └── teamwork-eigen-stats.svg
```

---

## License

MIT © arterialist
