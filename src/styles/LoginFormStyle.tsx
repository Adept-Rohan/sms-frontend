import { tv } from "tailwind-variants";

export const loginFormStyle = tv({
  slots: {
    inputField:
      "appearance-none block w-[399px] text-primary-800 border border-primary-800 bg-primary-200 rounded-[4px] py-3 px-4 mb-3 leading-tight font-system focus:outline-none placeholder-primary-800",
    label: "text-primary-800 font-normal font-system text-sm leading-normal",
    labelError: "text-red-500 font-normal text-sm font-system leading-normal",
    inputFieldError:
      "appearance-none block w-[399px] text-[#DC362E] border border-[#DC362E] bg-primary-200 rounded-[4px] py-3 px-4 mb-3 leading-tight font-system focus:outline-none placeholder-[#DC362E]",
    errorText: "text-[10px] font-medium font-system text-[#DC362E]",
  },
});
