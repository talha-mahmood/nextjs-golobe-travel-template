import type { NextPage } from "next";

type LocationCardType = {
  locationLabel?: string;
  locationDescription?: string;
  imageLabel?: string;
  locationName?: string;
  locationImageName?: string;
  locationSubtitle?: string;
};

const LocationCard: NextPage<LocationCardType> = ({
  locationLabel,
  locationDescription,
  imageLabel,
  locationName,
  locationImageName,
  locationSubtitle,
}) => {
  return (
    <div className="w-[1232px] flex flex-row items-start justify-start gap-[32px] text-left text-base text-blackish-green font-montserrat-medium-12">
      <div className="flex-1 rounded-2xl bg-neutrals shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] flex flex-row p-4 items-center justify-start gap-[16px]">
        <div className="w-[90px] h-[90px] flex flex-col items-center justify-start">
          <img
            className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={locationLabel}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative font-semibold opacity-[0.7]">
            {locationDescription}
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-sm">
            <div className="relative font-medium">Flights</div>
            <div className="relative font-medium">•</div>
            <div className="relative font-medium">Hotels</div>
            <div className="relative font-medium">•</div>
            <div className="relative font-medium">Resorts</div>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-2xl bg-neutrals shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] flex flex-row p-4 items-center justify-start gap-[16px]">
        <div className="w-[90px] h-[90px] flex flex-col items-center justify-start">
          <img
            className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={imageLabel}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative font-semibold opacity-[0.7]">
            {locationName}
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-sm">
            <div className="relative font-medium">Flights</div>
            <div className="relative font-medium">•</div>
            <div className="relative font-medium">Hotels</div>
            <div className="relative font-medium">•</div>
            <div className="relative font-medium">Resorts</div>
          </div>
        </div>
      </div>
      <div className="flex-1 rounded-2xl bg-neutrals shadow-[0px_4px_16px_rgba(17,_34,_17,_0.05)] flex flex-row p-4 items-center justify-start gap-[16px]">
        <div className="w-[90px] h-[90px] flex flex-col items-center justify-start">
          <img
            className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={locationImageName}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
          <div className="self-stretch relative font-semibold opacity-[0.7]">
            {locationSubtitle}
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-sm">
            <div className="relative font-medium">Flights</div>
            <div className="relative font-medium">•</div>
            <div className="relative font-medium">Hotels</div>
            <div className="relative font-medium">•</div>
            <div className="relative font-medium">Resorts</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
