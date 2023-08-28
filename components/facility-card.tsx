import type { NextPage } from "next";

type FacilityCardType = {
  testimonialText?: string;
  communityReview?: string;
  testimonialIcon?: string;
  testimonialRatingIcon?: string;
  testimonialIconImageUrl?: string;
  testimonialIconDescriptio?: string;
  testimonialIconImageUrl2?: string;
  reviewText?: string;
  studioName?: string;
  testimonialIconImage?: string;
  testimonialImageCaption?: string;
};

const FacilityCard: NextPage<FacilityCardType> = ({
  testimonialText,
  communityReview,
  testimonialIcon,
  testimonialRatingIcon,
  testimonialIconImageUrl,
  testimonialIconDescriptio,
  testimonialIconImageUrl2,
  reviewText,
  studioName,
  testimonialIconImage,
  testimonialImageCaption,
}) => {
  return (
    <div className="relative w-[400px] h-[610px] text-left text-5xl text-blackish-green font-tradegothic-bold-40">
      <div className="absolute top-[24px] left-[24px] rounded-xl bg-mediumaquamarine w-[425px] h-[586px]" />
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-neutrals shadow-[2px_4px_16px_rgba(17,_34,_17,_0.1)] flex flex-col p-6 items-center justify-start gap-[40px]">
        <div className="w-[377px] flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <b className="self-stretch relative inline-block h-20 shrink-0">
              <p className="m-0">{testimonialText}</p>
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-sm font-montserrat-medium-12">
              <div className="self-stretch relative font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:29] [-webkit-box-orient:vertical] opacity-[0.5]">
                <p className="m-0">{communityReview}</p>
              </div>
              <b className="self-stretch relative text-base font-tradegothic-bold-40 text-right">
                View more
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-sm">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src={testimonialIcon}
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src={testimonialRatingIcon}
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src={testimonialIconImageUrl}
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src={testimonialIconDescriptio}
              />
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src={testimonialIconImageUrl2}
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <b className="self-stretch relative">{reviewText}</b>
                <div className="self-stretch relative text-xs font-medium font-montserrat-medium-12 opacity-[0.5]">
                  {studioName}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-xs">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src={testimonialIconImage}
                />
                <b className="flex-1 relative opacity-[0.4]">Google</b>
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative rounded-lg max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
          alt=""
          src={testimonialImageCaption}
        />
      </div>
    </div>
  );
};

export default FacilityCard;
