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
    </div>
  );
};