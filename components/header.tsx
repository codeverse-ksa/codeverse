type Props = {
    title: string;
};

const Header = ({ title }: Props) => {
  return (
    <h1 className="text-center font-bold text-3xl">
        { title }
        <hr className="w-6 h-1 mx-auto my-4 bg-primary border-0 rounded"></hr>
    </h1>
  );
};

export default Header;
