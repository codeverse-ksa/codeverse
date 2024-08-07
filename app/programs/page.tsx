import ProgramCard from "@/components/programcard";

export default function Programs() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProgramCard />
            <ProgramCard />
            <ProgramCard />
            <ProgramCard />
            <ProgramCard />
            <ProgramCard />
        </div>
    );
};