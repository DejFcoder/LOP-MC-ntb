import { useState } from "react";
import ServerBg from "../images/serverbg.jpg";

function AboutSection() {
  const [aboutClosed, setAboutClosed] = useState<boolean>(true);

  const aboutToggle = () => {
    setAboutClosed(!aboutClosed);
  };

  return (
    <div className="text-black">
      <div className=" max-w-9xl mx-auto flex flex-col items-center justify-center px-5">
        <div className="mr-0 mb-6 w-full py-4 text-center lg:w-2/3">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl dark:text-white">
            Server Leagends of Pragon
          </h2>
          {aboutClosed ? (
            <div>
              <p className="mb-4 text-lg leading-loose dark:text-gray-400">
                Jsme minecraftový projekt zaměřený převážně na survival minihry.
                Připojit se k nám můžeš přes verzi 1.20. a výš i s neoriginálním
                minecraftem.
              </p>

              <button
                onClick={aboutToggle}
                className="underline-blue font-semibold dark:text-white"
              >
                Zisti Viac
              </button>
            </div>
          ) : (
            <div>
              <p className="mb-4 text-lg leading-loose dark:text-gray-400">
                Jsme minecraftový projekt zaměřený převážně na survival minihry.
                Připojit se k nám můžeš přes verzi 1.20. a výš i s neoriginálním
                minecraftem. Velmi nám záleží na názoru hráčů a proto uvítáme
                každý návrh na novinku či změnu. Taktéž na našem instagramu
                tvoříme ankety, kde si hráči mohou zvolit, kam se server bude
                odvíjet. Můžeš se připojit i k nám na discord a seznámit se s
                naší komunitou hráčů. Co si u nás můžeš zahrát? Momentálně
                teprve začínáme, proto u nás najdeš prozatím pouze Survival, do
                budoucna toho najdeš u nás mnohem více. Survival Pokud rád
                objevuješ svět pěkně po staru, můžeš si u nás zahrát klasickou
                hru o přežití obohacenou speciálními bossy a eventy, které se
                konají v pravidelných intervalech.
              </p>

              <button
                onClick={aboutToggle}
                className="underline-blue font-semibold dark:text-white"
              >
                Menej
              </button>
            </div>
          )}
        </div>
        <img
          className=" lg:w-5/7 mb-40 hidden w-5/6 rounded object-cover object-center lg:inline-block  lg:w-4/6"
          src={ServerBg}
          alt="img"
        />

        <img
          className=" mb-24 inline-block w-5/6 rounded object-cover object-center lg:hidden lg:w-4/6"
          src={ServerBg}
          alt="img"
        />
      </div>
    </div>
  );
}

export default AboutSection;
