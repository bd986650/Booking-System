"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../model/useAuth";
import { UserRole, ROLE_LABELS } from "../model/roles";

export type AuthMode = "login" | "register";

interface AuthFormProps {
  mode: AuthMode;
  role: UserRole;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, role }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { sendAuth, loading, error } = useAuth(mode);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const response = await sendAuth(role, email, password, name);

    if (response.ok) {
      const redirects: Record<UserRole, string> = {
        EMPLOYEE: "/dashboard/employee",
        LOCAL_ADMIN: "/dashboard/local-admin",
        ADMIN: "/dashboard/admin",
      };

      router.push(redirects[role]);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4"
      noValidate
    >
      {mode === "register" && (
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition disabled:opacity-60"
      >
        {loading
          ? "Загрузка..."
          : mode === "login"
          ? "Войти"
          : "Зарегистрироваться"}{" "}
        как {ROLE_LABELS[role]}
      </button>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </form>
  );
};

export default AuthForm;
