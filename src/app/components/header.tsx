import store from "store2";

export function Header() {
  const valueStorage = store.get("value");

  return (
    <div className="menu fixed top-[1%] left-1/2 transform -translate-x-1/2 px-[40px] w-[95%] h-[80px] flex justify-between items-center p-[10px] z-[9998] rounded-[20px] bg-white shadow-lg">
      <a className="flex items-center">
        <img src="/images/logo.png" alt="Logo" className="w-32 h-auto" />
      </a>
      <div className="buttons-container flex items-center">
        <div className="valor-box">
          <span id="valor">R$ {valueStorage ?? "0.00"}</span>
        </div>
      </div>
    </div>
  );
}
