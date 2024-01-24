import React from "react";

type Props = {};

const Login = (props: Props) => {
  return (
    <form action="/auth/login" method="post">
      <label htmlFor="email">Email</label>
      <input name="email"  />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button>Sign In</button>
    </form>
  );
};

export default Login;
