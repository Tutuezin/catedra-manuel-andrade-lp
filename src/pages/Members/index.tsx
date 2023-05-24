import { useState } from "react";
import { members } from "./members";

interface Props {
  id: string;
}

export default function Members({ id }: Props) {
  const [clicked, setClicked] = useState("");
  const [hidden, setHidden] = useState("");
  const [hiddenDescription, setHiddenDescription] = useState("hidden");

  const chooseMember = (name: string) => {
    setClicked(name);
    setHidden("hidden");
    setHiddenDescription("");

    if (name === clicked) {
      setClicked("");
      setHidden("");
      setHiddenDescription("hidden");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-14 text-[rem] ">
        <h1
          id={`${id}`}
          className="font-castoro min-w-[500px] max-w-[800px] text-center text-[2.5rem] text-charcoal font-bold"
        >
          Membros e Linhas de Pesquisa
        </h1>
      </div>
      <section className="place-items-center grid grid-cols-[repeat(auto-fit,minmax(21.8rem,1fr))] max-w-[150rem] mx-auto mt-10 mb-20 gap-y-[5rem] px-10">
        {members.map((item, index) => {
          return (
            <div
              id={item.name}
              key={index}
              className={
                clicked === item.name
                  ? "flex items-center justify-center gap-10 text-justify"
                  : `flex flex-col items-center transition duration-300 ${hidden}`
              }
            >
              <section className="flex flex-col w-[15rem] h-[15rem] gap-1">
                <div
                  onClick={() => chooseMember(item.name)}
                  className={`${item.bg} max-w-[11rem] min-w-[11rem] min-h-[15rem] bg-center bg-no-repeat bg-cover rounded-tl-[30px] rounded-tr-[9px] rounded-bl-[30px] rounded-br-[60px]`}
                />
                <h2 className="text-center font-dmsans font-normal tracking-wider text-[1.1rem] text-charcoal">
                  {item.name}
                </h2>
              </section>
              <p
                className={`max-w-[1000px] font-dmsans font-normal tracking-wider text-[1.1rem] text-charcoal transition duration-300 ${hiddenDescription} `}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
