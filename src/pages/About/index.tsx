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
          A contribuição do geógrafo e historiador Manuel Correia de Andrade
          para as ciências humanas está materializada nos seus livros, artigos
          científicos, colunas semanais em jornais, orientações de teses,
          dissertações e materiais didáticos. Essas contribuições acadêmicas
          influenciaram inúmeros pesquisadores e se desdobraram em artigos,
          monografia, dissertações e teses das mais variadas áreas das ciências
          humanas e sociais, além de trabalhos que analisam especificamente a
          sua trajetória acadêmica, modo de organização e sistematização do
          pensamento e suas contribuições paras as ciências humanas e sociais
          como um todo. O autor de “A terra e o homem no Nordeste” é uma
          referência não só para o debate e reflexões sobre a questão agrária,
          mas também para diferentes temas, tais como: planejamento regional e
          territorial, geopolítica, questões ambientais e fonte importante para
          compreender a história das revoltas populares.
        </p>

        <section className="flex flex-col gap-40">
          <div className="bg-manuelcorreia2 min-w-[11rem] min-h-[15rem] bg-center bg-no-repeat bg-cover"></div>
          <div className="bg-livro2 min-w-[11rem] min-h-[15rem] bg-center bg-no-repeat bg-cover"></div>
        </section>
      </article>
    </div>
  );
}
