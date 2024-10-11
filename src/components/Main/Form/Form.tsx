import "./Form.scss";
export default function Form() {
  return (
    <div className="form__wrapper">
      <form className="main__content-form">
        <div className="form__input">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Charlene Reed " name="name" />
        </div>
        <div className="form__input">
          <label htmlFor="username">User Name</label>
          <input type="text" placeholder="Charlene Reed " name="username" />
        </div>
        <div className="form__input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="charlenereed@gmail.com"
            name="email"
          />
        </div>
        <div className="form__input">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="**********" name="password" />
        </div>
        <div className="form__input">
          <label htmlFor="date">Date of Birth</label>
          <input type="number" placeholder="25 January 1990" name="date" />
        </div>
        <div className="form__input">
          <label htmlFor="adress">Present Address</label>
          <input
            type="text"
            placeholder="San Jose, California, USA"
            name="adress"
          />
        </div>
        <div className="form__input">
          <label htmlFor="permanentadress">Permanent Address</label>
          <input
            type="text"
            placeholder="San Jose, California, USA"
            name="permanentadress"
          />
        </div>
        <div className="form__input">
          <label htmlFor="city">City</label>
          <input type="text" placeholder="San Jose" name="city" />
        </div>
        <div className="form__input">
          <label htmlFor="postal_code">Postal Code</label>
          <input type="number" placeholder="45962" name="postal_code" />
        </div>
        <div className="form__input">
          <label htmlFor="country">Country</label>
          <input type="text" placeholder="USA" name="country" />
        </div>
      </form>
      <button className="form__button">Save</button>
    </div>
  );
}
