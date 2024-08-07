import Header from "@/components/header";
import Section from "@/components/section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-4">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <Image src="" alt="codeverse.org" className="max-w-sm rounded-lg" width={1000} height={1000} />
          <div>
            <h1 className="text-5xl font-bold">Codeverse.org</h1>
            <p className="py-6">
              A Leading Organization for Innovative Coders.
            </p>
          </div>
        </div>
      </div>
      <Section>
        <Header title="About" />
        <div className="card lg:card-side bg-base-100">
          <figure>
            <Image src="" alt="codeverse.org" className="max-w-sm rounded-lg" width={500} height={500} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">A Leading Organization for Innovative Coders.</h2>
            <p>Join our vibrant student-led community connecting passionate computer science and STEM enthusiasts! We welcome individuals of all experience levels and backgrounds. Our mission is to ignite a love for coding by launching tailored programs for students eager to dive into the world of technology. Additionally, we serve as a central hub for research, offering resources and opportunities for exploration.</p>
          </div>
        </div>
      </Section>
      <Section>
        <Header title="Mail List" />
        <div className="h-60 flex justify-center items-center gap-x-4">
          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <button className="btn btn-primary">Add</button>
        </div>
      </Section>
    </div>
  );
};