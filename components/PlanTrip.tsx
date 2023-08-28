import type { NextPage } from "next";
import StateDefaultChangeIconNon from "./state-default-change-icon-non";
import LocationCard from "./location-card";

const PlanTrip: NextPage = () => {
  return (
    <div className="absolute top-[892px] left-[104px] flex flex-col items-start justify-start gap-[40px] text-left text-13xl text-black font-montserrat-medium-12">
      <div className="w-[1232px] flex flex-row items-center justify-start gap-[24px]">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch relative font-semibold inline-block h-9 shrink-0">
            Plan your perfect trip
          </div>
          <div className="self-stretch relative text-base text-blackish-green opacity-[0.75]">{`Search Flights & Places Hire to our most popular destinations`}</div>
        </div>
        <StateDefaultChangeIconNon
          text="See more places"
          stateDefaultChangeIconNonPosition="unset"
          stateDefaultChangeIconNonAlignSelf="unset"
          styleLayerBackgroundColor="unset"
          styleLayerHeight="40px"
          styleLayerAlignSelf="unset"
          styleLayerFlex="unset"
          styleLayerBorder="1px solid #8dd3bb"
          buttonFontWeight="500"
          buttonColor="#112211"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[32px] text-base text-blackish-green">
        <LocationCard
          locationLabel="/rectangle-3@2x.png"
          locationDescription="Istanbul, Turkey"
          imageLabel="/rectangle-32@2x.png"
          locationName="Sydney, Australia"
          locationImageName="/rectangle-4@2x.png"
          locationSubtitle="Baku, Azerbaijan"
        />
        <LocationCard
          locationLabel="/rectangle-41@2x.png"
          locationDescription="Malé, Maldives"
          imageLabel="/rectangle-33@2x.png"
          locationName="Paris, France"
          locationImageName="/rectangle-42@2x.png"
          locationSubtitle="New York, US"
        />
        <LocationCard
          locationLabel="/rectangle-34@2x.png"
          locationDescription="London, UK"
          imageLabel="/rectangle-35@2x.png"
          locationName="Tokyo, Japan"
          locationImageName="/rectangle-43@2x.png"
          locationSubtitle="Dubai, UAE"
        />
      </div>
    </div>
  );
};

export default PlanTrip;
