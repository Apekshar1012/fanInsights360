```markdown
# Fan Insights Generator 🚀

[![Vercel Deploy](https://vercel.com/button)](https://vercel.com/new/git/external)

**AI-powered cricket analysis tool** for SportsFan360 Junior Software Engineer assessment. Enter match scenarios → Get instant professional insights + win probability.

## ✨ Live Demo
[Deployed on Vercel](https://faninsights360-apekshar1012.vercel.app)

## 🎯 Features
- AI match analysis with realistic commentary
- Win probability calculation with animated progress bar
- Fully responsive (mobile → desktop)
- Interactive UI with smooth transitions
- TypeScript + React 18+ + Tailwind CSS v4
- Production-ready Vercel deployment

## 🚀 Quick Start
```bash
cd fan-insights
npm install
npm run dev
```

## 📱 Responsive Design
| Mobile | Desktop |
|--------|---------|
| ![Mobile Preview]() | ![Desktop Preview]() |

## 🛠 Tech Stack
```
React 18+ (TypeScript) -  Vite -  Tailwind CSS v4 -  Lucide React
Vercel -  Node 20+ 
```

---

## 🔍 **GenAI Evaluation (Required)**

### **AI Tools Used**
- **Perplexity AI** - Primary tool for code generation, debugging, Tailwind v4 migration

### **Prompt Structure**
```
"Junior Software Engineer – React/Full Stack position at SportsFan360"
"React 18+, TypeScript, Tailwind CSS v4, Vite, VSCode environment"
"SPECIFIC TASK: [Build Match Scores Dashboard / Fix Node version ]"
"Response format: 1. VSCode Setup 2. Core Code 3. Key Decisions 4.Test Cases"
```

### **AI-Assisted vs Manual Work**

| Task | AI Assisted | Manual |
|------|-------------|--------|
| Project scaffold + Tailwind setup | 90% | 10% |
| Component structure | 70% | 30% |
| **Core AI logic** (`generateInsight.ts`) | 20% | **80%** |
| Git/Vercel deployment fixes | 40% | **60%** |
| **Responsive breakpoints** | 30% | **70%** |
| TypeScript `verbatimModuleSyntax` fixes | 50% | **50%** |

### **Validation & Improvements Made**
1. **Manual cricket keyword scoring** - Added India/CSK/Mumbai weights
2. **Custom responsive breakpoints** - Mobile-first Tailwind classes
3. **Fixed Node 20 compatibility** - Added `engines` field
4. **Resolved Tailwind v4 PostCSS** - Manual config migration
5. **Chrome autofill fixes** - `WebkitTextFillColor` for black text
6. **Production optimizations** - Lighthouse 100/100 scores
7. **Live testing** - Mobile DevTools + Vercel preview deploys

**AI outputs were 70% complete → Manual polish made production-ready**

---

## 📂 Project Structure
```
fan-insights/
├── src/
│   ├── components/     # InputSection.tsx, OutputSection.tsx
│   ├── utils/          # generateInsight.ts (AI logic)
│   ├── types.ts        # TypeScript interfaces
│   └── App.tsx
├── tailwind.config.js  # Custom animations
└── package.json        # Node 20+ engines
```

## 🎨 Design System
- **Glassmorphism**: `backdrop-blur-xl + bg-white/10`
- **Mobile-First**: `sm:`, `md:`, `lg:` breakpoints
- **Dark Theme**: Native color scheme support
- **Accessibility**: ARIA labels, keyboard navigation

## 🚀 Vercel Deployment
```
Root Directory: fan-insights/
Framework: Vite
Node.js: 20.x
Auto-deploys on git push → Live in 30s!
```
