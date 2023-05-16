interface Props {
  title: string;
}

export default function Button({ title }: Props) {
  return (
    <button className="mb-4 w-[500px] h-[45px] border-2 border-silk bg-paper text-charcoal text-[1.1rem] font-dmsans font-medium transition duration-300 hover:text-white hover:border-paper hover:bg-silk ">
      {title}
    </button>
  );
}
