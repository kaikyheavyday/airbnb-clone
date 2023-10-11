import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outlined?: boolean;
  small?: boolean;
  icon?: IconType;
}

export default function Button({
  label,
  onClick,
  disabled,
  outlined,
  small,
  icon: Icon,
}: ButtonProps) {
  return (
    <button
      className={`relative disabled:opacity-70 disalbed:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${
        outlined
          ? "bg-white border-black text-black"
          : " bg-rose-500 border-rose-500 text-white"
      } ${
        small ? "py-1 text-sm font-light border-[1px]" : "py-3 text-md border-2"
      }`}
      onClick={onClick}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
}
