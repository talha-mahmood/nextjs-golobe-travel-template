import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type StateHoverChangeIconLeftType = {
  addOutline?: string;
  text?: string;

  /** Style props */
  stateHoverChangeIconLeftPosition?: CSSProperties["position"];
  styleLayerBackgroundColor?: CSSProperties["backgroundColor"];
};

const StateHoverChangeIconLeft: NextPage<StateHoverChangeIconLeftType> = ({
  addOutline,
  text = "Button",
  stateHoverChangeIconLeftPosition,
  styleLayerBackgroundColor,
}) => {
  const stateHoverChangeIconLeftStyle: CSSProperties = useMemo(() => {
    return {
      position: stateHoverChangeIconLeftPosition,
    };
  }, [stateHoverChangeIconLeftPosition]);

  const styleLayer1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: styleLayerBackgroundColor,
    };
  }, [styleLayerBackgroundColor]);

  return (
    <div
      className="relative flex flex-col items-start justify-start text-left text-sm text-blackish-green font-montserrat-medium-12"
      style={stateHoverChangeIconLeftStyle}
    >
      <div
        className="rounded bg-paleturquoise h-12 flex flex-row py-2 px-4 box-border items-center justify-center gap-[4px]"
        style={styleLayer1Style}
      >
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0"
          alt=""
          src={addOutline}
        />
        <div className="relative font-medium">{text}</div>
      </div>
    </div>
  );
};

export default StateHoverChangeIconLeft;
