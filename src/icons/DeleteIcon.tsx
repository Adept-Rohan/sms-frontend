import React from "react";

export const DeleteIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 12 12"
      fill="currentColor"
    >
      <path d="M3 9.5C3 10.05 3.45 10.5 4 10.5H8C8.55 10.5 9 10.05 9 9.5V4.5C9 3.95 8.55 3.5 8 3.5H4C3.45 3.5 3 3.95 3 4.5V9.5ZM9 2H7.75L7.395 1.645C7.305 1.555 7.175 1.5 7.045 1.5H4.955C4.825 1.5 4.695 1.555 4.605 1.645L4.25 2H3C2.725 2 2.5 2.225 2.5 2.5C2.5 2.775 2.725 3 3 3H9C9.275 3 9.5 2.775 9.5 2.5C9.5 2.225 9.275 2 9 2Z" />
    </svg>
  );
};
