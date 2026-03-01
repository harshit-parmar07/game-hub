# Game Hub - Video Game Discovery Platform

![Live Demo](https://img.shields.io/badge/Live_Demo-Available-success?style=for-the-badge&logo=vercel)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

**Live Application:** [game-hub-pi-navy.vercel.app](https://game-hub-pi-navy.vercel.app/)

## 🎮 Overview

Game Hub is a highly responsive, fast, and interactive web application designed for exploring and discovering video games. Built entirely from the ground up, the project leverages a third-party gaming API to fetch and display a massive library of game data. The application emphasizes clean UI/UX, robust state management, and strict static typing to ensure a bug-free, scalable codebase.

## ✨ Key Features

* **Dynamic Game Discovery:** Browse an extensive catalog of video games fetched dynamically in real-time.
* **Advanced Filtering & Sorting:** Users can filter game libraries by genre (Action, RPG, Strategy, etc.) and platform (PC, PlayStation, Xbox, etc.), and sort by parameters like relevance, date added, release date, and average rating.
* **Instant Search:** Real-time search functionality allowing users to quickly look up specific game titles.
* **Responsive Grid Layout:** A fluid and fully responsive grid UI that adapts flawlessly across desktop, tablet, and mobile interfaces.
* **Dark Mode Optimization:** Integrated dark/light mode toggle to enhance user experience and accessibility.
* **Optimized Performance:** Utilizes efficient data fetching, caching strategies, and skeleton loading screens to maintain a fast perceived load time.

## 🛠 Tech Stack

* **Frontend Framework:** React.js (Functional Components, Custom Hooks)
* **Language:** TypeScript for static type checking, interface definitions, and enhanced developer experience
* **Styling & UI Components:** Chakra UI
* **Build Tool:** Vite for lightning-fast HMR (Hot Module Replacement) and optimized production builds
* **Deployment:** Vercel

## ⚙️ Local Setup & Installation

To run this project locally, you will need **Node.js** installed on your machine.

### 1. Clone the repository
```bash
git clone [https://github.com/harshit-parmar07/game-hub.git](https://github.com/harshit-parmar07/game-hub.git)
cd game-hub
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a file named `.env` in the root directory of the project. You will need to obtain a free API key from the RAWG Video Games Database (or your specific API provider).

```env
# Example for RAWG API
VITE_RAWG_API_KEY=your_api_key_here
```

### 4. Start the Development Server
```bash
npm run dev
```

Your server should now be running locally, typically on `http://localhost:5173`.

### 5. Build for Production
```bash
npm run build
```

## 🤝 Architecture Note
This project was built utilizing **TypeScript interfaces** to heavily type API responses, ensuring predictability across components. It follows component-driven design principles, keeping components small, reusable, and cleanly separated from complex data-fetching logic via custom React Hooks.
