💅 Tim's Nail Technician Profile Page

A modern React single-page app showcasing Tim’s professional nail technician profile, services, payment options, weekly availability, and appointment links.
Built with React + CSS styling and deployed on GitHub Pages.

🚀 Features

Profile Section – Display Tim’s photo, name, and title.

Payments Section – Clients can pay via Zelle, Venmo, or Cash App.

Zelle shows a popup with phone number and a copy button.

Venmo and Cash App use deep links for direct payment.

Weekly Schedule – Simple availability table (Wed, Thu, Fri, Sun = ✅ Available).

Action Buttons –

📅 Book an Appointment (links to salon website).

⭐ Leave a Review (Google review link).

Responsive Design – Mobile-friendly with a centered card layout.

🛠️ Tech Stack

React
 (functional components, hooks)

CSS Modules / Custom Styles

Deployment: GitHub Pages

📸 Screenshots
Profile Card Example

(Add screenshots of deployed site once hosted)

🔗 Live Demo : https://ductrong5x5.github.io/NFC-Nail-salon-Employee/

👉 View on GitHub Pages

⚡ Installation & Setup

Clone this repository:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


Install dependencies:

npm install


Run the project locally:

npm start


Build for production:

npm run build


Deploy to GitHub Pages (if configured in package.json):

npm run deploy

📂 Project Structure
my-app/
│── public/
│   └── index.html
│── src/
│   ├── assets/
│   │   ├── avatar.jpg
│   │   ├── Zelle.png
│   │   ├── Venmo.png
│   │   └── cash_app.png
│   ├── App.js
│   ├── App.css
│   └── index.js
│── package.json
└── README.md

🔑 Environment Notes

GitHub Pages Paths

Images are imported via import so they build correctly for GH Pages.

Deep Links

Venmo: venmo://paycharge?...

Cash App: https://cash.app/$YourHandle

Zelle: displays a copyable phone/email.

👤 Author

Built with ❤️ by Tim’s nephew for LA LA Nails Knoxville.