"use client";

import { useEffect, useState } from "react";
import { Header, Timer } from "./components";

export default function Home() {
  const [page, setPage] = useState<"amazon" | "nike" | "apple" | "magalu">(
    "amazon"
  );
  const [showMoneyUpdated, setShowMoneyUpdated] = useState(false);

  const [code, setCode] = useState("");
  const [inputCode, setInputCode] = useState("");

  const [selectedValue, setSelectedValue] = useState("0");
  const [value, setValue] = useState("0.00");

  function generateRandomCode(length: number) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let codigo = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);

      codigo += characters.charAt(randomIndex);
    }

    return codigo;
  }

  function generateRandomRealNumber(
    min: number = 10,
    max: number = 100
  ): number {
    return Math.random() * (max - min) + min;
  }

  function capitalizeFirstLetter(str: string): string {
    const lowerCaseStr = str.toLowerCase();
    return lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.slice(1);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("value")) {
        localStorage.removeItem("value");
        setValue("0.00");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("value");
      setValue(storedValue ?? "0.00");
    }
  }, []);

  return (
    <main>
      {showMoneyUpdated && (
        <div className="fixed inset-0 !z-[950] flex items-center justify-center overflow-y-auto transition-all duration-500 ease-in-out">
          <div className="bg-white shadoww flex flex-col w-[90%] rounded-[20px] mx-auto text-center py-4">
            <img
              src="/images/heart.gif"
              className="h-[100px] w-[100px] m-auto"
            />

            <span className="text-[20px]">Saldo atualizado!</span>
            <span className="text-[20px] mt-4">Você recebeu:</span>
            <span className="text-[40px] font-bold mt-[-10px] text-[#333]">
              R$ {selectedValue}
            </span>
            <span className="text-[20px]">
              pelo código da {capitalizeFirstLetter(page)}
            </span>
          </div>
        </div>
      )}

      {page == "magalu" && (
        <div className="fixed inset-0 !z-[950] flex items-center justify-center overflow-y-auto transition-all duration-500 ease-in-out">
          <div className="bg-white shadoww flex flex-col w-[90%] rounded-[20px] mx-auto text-center py-4">
            <svg
              className="text-center flex items-center w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              width="100"
              height="100"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <clipPath id="__lottie_element_2">
                  <rect width="500" height="500" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clip-path="url(#__lottie_element_2)">
                <g transform="matrix(1,0,0,1,250,250)">
                  <path
                    fill="rgb(255,198,56)"
                    fill-opacity="1"
                    d=" M11.286999702453613,-126.91600036621094 C11.286999702453613,-126.91600036621094 150.31300354003906,113.88300323486328 150.31300354003906,113.88300323486328 C155.32899475097656,122.5719985961914 149.0590057373047,133.43299865722656 139.0260009765625,133.43299865722656 C139.0260009765625,133.43299865722656 -139.0260009765625,133.43299865722656 -139.0260009765625,133.43299865722656 C-149.0590057373047,133.43299865722656 -155.32899475097656,122.5719985961914 -150.31300354003906,113.88300323486328 C-150.31300354003906,113.88300323486328 -11.286999702453613,-126.91600036621094 -11.286999702453613,-126.91600036621094 C-6.270999908447266,-135.60499572753906 6.270999908447266,-135.60499572753906 11.286999702453613,-126.91600036621094z"
                  ></path>
                  <g opacity="1" transform="matrix(1,0,0,1,0,0)"></g>
                </g>
                <g transform="matrix(1,0,0,1,0,0)" opacity="0.5">
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,181.61599731445312,249.4600067138672)"
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        fill="rgb(255,198,56)"
                        fill-opacity="1"
                        d=" M-41.42900085449219,133.42999267578125 C-41.42900085449219,133.42999267578125 -70.16899871826172,133.42999267578125 -70.16899871826172,133.42999267578125 C-80.1989974975586,133.42999267578125 -86.46900177001953,122.56999969482422 -81.45899963378906,113.87999725341797 C-81.45899963378906,113.87999725341797 57.57099914550781,-126.91999816894531 57.57099914550781,-126.91999816894531 C62.58100128173828,-135.60000610351562 75.13099670410156,-135.60000610351562 80.14099884033203,-126.91999816894531 C80.14099884033203,-126.91999816894531 83.22100067138672,-121.58000183105469 83.22100067138672,-121.58000183105469 C83.22100067138672,-121.58000183105469 -52.729000091552734,113.87999725341797 -52.729000091552734,113.87999725341797 C-57.729000091552734,122.56999969482422 -51.46900177001953,133.42999267578125 -41.42900085449219,133.42999267578125z"
                      ></path>
                    </g>
                  </g>
                </g>
                <g transform="matrix(1,0,0,1,0,0)" opacity="1">
                  <path
                    fill="rgb(0,0,0)"
                    fill-opacity="1"
                    d=" M252.7,293.59 C252.7,293.59 247.3,293.59 247.3,293.59 C239.91,293.59 233.83,287.79 233.47,280.42 C233.47,280.42 230.64,222.53 230.64,222.53 C230.18,213.17 237.65,205.33 247.02,205.33 C247.02,205.33 252.98,205.33 252.98,205.33 C262.35,205.33 269.82,213.17 269.36,222.53 C269.36,222.53 266.53,280.42 266.53,280.42 C266.17,287.79 260.09,293.59 252.7,293.59z M234.15,335.48 C234.15,326.73 241.24,319.63 250,319.63 C258.76,319.63 265.85,326.73 265.85,335.48 C265.85,344.24 258.76,351.33 250,351.33 C241.24,351.33 234.15,344.24 234.15,335.48z"
                  ></path>
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,250,335.4800109863281)"
                  ></g>
                </g>
                <g transform="matrix(1,0,0,1,0,0)" opacity="0.5">
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,243.2760009765625,249.38600158691406)"
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fill-opacity="1"
                      d=" M12.725000381469727,43.720001220703125 C11.645000457763672,43.9900016784668 10.515000343322754,44.130001068115234 9.354999542236328,44.130001068115234 C9.354999542236328,44.130001068115234 3.944999933242798,44.130001068115234 3.944999933242798,44.130001068115234 C-3.434999942779541,44.130001068115234 -9.515000343322754,38.33000183105469 -9.875,30.959999084472656 C-9.875,30.959999084472656 -12.704999923706055,-26.93000030517578 -12.704999923706055,-26.93000030517578 C-13.164999961853027,-36.290000915527344 -5.695000171661377,-44.130001068115234 3.674999952316284,-44.130001068115234 C3.674999952316284,-44.130001068115234 9.635000228881836,-44.130001068115234 9.635000228881836,-44.130001068115234 C10.694999694824219,-44.130001068115234 11.725000381469727,-44.029998779296875 12.725000381469727,-43.83000183105469 C4.864999771118164,-42.34000015258789 -0.9750000238418579,-35.22999954223633 -0.5649999976158142,-26.93000030517578 C-0.5649999976158142,-26.93000030517578 2.265000104904175,30.959999084472656 2.265000104904175,30.959999084472656 C2.565000057220459,37.16999816894531 6.934999942779541,42.27000045776367 12.725000381469727,43.720001220703125z"
                    ></path>
                  </g>
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,245.03599548339844,335.406005859375)"
                  >
                    <path
                      fill="rgb(0,0,0)"
                      fill-opacity="1"
                      d=" M10.96500015258789,14.649999618530273 C9.095000267028809,15.420000076293945 7.045000076293945,15.850000381469727 4.894999980926514,15.850000381469727 C-3.865000009536743,15.850000381469727 -10.96500015258789,8.760000228881836 -10.96500015258789,0 C-10.96500015258789,-8.75 -3.865000009536743,-15.850000381469727 4.894999980926514,-15.850000381469727 C7.045000076293945,-15.850000381469727 9.095000267028809,-15.420000076293945 10.96500015258789,-14.649999618530273 C5.215000152587891,-12.270000457763672 1.1749999523162842,-6.599999904632568 1.1749999523162842,0 C1.1749999523162842,6.610000133514404 5.215000152587891,12.270000457763672 10.96500015258789,14.649999618530273z"
                    ></path>
                  </g>
                </g>
                <g>
                  <g>
                    <path></path>
                  </g>
                  <g>
                    <path></path>
                  </g>
                  <g>
                    <path></path>
                  </g>
                  <g>
                    <path></path>
                  </g>
                  <g>
                    <path></path>
                  </g>
                  <g>
                    <path></path>
                  </g>
                  <g>
                    <path></path>
                  </g>
                  <g>
                    <path></path>
                  </g>
                  <g>
                    <path></path>
                  </g>
                  <g>
                    <path></path>
                  </g>
                  <g>
                    <path></path>
                  </g>
                  <g>
                    <path></path>
                  </g>
                </g>
              </g>
            </svg>

            <span className="text-[20px] font-bold">
              LIMITE DIÁRIO ATINGIDO!
            </span>

            <span className="text-[20px] mt-4 font-bold mb-2">
              Cadastre sua chave PIX agora para continuar
            </span>
            <a href="/1">
              <button className="w-[95%] bg-[#1B8D35] py-2 mx-auto text-white font-bold mb-4">
                CADASTRE AGORA
              </button>
            </a>

            <p>Ou Aguarde 48 horas para continuar avaliando</p>
          </div>
        </div>
      )}

      <>
        <header>
          <Header />
        </header>

        <div className="mt-[100px]" />

        <div className="flex flex-col gap-3">
          <Timer />

          <div className="bg-yellow-400 text-black text-center flex items-center rounded-[20px] justify-center my-0 mx-auto w-[95%] py-4">
            <p className="font-bold text-[17px]">
              🎉 Parabéns! Você Recebeu Acesso Exclusivo! 🎉
            </p>
          </div>
        </div>

        <div className="mt-[20px]"></div>

        <div className="my-0 mx-auto bg-white h-full w-[95%] rounded-[20px] p-[15px]">
          <img
            src={`/images/${page}.png`}
            className="w-[150px] my-0 mx-auto flex pt-[10px]"
          />

          <button
            disabled={code !== ""}
            onClick={() => {
              setCode(generateRandomCode(7));
            }}
            className="flex my-0 disabled:cursor-pointer mx-auto bg-[#28A745] text-white font-bold rounded-[12px] px-3 py-2"
          >
            Gerar Código
          </button>

          {code && (
            <>
              <div>
                <p className="mt-[20px] text-center">
                  Código gerado com sucesso:
                </p>
                <p className="font-bold text-[#333] text-center text-[25px]">
                  {code}
                </p>
              </div>
            </>
          )}

          <div className="flex flex-col pt-[5px]">
            <label
              htmlFor="chatId"
              className="bg-[#e2e8ef] p-[10px] rounded-[12px] text-center w-full mb-[10px]"
            >
              Insira o código gerado abaixo:
            </label>
            <input
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              type="text"
              className="px-4 rounded-[12px] border border-black h-[40px] uppercase"
            />

            <button
              onClick={() => {
                if (code !== inputCode || code === "") {
                  alert(
                    "Código incorreto! Por favor, digite o código corretamente para continuar!"
                  );

                  return;
                }

                setShowMoneyUpdated(true);

                const randomValue = generateRandomRealNumber(30, 50).toFixed(2);
                const getValue = localStorage.getItem("value") ?? "0";

                const getValueParsed = parseFloat(getValue);
                const randomValueParsed = parseFloat(randomValue);

                const newValue = (getValueParsed + randomValueParsed).toFixed(
                  2
                );

                setSelectedValue(randomValue);
                localStorage.setItem("value", newValue);

                setTimeout(() => {
                  setCode("");
                  setInputCode("");
                  setShowMoneyUpdated(false);

                  if (page === "amazon") {
                    setPage("nike");
                  } else if (page === "nike") {
                    setPage("apple");
                  } else if (page === "apple") {
                    setPage("magalu");
                  }
                }, 3000);
              }}
              className="bg-[#007bff] cursor-pointer text-white rounded-[12px] font-bold mt-[10px] py-2 px-4"
            >
              Enviar
            </button>
          </div>
        </div>
      </>

      <footer>
        <p className="text-white  text-center text-[12px] mt-[10px] ">
          ©️ 2023 Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
