import React from "react";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <section className="bg-white min-h-screen flex flex-row items-center justify-center">
      <div className="text-start max-w-3xl px-6 py-24">
        <h1 className="text-5xl md:text-8xl font-extrabold text-gray-900 mb-6">
          Кубик
        </h1>
        <h2 className="text-xl md:text-4xl font-bold text-blue-500 mb-12">
          - твой рабочий уголок в один клик
        </h2>

        <div className="flex gap-4">
          <Button variant="filled" color="blue">Вход</Button>
          <Button variant="outline" color="blue">Регистрация</Button>
        </div>
      </div>
    </section>
  );
}
