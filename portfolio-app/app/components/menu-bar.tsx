import Link from "next/link";

const menuItems = [
  { href: "/", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function MenuBar() {
  return (
    <div className="flex gap-6">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-foreground/80 hover:text-foreground transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
} 