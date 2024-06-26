"use client";

import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Header = () => {
  const { user, error } = useKindeBrowserClient();
  const router = useRouter();

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (user) router.push("/dashboard");
  }, [user]);

  return (
    <header className="bg-black/90">
      <div className="mx-auto flex h-24 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className=" text-white flex items-center gap-3 font-bold" href="#">
          <Image src={"/drawx.png"} width={25} height={20} alt="logo" />
          DrawX
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-white transition hover:text-cyan-500"
                  href="#"
                >
                  Use cases
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-cyan-500"
                  href="#"
                >
                  Resources
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-cyan-500"
                  href="#"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-cyan-500"
                  href="#"
                >
                  DiagramGPT
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-cyan-500"
                  href="#"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="block text-sm font-medium text-white px-5 py-2.5 transition hover:text-gray-300">
                <LoginLink>Login</LoginLink>
              </div>

              <Link
                className="hidden rounded-md bg-white text-black px-6 py-2.5 text-sm font-medium transition  sm:block hover:bg-gray-300 md:flex items-center justify-center gap-1"
                href="/workspace/try"
              >
                Try DrawX
                <MoveRight width={16} />
              </Link>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
