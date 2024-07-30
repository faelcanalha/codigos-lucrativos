"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [pixSelected, setPixSelected] = useState<
    "cpf" | "email" | "phone" | ""
  >("");

  const router = useRouter();

  const [input, setInput] = useState("");
  function registerPix() {
    if (pixSelected === "cpf") {
      if (!validateCPF(input)) {
        alert("Você precisa inserir um cpf valido");
        return;
      }
    }

    if (pixSelected === "email") {
      if (!validateEmail(input)) {
        alert("Você precisa inserir um e-mail valido");
        return;
      }
    }

    if (pixSelected === "phone") {
      if (input.length < 15) {
        alert("Você precisa inserir um celular valido");
        return;
      }
    }

    localStorage.setItem("pix", pixSelected);
    localStorage.setItem("chave", input);
    router.push("/1/2/3");
  }

  function validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function validateCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]/g, "");
    if (cpf.length !== 11) return false;

    if (/^(\d)\1{10}$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digit = 11 - (sum % 11);
    if (digit >= 10) {
      digit = 0;
    }

    if (parseInt(cpf.charAt(9)) !== digit) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    digit = 11 - (sum % 11);
    if (digit >= 10) {
      digit = 0;
    }

    if (parseInt(cpf.charAt(10)) !== digit) return false;

    return true;
  }

  function formatCPF(cpf: string): string {
    return cpf
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  function formatPhoneNumber(phone: string): string {
    return phone
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
  }

  function onChnageInput(value: string) {
    if (pixSelected === "cpf") {
      setInput(formatCPF(value));
    }

    if (pixSelected === "phone") {
      setInput(formatPhoneNumber(value));
    }

    if (pixSelected === "email") {
      setInput(value);
    }
  }

  useEffect(() => {
    setInput("");
  }, [pixSelected]);

  return (
    <main>
      <>
        <div className="menu fixed top-[1%] left-1/2 transform -translate-x-1/2 w-[95%] h-[80px] flex justify-between p-[10px] z-[9998] rounded-[20px] bg-white shadow-lg">
          <a className="flex items-center">
            <img src="/images/logo.png" alt="Logo" />
          </a>
          <div className="buttons-container flex items-center">
            <div className="valor-box">
              <span id="valor">
                R$ {localStorage.getItem("value") ?? "0.00"}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-[100px]"></div>

        <div className="bg-[#7a7a7a] text-center flex items-center rounded-[20px] justify-center my-0 mx-auto w-[95%] h-[70px]">
          <p className="text-white font-bold text-[20px]">
            Cadastre agora sua chave PIX
          </p>
        </div>

        <div className="mt-[20px]"></div>

        <div className="my-0 mx-auto bg-white h-full w-[95%] rounded-[20px] p-[15px]">
          <p className=" text-center">Antes de realizar seu 1º saque</p>
          <p className=" text-center font-bold">CADASTRE SUA CHAVE PIX.</p>

          <label className="flex gap-2 w-full items-center justify-center my-[40px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20"
              height="20"
              className="inline-flex align-text-bottom"
              fill="#36C5B8"
            >
              <path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.76C231.1-7.586 280.3-7.586 310.6 22.76L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.78L22.76 310.6C-7.586 280.3-7.586 231.1 22.76 200.8L80.78 142.7H112.6z"></path>
            </svg>
            <h2>Selecione sua chave pix</h2>
          </label>

          <div className="flex gap-2 w-full justify-center mb-[40px]">
            <button
              onClick={() => setPixSelected("phone")}
              className={`flex my-0 ${
                pixSelected === "phone" ? "bg-[#28A745]" : "bg-gray-600"
              }  text-white font-bold rounded-[12px] px-6 py-2`}
            >
              Celular
            </button>

            <button
              onClick={() => setPixSelected("email")}
              className={`flex my-0 ${
                pixSelected === "email" ? "bg-[#28A745]" : "bg-gray-600"
              }  text-white font-bold rounded-[12px] px-6 py-2`}
            >
              E-mail
            </button>

            <button
              onClick={() => setPixSelected("cpf")}
              className={`flex my-0 ${
                pixSelected === "cpf" ? "bg-[#28A745]" : "bg-gray-600"
              }  text-white font-bold rounded-[12px] px-6 py-2`}
            >
              CPF
            </button>
          </div>
          <div className="flex flex-col pt-[5px]">
            <label
              htmlFor="chatId"
              className="bg-[#e2e8ef] p-[10px] rounded-[12px] text-center w-full mb-[10px]"
            >
              Insira sua chave PIX abaixo
            </label>
            <input
              value={input}
              maxLength={
                pixSelected === "cpf" ? 14 : pixSelected === "phone" ? 15 : 50
              }
              onChange={(e) => onChnageInput(e.target.value)}
              type="text"
              className="px-4 rounded-[12px] border border-black h-[40px] "
            />

            <button
              onClick={() => registerPix()}
              className="bg-[#007bff] cursor-pointer text-white rounded-[12px] font-bold mt-[10px] py-2 px-4"
            >
              CADASTRAR CHAVE PIX
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
