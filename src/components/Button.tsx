import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[] | string;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="w-72 rounded-md bg-slate-800 py-2 text-sm font-medium text-gray-300 transition-all duration-500 hover:scale-95 hover:brightness-125"
      {...rest}
    >
      {children}
    </button>
  );
}
