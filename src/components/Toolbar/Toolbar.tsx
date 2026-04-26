import { useBoardStore, type ShapeToolTypes } from "../../store/boardStore";
import { ColorPicker } from "./ColorPicker";

interface ButtonProps {
  display: string;
  name: string;
  onClick: () => void;
}

const Button = ({ display, name, onClick }: ButtonProps) => {
  const pointerMode = useBoardStore((s) => s.pointerMode);
  const shapeToolMode = useBoardStore((s) => s.shapeToolMode);
  const isActive =
    pointerMode === "shape" ? shapeToolMode === name : pointerMode === name;

  return (
    <button
      className={`p-2 first:border-l border-r border-y border-black ${isActive ? "underline bg-blue-200 hover:bg-blue-300" : "bg-gray-300 hover:bg-gray-400"} active:bg-blue-400`}
      onClick={() => onClick()}
    >
      {display}
    </button>
  );
};

export const Toolbar = () => {
  const setPointerMode = useBoardStore((s) => s.setPointerMode);
  const setShapeToolMode = useBoardStore((s) => s.setShapeToolMode);
  const deleteSelectedShape = useBoardStore((s) => s.deleteSelectedShape);

  const choseShapeMode = (type: ShapeToolTypes) => {
    setPointerMode("shape");
    setShapeToolMode(type);
  };

  return (
    <div className="flex bg-slate-600 p-2 gap-2 items-center">
      <div className="flex">
        <Button
          display="Pen"
          name="pen"
          onClick={() => setPointerMode("pen")}
        />
        <Button
          display="Select"
          name="select"
          onClick={() => setPointerMode("select")}
        />
        <Button
          display="None"
          name="none"
          onClick={() => setPointerMode("none")}
        />
      </div>
      <div className="flex">
        <Button
          display="Rectangle"
          name="rectangle"
          onClick={() => choseShapeMode("rectangle")}
        />
        <Button
          display="Ellipse"
          name="circle"
          onClick={() => choseShapeMode("circle")}
        />
      </div>
      <div className="flex gap-1">
        <ColorPicker />
      </div>
      <div className="flex ml-auto">
        <Button
          display="Trash"
          name="trash"
          onClick={() => deleteSelectedShape()}
        />
        <Button
          display="Reset"
          name="trash"
          onClick={() => console.log("TBD")}
        />
      </div>
    </div>
  );
};
