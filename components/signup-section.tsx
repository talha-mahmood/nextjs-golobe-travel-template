import type { NextPage } from "next";
import LogoIcon from "./logo-icon";
import ConfigurationfilledIconna from "./configurationfilled-iconna";

const SignupSection: NextPage = () => {
  return (
    <div className="absolute top-[30px] left-[30px] w-[1300px] flex flex-row py-6 px-8 box-border items-center justify-between text-left text-sm text-neutrals font-montserrat-medium-12">
      <div className="flex flex-row items-center justify-start gap-[362px]">
        <div className="flex flex-row items-start justify-start gap-[32px]">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/airplane1.svg"
            />
            <div className="relative font-semibold">Find Flight</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/ionbed1.svg"
            />
            <div className="relative font-semibold">Find Stays</div>
          </div>
        </div>
        <LogoIcon logoText="/logo.svg" propWidth="110.35px" propHeight="36px" />
      </div>
      <div className="flex flex-row items-center justify-start gap-[32px]">
        <div className="relative font-semibold">Login</div>
        <ConfigurationfilledIconna
          labelText="Sign up"
          configurationfilledIconnaPosition="unset"
          configurationfilledIconnaBackgroundColor="#fff"
          labelTextFontWeight="600"
          labelTextFontFamily="Montserrat"
          labelTextColor="#112211"
        />
      </div>
    </div>
  );
};

export default SignupSection;
