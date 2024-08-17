"use client";

import Header from "@/components/header";
import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Message = {
  message: string;
  status: "success" | "error";
};

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<Message>({ message: "", status: "success" });
  const [email, setEmail] = useState<string>("");
  const submit = async () => {
    try {
      setMessage({ message: "", status: "success" });
      if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        setMessage({ message: "Invalid email!", status: "error" });
        return;
      };
      setLoading(true);
      await fetch("/api/submit", { method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      setMessage({ message: "Email added to mailing list!", status: "success" });
    } catch (error) {
      setMessage({ message: "Something went wrong...", status: "error" });
    } finally {
      setLoading(false);
      setEmail("");
    };
  };
  return (
    <div>
      <div className="hero h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">Codeverse</h1>
            <p className="py-6 text-center">
              A Leading Organization for Innovative Coders.
            </p>
          </div>
        </div>
      </div>
      <Section>
        <Header title="About" />
        <div className="card card-compact lg:card-side bg-base-100">
          <figure>
            <Image src="/about.jpeg" alt="codeverse.org" className="min-w-sm rounded-lg" width={1000} height={1000} />
          </figure>
          <div className="card-body p-0">
            <h2 className="card-title">A Leading Organization for Innovative Coders.</h2>
            <br />
            <p>Join our vibrant student-led community connecting passionate computer science and STEM enthusiasts! We welcome individuals of all experience levels and backgrounds. Our mission is to ignite a love for coding by launching tailored programs for students eager to dive into the world of technology. Additionally, we serve as a central hub for research, offering resources and opportunities for exploration.</p>
            <p>Check out previous and upcoming events on our <Link href="/programs" className="link link-hover link-primary">programs</Link> page.</p>
          </div>
        </div>
      </Section>
      <Section>
        <Header title="Mail List" />
        <div id="maillist" className="h-60 flex flex-col justify-center items-center gap-y-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input disabled={loading} type="text" className="grow" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
            </label>
            <button className="btn btn-primary text-white" onClick={submit}>{loading ? <span className="loading loading-spinner loading-md"></span> : "Add"}</button>
          </div>
          <span className={`text-sm ${message.status === "error" ? "text-error" : "text-success"}`}>{message.message}</span>
        </div>
      </Section>
    </div>
  );
};