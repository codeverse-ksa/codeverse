type Props = {
    children: React.ReactNode
};

const Section = ({ children }: Props) => {
    return (
        <div className="w-full flex flex-col items-center gap-y-4 mb-8">
            {children}
        </div>
    );
};

export default Section;
