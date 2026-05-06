# NetObs — AI-Powered Network Observability

> Stop alerting. Start explaining.

NetObs is a browser-based AI network observability dashboard powered by the Claude API. When something breaks, it tells you **why**, what the **blast radius** is, and exactly **how to fix it** — in plain English.

No agents. No infrastructure. No $100k contract.

![Status](https://img.shields.io/badge/status-live-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue) ![Claude](https://img.shields.io/badge/AI-Claude%20API-6366f1)

---

## Live Demo

**[→ Open NetObs](https://jhaveribhavishi.github.io/netobs/netobs.html)**

> Requires a free [Anthropic API key](https://console.anthropic.com). Typical cost per session: under $0.05.

---

## The Problem

Every monitoring tool tells you **that** something broke. None tell you **why** — fast enough.

The average engineer context-switches across 4+ dashboards during an incident. Mean time to root cause averages 45 minutes industry-wide. Meanwhile your users are feeling it.

NetObs puts an AI that thinks like a senior SRE directly in your incident workflow.

---

## What It Does

| Feature | Description |
|---|---|
| **Service Map** | Live topology with color-coded health. Click any node for instant AI analysis. |
| **Metrics Dashboard** | Latency, error rate, throughput, P99 — 6-hour history with anomaly markers. |
| **Predictive Risk Scores** | Per-service AI risk scores. Know what breaks before it does. |
| **Alert Panel** | Severity-ranked alerts with AI root cause tags pre-attached. |
| **AI Assistant** | Conversational interface powered by Claude. Ask anything in plain English. |

### Ask it things like:
- *"What is the root cause and how do I fix it?"*
- *"What breaks next if we do nothing?"*
- *"Give me the exact SQL fix."*
- *"What is the blast radius if the database goes down?"*
- *"Write an incident summary for my team."*

---

## Quickstart

### Use the live demo
Open **[NetObs](https://jhaveribhavishi.github.io/netobs/netobs.html)** — paste your API key — done.

### Run locally

```bash
git clone https://github.com/jhaveribhavishi/netobs.git
cd netobs
python -m http.server 8000
open http://localhost:8000/netobs.html
```

### Get an API key
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up → **API Keys** → **Create Key**
3. Add billing (minimum $5 — lasts hundreds of sessions)
4. Paste the key into the modal when the app opens

---

## Architecture

```
Browser
   │
   │  POST request
   ▼
Cloudflare Worker  (CORS proxy)
netobs-proxy.bhavishij.workers.dev
   │
   │  POST + auth headers
   ▼
Anthropic Claude API
api.anthropic.com
```

Direct browser-to-Anthropic calls are blocked by CORS on hosted URLs. The Cloudflare Worker acts as a lightweight proxy. It runs on Cloudflare's free tier — 100,000 requests per day, no credit card required.

---

## Deploy Your Own

**Step 1 — Fork this repo and enable GitHub Pages**
Settings → Pages → Branch: main → / (root) → Save

**Step 2 — Create a Cloudflare Worker**
1. Go to [cloudflare.com](https://cloudflare.com) → sign up free
2. Compute → Workers → Create Worker → name it `netobs-proxy`
3. Paste the contents of `worker.js` → Deploy

**Step 3 — Update the proxy URL in netobs.html**

Find this line:
```javascript
fetch('https://netobs-proxy.bhavishij.workers.dev', {
```

Replace `bhavishij` with your Cloudflare username.

**Step 4 — Push and you're live**

---

## Connecting Real Data

All demo data is marked with `// DEMO DATA` comments. Replace these sections for real telemetry:

| Section | Replace with | Source |
|---|---|---|
| `NODES` object | Live service health | Prometheus / Kubernetes API |
| `EDGES` array | Real dependency map | Service mesh / Consul |
| `ALERTS` array | Live firing alerts | Alertmanager / PagerDuty |
| Chart data | Real time-series | Prometheus `/api/v1/query_range` |

---

## Tech Stack

- **Frontend:** Vanilla HTML/CSS/JS — no framework, no build step
- **AI:** Anthropic Claude API
- **Proxy:** Cloudflare Workers (free tier)
- **Charts:** Chart.js 4.4.1 (CDN)
- **Hosting:** GitHub Pages (free)

---

## Why This Exists

Enterprise tools (Datadog, Dynatrace) cost $50k–$500k/year, require weeks of setup, and still give you dashboards — not answers. Open source stacks give you flexibility but no causality.

NetObs is the missing middle: a zero-infrastructure AI layer on top of whatever monitoring you already have. It doesn't replace your existing tools. It explains them.

**Market reality:**
- Only 4% of organizations have reached full AI operational maturity in observability
- 38% of teams report alert fatigue as their top challenge
- Mean time to root cause averages 45 minutes industry-wide

---

## File Structure

```
netobs/
├── netobs.html     ← entire frontend (single file)
├── worker.js       ← Cloudflare Worker proxy
└── README.md       ← this file
```

---

## Roadmap

- [ ] Prometheus connector
- [ ] Datadog API integration
- [ ] AWS CloudWatch connector
- [ ] OpenTelemetry trace ingestion
- [ ] Auto-triggered AI analysis on new critical alerts
- [ ] Multi-turn conversation memory
- [ ] Export incident report to PDF
- [ ] Slack / Teams integration
- [ ] Dark mode
- [ ] Mobile layout

---

## Contributing

PRs welcome. The highest value contributions are **data source connectors** — Prometheus, Datadog, CloudWatch. If you build one, please share it back.

1. Fork the repo
2. Create a branch: `git checkout -b feature/prometheus-connector`
3. Open a Pull Request

---

## License

MIT — use it, fork it, build on it.

---

## Author

Built by [Bhavishi Jhaveri](https://github.com/jhaveribhavishi) — network and cloud infrastructure engineer with 8+ years across hybrid cloud, Palo Alto/Panorama firewall architecture, network automation (Ansible, Python, Nautobot), and DRaaS/BaaS solutions at Opti9 and Lumen.

[GitHub](https://github.com/jhaveribhavishi) · [LinkedIn](https://www.linkedin.com/in/bhavishi-jhaveri)

---

*If this helped you, give it a ⭐*
