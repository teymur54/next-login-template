"use client";
import { Letter } from "@/types/services";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import axios from "axios"; // Import Axios

const HomePage = () => {
  const { data: session } = useSession();
  const [letter, setLetter] = useState<Letter | null>(null);

  const fetchPosts = async () => {
    const response = await axios.get(
      "http://172.16.4.160:8080/api/v1/letter/no/2",
      {
        headers: {
          authorization: `Bearer ${session?.user.jwt}`,
          "Content-Type": "application/json",
        },
      }
    );
    setLetter(response.data);
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
