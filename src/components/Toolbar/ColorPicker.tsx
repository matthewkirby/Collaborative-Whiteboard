import { useBoardStore } from "../../store/boardStore";
import { ColorSwatch } from "../ui/ColorSwatch";
import { PopupButton } from "../ui/PopupButton";
import { ColorPickerContents } from "./ColorPickerPopup";

export const ColorPicker = () => {
  const activeFillColor = useBoardStore((s) => s.activeFillColor);
  const activeStrokeColor = useBoardStore((s) => s.activeStrokeColor);
  const setActiveFillColor = useBoardStore((s) => s.setActiveFillColor);
  const setActiveStrokeColor = useBoardStore((s) => s.setActiveStrokeColor);

  return (
    <>
      <PopupButton
        trigger={
          <div className="w-8 h-8 border border-gray-300 p-0.5 hover:border-gray-500 transition-colors bg-white">
            <ColorSwatch
              color={activeFillColor}
              className="w-full h-full ring-1 ring-gray-800"
            />
          </div>
        }
        title="Fill Color"
      >
        <ColorPickerContents
          value={activeFillColor}
          onChange={setActiveFillColor}
        />
      </PopupButton>

      <PopupButton
        trigger={
          <div
            className="w-8 h-8 rounded-md border-gray-600 hover:border-gray-400 transition-colors bg-gray-700"
            style={{ border: `3px solid ${activeStrokeColor}` }}
          />
        }
        title={"Stroke Color"}
      >
        <ColorPickerContents
          value={activeStrokeColor}
          onChange={setActiveStrokeColor}
        />
      </PopupButton>
    </>
  );
};
