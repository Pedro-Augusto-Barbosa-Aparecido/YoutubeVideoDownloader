import { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  labelText: string;
  name: string;
}

export function Input({ name, labelText, ...rest }: InputProps) {
  return (
    <div className="flex flex-col items-start justify-center gap-3">
      <label htmlFor={name} className="font-medium text-gray-300">
        {labelText}
      </label>
      <input
        className="w-full rounded-md border-0 bg-slate-800 px-4 py-2 text-slate-500 shadow-sm outline-none placeholder:text-slate-700 focus:border-0 focus:outline-slate-700"
        {...rest}
      />
    </div>
  );
}
