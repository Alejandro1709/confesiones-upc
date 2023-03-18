type Props = {
  children: React.ReactNode;
};

function Wrapper({ children }: Props) {
  return <div className="flex flex-col">{children}</div>;
}

export default Wrapper;
