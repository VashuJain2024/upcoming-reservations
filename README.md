# 🗓️ Upcoming Reservations – Responsive React Component

This project features a responsive and animated **Upcoming Reservations** component built with **React**, **Tailwind CSS**, and **Framer Motion**. It displays a list of upcoming reservations using static JSON data, designed for seamless integration into a user dashboard.

## 🚀 Features

- 📋 Static Reservation List from JSON  
- 🎨 Modern UI using Tailwind CSS  
- 📱 Responsive Design (375px – 1200px)  
- 🌀 Smooth Animations with Framer Motion  
- ❌ Cancel Button logs reservation ID  
- 🔧 Clean, modular, and well-commented code  

## 🧱 Tech Stack

- React (Vite)  
- Tailwind CSS (Utility-first styling)  
- Framer Motion (Animations)  
- No backend; uses static data  

## 📁 Project Structure

```
upcoming-reservations/
├── src/
│   ├── components/
│   │   └── Reservations.jsx
│   ├── data/
│   │   └── reservations.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── tailwind.config.js
├── package.json
├── README.md
└── vite.config.js
```

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/upcoming-reservations.git
cd upcoming-reservations
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the app locally
```bash
npm run dev
```

Visit: http://localhost:5173

## 📊 Sample Data (Static JSON)

```js
[
  { "id": 1, "venueName": "The Grand Cafe", "date": "2024-08-15", "time": "19:00", "partySize": 2, "status": "Confirmed" },
  { "id": 2, "venueName": "Ocean's Breeze", "date": "2024-08-22", "time": "20:30", "partySize": 4, "status": "Confirmed" },
  { "id": 3, "venueName": "The Rooftop Grill", "date": "2024-09-01", "time": "18:00", "partySize": 5, "status": "Pending" }
]
```

## 🧪 Behavior & Example Output

Each reservation is displayed in a styled card.  
On clicking the **Cancel** button, the following is logged:

```bash
Cancel reservation: 2
```

## 🧠 Additional Notes

- Animations include:
  - Fade-in and slide-up for cards
  - Hover scaling for interactivity
  - Button press effects using Framer Motion
- Designed to be easily extensible for future backend integration
- Code is clean, readable, and uses reusable components
 
## 📬 Contact

For any queries or feedback, feel free to open an issue or reach out via GitHub.
