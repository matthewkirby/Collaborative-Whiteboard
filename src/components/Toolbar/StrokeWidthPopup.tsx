const STROKE_WIDTHS = [1, 2, 3, 4, 6, 8, 12];

interface StrokeWidthPopupProps {
  value: number;
  onChange: (width: number) => void;
}

export const StrokeWidthPopup = ({
  value,
  onChange,
}: StrokeWidthPopupProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-2.5 w-40 shadow-md flex flex-col gap-2">
      {STROKE_WIDTHS.map((width) => (
        <button
          key={width}
          onClick={() => onChange(width)}
          className={`flex items-center gap-3 px-2 py-1 rounded hover:bg-gray-100 transition-colors
            ${value === width ? "bg-blue-50 ring-1 ring-blue-300" : ""}`}
        >
          <div
            className="w-full rounded-full bg-black"
            style={{ height: width }}
          />
          <span className="text-xs text-gray-500 w-4 shrink-0">{width}</span>
        </button>
      ))}
    </div>
  );
};
