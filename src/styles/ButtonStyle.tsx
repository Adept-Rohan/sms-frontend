import { tv } from "tailwind-variants";

export const buttonStyle = tv({
  base: "justify-between items-center gap-[10px] rounded bg-primary-800 text-[#FFFFFF] font-system",
  variants: {
    color: {
      confirmButton: "bg-primary-800 text-primary-50",
      cancelButton:
        " bg-primary-50 outline outline-offset outline-1  text-primary-800",
      danger: "bg-[#DC362E] text-primary-50",
      loginButton: " bg-primary-800 text-primary-50",
    },
    size: {
      xs: "w-[194.5px] h-[40px] text-[14px] ",
      sm: "w-[399px] h-[40px] text-[14px]",
      md: "w-[181px] h-[40px] gap-[10px] text-[14px]",
      lg: "w-[380px] h-[40px] gap-[10px] text-[14px]",
    },
  },
});
