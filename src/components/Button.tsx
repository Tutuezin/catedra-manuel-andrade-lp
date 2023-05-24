interface Props {
  title: string;
  id: string;
}

export default function Button({ title, id }: Props) {
  return (
    <button className="mb-4 w-[500px] h-[45px] border-2 border-silk bg-paper text-charcoal text-[1.1rem] font-dmsans font-medium tracking-wider transition duration-300 hover:text-white hover:border-paper hover:bg-silk">
      <a href={`${id}`}> {title}</a>
    </button>
  );
}
