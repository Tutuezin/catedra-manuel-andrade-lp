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
      <article className="flex flex-col items-center px-10 font-dmsans font-normal tracking-widest text-[1.1rem] text-charcoal text-justify">
        <p className="mt-8 min-w-[200px] max-w-[800px]">
          A Cátedra Manuel Correia de Andrade foi criada pela Universidade
          Federal Rural de Pernambuco no ano de 2009 através da resolução de
          número 452/2009. O professor Jacques Alberto Ribemboim, do hoje
          extinto Departamento de Letras e Ciências Humanas foi o proponente e
          primeiro coordenador, tendo sido nomeado pela Portaria de número
          430/2010-GR, de 19 de abril de 2010. <br />
          Cátedra Manuel Correia, Biblioteca Manuel Correia e Diretório
          Acadêmico de História Manuel Correia são espaços da UFRPE que
          materializam o reconhecimento desta instituição a enorme relevância
          que a obra do Patrono tem para as ciências humanas, em especial as
          Sociais, Geográfica, História e a educação brasileira. Suas
          contribuições se deram através do seu conhecimento sobre o espaço
          geográfico, revelando a relação dialética entre o meio e a sociedade
          as relações de poder geradas a partir destas relações, as diferentes
          classes sociais e seus conflitos. A trajetória do professor é marcada
          por significativas contribuições como docente, pesquisador,
          nordestino, geógrafo, advogado, historiador, bem como seus fundamentos
          ambientalistas e a importante contribuição à educação, quer seja pelas
          publicações de livros didáticos e científicos, quer seja pela sua
          postura didática e de construção de redes de cooperação, em múltiplos
          âmbitos. Neste sentido, os objetivos estabelecidos para a Cátedra
          Manuel Correia de Andrade em 2009 eram e continuam sendo: <br />
        </p>
        <ol type="I" className="mt-8 min-w-[200px] max-w-[800px]">
          <li>
            I. Promover conferências, cursos, seminários e pesquisas relativas
            aos grandes temas de trabalho do seu patrono, em especial as
            relacionadas à pesquisa geográfica, histórica, cultural, ambiental e
            econômica do Nordeste do Brasil;
          </li>
          <li>
            II. Promover a visita e intercâmbio de professores e pesquisadores,
            nacionais ou estrangeiros, de renome estabelecido ou notório saber
            nas áreas de pesquisa-foco de seu patrono;
          </li>
          <li>
            III. Promover a publicação e aquisição de livros, revistas e outros
            meios de divulgação dos resultados da produção científica
            resultantes de suas atividades;
          </li>
          <li>
            IV. Estabelecer vínculos com outras instituições de interesse para a
            Cátedra;
          </li>
          <li>
            V. Promover o debate acerca da posição da Região Nordeste no cenário
            brasileiro, com o propósito de melhorar as condições socioambientais
            da sua população;
          </li>
          <li>
            VI. Possibilitar a criação de uma disciplina específica sobre a vida
            e obra do seu patrono, cumpridas as exigências legais e estatutárias
            para este fim.
          </li>
        </ol>
        <br />
        <p className="mt-8 min-w-[200px] max-w-[800px]">
          Com as comemorações do centenário de Manuel Correia de Andrade, no ano
          de 2022, o Grupo de Pesquisa – Rede de Pesquisadores Itinerários da
          Educação Geográfica (RePEG), liderado pela professora Maria Rita Ivo
          de Melo Machado, organizou uma série de atividades que dialogam com os
          objetivos da Cátedra e tendo com o foco a construção de um ambiente de
          pesquisa colaborativo capaz de ampliar algumas questões, em espacial
          as principais pautas debatidas por Andrade e que foram eixos temáticos
          do Seminário Nacional em sua homenagem. Diante deste contexto, o
          professor Jacques Ribemboim indica a professora Maria Rita Machado
          para assumir a coordenação da Cátedra Manuel Correia de Andrade -
          UFRPE, que já organizava junto com os membros do RePEG e outras
          parceiras e parceiros o “Seminário Nacional A Terra e o Homem:
          centenário de ANAIS DO SEMINÁRIO NACIONAL A TERRA E O HOMEM:
          CENTENÁRIO DE MANUEL CORREIA DE ANDRADE Página6Manuel Correia de
          Andrade”, além de outras atividades, como os “Esquentas para o
          Seminário Nacional”, que aconteceram de forma remota e o Ciclo de
          Leitura, realizado de forma presencial na sala 30 do CEGOE-UFRPE, que
          atualmente aloca a Cátedra. Os membros da Cátedra Manuel Correia de
          Andrade, diante da movimentação acadêmica estabelecida entorno dos
          temas debatidos por Andrade, abre espaço para agregar parcerias e
          estabelecer diálogos interdisciplinares sobre as temáticas tratadas
          pelo patrono, sintam-se convidadas e convidados a participar das
          nossas atividades e entrar em contato conosco através dos nossos
          contatos pelo e-mail{" "}
          <a
            className="text-palegold"
            href="mailto:catedra.manuelcorreia@ufrpe.br?subject="
          >
            catedra.manuelcorreia@ufrpe.br
          </a>{" "}
          e pelo Instagram{" "}
          <a
            className="text-palegold"
            href="https://www.instagram.com/catedra_manuel_correia_ufrpe/"
          >
            @catedra_manuel_correia
          </a>
          .
        </p>
      </article>
    </div>
  );
}
