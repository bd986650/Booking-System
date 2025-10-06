import React from "react";
import Link from "next/link";
import Button from "@/shared/ui/Buttons/Button";

const NotFoundPage: React.FC = () => {
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

                <div className="flex items-center mt-6 gap-x-3 w-full">
                    <Link href="/" className="flex-1">
                        <Button variant="outline" color="gray" className="w-full text-center">
                            Назад
                        </Button>
                    </Link>

                    <Link href="/" className="flex-1">
                        <Button variant="filled" color="blue" className="w-full text-center">
                            На главную
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;
