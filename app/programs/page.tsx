import ProgramCard from "@/components/programcard";
import prisma from "@/utils/db";

export default async function Programs() {
    const programs = await prisma.program.findMany({});
    return (
        <div className="mx-0 md:mx-8 lg:mx-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {programs.reverse().map(program => <ProgramCard program={program} />)}
            </div>
        </div>
    );
};