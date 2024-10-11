import "./SideBar.scss";
interface SideBarProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}
export default function SideBar({ isOpen, setIsSidebarOpen }: SideBarProps) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <img src="/img/svg/logo.svg" alt="" className="logo" />
      <nav className="nav">
        <a href="#" className="nav__link">
          <img src="/img/svg/home.svg" alt="" className="link__img" />
          Dashboard
        </a>
        <a href="#" className="nav__link">
          <img src="/img/svg/transfer.svg" alt="" className="link__img" />
          Transactions
        </a>
        <a href="#" className="nav__link">
          <img src="/img/svg/user.svg" alt="" className="link__img" />
          Accounts
        </a>
        <a href="#" className="nav__link">
          <img
            src="/img/svg/economic-investment.svg"
            alt=""
            className="link__img"
          />
          Investments
        </a>
        <a href="#" className="nav__link">
          <img src="/img/svg/credit-card.svg" alt="" className="link__img" />
          Credit Cards
        </a>
        <a href="#" className="nav__link">
          <img src="/img/svg/loan.svg" alt="" className="link__img" />
          Loans
        </a>
        <a href="#" className="nav__link">
          <img src="/img/svg/service.svg" alt="" className="link__img" />
          Services
        </a>
        <a href="#" className="nav__link">
          <img src="/img/svg/econometrics.svg" alt="" className="link__img" />
          My Privileges
        </a>
        <a href="#" className="nav__link active">
          <img src="/img/svg/settings.svg" alt="" className="link__img" />
          Setting
        </a>
      </nav>

      <button onClick={() => setIsSidebarOpen(false)} className="close__button">
        <img src="/img/svg/close.svg" alt="" />
      </button>
    </aside>
  );
}
