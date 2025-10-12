"use client";

import React from "react";
import { UserRole } from "@/features/auth/model/roles";
import LogoIcon from "@/shared/ui/BrandingUI/LogoIcon/LogoIcon";

interface DashboardHeaderProps {
  userName?: string;
  role?: UserRole;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  userName = "Иван Иванов",
  role = "EMPLOYEE",
}) => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-sm">
      {/* Левая часть — логотип / название */}
      <div className="flex items-center space-x-2">
        <LogoIcon size={40} colorClass="text-blue-500" />
        <span className="text-xl font-semibold text-blue-600">Кубик</span>
      </div>

      {/* Правая часть — пользователь */}
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="font-medium text-gray-800">{userName}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
        <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
          Выйти
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
