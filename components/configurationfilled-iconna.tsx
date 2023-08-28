import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ConfigurationfilledIconnaType = {
  labelText?: string;

  /** Style props */
  configurationfilledIconnaPosition?: CSSProperties["position"];
  configurationfilledIconnaBackgroundColor?: CSSProperties["backgroundColor"];
  labelTextFontWeight?: CSSProperties["fontWeight"];
  labelTextFontFamily?: CSSProperties["fontFamily"];
  labelTextColor?: CSSProperties["color"];
};

const ConfigurationfilledIconna: NextPage<ConfigurationfilledIconnaType> = ({
  labelText,
  configurationfilledIconnaPosition,
  configurationfilledIconnaBackgroundColor,
  labelTextFontWeight,
  labelTextFontFamily,
  labelTextColor,
}) => {
  const configurationfilledIconnaStyle: CSSProperties = useMemo(() => {
    return {
      position: configurationfilledIconnaPosition,
      backgroundColor: configurationfilledIconnaBackgroundColor,
    };
  }, [
    configurationfilledIconnaPosition,
    configurationfilledIconnaBackgroundColor,
  ]);

  const labelTextStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: labelTextFontWeight,
      fontFamily: labelTextFontFamily,
      color: labelTextColor,
    };
  }, [labelTextFontWeight, labelTextFontFamily, labelTextColor]);

  return (
    <div
      className="relative rounded-lg bg-orange-range-orange-90 h-12 overflow-hidden flex flex-col items-center justify-center text-center text-sm text-neutrals font-medium-14"
      style={configurationfilledIconnaStyle}
    >
      <div className="self-stretch flex-1 flex flex-row py-2.5 px-6 items-center justify-center">
        <div className="relative font-medium" style={labelTextStyle}>
          {labelText}
        </div>
      </div>
    </div>
  );
};

export default ConfigurationfilledIconna;
