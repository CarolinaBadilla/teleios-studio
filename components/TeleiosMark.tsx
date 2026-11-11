export function TeleiosMark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Halo exterior áureo */}
      <circle
        cx="20"
        cy="20"
        r="17"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-40"
      />
      {/* Ejes de orden y simetría (cruz minimalista) */}
      <line
        x1="20"
        y1="6"
        x2="20"
        y2="34"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <line
        x1="6"
        y1="20"
        x2="34"
        y2="20"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      {/* Romboidal / compás interior */}
      <path
        d="M20 11L29 20L20 29L11 20Z"
        stroke="currentColor"
        strokeWidth="1"
        className="opacity-60"
      />
      {/* Núcleo de luz central */}
      <circle cx="20" cy="20" r="1.75" fill="currentColor" />
    </svg>
  );
}
