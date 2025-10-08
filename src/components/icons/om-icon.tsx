import type { SVGProps } from "react";

export function OmIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 10v0c-4.4183 0-8-3.5817-8-8v0c0-4.4183 3.5817-8 8-8v0c4.4183 0 8 3.5817 8 8v0c0 4.4183-3.5817 8-8 8z" transform="translate(3 3)"/>
      <path d="m11 11.5c-1.1667-1-2.5-1.5-4-1.5-2.5 0-5 1.5-5 5h1c0-2.5 2-4 4-4s3 .5 4 1.5z" transform="translate(3 3)"/>
      <path d="m18 8c-1.5 0-3-1-3.5-2.5s.5-3.5 2-3.5 3.5 1 3.5 3-2.5 3-2 3z" transform="translate(3 3)"/>
    </svg>
  );
}
