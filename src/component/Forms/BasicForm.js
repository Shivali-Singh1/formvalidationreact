import React, { useState } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setallEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = { id: new Date().getTime().toString(), email, password };

      setallEntry([...allEntry, newEntry]);
      console.log(allEntry);
  
      setEmail("");
      setPassword("");
    }else  {
      alert("Please fill the data");
    }

  };

  return (
    <>
      <form action="" onSubmit={submitForm}><br/>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div><br/>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div><br/>
        <button type="submit">Login</button>
      </form>
      <div>
        {
          allEntry.map((curElem) => {
            const {id,email,password} = curElem;
          return (
            <div className="showDataStyles" key = {curElem.id}>
              <p>{email}</p>
              <p>{password}</p>
            </div>  
          );
        })}
      </div>
    </>
  );
};
export default BasicForm;
