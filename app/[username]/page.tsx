"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";

function page({ params }: { params: { username: string } }) {
  const getUser = async () => {
    const user = await axios.get(`/api/user?username=${params.username}`);
    return user;
  };

  //   useEffect(() => {
  //     getUser();
  //   }, [params]);

  return (
    <section className="mt-20">
      <BackButton />
      <div className="flex flex-col justify-start items-start">
        <span>{params.username}</span>
      </div>
    </section>
  );
}

export default page;
