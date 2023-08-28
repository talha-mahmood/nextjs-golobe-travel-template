import type { NextPage } from "next";
import StyleoutlinedStateenabled2 from "./styleoutlined-stateenabled2";
import StyleoutlinedStateenabled1 from "./styleoutlined-stateenabled1";
import StateHoverChangeIconLeft from "./state-hover-change-icon-left";
import FlightForm from "./FlightForm";

const FlightPortion: NextPage = () => {
  return (
    // <div className="absolute top-[532px] left-[104px] rounded-2xl bg-neutrals shadow-[0px_4px_16px_rgba(141,_211,_187,_0.15)] w-[1150px] flex flex-col pt-4 px-8 pb-8 box-border items-start justify-start gap-[32px] text-left text-base text-blackish-green font-montserrat-medium-12">
    //   <div className="absolute my-0 mx-[!important] top-[77px] left-[31px] box-border w-[104px] h-1 z-[0] border-t-[4px] border-solid border-mint-green" />
    //   <div className="flex flex-col items-start justify-start gap-[48px] z-[1]">
    //     <div className="flex flex-row items-center justify-start gap-[32px]">
    //       <div className="flex flex-row items-center justify-start gap-[8px]">
    //         <img
    //           className="relative w-6 h-6 overflow-hidden shrink-0"
    //           alt=""
    //           src="/airplane.svg"
    //         />
    //         <div className="relative font-semibold">Flights</div>
    //       </div>
    //       <div className="relative box-border w-px h-[49px] border-r-[1px] border-solid border-lavender" />
    //       <div className="flex flex-row items-center justify-start gap-[8px]">
    //         <img
    //           className="relative w-6 h-6 overflow-hidden shrink-0"
    //           alt=""
    //           src="/ionbed.svg"
    //         />
    //         <div className="relative font-semibold">Stays</div>
    //       </div>
    //     </div>
    //     <div className="w-[1100px] flex flex-row items-center justify-start gap-[24px]">
    //       <StyleoutlinedStateenabled2
    //         input="Lahore - Karachi"
    //         label="From - To"
    //         chevronDown="/ionswaphorizontal.svg"
    //         supportingText="Supporting text"
    //         styleoutlinedStateenabledPosition="unset"
    //         styleoutlinedStateenabledWidth="unset"
    //         styleoutlinedStateenabledFlex="1"
    //       />
    //       <StyleoutlinedStateenabled2
    //         input="Return"
    //         label="Trip"
    //         chevronDown="/chevron-down.svg"
    //         supportingText="Supporting text"
    //         styleoutlinedStateenabledPosition="unset"
    //         styleoutlinedStateenabledWidth="140px"
    //         styleoutlinedStateenabledFlex="unset"
    //       />
    //       <StyleoutlinedStateenabled1
    //         input="07 Nov 22 - 13 Nov 22"
    //         label="Depart- Return"
    //         supportingText="Supporting text"
    //         styleoutlinedStateenabledPosition="unset"
    //         styleoutlinedStateenabledWidth="unset"
    //         styleoutlinedStateenabledFlex="1"
    //         stateLayerAlignSelf="unset"
    //         stateLayerWidth="210px"
    //       />
    //       <StyleoutlinedStateenabled1
    //         input="1 Passenger, Economy"
    //         label="Passenger - Class"
    //         supportingText="Supporting text"
    //         styleoutlinedStateenabledPosition="unset"
    //         styleoutlinedStateenabledWidth="unset"
    //         styleoutlinedStateenabledFlex="1"
    //         stateLayerAlignSelf="stretch"
    //         stateLayerWidth="unset"
    //       />
    //     </div>
    //   </div>
    //   <div className="self-stretch flex flex-row items-center justify-end gap-[24px] z-[2]">
    //     <StateHoverChangeIconLeft
    //       addOutline="/addoutline.svg"
    //       text="Add Promo Code"
    //       stateHoverChangeIconLeftPosition="unset"
    //       styleLayerBackgroundColor="unset"
    //     />
    //     <StateHoverChangeIconLeft
    //       addOutline="/paper-plane.svg"
    //       text="Show Filghts"
    //       stateHoverChangeIconLeftPosition="unset"
    //       styleLayerBackgroundColor="#8dd3bb"
    //     />
    //   </div>
    // </div>
     <div className=" relative z-10 -top-[150px] left-[104px] rounded-2xl  w-[1150px] flex flex-col pt-4 px-8 pb-8 box-border items-start justify-start gap-[32px] text-left text-base text-blackish-green font-montserrat-medium-12">
     <FlightForm />
     </div>
  
  );
};

export default FlightPortion;
