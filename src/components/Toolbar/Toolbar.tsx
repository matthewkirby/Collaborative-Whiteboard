import { useBoardStore, type ShapeToolTypes } from "../../store/boardStore";

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

  // const addShapeHandler = (type: ShapeTypes) => {
  //   addShape({
  //     id: nanoid(),
  //     type: type,
  //     x: 100,
  //     y: 100,
  //     width: 120,
  //     height: 80,
  //   });
  // };

  const choseShapeMode = (type: ShapeToolTypes) => {
    setPointerMode("shape");
    setShapeToolMode(type);
  };

  return (
    <div className="flex bg-slate-600 p-2 gap-2">
      <span>
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
      </span>
      <span>
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
      </span>
    </div>
  );
};
