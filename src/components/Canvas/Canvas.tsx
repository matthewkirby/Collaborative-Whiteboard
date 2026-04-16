import type React from "react";
import { useBoardStore } from "../../store/boardStore";
import type { Shape } from "../../types/shapes";

export const Canvas = () => {
  const shapes = useBoardStore((s) => s.shapes);
  const updateShape = useBoardStore((s) => s.updateShape);
  const startDrag = useBoardStore((s) => s.startDrag);
  const stopDrag = useBoardStore((s) => s.stopDrag);

  const draggingId = useBoardStore((s) => s.draggingId);
  const draggingOffset = useBoardStore((s) => s.draggingOffset);

  const handleMouseDown = (e: React.MouseEvent, shape: Shape) => {
    startDrag(shape.id, {
      x: e.nativeEvent.offsetX - shape.x,
      y: e.nativeEvent.offsetY - shape.y,
    });
  };
  const handleMouseUp = () => {
    stopDrag();
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingId === undefined || draggingOffset === undefined) return;
    const x = e.nativeEvent.offsetX - draggingOffset.x;
    const y = e.nativeEvent.offsetY - draggingOffset.y;
    updateShape(draggingId, { x, y });
  };

  return (
    <div className="min-h-0 overflow-auto">
      <svg
        className="bg-slate-800 w-full h-full"
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {shapes.map((shape) => {
          if (shape.type === "rectangle") {
            return (
              <rect
                key={shape.id}
                x={shape.x}
                y={shape.y}
                width={shape.width}
                height={shape.height}
                fill="white"
                stroke="black"
                onMouseDown={(e: React.MouseEvent) => {
                  handleMouseDown(e, shape);
                }}
              />
            );
          }

          if (shape.type === "circle") {
            return (
              <circle
                key={shape.id}
                cx={shape.x}
                cy={shape.y}
                r={shape.radius}
                fill="white"
                stroke="black"
                onMouseDown={(e: React.MouseEvent) => {
                  handleMouseDown(e, shape);
                }}
              />
            );
          }

          return null;
        })}
      </svg>
    </div>
  );
};
