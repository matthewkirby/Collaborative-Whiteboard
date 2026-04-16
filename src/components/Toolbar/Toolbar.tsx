import { nanoid } from "nanoid"
import { useBoardStore } from "../../store/boardStore"

export const Toolbar = () => {
  const addShape = useBoardStore((s) => s.addShape)

  const addRectangle = () => {
    addShape({
      id: nanoid(),
      type: "rectangle",
      x: 100,
      y: 100,
      width: 120,
      height: 80,
    })
  }

  const addCircle = () => {
    addShape({
      id: nanoid(),
      type: "circle",
      x: 50,
      y: 50,
      radius: 30,
    })
  }

  return (
    <div className="bg-slate-600 p-2">
      <Button name="Rectangle" onClick={addRectangle} />
      <Button name="Circle" onClick={addCircle} />
    </div>
  );
};

interface ButtonProps {
  name: string;
  onClick: () => void;
}

const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <button className="p-2 first:border-l border-r border-y border-black bg-gray-300 hover:bg-gray-400 active:bg-blue-400" onClick={() => onClick()}>
      {name}
    </button>
  );
};
