import type { NextPage } from "next";
import StateHoverChangeIconLeft from "./state-hover-change-icon-left";

type FlightsContainerType = {
  cardImageName?: string;
  cardTitle?: string;
  popularDestinationsText?: string;
  cardSubtitle?: string;
  actionButtonText?: string;
};

const FlightsContainer: NextPage<FlightsContainerType> = ({
  cardImageName,
  cardTitle,
  popularDestinationsText,
  cardSubtitle,
  actionButtonText,
}) => {
  return (
    <div className="relative shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] w-[604px] h-[559px] text-center text-21xl text-neutrals font-tradegothic-bold-40">
      <img
        className="absolute top-[0px] left-[0px] rounded-xl w-[604px] h-[559px] object-cover"
        alt=""
        src={cardImageName}
      />
      <div className="absolute top-[279px] left-[0px] w-[604px] h-[280px]">
        <div className="absolute top-[0px] left-[604px] rounded-t-none rounded-b-3xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(18,_18,_18,_0.75)_48.67%)] w-[604px] h-[280px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
        <div className="absolute top-[93px] left-[114px] flex flex-col items-center justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <b className="relative inline-block w-[389px]">{cardTitle}</b>
            <div className="relative text-base font-montserrat-medium-12 inline-block w-[389px]">
              {popularDestinationsText}
            </div>
          </div>
          <StateHoverChangeIconLeft
            addOutline="/paper-plane1.svg"
            text="Show Filghts"
            stateHoverChangeIconLeftPosition="unset"
            styleLayerBackgroundColor="#8dd3bb"
          />
        </div>
      </div>
    </div>
  );
};

export default FlightsContainer;
