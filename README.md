# NetObs — AI-Powered Network Observability

> Stop alerting. Start explaining.

NetObs is a browser-based AI network observability dashboard powered by the Claude API. It tells you **why** something broke, the **blast radius**, and exactly **how to fix it**.

No agents. No infrastructure. No $100k contract.

## Live Demo

**[→ Open NetObs](https://jhaveribhavishi.github.io/netobs/netobs.html)**

## The Problem

Every monitoring tool tells you *that* something broke. None tell you *why* — fast enough. The average engineer spends 45 minutes on root cause analysis, context-switching across 4+ dashboards. NetObs puts an AI senior SRE directly in your incident workflow.

## What It Does

- **Service Map** — live topology with color-coded health. Click any node for instant AI analysis
- **Metrics** — latency, error rate, throughput, P99 with 6-hour history
- **Predictive Risk Scores** — per-service AI scores, know what breaks before it does
- **Alert Panel** — severity-ranked alerts with AI root cause tags pre-attached
- **AI Assistant** — ask anything in plain English

### Ask it things like:
- "What is the root cause?"
- "What breaks next if we do nothing?"
- "Give me the exact SQL fix"
- "Write an incident summary for my team"
- "What is the blast radius if the database goes down?"

## Quickstart

```bash
git clone https://github.com/jhaveribhavishi/netobs.git
cd netobs
python -m http.server 8000
# open http://localhost:8000/netobs.html
```

Or just open the live demo link above.

Get a free API key at [console.anthropic.com](https://console.anthropic.com) — typical cost per session: under $0.05.

## Connecting Real Data

All demo data is clearly marked with `// DEMO DATA` comments. Replace:

| Section | Replace with | Source |
|---|---|---|
| `NODES` object | Live service health | Prometheus / Kubernetes API |
| `EDGES` array | Real dependency map | Service mesh / Consul |
| `ALERTS` array | Live alerts | Alertmanager / PagerDuty |
| Chart data | Real time-series | Prometheus `/api/v1/query_range` |

## Tech Stack

- Vanilla HTML/CSS/JS — no framework, no build step
- Anthropic Claude API (`claude-sonnet-4-6`)
- Chart.js 4.4.1 (CDN)
- GitHub Pages (free hosting)

## Why This Exists

Enterprise tools (Datadog, Dynatrace) are powerful but expensive and locked down. Open source stacks give you dashboards, not answers. NetObs is the missing middle — a zero-infrastructure AI layer on top of whatever monitoring you already have.

## Roadmap

- [ ] Prometheus connector
- [ ] Datadog API integration  
- [ ] AWS CloudWatch connector
- [ ] OpenTelemetry trace ingestion
- [ ] Auto-triggered AI analysis on new critical alerts
- [ ] Export incident report to PDF

## Author

Built by [Bhavishi Jhaveri](https://github.com/jhaveribhavishi) — network and cloud infrastructure engineer with 7+ years across hybrid cloud, Palo Alto/Panorama firewall architecture, network automation (Ansible, Python, Nautobot), and DRaaS/BaaS solutions.

## License

MIT
