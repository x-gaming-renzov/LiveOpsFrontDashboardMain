"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { usePathname } from "next/navigation";

const Nav = () => {
    const { data: session } = useSession();
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [providers, setProviders] = useState(null);

    const getPageName = () => {
        const pathname = usePathname();
        const pageName = pathname.split("/")[1];
        switch (pageName) {
            case "":
                return "Dashboard";
            case "usersegments":
                return "User Segments";
            case "notifications":
                return "Notifications";
            case "offers":
                return "Offers";
            case "integrations":
                return "Integrations";
            default:
                return "Dashboard";
        }
    };

    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res);
        })();
      }, []);
    
    

  return (
    <div className='nav'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image
                src='/assets/images/X-Gaming_Logo.svg'
                width={150}
                height={34}
                alt='logo'
                className='object-contain'
            />
        </Link>
        <div className="w-auto h-full justify-center content-center flex flex-row">
            <p className="text-white text-lg font-bold">{getPageName()}</p>
        </div>
        <div className="sm:flex hidden">
            {session?.user ? (
            <div className='flex gap-3 md:gap-5 relative'>
                <Image
                    src={session.user.image}
                    width={37}
                    height={37}
                    className='rounded-full'
                    alt='profile'
                    onClick={() => setToggleDropdown((prev) => !prev)}
                />
                {toggleDropdown && (
                        <div className='absolute top-full right-0 mt-2 bg-black shadow-lg rounded-md w-48 z-50 flex-col flex justify-self-center gap-2 p-4'>
                            {providers &&
                                Object.values(providers).map((provider) => (
                                    <button
                                    type='button'
                                    key={provider.name}
                                    onClick={signOut} 
                                    className='justify-center text-white'
                                    >
                                    Sign Out
                                    </button>
                                ))}
                        </div>
                    )}
            </div>
            ) : (
            <>
                <div className='flex gap-3 md:gap-5 relative'>
                    <Image
                        src='/assets/images/nousericon.png'
                        width={30}
                        height={30}
                        className='rounded-full'
                        alt='profile'
                        onClick={() => setToggleDropdown((prev) => !prev)}
                    />
                    {toggleDropdown && (
                        <div className='absolute z-100 top-full right-0 mt-2 bg-black shadow-lg rounded-md w-48 z-50 flex-col flex justify-self-center gap-2 p-4'>
                            {providers &&
                                Object.values(providers).map((provider) => (
                                    <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => {
                                        signIn(provider.id);
                                    }} 
                                    className='justify-center text-white'
                                    >
                                    Sign in
                                    </button>
                                ))}
                        </div>
                    )}
                </div>
            </>
            )}
        </div>
    </div>
  )
}

export default Nav
