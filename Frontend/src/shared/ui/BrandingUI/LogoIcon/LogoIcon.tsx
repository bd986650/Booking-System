import React from "react";
import styles from "./LogoIcon.module.css";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  colorClass?: string;
}

const LogoIcon: React.FC<IconProps> = ({
  size,
  colorClass = "text-black",
  ...props
}) => {
  const dimension = size || 55;

  return (
    <svg
      className={`${styles.logoIcon} ${colorClass}`}
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path className={`${styles.face} ${styles.left}`} d="M3 8v8l7 4V12z" />
      <path className={`${styles.face} ${styles.right}`} d="M17 8v8l-7 4V12z" />
      <path className={`${styles.face} ${styles.top}`} d="M3 8l7-4 7 4-7 4z" />
    </svg>
  );
};

export default LogoIcon;
