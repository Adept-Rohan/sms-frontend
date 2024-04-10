import React from "react";
export const NoticeIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="sms">
        <path
          id="Vector"
          d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM7 9H9V11H7V9ZM15 9H17V11H15V9ZM11 9H13V11H11V9Z"
        />
      </g>
    </svg>
  );
};
