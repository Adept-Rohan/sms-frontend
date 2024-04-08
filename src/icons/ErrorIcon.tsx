import React from "react";

export const ErrorIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      viewBox="0 0 12 13"
      {...props}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M6 0.5C2.688 0.5 0 3.188 0 6.5C0 9.812 2.688 12.5 6 12.5C9.312 12.5 12 9.812 12 6.5C12 3.188 9.312 0.5 6 0.5ZM6.6 9.5H5.4V8.3H6.6V9.5ZM6.6 7.1H5.4V3.5H6.6V7.1Z"
      />
    </svg>
  );
};
