"use client";

import { UserRole, ROLE_LABELS } from "../model/roles";

interface RoleSwitcherProps {
  role: UserRole;
  onChange: (role: UserRole) => void;
}

export function RoleSwitcher({ role, onChange }: RoleSwitcherProps) {
  const roles: UserRole[] = ["EMPLOYEE", "LOCAL_ADMIN", "ADMIN"];

  return (
    <div className="flex justify-center gap-2 mb-4">
      {roles.map((r) => (
        <button
          key={r}
          onClick={() => onChange(r)}
          className={`px-4 py-2 rounded transition ${
            r === role ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {ROLE_LABELS[r]}
        </button>
      ))}
    </div>
  );
}
