"use client";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");

  return (
    <>
      <Header />
    </>
  );
}
