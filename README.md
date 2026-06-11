# Tactical Developer Board - Portfolio

A unique, interactive developer portfolio built around a football tactics board concept. Every UI element maps to football vocabulary, combining a modern brutalist aesthetic with smooth, dynamic interactions.

![Tactical Board Preview](public/preview.png) *(Add a screenshot here)*

## 🚀 Live Demo

[View Live Portfolio](https://portfolio.mohamed-abdelwhab.vercel.app/) *(Update this link after deployment)*

## ⚽ Concept & Design

This portfolio breaks away from traditional layouts. The "pitch" acts as the core interface where each **Project** is represented as a **Player Token** in a football formation. 
* **Forwards:** Latest / Most prominent projects
* **Midfielders:** Solid, complex applications
* **Defenders:** Fundamental / Foundational projects
* **Goalkeeper:** Utilities / Specialized dashboards

Clicking on any player token reveals their **Match Report** (project details) in a dynamic split-view overlay without losing context of the pitch.

## 🛠️ Tech Stack

* **Core:** React 18, Vite
* **Routing:** React Router v6 (using Nested Routes for Overlays)
* **Styling:** Tailwind CSS v4 (Custom Tokens, CSS Variables)
* **Animation:** Framer Motion (SVG Path Drawing, Spring Physics)
* **Icons:** Lucide React
* **Deployment:** Vercel

## ✨ Key Features

* **Dynamic Formation Layout:** The pitch utilizes an intelligent Flexbox grid system. Projects are automatically grouped by position (`forward`, `midfielder`, `defender`, `goalkeeper`) and seamlessly distributed across the pitch.
* **SVG Animations:** The pitch markings draw themselves in smoothly on initial load using Framer Motion SVG path length animations.
* **Persistent Underlay Architecture:** Overlays (Manager, Squad, History) slide in dynamically while the active pitch remains visible underneath, providing excellent spatial context.
* **Live Previews with Fallback:** Projects embed directly into the application via iframe. For URLs that block embedding (like GitHub repositories), the app detects the failure and gracefully falls back to a stylized "Project Ready" card with external links.
* **Custom Cursor:** A sleek, tactical crosshair cursor that responds to hover states.

## 📦 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohammed-abdelwhab/Portfolio.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```

## 📸 Adding Your Manager Photo

To update the manager profile picture:
1. Place your image file in the `/public` directory.
2. Rename the image to `manager.jpg`.
3. The application will automatically pick it up and replace the "MA" text fallback on the Manager (`/about`) route.

## 🧑‍💻 Author

**Mohammed Abdelwhab**
* Frontend Developer
* LinkedIn: [in/mohamed-abdelwhab](https://www.linkedin.com/in/mohamed-abdelwhab/)
* GitHub: [@mohammed-abdelwhab](https://github.com/mohammed-abdelwhab)
