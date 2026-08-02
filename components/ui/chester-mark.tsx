// Chester silhouette — footer signature, favicon source, /chester watermark.
// Uses currentColor so it adapts to any background.
// Replace path data with the real hand-drawn SVG asset when Sona delivers it.

interface ChesterMarkProps {
  className?: string;
}

export default function ChesterMark({ className }: ChesterMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Chester's Village"
      className={className}
    >
      {/* Placeholder: sitting dog silhouette — replace with real asset */}
      {/* Head */}
      <circle cx="32" cy="20" r="10" />
      {/* Ears */}
      <path d="M23 14 C20 8, 14 10, 16 17" />
      <path d="M41 14 C44 8, 50 10, 48 17" />
      {/* Body */}
      <path d="M22 28 C18 32, 16 42, 18 52 L46 52 C48 42, 46 32, 42 28 Z" />
      {/* Tail */}
      <path d="M46 48 C54 44, 56 36, 50 34" />
      {/* Front paws */}
      <path d="M24 52 L22 58" />
      <path d="M40 52 L42 58" />
    </svg>
  );
}
