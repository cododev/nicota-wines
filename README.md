# NicotaWines - Premium Wine Imports

A world-class React website for NicotaWines, Nigeria's premier wine importer featuring curated wines from Canada, Italy, and France.

## Project Structure

```
nicotawines-project/
├── public/
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/          # Reusable UI components
│   │   ├── CartSidebar.jsx
│   │   ├── Footer.jsx
│   │   ├── GrapeSlider.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── WineCard.jsx
│   │   └── WineModal.jsx
│   ├── data/                # Data files
│   │   └── wines.js         # Complete wine catalog (37 products)
│   ├── hooks/               # Custom React hooks
│   │   └── useCart.js
│   ├── pages/               # Page components
│   │   ├── AboutPage.jsx
│   │   ├── CollectionPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── HomePage.jsx
│   │   └── ToursPage.jsx
│   ├── App.jsx              # Main application component
│   ├── index.css            # Global styles with Tailwind
│   └── index.js             # Entry point
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Features

### 1. Complete Wine Catalog (37 Products)
- **13 Italian wines**: Fina Miral organics, Scanavino, Torre, Lambrusco, Dolce Vita, Eresi
- **13 French wines**: Listra, Grangeneuve, Château Saint Florin, Ballarin, Célène, Dune
- **11 Canadian products**: Tawse, Lakeview wines & icewines, whiskies
- Categories: Red, White, Rosé, Sparkling, Dessert/Icewine, Spirits

### 2. Interactive Grape Slider
- Auto-rotating showcase of 6 noble grape varieties
- Region details, color profiles, tasting characteristics
- Smooth transitions and elegant animations

### 3. Photo Gallery
- 8 tour moments from Canada Trade Mission 2025
- Lightbox modal for detailed viewing
- Mission narrative and highlights

### 4. Events Management
- Completed events with highlights
- Upcoming events with pricing and booking
- Private event inquiry section

### 5. Wine Tours
- Piedmont Wine Experience (Italy)
- Bordeaux Grand Tour (France)
- Canadian Icewine Journey

### 6. E-commerce Features
- Shopping cart with sidebar preview
- Quantity management
- Price formatting in NGN

### 7. Responsive Design
- Mobile-first approach
- Smooth animations
- Professional typography with Playfair Display & Inter

## Installation

1. Clone or download the project folder
2. Navigate to the project directory:
   ```bash
   cd nicotawines-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 in your browser

## Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Custom Hooks** - State management

## Pages

1. **Home** - Hero, stats, grape slider, featured wines, countries, trade mission
2. **Collection** - Full catalog with filters by type and country
3. **Events** - Upcoming tastings and completed missions
4. **Gallery** - Trade mission photo gallery
5. **Tours** - Wine tourism packages
6. **About** - Company story and values
7. **Contact** - Contact form and information

## Customization

### Adding Wines
Edit `src/data/wines.js` to add new wines to the catalog.

### Styling
Modify `tailwind.config.js` for theme customization or `src/index.css` for custom styles.

### Adding Pages
Create new components in `src/pages/` and add routes in `src/App.jsx`.

## License

© 2025 NicotaWines. All rights reserved.
