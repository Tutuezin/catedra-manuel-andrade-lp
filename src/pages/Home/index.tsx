import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FiInstagram } from "react-icons/fi";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <div className="flex flex-col items-center  mt-14 text-[rem] ">
        <h1 className="font-castoro min-w-[500px] max-w-[800px] text-center text-[3rem] text-charcoal font-bold">
          Cátedra Manuel <br /> Correia de Andrade
        </h1>
        <h2 className="mt-4 mb-10 font-dmsans font-normal tracking-widest text-[1.3rem] text-charcoal">
          UFRPE
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <Button title={"Manuel Correia de Andrade"} />
        <Button title={"Conhecendo a Cátedra"} />
        <Button title={"Membros e Linhas de pesquisa"} />
        <Button title={"Atividades da Cátedra"} />
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <FiInstagram className="text-[1.4rem] text-charcoal" />
        <a
          href="https://www.instagram.com/catedra_manuel_correia_ufrpe/"
          target={"_blank"}
          rel={"noreferrer noopener"}
          className="font-dmsans text-[1.1rem] text-charcoal"
        >
          Siga @CMCA
        </a>
      </div>
      <Footer />
    </main>
  );
}
