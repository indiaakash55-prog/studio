import type { SVGProps } from "react";

export function SwastikaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
        <path d="M12.5 2.5h-1v9h-9v1h9v9h1v-9h9v-1h-9z" />
        <path d="M12.5 2.5a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v8a.5.5 0 01-1 0V3h-7.5a.5.5 0 01-.5-.5z" />
        <path d="M11.5 21.5a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-8a.5.5 0 011 0V21h7.5a.5.5 0 01.5.5z" />
        <path d="M2.5 11.5a.5.5 0 01-.5.5v8a.5.5 0 01.5.5h8a.5.5 0 010-1H3v-7.5a.5.5 0 01-.5-.5z" />
        <path d="M21.5 12.5a.5.5 0 01.5-.5v-8a.5.5 0 01-.5-.5h-8a.5.5 0 010 1H21v7.5a.5.5 0 01.5.5z" />
    </svg>
  );
}
