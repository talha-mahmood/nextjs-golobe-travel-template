import type { NextPage } from "next";
import StyleoutlinedStateenabled from "./styleoutlined-stateenabled";
import StateDefaultChangeIconNon from "./state-default-change-icon-non";

type SubscribeNewsletterContainerType = {
  mailboxIcon?: string;
};

const SubscribeNewsletterContainer: NextPage<
  SubscribeNewsletterContainerType
> = ({ mailboxIcon }) => {
  return (
    <div className="rounded-xl bg-lightcyan shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] w-[1232px]  flex flex-row py-0 px-6 box-border items-end justify-between text-left text-25xl text-blackish-green font-tradegothic-bold-40">
      <div className="self-stretch flex flex-col py-6 px-0 items-start justify-between">
        <b className="relative leading-[54px] inline-block w-[364px]">
          Subscribe Newsletter
        </b>
        <div className="flex flex-col items-start justify-start gap-[16px] text-xl">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <b className="relative opacity-[0.8]">The Travel</b>
            <div className="relative text-base font-medium font-montserrat-medium-12 opacity-[0.7]">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </div>
          </div>
          <div className="w-[593px] flex flex-row items-center justify-start gap-[16px]">
            <StyleoutlinedStateenabled
              label="Your email address"
              supportingText="Supporting text"
           
              styleoutlinedStateenabledPosition="unset"
              styleoutlinedStateenabledWidth="unset"
              styleoutlinedStateenabledFlex="1"
              textFieldBorder="unset"
              textFieldBoxSizing="unset"
            />
            <StateDefaultChangeIconNon
              text="Subscribe"
              stateDefaultChangeIconNonPosition="unset"
              stateDefaultChangeIconNonAlignSelf="stretch"
              styleLayerBackgroundColor="#112211"
              styleLayerHeight="unset"
              styleLayerAlignSelf="stretch"
              styleLayerFlex="1"
              styleLayerBorder="unset"
              buttonFontWeight="600"
              buttonColor="#fff"
            />
          </div>
        </div>
      </div>
      <img
        className="relative w-[400px] h-[305px] overflow-hidden shrink-0"
        alt=""
        src='/emojionev1openmailboxwithloweredflag.svg'
      />
    </div>
  );
};

export default SubscribeNewsletterContainer;
