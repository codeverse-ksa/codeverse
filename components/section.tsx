type Props = {
    children: React.ReactNode
};

const Section = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col items-center gap-y-4 mb-8">
            {children}
        </div>
    );
};

export default Section;