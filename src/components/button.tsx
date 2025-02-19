import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'>{
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button {...props}
     className="px-5 h-12 flex items-center justify-between bg-gray-600 text-[#6f9De2] text-sm [font-family:var(--font-oxanium)] font-semibold rounded-xl w-full hover:bg-blue-500 transition-colors duration-300 hover:text-white">
    </button>
  );
}

export default Button;
