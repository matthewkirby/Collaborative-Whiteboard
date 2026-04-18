import { nanoid } from "nanoid";
import { useBoardStore } from "../../store/boardStore";

interface ButtonProps {
  display: string;
  name: string;
  onClick: () => void;
}

const Button = ({ display, name, onClick }: ButtonProps) => {
  const pointerMode = useBoardStore((s) => s.pointerMode);
  const isActive = pointerMode === name;

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
  const addShape = useBoardStore((s) => s.addShape);
  const setPointerMode = useBoardStore((s) => s.setPointerMode);

  const addRectangle = () => {
    addShape({
      id: nanoid(),
      type: "rectangle",
      x: 100,
      y: 100,
      width: 120,
      height: 80,
    });
  };

  const addCircle = () => {
    addShape({
      id: nanoid(),
      type: "circle",
      x: 50,
      y: 50,
      radius: 30,
    });
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
        <Button display="Rectangle" name="rectangle" onClick={addRectangle} />
        <Button display="Circle" name="circle" onClick={addCircle} />
      </span>
    </div>
  );
};
