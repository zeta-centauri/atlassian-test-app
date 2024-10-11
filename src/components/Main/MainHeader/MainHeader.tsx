import { useState } from "react";
import "./MainHeader.scss";
export default function MainHeader() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <header className="main__header">
      <button
        onClick={() => setCurrentPage(0)}
        className={`main__header-button ${currentPage == 0 ? "active" : ""}`}
      >
        Edit Profile
      </button>
      <button
        onClick={() => setCurrentPage(1)}
        className={`main__header-button ${currentPage == 1 ? "active" : ""}`}
      >
        Preferences
      </button>
      <button
        onClick={() => setCurrentPage(2)}
        className={`main__header-button ${currentPage == 2 ? "active" : ""}`}
      >
        Security
      </button>
    </header>
  );
}
