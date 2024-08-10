"use client";

import Header from "@/components/header";
import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const submit = async () => {
    try {
      setMessage("");
      setLoading(true);
      await fetch("/api/submit", { method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      setMessage("Email added to mailing list!");
    } catch (error) {
      setMessage("Something went wrong...");
    } finally {
      setLoading(false);
      setEmail("");
    };
  };
  return (
    <div className="m-4">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold text-primary">Codeverse.org</h1>
            <p className="py-6">
              A Leading Organization for Innovative Coders.
            </p>
          </div>
        </div>
      </div>
      <Section>
        <Header title="About" />
        <div className="card lg:card-side bg-base-100">
          <figure className="w-full md:w-1/3">
            <Image src="/about.jpeg" alt="codeverse.org" className="max-w-sm rounded-lg" width={500} height={500} />
          </figure>
          <div className="card-body w-full md:w-2/3">
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
          <div className="flex justify-center items-center gap-x-4">
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input disabled={loading} type="text" className="grow" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
            </label>
            <button className="btn btn-primary text-white" onClick={submit}>{loading ? <span className="loading loading-spinner loading-md"></span> : "Add"}</button>
          </div>
          <span className="text-success text-sm">{message}</span>
        </div>
      </Section>
    </div>
  );
};