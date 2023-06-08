import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { formSc } from "../validation/Yupp";

function Form() {
  const [errorData, setErrorData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    terms: "",
  });

  const [valid, setValid] = useState(true);
  //const [err, setErr] = useState();

  const validation = (name, value) => {
    Yup.reach(formSc, name)
      .validate(value)
      .then(() => setErrorData({ ...errorData, [name]: "" }))
      .catch((err) => setErrorData({ ...errorData, [name]: err.errors[0] }));
  };

  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    terms: false,
  });

  const [users, setUsers] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    if (valid) {
      axios.post(`https://reqres.in/api/users`, user).then((response) => {
        console.log(users);
        setUsers([...users, response.data]);
        setUser({
          name: "",
          lastname: "",
          email: "",
          password: "",
          terms: false,
        });
        setValid(false);
      });
    }
  };

  const formChangeHandler = (e) => {
    const { type, value, name, checked } = e.target;

    if (type === "checkbox") {
      setUser({ ...user, [name]: checked });
      validation(name, checked);
    } else {
      setUser({ ...user, [name]: value });
      validation(name, value);
    }
  };

  useEffect(() => {
    formSc
      .isValid(user)
      .then((rest) => setValid(rest))
      .catch((rest) => setValid(!rest));
  }, [user]);

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div className="input-row">
          <label htmlFor="name">Name : </label>
          <input
            id="name"
            name="name"
            type="text"
            value={user.name}
            onChange={formChangeHandler}
          />
          {errorData.name && (
            <div className="error">Hata : {errorData.name}</div>
          )}
        </div>

        <div className="input-row">
          <label htmlFor="lastname">Last Name : </label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            value={user.lastname}
            onChange={formChangeHandler}
          />
          {errorData.lastname && (
            <div className="error">Hata : {errorData.lastname}</div>
          )}
        </div>
        <div className="input-row">
          <label htmlFor="email">E-Mail : </label>
          <input
            id="email"
            name="email"
            type="text"
            value={user.email}
            onChange={formChangeHandler}
          />
          {errorData.email && (
            <div className="error">Hata : {errorData.email}</div>
          )}
        </div>
        <div className="input-row">
          <label htmlFor="password">Password : </label>
          <input
            id="password"
            name="password"
            type="password"
            value={user.password}
            onChange={formChangeHandler}
          />
          {errorData.password && (
            <div className="error">Hata: {errorData.password}</div>
          )}
        </div>
        <div className="input-row">
          <label htmlFor="terms">Approve: </label>
          <input
            id="terms"
            name="terms"
            type="checkbox"
            checked={user.terms}
            onChange={formChangeHandler}
          />
          {errorData.terms && (
            <div className="error">Hata: {errorData.terms}</div>
          )}
        </div>
        <div className="input-row">
          <button type="submit" disabled={!valid} value="submit">
            Gönder
          </button>
        </div>
      </form>
      {users.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Form;
