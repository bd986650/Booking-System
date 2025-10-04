"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-start max-w-md px-6">
        <p className="text-sm font-medium text-blue-500">Ошибка 404</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
          Страница не найдена
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Извините, страница, которую вы ищете, не существует.
        </p>

        <div className="flex mt-6 gap-3 w-full">
          <button
            onClick={() => router.back()}
            className="flex-1 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
          >
            Назад
          </button>

          <button
            onClick={() => router.push("/")}
            className="flex-1 px-5 py-2 text-sm text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
          >
            На главную
          </button>
        </div>
      </div>
    </section>
  );
}
