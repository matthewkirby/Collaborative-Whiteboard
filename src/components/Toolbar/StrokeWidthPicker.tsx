import { useBoardStore } from "../../store/boardStore";
import { PopupButton } from "../ui/PopupButton";
import { StrokeWidthPopup } from "./StrokeWidthPopup";

export const StrokeWidthPicker = () => {
  const activeStrokeWidth = useBoardStore((s) => s.activeStrokeWidth);
  const setActiveStrokeWidth = useBoardStore((s) => s.setActiveStrokeWidth);

  return (
    <PopupButton
      title="Stroke width"
      trigger={
        <div className="p-2 border-r border-y border-black bg-gray-300 hover:bg-gray-400 active:bg-blue-400 flex items-center justify-center w-10 h-full">
          <div
            className="w-5 rounded-full bg-black"
            style={{ height: activeStrokeWidth }}
          />
        </div>
      }
    >
      <StrokeWidthPopup
        value={activeStrokeWidth}
        onChange={setActiveStrokeWidth}
      />
    </PopupButton>
  );
};
