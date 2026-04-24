import type React from "react";
import { useBoardStore } from "../../store/boardStore";
import { Shape } from "../Shapes/Shape";
import { resizeShape } from "../../utils/resizeShape";

export const Canvas = () => {
  const shapes = useBoardStore((s) => s.shapes);
  const updateShape = useBoardStore((s) => s.updateShape);
  const stopDrag = useBoardStore((s) => s.stopDrag);

  const draggingId = useBoardStore((s) => s.draggingId);
  const draggingOffset = useBoardStore((s) => s.draggingOffset);

  const resizeMouseDownLoc = useBoardStore((s) => s.resizeMouseDownLoc);
  const resizeDirection = useBoardStore((s) => s.resizeDirection);
  const resizeOriginalShape = useBoardStore((s) => s.resizeOriginalShape);
  const stopResize = useBoardStore((s) => s.stopResize);

  const pointerMode = useBoardStore((s) => s.pointerMode);
  const selectedId = useBoardStore((s) => s.selectedId);
  const resetSelection = useBoardStore((s) => s.resetSelection);

  const newShape = useBoardStore((s) => s.newShape);
  const startShapeSpawn = useBoardStore((s) => s.startShapeSpawn);
  const stopShapeSpawn = useBoardStore((s) => s.stopShapeSpawn);

  const handleMouseUp = () => {
    // Implement a normalization function here for all manipulated shapes
    // - If w or h = 0, shape is invisible and unselectable so delete it
    stopDrag();
    stopResize();
    if (newShape) stopShapeSpawn();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingId !== undefined && draggingOffset !== undefined) {
      const x = e.nativeEvent.offsetX - draggingOffset.x;
      const y = e.nativeEvent.offsetY - draggingOffset.y;
      updateShape(draggingId, { x, y });
    } else if (
      selectedId !== undefined &&
      resizeMouseDownLoc !== undefined &&
      resizeDirection !== undefined &&
      resizeOriginalShape !== undefined
    ) {
      const dx = e.nativeEvent.offsetX - resizeMouseDownLoc.x;
      const dy = e.nativeEvent.offsetY - resizeMouseDownLoc.y;
      const updates = resizeShape(resizeOriginalShape, resizeDirection, dx, dy);
      updateShape(selectedId, updates);
    } else if (newShape !== undefined) {
      const dx = e.nativeEvent.offsetX - newShape.x;
      const dy = e.nativeEvent.offsetY - newShape.y;
      const updates = resizeShape(newShape, "se", dx, dy);
      updateShape(newShape.id, updates);
    } else {
      return;
    }
  };

  const handleOnMouseDown = (e: React.MouseEvent) => {
    if (pointerMode === "select") {
      if (selectedId) {
        resetSelection();
      }
    } else if (pointerMode === "shape") {
      startShapeSpawn({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }
  };

  return (
    <div className="min-h-0 overflow-auto">
      <svg
        className="bg-slate-800 w-full h-full"
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseDown={(e) => handleOnMouseDown(e)}
      >
        {shapes.map((shape, i) => {
          return <Shape key={i} shape={shape} />;
        })}
      </svg>
    </div>
  );
};
