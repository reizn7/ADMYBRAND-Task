
# 🚀 AI-Powered Analytics Dashboard

## 🧩 Features

|  |  |
|--|--|
| 📊 | **Interactive Line Charts** (Recharts) |
| 🎯 | **Real-time Analytics Layout** |
| 📱 | **Fully Responsive** (Mobile & Desktop) |
| 🌙 | **Dark/Light Theme Toggle** |
| 📤 | **Export as PDF / CSV** (jsPDF & PapaParse) |
| 📅 | **Date Range Filtering** |
| 🤖 | **AI-enhanced Data Suggestions** |
| ⬅️ | **Collapsible Sidebar Navigation** |

---

## 🛠 Tech Stack

| Tech            | Description                                |
|-----------------|--------------------------------------------|
| **Next.js 14+** | React Framework for SSR and routing        |
| **TypeScript**  | Type safety for scalability and clarity    |
| **Tailwind CSS**| Utility-first styling                      |
| **Recharts**    | Charts and visualizations                  |
| **jsPDF**       | PDF export                                 |
| **PapaParse**   | CSV export                                 |
| **Shadcn/UI**   | Pre-styled UI components                   |

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/reizn7/ADMYBRAND-Task.git

# 2. Move into the project directory
cd ADMYBRAND-Task

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
# Visit http://localhost:3000 in your browser.
```

---



## 📁 Folder Structure

```text
├── app
│   │   favicon.ico
│   │   globals.css
│   │   layout.tsx
│   │   page.tsx
│   │
│   ├── dashboard
│   │   │   layout.tsx
│   │   │   page.tsx
│   │   │
│   │   ├── analytics
│   │   │       LineChartComponent.tsx
│   │   │       page.tsx
│   │   │
│   │   ├── components
│   │   │       AnalyticsCards.tsx
│   │   │       Topbar.tsx
│   │   │
│   │   └── table
│   │           page.tsx
│   │
│   └── report
│           page.tsx
│
├── components
│   │   LoadingSpinner.tsx
│   │   ThemeToggle.tsx
│   │
│   ├── cards
│   │       metric-cards.tsx
│   │
│   ├── charts
│   │       BarChart.tsx
│   │       PieChart.tsx
│   │
│   ├── layout
│   │       navbar.tsx
│   │       sidebar.tsx
│   │
│   └── ui
│           button.tsx
│           card.tsx
│           table.tsx
│
├── lib
│       utils.ts
│
└── types
        jspdf-autotable.d.ts
```

---

## 📦 Future Additions

- 🔍 **Search + Filter per user/table**
- 🧠 **ChatGPT-powered dashboard summary** ("What’s changed this month?")
- 📈 **Bar & Pie charts** (page visits, bounce rate)
- 🔔 **Notifications integration** (Toast/Snackbar)
- 🧑 **Admin Login** (NextAuth)

---

## 🤝 Contributing

PRs are welcome! If you have suggestions or spot a bug, feel free to open an issue or fork and raise a pull request.

---

## 🌐 Connect

 - [LinkedIn](https://linkedin.com/in/reizn7/)
 - [Github](https://github.com/reizn7)
---
<br>
<p align="center">
  Built with ❤️ by Sarthak Tripathi | Powered by AI & Coffee ☕
</p>