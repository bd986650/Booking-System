export type UserRole = "EMPLOYEE" | "LOCAL_ADMIN" | "ADMIN";

export const ROLE_LABELS: Record<UserRole, string> = {
  EMPLOYEE: "Сотрудник",
  LOCAL_ADMIN: "Админ Офиса",
  ADMIN: "Админ Компании",
};
