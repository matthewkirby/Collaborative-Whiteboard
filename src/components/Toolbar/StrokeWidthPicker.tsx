import { useBoardStore } from "../../store/boardStore";
import { PopupButton } from "../ui/PopupButton";
import { StrokeWidthPopup } from "./StrokeWidthPopup";
import { toolbarButtonInactive, toolbarCell } from "../ui/toolbarButtonStyles";

export const StrokeWidthPicker = () => {
  const activeStrokeWidth = useBoardStore((s) => s.activeStrokeWidth);
  const setActiveStrokeWidth = useBoardStore((s) => s.setActiveStrokeWidth);

  return (
    <PopupButton
      title="Stroke width"
      trigger={
        <div className={`${toolbarCell} ${toolbarButtonInactive} w-10 h-full`}>
          <div
            className="w-5 rounded-full bg-gray-100"
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
