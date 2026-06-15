// src/components/ui/ColorSwatch.tsx
interface ColorSwatchProps {
  color: string;
  className?: string;
}

export const ColorSwatch = ({ color, className = "" }: ColorSwatchProps) => {
  if (color === "transparent") {
    return (
      <div className={`relative overflow-hidden bg-white ${className}`}>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 32 32"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="32"
            x2="32"
            y2="0"
            stroke="#f44336"
            strokeWidth="2"
          />
        </svg>
      </div>
    );
  }
  return <div className={className} style={{ background: color }} />;
};
