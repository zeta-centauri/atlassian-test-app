import "./Header.scss";
interface HeaderProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Header({ setIsSidebarOpen }: HeaderProps) {
  return (
    <header className="header">
      <button
        className="header__sidebar-button"
        onClick={() => setIsSidebarOpen(true)}
      >
        <img src="img/svg/sidebar-button.svg" alt="" />
      </button>
      <h2 className="header__title">Setting</h2>
      <div className="header__search">
        <img src="img/svg/search.svg" alt="" />
        <input
          type="text"
          placeholder="Search for something"
          className="search__input"
        />
      </div>
      <button className="header__button">
        <img src="img/svg/settings-button.svg" alt="" />
      </button>
      <button className="header__button">
        <img src="img/svg/notification.svg" alt="" />
      </button>
      <a href="#" className="user__link">
        <img src="img/user-photo.png" alt="" />
      </a>
    </header>
  );
}
