// 4-point sparkle glyph — used exactly 3 places site-wide:
// 1. Next to the hero tagline
// 2. Next to the member count number
// 3. Next to the join CTA
// Always honey-colored. Never elsewhere.

interface SparkleProps {
  className?: string;
}

export default function Sparkle({ className }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0 L13.8 10.2 L24 12 L13.8 13.8 L12 24 L10.2 13.8 L0 12 L10.2 10.2 Z" />
    </svg>
  );
}
