import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type StateDefaultChangeIconNonType = {
  text?: string;

  /** Style props */
  stateDefaultChangeIconNonPosition?: CSSProperties["position"];
  stateDefaultChangeIconNonAlignSelf?: CSSProperties["alignSelf"];
  styleLayerBackgroundColor?: CSSProperties["backgroundColor"];
  styleLayerHeight?: CSSProperties["height"];
  styleLayerAlignSelf?: CSSProperties["alignSelf"];
  styleLayerFlex?: CSSProperties["flex"];
  styleLayerBorder?: CSSProperties["border"];
  buttonFontWeight?: CSSProperties["fontWeight"];
  buttonColor?: CSSProperties["color"];
};

const StateDefaultChangeIconNon: NextPage<StateDefaultChangeIconNonType> = ({
  text = "Button",
  stateDefaultChangeIconNonPosition,
  stateDefaultChangeIconNonAlignSelf,
  styleLayerBackgroundColor,
  styleLayerHeight,
  styleLayerAlignSelf,
  styleLayerFlex,
  styleLayerBorder,
  buttonFontWeight,
  buttonColor,
}) => {
  const stateDefaultChangeIconNonStyle: CSSProperties = useMemo(() => {
    return {
      position: stateDefaultChangeIconNonPosition,
      alignSelf: stateDefaultChangeIconNonAlignSelf,
    };
  }, [stateDefaultChangeIconNonPosition, stateDefaultChangeIconNonAlignSelf]);

  const styleLayerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: styleLayerBackgroundColor,
      height: styleLayerHeight,
      alignSelf: styleLayerAlignSelf,
      flex: styleLayerFlex,
      border: styleLayerBorder,
    };
  }, [
    styleLayerBackgroundColor,
    styleLayerHeight,
    styleLayerAlignSelf,
    styleLayerFlex,
    styleLayerBorder,
  ]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: buttonFontWeight,
      color: buttonColor,
    };
  }, [buttonFontWeight, buttonColor]);

  return (
    <div
      className="relative flex flex-col items-start justify-start text-left text-sm text-blackish-green font-montserrat-medium-12"
      style={stateDefaultChangeIconNonStyle}
    >
      <div
        className="rounded bg-mint-green h-12 flex flex-row py-2 px-4 box-border items-center justify-center"
        style={styleLayerStyle}
      >
        <div className="relative font-medium" style={buttonStyle}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default StateDefaultChangeIconNon;
