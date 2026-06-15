import { useBoardStore, type ShapeToolTypes } from "../../store/boardStore";
import { ActionButton, ToolbarButton } from "../ui/ToolbarButtons";
import { ColorPicker } from "./ColorPicker";
import { StrokeWidthPicker } from "./StrokeWidthPicker";

export const Toolbar = () => {
  const setPointerMode = useBoardStore((s) => s.setPointerMode);
  const setShapeToolMode = useBoardStore((s) => s.setShapeToolMode);
  const deleteSelectedShape = useBoardStore((s) => s.deleteSelectedShape);
  const resetBoard = useBoardStore((s) => s.resetBoard);

  const choseShapeMode = (type: ShapeToolTypes) => {
    setPointerMode("shape");
    setShapeToolMode(type);
  };

  return (
    <div className="flex bg-gray-900 p-2 gap-2 items-center">
      <div className="flex">
        <ToolbarButton
          display="Pen"
          name="pen"
          onClick={() => setPointerMode("pen")}
        />
        <ToolbarButton
          display="Select"
          name="select"
          onClick={() => setPointerMode("select")}
        />
        <ToolbarButton
          display="None"
          name="none"
          onClick={() => setPointerMode("none")}
        />
      </div>
      <div className="flex">
        <ToolbarButton
          display="Rectangle"
          name="rectangle"
          onClick={() => choseShapeMode("rectangle")}
        />
        <ToolbarButton
          display="Ellipse"
          name="circle"
          onClick={() => choseShapeMode("circle")}
        />
      </div>
      <div className="flex gap-1">
        <ColorPicker />
        <StrokeWidthPicker />
      </div>
      <div className="flex ml-auto">
        <ActionButton display="Trash" onClick={() => deleteSelectedShape()} />
        <ActionButton display="Reset" onClick={() => resetBoard()} />
      </div>
    </div>
  );
};
