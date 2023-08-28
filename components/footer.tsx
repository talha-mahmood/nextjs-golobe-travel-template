import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import SubscribeNewsletterContainer from "./subscribe-newsletter-container";
import LogoIcon from "./logo-icon";

type FooterType = {
  emojioneV1openMailboxWith?: string;
  logo?: string;
  akarIconsfacebookFill?: string;
  akarIconstwitterFill?: string;
  akarIconsyoutubeFill?: string;
  antDesigninstagramFilled?: string;

  /** Style props */
  footerPosition?: CSSProperties["position"];
  footerBottom?: CSSProperties["bottom"];
  footerLeft?: CSSProperties["left"];
};

const Footer: NextPage<FooterType> = ({
  emojioneV1openMailboxWith,
  logo,
  akarIconsfacebookFill,
  akarIconstwitterFill,
  akarIconsyoutubeFill,
  antDesigninstagramFilled,
  footerPosition,
  footerBottom,
  footerLeft,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      position: footerPosition,
      bottom: footerBottom,
      left: footerLeft,
    };
  }, [footerPosition, footerBottom, footerLeft]);

  return (
    <div
      className="relative rounded-11xl shadow-[0px_0px_16px_rgba(0,_0,_0,_0.02)] w-[1440px] h-[573px] flex flex-col items-center justify-end text-left text-base text-blackish-green font-tradegothic-bold-40"
      style={footerStyle}
    >
      <div className="bg-mint-green h-[422px] flex flex-col pt-8 px-[104px] pb-16 box-border items-center justify-end gap-[64px]">
        <SubscribeNewsletterContainer mailboxIcon="/emojionev1openmailboxwithloweredflag1.svg" />
        <div className="w-[1232px] flex flex-row items-start justify-start gap-[140px]">
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <LogoIcon
              logoText="/logo2.svg"
              propWidth="120px"
              propHeight="39.15px"
            />
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={akarIconsfacebookFill}
              />
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={akarIconstwitterFill}
              />
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={akarIconsyoutubeFill}
              />
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={antDesigninstagramFilled}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-end gap-[24px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <b className="relative">Our Destinations</b>
              <div className="flex flex-col items-start justify-start gap-[12px] text-sm font-montserrat-medium-12">
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  Canada
                </div>
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  Alaksa
                </div>
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  France
                </div>
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  Iceland
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <b className="relative">Our Activities</b>
              <div className="flex flex-col items-start justify-start gap-[12px] text-sm font-montserrat-medium-12">
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  Northern Lights
                </div>
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">{`Cruising & sailing`}</div>
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  Multi-activities
                </div>
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  Kayaing
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <b className="relative">Travel Blogs</b>
              <div className="flex flex-col items-start justify-start gap-[12px] text-sm font-montserrat-medium-12">
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  Bali Travel Guide
                </div>
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  Sri Lanks Travel Guide
                </div>
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  Peru Travel Guide
                </div>
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  Bali Travel Guide
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <b className="relative">About Us</b>
              <div className="flex flex-col items-start justify-start gap-[12px] text-sm font-montserrat-medium-12">
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  Our Story
                </div>
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  Work with us
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
              <b className="relative">Contact Us</b>
              <div className="flex flex-col items-start justify-start gap-[12px] text-sm font-montserrat-medium-12">
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  Our Story
                </div>
                <div className="relative font-medium inline-block w-[175.2px] opacity-[0.7]">
                  Work with us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
