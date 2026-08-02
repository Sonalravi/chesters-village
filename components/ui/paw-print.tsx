// Paw print icon — used on /pups only. Never on other pages.

interface PawPrintProps {
  className?: string;
}

export default function PawPrint({ className }: PawPrintProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {/* Toe beans */}
      <ellipse cx="6" cy="5" rx="1.8" ry="2.2" />
      <ellipse cx="11" cy="3.5" rx="1.8" ry="2.2" />
      <ellipse cx="16" cy="4" rx="1.8" ry="2.2" />
      <ellipse cx="20" cy="6.5" rx="1.6" ry="2" />
      {/* Main pad */}
      <path d="M12 9 C8 9, 5 12, 5.5 16 C6 19.5, 8.5 21, 12 21 C15.5 21, 18 19.5, 18.5 16 C19 12, 16 9, 12 9 Z" />
    </svg>
  );
}
