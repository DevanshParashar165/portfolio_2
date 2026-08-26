# Devansh Parashar — Premium SDE Portfolio

Welcome to the source repository of my personal engineering portfolio. This website is built as a **premium, highly interactive, and animation-heavy developer portfolio** that showcases full-stack expertise, Data Structures & Algorithms proficiency, system design architecture, and frontend excellence.

The application has been overhauled into a **pure client-side architecture** optimized for lightweight static deployments while simulating database commits and terminal actions directly in-browser.

---

## 🚀 Key Features

*   **Cinematic Preloader**: A simulated terminal initialization sequence (`bash --sde-init`) checking systems, compiling algorithms, and completing handshakes before revealing the home page.
*   **Dual Custom Cursor**: An elastic cursor dot and tracking ring that expands and adapts dynamically depending on interactive items (displaying context like `VIEW` or `LINK`).
*   **Constellation Particle Background**: A hardware-accelerated HTML5 Canvas node mesh that drifts and maps connections in real-time, responding magnetically to cursor locations at 60fps.
*   **"How I Think" (SDE Lifecycle)**: An interactive workflow mapping conceptualization, system designing, writing modular code, running tests, profiling bottlenecks, and continuous refactoring.
*   **Capability Explorer**: A technical skills grouping grid where hovering over any badge dynamically logs how I use it and which projects it supports.
*   **3D Card Tilt & Case Studies**: Project cards with 3D perspective shifts on mouse movement, opening full technical modals that discuss Problem, System Architecture Flows, Engineering Strategies, Risks, and Solutions.
*   **System Architecture Flow**: An interactive data routing diagram visualizing Client Interface -> Auth Gateway -> Business Controllers -> Sockets -> Databases.
*   **Simulated Client-Side DB Logs**: A Contact Form that runs visual handshake actions and saves messages directly to client `localStorage`, showing logs in a terminal monitor at the bottom of the section.

---

## 🛠️ Technology Stack

*   **UI Core**: React.js 19, HTML5 Semantic Elements
*   **Styling System**: Vanilla CSS Variables, Glassmorphism design tokens, Flex/Grid systems (no heavy framework overrides)
*   **Hardware Acceleration**: HTML5 Canvas, 2D Rendering Context, CSS 3D perspective transforms
*   **State & Persistence**: React Hooks, Context API, Client `localStorage` indexes
*   **Build Pipeline**: Vite 8, Oxlint

---

## 📂 Project Structure

```text
client/
├── public/                 # Static assets and icons
├── src/
│   ├── components/
│   │   ├── About.jsx       # Biography and SDE Lifecycle workflow
│   │   ├── Achievements.jsx# Milestones and hackathons data
│   │   ├── ArchitectureSection.jsx # System Design layout nodes
│   │   ├── Certifications.jsx # IIT NPTEL and Infosys springboard credentials
│   │   ├── Contact.jsx     # Form with simulated DB query logs
│   │   ├── CustomCursor.jsx# Zero-re-render custom mouse follower
│   │   ├── DsaHighlight.jsx# DSA metrics and platforms details
│   │   ├── Education.jsx   # Academic timeline tracker
│   │   ├── Footer.jsx      # Minimal bottom panel and anchors
│   │   ├── Hero.jsx        # Canvas particle background core
│   │   ├── Navbar.jsx      # Glassmorphic floating navigation pill
│   │   ├── Preloader.jsx   # Bash simulation loading sequence
│   │   └── Projects.jsx    # 3D project cards and case-studies modals
│   ├── App.jsx             # Layout assembler and reveal observer
│   ├── index.css           # Global obsidian purple/cyan theme resets
│   └── main.jsx            # React client DOM mount
├── package.json            # Client npm scripts
└── vite.config.js          # Vite config without proxy
```

---

## 💻 Local Setup & Development

### 1. Installation
Clone the workspace and run the installer from the client folder:
```bash
cd client
npm install
```

### 2. Launch Local Dev Server
Start the local development server:
```bash
npm run dev
```

### 3. Production Compilation
Generate optimized production bundles:
```bash
npm run build
```
The output directory `dist/` will contain the static assets (`index.html`, compiled CSS variables, and Javascript scripts) ready for static deployment.

---

## 🎨 Theme Architecture
The visual guidelines rely on a strict set of custom CSS variable definitions configured in `index.css`:
*   **Deep Obsidian**: `#030712` (Vercel-level contrast)
*   **Glass Card Base**: `rgba(11, 15, 25, 0.7)` with `backdrop-filter`
*   **Brand Purple**: `#8b5cf6` (System actions & timelines)
*   **Cyber Cyan**: `#06b6d4` (Interactions & success responses)
*   **Emerald Mint**: `#10b981` (Database persistence indicators)
