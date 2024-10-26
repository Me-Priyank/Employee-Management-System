import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function SubmitHandler(e) {
    e.preventDefault();
    handleLogin(email, pass);
    setEmail("");
    setPass("");
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-400"
            type="email"
            placeholder="Enter your Email"
            required
          />

          <input
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-400 mt-3"
            type="password"
            placeholder="Enter Password"
            required
          />

          <button className="text-white outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
