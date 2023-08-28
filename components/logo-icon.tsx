import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type LogoIconType = {
  logoText?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const LogoIcon: NextPage<LogoIconType> = ({
  logoText,
  propWidth,
  propHeight,
}) => {
  const logoIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <img
      className="relative w-[120px] h-[39.15px] overflow-hidden shrink-0"
      alt=""
      src='/logo.svg'
      style={logoIconStyle}
    />
  );
};

export default LogoIcon;
