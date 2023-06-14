"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./../globals.css";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en" className="bg-slate-100">
      <body>
        <nav className="fixed top-0 z-50 w-full bg-gray-800 border-b border-gray-700 ">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <button
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
                <a href="/dashboard" className="flex ml-2 md:mr-24">
                  <Image
                    src="/images/logo-circle.png"
                    className="h-8 mr-3"
                    alt="FlowBite Logo"
                    width={30}
                    height={10}
                  />
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                    Ahi-Llego Administrador
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <aside
          id="logo-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-gray-800 border-r border-gray-800 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
            <ul className="font-light text-base">
              <li>
                <Link
                  href={"/dashboard"}
                  className="flex items-center p-2 text-white rounded-lg  hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-400 transition duration-75  group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  {sidebarOpen && <span className="ml-3">Home</span>}
                </Link>
              </li>
              <li>
                <Link
                  href={"/dashboard/pedidos"}
                  className="flex items-center p-2 text-white rounded-lg  hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-400 transition duration-75  group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Pedídos</span>
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="flex items-center p-2 text-white rounded-lg  hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-400 transition duration-75  group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Cerrar Sesión
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className={`p-2 ${sidebarOpen ? "ml-64 sm:ml-64" : "ml-0"}`}>
          <div className="p-2 mt-14">{children}</div>
        </div>
      </body>
    </html>
  );
}
