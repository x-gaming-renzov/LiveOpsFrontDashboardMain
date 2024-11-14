"use client"; // Ensure this is a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation"; // Use `usePathname` instead of `useRouter`
import Image from "next/image"

const LeftPanel = () => {
  const pathname = usePathname(); // Get the current path

  const menuItems = [
    { name: "Dashboard", icon: '/assets/icons/panel/dashboard.svg', href: "/" },
    { name: "User Segments", icon: '/assets/icons/panel/usersegments.svg', href: "/usersegments" },
    { name: "Notifications", icon: '/assets/icons/panel/notifications.svg', href: "/notifications" },
    { name: "Offers", icon: '/assets/icons/panel/offers.svg', href: "/offers" },
    { name: "Integrations", icon: '/assets/icons/panel/Integrations.svg', href: "/integrations" },
    
  ];

  return (
    <div className="w-64 h-screen bg-zinc-800 flex flex-col justify-start items-start p-4">
      <nav className="w-full">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <div
              className={`flex items-center gap-3 px-4 py-3 w-full rounded-md cursor-pointer ${
                pathname === item.href
                  ? "bg-zinc-700 text-white"
                  : "text-gray-400 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              <Image src={item.icon} alt={item.name} width={20} height={20} />
              <span className="text-base font-medium">{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default LeftPanel;
