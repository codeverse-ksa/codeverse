type Props = {
    children: React.ReactNode
};

const Section = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center gap-y-4">
            {children}
        </div>
    );
};

export default Section;
