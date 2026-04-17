import type React from "react";
import { useBoardStore } from "../../store/boardStore";
import { Shape } from "../Shapes/Shape";

export const Canvas = () => {
  const shapes = useBoardStore((s) => s.shapes);
  const updateShape = useBoardStore((s) => s.updateShape);
  const stopDrag = useBoardStore((s) => s.stopDrag);

  const draggingId = useBoardStore((s) => s.draggingId);
  const draggingOffset = useBoardStore((s) => s.draggingOffset);

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
        {shapes.map((shape, i) => {
          return <Shape key={i} shape={shape} />;
        })}
      </svg>
    </div>
  );
};
