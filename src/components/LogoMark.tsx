export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 24L14 4L24 24H4Z"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
