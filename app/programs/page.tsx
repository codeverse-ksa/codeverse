import ProgramCard from "@/components/programcard";
import { PROGRAMS } from "@/utils/sample";

export default function Programs() {
    return (
        <div className="mx-0 md:mx-8 lg:mx-16">
            <div className="w-full flex flex-col md:flex-row md:justify-between gap-4 mb-4">
                <label className="input input-bordered flex items-center">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                        <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                    </svg>
                </label>
                <div className="join">
                    <button className="join-item btn btn-primary text-white">«</button>
                    <span className="join-item btn btn-primary text-white">Page 1</span>
                    <button className="join-item btn btn-primary text-white">»</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PROGRAMS.map(program => <ProgramCard program={program} />)}
            </div>
        </div>
    );
};