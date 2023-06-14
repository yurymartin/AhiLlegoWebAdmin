"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen mx-3">
      <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 bg-white p-6 shadow-2xl rounded-lg">
        <div className="flex flex-col items-center">
          <Image
            className="text-center"
            src={"/images/logo-rounded.png"}
            width={100}
            height={100}
            alt="logo-rounded"
          />
          <h1 className="mt-5 text-center font-sans">
            WEB ADMINISTRADOR DE AHI-LLEGO
          </h1>
        </div>
        <h5 className="my-5 mb-5 text-xl font-medium leading-tight font-sans text-center uppercase">
          INICIAR SESIÓN
        </h5>

        <form onSubmit={handleOnSubmit}>
          <div className="mb-7">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Correo Electronico
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-7">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>

          <button
            type="submit"
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm block w-full px-5 py-2.5 text-center "
          >
            INGRESAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
