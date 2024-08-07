import { Program } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  program: Program;
};

const ProgramCard = ({ program }: Props) => {
  return (
    <div className="card card-compact bg-base-100 w-full shadow-xl">
        <figure>
            <Image src={program.image} alt="Demo" width={200} height={200} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{program.title}</h2>
            <p>{program.description}</p>
            <div className="card-actions justify-end">
                <Link href={program.tally} className="btn btn-primary text-white">Register</Link>
            </div>
        </div>
    </div>
  );
};

export default ProgramCard;
