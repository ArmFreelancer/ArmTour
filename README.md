# <p align="center">✈️ ArmTour - Premium Flight & Tour Booking Platform</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Vite-8-purple?style=for-the-badge&logo=vite" alt="Vite 8" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<p align="center">
  A premium, high-fidelity Single Page Application (SPA) for booking all-inclusive flight tour packages globally. Designed with modern web aesthetics including glassmorphism layouts, glowing active borders, responsive burger menus, and fluid CSS transitions.
</p>

---

## 📸 Destination Showcases

<p align="center">
  <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=350&h=200&q=80" alt="Paris Tour" width="30%" />
  <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=350&h=200&q=80" alt="Kyoto Tour" width="30%" />
  <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=350&h=200&q=80" alt="Khor Virap Armenia" width="30%" />
</p>



---

## 🌟 Key Features

*   🏷️ **All-Inclusive Flights & Stays**: Complete travel bundles including international roundtrip airline tickets, 5-star resort hotel vouchers, daily excursions, and dining plans.
*   🖼️ **Cinematic Hero Slider**: Animated fullscreen banner with a slow Ken Burns image-zoom, combined with delayed keyframe slide text overlays.
*   🔍 **Advanced Filters**: Seamless client-side search by keyword destinations, category badges, and sliding budget ranges.
*   📁 **Saved Wishlist**: State-managed bookmarking directory allowing travelers to save, track, and purchase dream tours.
*   💳 **3D Flipping Card Simulator**: Interactive credit card visualizer that updates cardholder data in real-time and flips over in 3D when focusing on the CVV input.
*   🎟️ **Printable Flight Boarding Pass**: After checkout, a simulated flight ticket containing barcodes, airline carriers, seat assignments, and room vouchers is generated. Fully optimized for print styling.
*   📞 **HQ Support**: Clean validation forms paired with a glass-mesh radar-ping visual map pinpointing our headquarters in Yerevan, Armenia.

---

## 🛠️ Technology Stack

*   **Core**: React 19 & TypeScript
*   **Icons**: Lucide React
*   **Compiler/Bundler**: Vite & TypeScript (`verbatimModuleSyntax` strict compile)
*   **Styling**: Vanilla CSS (CSS variables, backdrop-filters, keyframes)

---

## 🚀 Getting Started

To launch the development server locally, follow these steps:

### 1. Installation
Navigate to your project directory and install the packages:
```bash
npm install
```

### 2. Launch Local Dev Server
Run the local dev compiler:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
To bundle the project for distribution:
```bash
npm run build
```
The output bundle will be placed in the `/dist` folder.

---

## 📂 Project Architecture

```text
src/
├── components/
│   ├── Booking/        # Interactive checkout & printable flight tickets
│   ├── Contact/        # Contact forms & radar animated maps
│   ├── Footer/         # Brand footer & newsletter dispatchers
│   ├── HeroSlider/     # Continuous slider banner with text animations
│   ├── Home/           # Dynamic home showcases & reviews
│   ├── Navbar/         # Responsive glass navbar & wishlist counters
│   ├── TourCard/       # Grid items showing features & ratings
│   ├── TourDetails/    # Tabbed itineraries & inclusions accordion list
│   └── Wishlist/       # Saved bookmarks grids
├── data.ts             # Travel packages datasets
├── types.ts            # TypeScript interface definitions
├── App.tsx             # State manager & views routing
└── index.css           # Styling theme tokens & keyframes
```

Developed with ❤️ by ArmTour Travel Agency.
