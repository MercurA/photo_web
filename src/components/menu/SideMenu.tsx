import { Link } from "@tanstack/react-router";

const MENU_ITEMS = [
  { label: "Gallery" },
  { label: "About"},
  { label: "Contact"},
];
const SideMenu = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="w-50 h-screen bg-zinc-800 p-4">
      <div className="text-zinc-400">
        <div className="space-y-2">
          {MENU_ITEMS.map((item) => (
           <Link key={item.label} to={item.label.toLocaleLowerCase()} className="block">
             {item.label}
           </Link>
          ))}
        </div>
      </div>
        <div className="mt-4">{children}</div>
    </div>
  );
};

export default SideMenu;