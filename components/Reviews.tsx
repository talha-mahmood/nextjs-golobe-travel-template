import type { NextPage } from "next";
import StateDefaultChangeIconNon from "./state-default-change-icon-non";
import FacilityCard from "./facility-card";

const Reviews: NextPage = () => {
  return (
    <div className="absolute bottom-[663px] left-[104px] w-[1323px] flex flex-col items-start justify-start gap-[40px] text-left text-13xl text-black font-montserrat-medium-12">
      <div className="w-[1232px] flex flex-row items-center justify-start gap-[24px]">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch relative font-semibold inline-block h-9 shrink-0">
            Reviews
          </div>
          <div className="relative text-base inline-block w-[851px]">
            What people says about Golobe facilities
          </div>
        </div>
        <StateDefaultChangeIconNon
          text="See All"
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
      <div className="flex flex-row items-start justify-start gap-[10px] text-5xl text-blackish-green font-tradegothic-bold-40 ">
        {/* <div className="relative w-[400px] h-[608px]">
          <div className="absolute top-[22px] left-[25px] rounded-xl bg-mediumaquamarine w-[425px] h-[586px]" />
          <div className="absolute top-[0px] left-[-1px] rounded-xl bg-neutrals shadow-[2px_4px_16px_rgba(17,_34,_17,_0.1)] flex flex-col p-6 items-center justify-start gap-[40px]">
            <div className="w-[377px] flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <b className="self-stretch relative inline-block h-20 shrink-0">
                  <p className="m-0">“A real sense of community, nurtured”</p>
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-sm font-montserrat-medium-12">
                  <div className="self-stretch relative font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:29] [-webkit-box-orient:vertical] opacity-[0.5]">
                    <p className="m-0">
                      Really appreciate the help and support from the staff
                      during these tough times. Shoutout to Katie for helping me
                      always, even when I was out of the country. And always
                      available when needed.
                    </p>
                  </div>
                  <b className="self-stretch relative font-tradegothic-bold-40 text-right">
                    View more
                  </b>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-sm">
                <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/ionstar.svg"
                  />
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/ionstar.svg"
                  />
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/ionstar.svg"
                  />
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/ionstar.svg"
                  />
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/ionstar.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                    <b className="self-stretch relative">Olga</b>
                    <div className="self-stretch relative text-xs font-medium font-montserrat-medium-12 opacity-[0.5]">
                      Weave Studios – Kai Tak
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-xs">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/flatcoloriconsgoogle.svg"
                    />
                    <b className="flex-1 relative opacity-[0.4]">Google</b>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative rounded-lg max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
              alt=""
              src="/rectangle-36@2x.png"
            />
          </div>
        </div> */}
        <FacilityCard
          testimonialText="“A real sense of community, nurtured”"
          communityReview="Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed."
          testimonialIcon="/ionstar.svg"
          testimonialRatingIcon="/ionstar.svg"
          testimonialIconImageUrl="/ionstar.svg"
          testimonialIconDescriptio="/ionstar.svg"
          testimonialIconImageUrl2="/ionstar.svg"
          reviewText="Eliot"
          studioName="Weave Studios – Kai Tak"
          testimonialIconImage="/flatcoloriconsgoogle.svg"
          testimonialImageCaption="/rectangle-362@2x.png"
        />
        <FacilityCard
          testimonialText="“A real sense of community, nurtured”"
          communityReview="Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed."
          testimonialIcon="/ionstar.svg"
          testimonialRatingIcon="/ionstar.svg"
          testimonialIconImageUrl="/ionstar.svg"
          testimonialIconDescriptio="/ionstar.svg"
          testimonialIconImageUrl2="/ionstar.svg"
          reviewText="Eliot"
          studioName="Weave Studios – Kai Tak"
          testimonialIconImage="/flatcoloriconsgoogle.svg"
          testimonialImageCaption="/rectangle-362@2x.png"
        />
          <FacilityCard
          testimonialText="“A real sense of community, nurtured”"
          communityReview="Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed."
          testimonialIcon="/ionstar.svg"
          testimonialRatingIcon="/ionstar.svg"
          testimonialIconImageUrl="/ionstar.svg"
          testimonialIconDescriptio="/ionstar.svg"
          testimonialIconImageUrl2="/ionstar.svg"
          reviewText="Eliot"
          studioName="Weave Studios – Kai Tak"
          testimonialIconImage="/flatcoloriconsgoogle.svg"
          testimonialImageCaption="/rectangle-362@2x.png"
        />
      </div>
    </div>
  );
};

export default Reviews;
