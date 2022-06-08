import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header className="bg-gray-700 px-4">
      <div className="mx-auto max-w-3xl flex items-center justify-center py-20">
        <img src={Logo} alt="Logo Ignite Todo" />
      </div>
    </header>
  );
}
