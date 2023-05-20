import { members } from "./members";

interface Props {
  id: string;
}

export default function Members({ id }: Props) {
  return (
    <div>
      <div className="flex flex-col items-center  mt-14 text-[rem] ">
        <h1
          id={`${id}`}
          className="font-castoro min-w-[500px] max-w-[800px] text-center text-[2.5rem] text-charcoal font-bold"
        >
          Membros e Linhas de Pesquisa
        </h1>
      </div>
      {/* flex place-content-evenly gap-20 px-10 */}
      <section className="place-items-center grid grid-cols-[repeat(auto-fit,minmax(21.8rem,1fr))] max-w-[150rem] mx-auto my-10 gap-y-[3rem] px-10 ">
        {members.map((item, index) => {
          return <div key={index} className={item}></div>;
        })}
      </section>
    </div>
  );
}
