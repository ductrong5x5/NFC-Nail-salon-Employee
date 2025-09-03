import { useState } from 'react'; // Import useState
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState('');
  const [plat, setplat] = useState('');
  const [require, setrequire] = useState('');

  const handlePaymentClick = (user,plat,require) => {
    setUsername(user);
    setplat(plat)
    setrequire(require)
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(username);
    alert('copied!'); // Provide user feedback
    setShowPopup(false);
  };

  return (
    <main className="app-container">
      <div className="card">
        {/* Profile Section */}
        <div className="profile-section">
          <img
            src="/avatar.jpg"
            alt="Nail Technician"
            className="profile-pic"
          />
          <h1 className="name">Tim</h1>
          <p className="title">Professional  Nail Technician</p>
        </div>

        {/* Payment Icons */}
        <div className="payments">
          {/* Use onClick to handle the username display */}
          <a href="#" onClick={(e) => handlePaymentClick('8657709018','Zelle',"Phone number")} rel="noreferrer">
            <img src="/Zelle.png" alt="Zelle" className="payment-logo" />
          </a>
          <a href="venmo://paycharge?txn=pay&recipients=DucThinh-Nguyen-312" target="_blank" rel="noreferrer">
            <img src="/Venmo.png" alt="Venmo" className="payment-logo" />
          </a>
          <a href="https://cash.app/$ThinhNguyen11" target="_blank" rel="noreferrer">
            <img src="/CashApp.png" alt="Cash App" className="payment-logo" />
          </a>
        </div>
        
        {/* The new username display box */}
        {username && (
          <div className="username-box">
            <p className="username-label">{require} for {plat} </p>
            <div className="username-content">
              <span id="username-value">{username}</span>
              <button className="copy-btn" onClick={handleCopyClick}>
                Copy
              </button>
            </div>
          </div>
        )}
        {/* Schedule Section */}
        <div className="schedule">
          <h2>Weekly Schedule</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td className="unavailable">Unavailable</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td className="unavailable">Unavailable</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td className="available">Available</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td className="available">Available</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td className="available">Available</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td className="unavailable">Unavailable</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td className="available">Available</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          {/* Appointment Button */}
          <a
            href="https://lalanailsknoxville.com/book-appointment/"
            target="_blank"
            rel="noreferrer"
            className="appointment-btn"
          >
            Book Your Next Nail Day with Me
          </a>

          {/* Review Button */}
          <a
            href="https://www.google.com/search?hl=en-US&gl=us&q=LA+LA+NAILS,+7240+Kingston+Pike,+Knoxville,+TN+37919&ludocid=7359075676174868485&lsig=AB86z5VgYSEj1e4FWeXWZnpt5r3V&hl=en&gl=US#lrd=0x885c24ba63fb2d37:0x6620b056619ee005,3,,,,"
            target="_blank"
            rel="noreferrer"
            className="review-btn"
          >
            We'd love your feedback!
          </a>
        </div>


      </div>
    </main>
  )
}

export default App
