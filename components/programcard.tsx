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
            <div className="flex flex-wrap gap-4">
              {program.tags.split(",").map(tag => <span className="badge badge-primary text-white text-xs">{tag}</span>)}
            </div>
            <div className="card-actions justify-between items-center mt-4">
                <span className="text-gray-500">{(new Date(program.date)).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</span>
                <Link href={program.tally} className="btn btn-primary text-white">Register</Link>
            </div>
        </div>
    </div>
  );
};

export default ProgramCard;
