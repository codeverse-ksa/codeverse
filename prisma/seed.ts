import { PrismaClient } from "@prisma/client";
import { Program } from "@prisma/client";
const prisma = new PrismaClient();

const PROGRAMS: Program[] = [
    {
        slug: "introduction-to-quantum-computing",
        title: "Introduction to Quantum Computiung",
        description: "By Gift",
        tags: "quantum computing,hardware,physics",
        date: new Date(Date.now()),
        tally: "https://tally.so",
        image: "/logo.jpeg",
    },
    {
        slug: "quantum-machine-learning",
        title: "Quantum Machine Learning",
        description: "By Arjun Yadav",
        tags: "quantum computing,machine learning,physics",
        date: new Date(Date.now()),
        tally: "https://tally.so",
        image: "/logo.jpeg",
    },
    {
        slug: "quantum-algorithms",
        title: "Quantum Algorithms",
        description: "By Kimaya Deshpande",
        tags: "quantum,algorithms,physics",
        date: new Date(Date.now()),
        tally: "https://tally.so",
        image: "/logo.jpeg",
    },
    {
        slug: "error-checking-for-quantum-challenges",
        title: "Error Checking for Quantum Challenges",
        description: "By Hashem Altujar",
        tags: "quantum computing,error detection,physics",
        date: new Date(Date.now()),
        tally: "https://tally.so",
        image: "/logo.jpeg",
    },
    {
        slug: "solving-the-n-body-problem-using-qc",
        title: "Solving the n-body problem using QC",
        description: "By Arushi Ahuja",
        tags: "quantum computing,proofs,physics",
        date: new Date(Date.now()),
        tally: "https://tally.so",
        image: "/logo.jpeg",
    },
    {
        slug: "introduction-to-react",
        title: "Introduction to React",
        description: "By Gift",
        tags: "react,javascript",
        date: new Date(Date.now()),
        tally: "https://tally.so",
        image: "/logo.jpeg",
    },
    {
        slug: "introduction-to-pythong",
        title: "Introduction to Python",
        description: "By Gift",
        tags: "python,machine learning",
        date: new Date(Date.now()),
        tally: "https://tally.so",
        image: "/logo.jpeg",
    },
    {
        slug: "introduction-to-neural-networks",
        title: "Introduction to Neural Networks",
        description: "By Gift",
        tags: "neural networks,machine learning,python",
        date: new Date(Date.now()),
        tally: "https://tally.so",
        image: "/logo.jpeg",
    }
];

async function main() {
    await prisma.program.deleteMany({});
    for (let program of PROGRAMS) {
        await prisma.program.create({ data: program })
    };
    console.log("Seeding completed.");
};

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    });