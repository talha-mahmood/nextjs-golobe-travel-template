import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type StyleoutlinedStateenabled1Type = {
  input?: string;
  label?: string;
  supportingText?: string;

  /** Style props */
  styleoutlinedStateenabledPosition?: CSSProperties["position"];
  styleoutlinedStateenabledWidth?: CSSProperties["width"];
  styleoutlinedStateenabledFlex?: CSSProperties["flex"];
  stateLayerAlignSelf?: CSSProperties["alignSelf"];
  stateLayerWidth?: CSSProperties["width"];
};

const StyleoutlinedStateenabled1: NextPage<StyleoutlinedStateenabled1Type> = ({
  input = "Input",
  label = "Label",
  supportingText = "Supporting text",
  styleoutlinedStateenabledPosition,
  styleoutlinedStateenabledWidth,
  styleoutlinedStateenabledFlex,
  stateLayerAlignSelf,
  stateLayerWidth,
}) => {
  const styleoutlinedStateenabled1Style: CSSProperties = useMemo(() => {
    return {
      position: styleoutlinedStateenabledPosition,
      width: styleoutlinedStateenabledWidth,
      flex: styleoutlinedStateenabledFlex,
    };
  }, [
    styleoutlinedStateenabledPosition,
    styleoutlinedStateenabledWidth,
    styleoutlinedStateenabledFlex,
  ]);

  const stateLayerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: stateLayerAlignSelf,
      width: stateLayerWidth,
    };
  }, [stateLayerAlignSelf, stateLayerWidth]);

  return (
    <div
      className="relative rounded-t rounded-b-none w-[210px] h-14 flex flex-col items-start justify-start text-left text-base text-gray-300 font-montserrat-medium-12"
      style={styleoutlinedStateenabled1Style}
    >
      <div className="self-stretch rounded bg-neutrals flex flex-col items-start justify-start border-[1px] border-solid border-gray-200">
        <div
          className="self-stretch rounded-t rounded-b-none flex flex-row py-2 pr-0 pl-4 items-center justify-start"
          style={stateLayerStyle}
        >
          <div className="flex-1 h-10 flex flex-col items-start justify-center relative">
            <div className="flex flex-row items-center justify-start z-[0]">
              <div className="relative">{input}</div>
            </div>
            <div className="my-0 mx-[!important] absolute top-[-16px] left-[-4px] bg-neutrals flex flex-row py-0 px-1 items-center justify-start z-[1] text-sm">
              <div className="relative">{label}</div>
            </div>
          </div>
        </div>
      </div>
      {supportingText && (
        <div className="self-stretch flex flex-row pt-1 px-4 pb-0 items-start justify-start text-sm">
          <div className="flex-1 relative">{supportingText}</div>
        </div>
      )}
    </div>
  );
};

export default StyleoutlinedStateenabled1;
