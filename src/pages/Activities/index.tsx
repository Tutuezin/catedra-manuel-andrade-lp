import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface Props {
  id: string;
}

export default function Activities({ id }: Props) {
  return (
    <div>
      <Header />
      <div id={`${id}`} className="flex flex-col items-center mt-8">
        <h1 className="mb-5 font-castoro min-w-[500px] max-w-[800px] text-center text-[3rem] text-charcoal font-bold">
          Atividades da Cátedra
        </h1>
      </div>
      <div className="flex flex-col items-start px-24 font-dmsans font-normal tracking-widest text-[1.1rem] text-charcoal text-justify">
        <h2 className="mt-8 font-dmsans font-normal tracking-wider text-[1.5rem] text-charcoal cursor-pointer">
          Fotos - Centenário Manuel Correia de Andrade.
        </h2>
        <h2 className="mt-8 font-dmsans font-normal tracking-wider text-[1.5rem] text-charcoal cursor-pointer">
          Fotos - Centenário Manuel Correia de Andrade.
        </h2>
      </div>
      <Footer />
    </div>
  );
}
