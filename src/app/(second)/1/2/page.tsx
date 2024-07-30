"use client";

import { Header, Timer } from "@/app/components";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState<"magalu" | "shein" | "adidas" | "">(
    "magalu"
  );
  const [showMoneyUpdated, setShowMoneyUpdated] = useState(false);

  const [code, setCode] = useState("");
  const [inputCode, setInputCode] = useState("");

  const [selectedValue, setSelectedValue] = useState("0");
  const [value, setValue] = useState("0.00");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("value");
      setValue(storedValue ?? "0.00");
    }
  }, []);

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

  const router = useRouter();

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

      <>
        <header>
          <Header />
        </header>

        <div className="mt-[100px]" />

        <div className="flex flex-col gap-3">
          <Timer />
          <div className="bg-yellow-400 text-black text-center flex items-center rounded-[20px] justify-center my-0 mx-auto w-[95%] py-4">
            <p className="font-bold text-[17px]">
              💸 Continue ganhando para poder sacar! 💸
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

                  if (page === "magalu") {
                    setPage("shein");
                  } else if (page === "shein") {
                    setPage("adidas");
                  } else if (page === "adidas") {
                    router.push("/1/2/3");
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
