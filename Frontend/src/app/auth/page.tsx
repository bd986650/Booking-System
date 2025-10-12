"use client";

import React, { useState } from "react";
import AuthForm from "@/features/auth/ui/AuthForm";
import { RoleSwitcher } from "@/features/auth/ui/RoleSwitcher";
import { UserRole } from "@/features/auth/model/roles";

const AuthPage: React.FC = () => {
  const [role, setRole] = useState<UserRole>("EMPLOYEE");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow rounded-2xl p-6 w-full max-w-md">
        <RoleSwitcher role={role} onChange={setRole} />
        <AuthForm mode="login" role={role} />
      </div>
    </div>
  );
};

export default AuthPage;
