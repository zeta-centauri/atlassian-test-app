import Form from "./Form/Form";
import MainHeader from "./MainHeader/MainHeader";
import "./Main.scss";
export default function Main() {
  return (
    <main className="main">
      <MainHeader />
      <div className="main__content">
        <div className="user__img">
          <img src="/img/user-photo.png" alt="" className="user__img" />
          <button className="edit__button">
            <img src="/img/svg/edit.svg" alt="" />
          </button>
        </div>
        <Form />
      </div>
    </main>
  );
}
