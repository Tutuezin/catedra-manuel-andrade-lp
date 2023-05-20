import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FiInstagram } from "react-icons/fi";
import About from "../About";
import Members from "../Members";
import Chair from "../Chair";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <div className="flex flex-col items-center  mt-12 text-[rem] ">
        <h1 className="font-castoro min-w-[500px] max-w-[800px] text-center text-[3rem] text-charcoal font-bold">
          Cátedra Manuel <br /> Correia de Andrade
        </h1>
        <h2 className="mt-4 mb-10 font-dmsans font-normal tracking-widest text-[1.3rem] text-charcoal">
          UFRPE
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <Button id={"#about"} title={"Manuel Correia de Andrade"} />
        <Button id={"#chair"} title={"Conhecendo a Cátedra"} />
        <Button id={"#members"} title={"Membros e Linhas de pesquisa"} />
        <Button id={"#about"} title={"Atividades da Cátedra"} />
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
      <div className="divider-1 my-10"></div>
      <About id={"about"} />
      <div className="divider-2 my-10"></div>
      <Chair id={"chair"} />
      <div className="divider-1 my-10"></div>
      <Members id={"members"} />
      <div className="divider-2 my-10"></div>
    </main>
  );
}
