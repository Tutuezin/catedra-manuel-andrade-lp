interface Props {
  id: string;
}

export default function Chair({ id }: Props) {
  return (
    <div>
      <div className="flex flex-col items-center  mt-14 text-[rem] ">
        <h1
          id={`${id}`}
          className="font-castoro min-w-[500px] max-w-[800px] text-center text-[2.5rem] text-charcoal font-bold"
        >
          A Cátedra
        </h1>
      </div>
      <article className="flex justify-center  px-10">
        <p className=" mt-8 min-w-[200px] max-w-[800px] font-dmsans font-normal tracking-widest text-[1.1rem] text-charcoal text-justify">
          A cátedra Manuel Correia de Andrade nasceu na perspectiva de manter
          vivo o legado do professor.Tem como objetivo pesquisar sobre debate
          histórico, teórico, técnico e conceitual a respeito da pobreza,
          desenvolvimento e racismo ambiental no rural e no urbano e suas
          interrelações através dos movimentos sociais.
        </p>
      </article>
    </div>
  );
}
