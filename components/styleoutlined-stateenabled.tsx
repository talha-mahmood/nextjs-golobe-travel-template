import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type StyleoutlinedStateenabledType = {
  label?: string;
  supportingText?: string;

  /** Style props */
  styleoutlinedStateenabledPosition?: CSSProperties["position"];
  styleoutlinedStateenabledWidth?: CSSProperties["width"];
  styleoutlinedStateenabledFlex?: CSSProperties["flex"];
  textFieldBorder?: CSSProperties["border"];
  textFieldBoxSizing?: CSSProperties["boxSizing"];
};

const StyleoutlinedStateenabled: NextPage<StyleoutlinedStateenabledType> = ({
  label = "Label",
  supportingText = "Supporting text",
  styleoutlinedStateenabledPosition,
  styleoutlinedStateenabledWidth,
  styleoutlinedStateenabledFlex,
  textFieldBorder,
  textFieldBoxSizing,
}) => {
  const styleoutlinedStateenabledStyle: CSSProperties = useMemo(() => {
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

  const textFieldStyle: CSSProperties = useMemo(() => {
    return {
      border: textFieldBorder,
      boxSizing: textFieldBoxSizing,
    };
  }, [textFieldBorder, textFieldBoxSizing]);

  return (
    <div
      className="relative rounded-t rounded-b-none w-[210px] h-14 flex flex-col items-start justify-start text-left text-base text-gray-300 font-montserrat-medium-12"
      style={styleoutlinedStateenabledStyle}
    >
      <div
        className="self-stretch rounded bg-neutrals flex flex-col items-start justify-start border-[1px] border-solid border-gray-200"
        style={textFieldStyle}
      >
        <div className="self-stretch rounded-t rounded-b-none flex flex-row py-2 pr-0 pl-4 items-center justify-start">
          <div className="flex-1 h-10 flex flex-col items-start justify-center">
            <div className="bg-neutrals flex flex-row items-center justify-start">
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

export default StyleoutlinedStateenabled;
