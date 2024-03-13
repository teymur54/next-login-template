"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const HomePage = () => {
  const { data: session } = useSession();
  const [letter, setLetter] = useState("");
  const fetchPosts = async () => {
    const res = await fetch("http://10.14.33.87:8080/api/v1/letter/no/1", {
      method: "Get",
      headers: {
        authorization: `Bearer ${session?.user.jwt}`,
        "Content-Type": "application/json",
      },
    });

    const response = await res.json();
    setLetter(response);
  };
  return (
    <div>
      <h1 className="flex justify-center items-center p-5 text-green-500 text-lg font-bold">
        This Is The Home Page! Everyone can see it.
      </h1>
      <button onClick={fetchPosts}>Get user Posts</button>
      {letter && JSON.stringify(letter)}
    </div>
  );
};

export default HomePage;
