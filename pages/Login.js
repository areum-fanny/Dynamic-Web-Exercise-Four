import React from "react";

function Login() {
  return (
    <div>
      <form onSubmit={this.loginuser}>
        <label>
          Username
          <input type="text" name="username" />
        </label>
        <label>
            <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
