import Header from "@/components/header";
import Section from "@/components/section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-4">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <Image src="" alt="codeverse.org" className="max-w-sm rounded-lg shadow-2xl" width={1000} height={1000} />
          <div>
            <h1 className="text-5xl font-bold">Codeverse.org</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </div>
      <Section>
        <Header title="About" />
        <div className="card lg:card-side bg-base-100">
          <figure>
            <Image src="" alt="codeverse.org" className="max-w-sm rounded-lg shadow-2xl" width={500} height={500} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Catchphrase</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sequi repellendus, id magni cupiditate beatae officiis quos necessitatibus cumque officia pariatur magnam deserunt culpa? Rem perspiciatis soluta cumque tempora nam?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet sequi repellendus, id magni cupiditate beatae officiis quos necessitatibus cumque officia pariatur magnam deserunt culpa? Rem perspiciatis soluta cumque tempora nam?</p>
          </div>
        </div>
      </Section>
    </div>
  );
};