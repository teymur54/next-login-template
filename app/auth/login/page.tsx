"use client";
import { signIn } from "next-auth/react";
import { useRef, useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: username,
      password: pass,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div
      className={
        "flex justify-center items-center h-screen bg-gradient-to-br from-cyan-300 to-sky-600"
      }
    >
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <label>User Name</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={onSubmit}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
