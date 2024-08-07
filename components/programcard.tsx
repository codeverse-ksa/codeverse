import Image from "next/image";

const ProgramCard = () => {
  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl">
        <figure>
            <Image src="/logo.jpeg" alt="Demo" width={200} height={200} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Quantum Computation</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quidem, rerum, quo sapiente vel.</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary text-white">Register</button>
            </div>
        </div>
    </div>
  );
};

export default ProgramCard;
