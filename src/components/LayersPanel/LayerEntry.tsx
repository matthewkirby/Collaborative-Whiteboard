import { useBoardStore } from "../../store/boardStore";
import type { ShapeModels } from "../../types/shapemodels";

interface LayerEntryProps {
  shape: ShapeModels;
}

export const LayerEntry = ({ shape }: LayerEntryProps) => {
  const selectedId = useBoardStore((s) => s.selectedId);
  const updateSelection = useBoardStore((s) => s.updateSelection);
  const isSelected = selectedId === shape.id;

  return (
    <div
      onClick={() => updateSelection(shape.id)}
      className={`px-3 py-2 cursor-pointer border-b border-gray-700 ${
        isSelected
          ? "bg-blue-900 text-blue-100"
          : "bg-gray-800 text-gray-100 hover:bg-gray-700"
      }`}
    >
      {shape.type} ({shape.id.slice(0, 6)})
    </div>
  );
};
