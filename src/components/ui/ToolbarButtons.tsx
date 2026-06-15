import { useBoardStore } from "../../store/boardStore";
import {
  toolbarActionButton,
  toolbarButtonActive,
  toolbarButtonInactive,
  toolbarCell,
} from "./toolbarButtonStyles";

interface ToolbarButtonProps {
  display: string;
  name: string;
  onClick: () => void;
}

export const ToolbarButton = ({
  display,
  name,
  onClick,
}: ToolbarButtonProps) => {
  const pointerMode = useBoardStore((s) => s.pointerMode);
  const shapeToolMode = useBoardStore((s) => s.shapeToolMode);
  const isActive =
    pointerMode === "shape" ? shapeToolMode === name : pointerMode === name;
  return (
    <button
      className={`${toolbarCell} ${isActive ? toolbarButtonActive : toolbarButtonInactive}`}
      onClick={onClick}
    >
      {display}
    </button>
  );
};

interface ActionButtonProps {
  display: string;
  onClick: () => void;
}

export const ActionButton = ({ display, onClick }: ActionButtonProps) => {
  return (
    <button className={toolbarActionButton} onClick={onClick}>
      {display}
    </button>
  );
};
