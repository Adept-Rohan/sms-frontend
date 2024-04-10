import React from "react";
export const UserIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      {...props}
      viewBox="0 0 80 73"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="person">
        <path
          id="Vector"
          d="M39.9998 44C48.1032 44 54.6665 37.4367 54.6665 29.3334C54.6665 21.23 48.1032 14.6667 39.9998 14.6667C31.8965 14.6667 25.3332 21.23 25.3332 29.3334C25.3332 37.4367 31.8965 44 39.9998 44ZM39.9998 51.3334C30.2098 51.3334 10.6665 56.2467 10.6665 66V69.6667C10.6665 71.6834 12.3165 73.3334 14.3332 73.3334H65.6665C67.6832 73.3334 69.3332 71.6834 69.3332 69.6667V66C69.3332 56.2467 49.7898 51.3334 39.9998 51.3334Z"
        />
      </g>
    </svg>
  );
};