import { useBoardStore } from "../../store/boardStore";
import { LayerEntry } from "./LayerEntry";

export const LayersPanel = () => {
  const showLayersPanel = useBoardStore((s) => s.showLayersPanel);
  const shapes = useBoardStore((s) => s.shapes);

  if (!showLayersPanel) return null;

  return (
    <div className="absolute top-16 right-4 w-56 max-h-80 overflow-y-auto bg-gray-800 border border-gray-600 rounded shadow-lg z-50">
      {shapes.length === 0 ? (
        <div className="px-3 py-2 text-gray-400 text-sm">No elements</div>
      ) : (
        shapes.map((shape) => <LayerEntry key={shape.id} shape={shape} />)
      )}
    </div>
  );
};
