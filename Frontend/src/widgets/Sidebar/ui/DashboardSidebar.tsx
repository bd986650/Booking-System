"use client";

import React from "react";
import { UserRole } from "@/features/auth/model/roles";
import Link from "next/link";
import { Home, Building2, Users, Map, BarChart3 } from "lucide-react";

interface DashboardSidebarProps {
  role?: UserRole;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ role = "EMPLOYEE" }) => {
  // 🔧 Навигация по ролям
  const navItems: Record<UserRole, { label: string; href: string; icon: React.ElementType }[]> = {
    ADMIN: [
      { label: "Офисы", href: "/dashboard/admin/offices", icon: Building2 },
      { label: "Пользователи", href: "/dashboard/admin/users", icon: Users },
      { label: "Статистика", href: "/dashboard/admin/stats", icon: BarChart3 },
    ],
    LOCAL_ADMIN: [
      { label: "Мой офис", href: "/dashboard/local-admin/office", icon: Map },
      { label: "Сотрудники", href: "/dashboard/local-admin/users", icon: Users },
    ],
    EMPLOYEE: [
      { label: "Главная", href: "/dashboard/employee", icon: Home },
      { label: "Карта офиса", href: "/dashboard/employee/map", icon: Map },
      { label: "Мои бронирования", href: "/dashboard/employee/bookings", icon: BarChart3 },
    ],
  };

  return (
    <aside className="w-64 bg-white border-r flex flex-col">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-blue-600">Меню</h2>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-2">
        {navItems[role].map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center space-x-3 p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
