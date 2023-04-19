import React, { useState } from "react";


export function Registration() {
  const [isLogin, setIsLogin] = useState(false);
   const [userData, setUserData] = useState({});

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };
  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  const showData=() => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    setUserData({...userData, firstName, lastName, email, password });
  }

  
  return (
    <div>
      <div >
        {isLogin ? (
          <div>
            <form onSubmit={handleLoginSubmit}>
              <h1>Login Page</h1>
              <input placeholder="Email" type="email" name="email" />
              <input placeholder="Password" type="password" name="password" />
              <button>Submit</button>
            </form>
            <span onClick={() => setIsLogin(!isLogin)}>register</span>
          </div>
        ) : (
          <div >
            <form onSubmit={handleRegistrationSubmit}>
              <h1>Registration Page</h1>
              <input placeholder="First Name" type="text" name="firstName" />
              <input placeholder="Last Name" type="text" name="lastName" />
              <input placeholder="Email" type="email" name="email" />
              <input placeholder="Password" type="password" name="password" />
              <button>Submit</button>
               <button onClick={showData}>show data</button>
            </form>
            <span onClick={() => setIsLogin(!isLogin)}>login</span>
          </div>
        )}
      </div>
      {Object.keys(userData).length > 0 && (
        <div>
          <h2>Saved Data:</h2>
          <ul>
            <li>First Name: {userData.firstName}</li>
            <li>Last Name: {userData.lastName}</li>
            <li>Email: {userData.email}</li>
            <li>Password: {userData.password}</li>
          </ul>
        </div>
      )}
    </div>
    
  );
}
