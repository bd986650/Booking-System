"use client";

import React, { useState } from "react";
import Button from "@/shared/ui/Buttons/Button";

const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full p-6 shadow-lg rounded-xl bg-gray-50">
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            color="blue"
            onClick={() =>
              setMode(mode === "login" ? "register" : "login")
            }
          >
            {mode === "login" ? "Регистрация" : "Назад ко входу"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
