import type { NextPage } from "next";
import FlightPortion from "../components/FlightPortion";
import SignupSection from "../components/signup-section";
import PlanTrip from "../components/PlanTrip";
import Reviews from "../components/Reviews";
import FlightsContainer from "../components/flights-container";
import Footer from "../components/footer";
import FlightForm from "../components/FlightForm";

const LandingPage: NextPage = () => {
  return (
    <div>
          
    <div className="relative bg-gray-100 w-full h-[3528px] overflow-hidden text-center text-[45px] text-neutrals font-tradegothic-bold-40 ">
      <img
        className=" absolute top-[30px] left-[30px] rounded-3xl md:w-[1280px] md:h-[599px]  object-cover heropic-md"
        alt=""
        src="/rectangle-31@2x.png"
      />
      <div className="relative top-[611px] left-[1310px] rounded-t-none rounded-b-3xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.6))] w-[1280px] h-[581px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
      <FlightPortion />
      <SignupSection />
      <div className="absolute top-[180px] left-[343px] flex flex-col items-center justify-start gap-[16px]">
        <div className="flex flex-col items-center justify-start gap-[4px]">
          <b className="relative">Helping Others</b>
          <b className="relative text-[80px] uppercase">{`Live & Travel`}</b>
        </div>
        <div className="relative text-xl font-semibold font-montserrat-medium-12">
          Special offers to suit your plan
        </div>
      </div>
      <PlanTrip />
      <Reviews />
      <div className="absolute top-[1514px] left-[104px] w-[1232px] flex flex-row items-start justify-start gap-[24px]">
        <FlightsContainer
          cardImageName="/rectangle-40@2x.png"
          cardTitle="Flights"
          popularDestinationsText={`Search Flights & Places Hire to our most popular destinations`}
          cardSubtitle="/paper-plane1.svg"
          actionButtonText="Show Filghts"
        />
        <FlightsContainer
          cardImageName="/rectangle-411@2x.png"
          cardTitle="Hotels"
          popularDestinationsText={`Search hotels & Places Hire to our most popular destinations`}
          cardSubtitle="/paper-plane2.svg"
          actionButtonText="Show Hotels"
        />
      </div>
      <Footer
        emojioneV1openMailboxWith="/emojionev1openmailboxwithloweredflag.svg"
        logo="/logo1.svg"
        akarIconsfacebookFill="/akariconsfacebookfill.svg"
        akarIconstwitterFill="/akariconstwitterfill.svg"
        akarIconsyoutubeFill="/akariconsyoutubefill.svg"
        antDesigninstagramFilled="/antdesigninstagramfilled.svg"
        footerPosition="absolute"
        footerBottom="0px"
        footerLeft="0px"
      />
    </div>
    </div>
  );
};

export default LandingPage;
