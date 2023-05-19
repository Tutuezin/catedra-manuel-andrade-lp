interface Props {
  id: string;
}

export default function About({ id }: Props) {
  return (
    <div>
      <div className="flex flex-col items-center  mt-14 text-[rem] ">
        <h1
          id={`${id}`}
          className="font-castoro min-w-[500px] max-w-[800px] text-center text-[2.5rem] text-charcoal font-bold"
        >
          Manuel Correia de Andrade
        </h1>
      </div>
      <article className="flex place-content-evenly gap-20 px-10">
        <section className="flex flex-col gap-40">
          <div className="bg-livro1 min-w-[11rem] min-h-[15rem] bg-center bg-no-repeat bg-cover"></div>
          <div className="bg-livro3 min-w-[11rem] min-h-[15rem] bg-center bg-no-repeat bg-cover"></div>
        </section>
        <p className=" mt-8 min-w-[200px] max-w-[800px] font-dmsans font-normal tracking-widest text-[1.1rem] text-charcoal text-justify">
          Manuel Correia de Oliveira Andrade foi um destacado intelectual
          brasileiro, atuando como escritor, historiador, geógrafo, advogado e
          professor. Reconhecido como um dos principais pensadores das ciências
          humanas no Brasil, ele recebeu o título de Professor Emérito pela
          Universidade Federal de Pernambuco. <br /> Além de seu trabalho como
          educador, Manuel Andrade também se destacou como autor de diversos
          livros de referência, principalmente na área de geografia. Suas obras
          contribuíram significativamente para o desenvolvimento e o
          entendimento da disciplina geográfica no país.
        </p>

        <section className="flex flex-col gap-40">
          <div className="bg-manuelcorreia2 min-w-[11rem] min-h-[15rem] bg-center bg-no-repeat bg-cover"></div>
          <div className="bg-livro2 min-w-[11rem] min-h-[15rem] bg-center bg-no-repeat bg-cover"></div>
        </section>
      </article>
    </div>
  );
}
