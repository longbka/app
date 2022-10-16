import { useState } from "react";
import CountDown from "./CountDown";
import CountDownAnimation from "./CountDownAnimation";
import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
const OTP = () => {
  const [orgOtpParent, setOrgOtpParent] = useState("");
  const [userOtpParent, setUserOtpParent] = useState("");
  const [isDisableBtn, setIsDisableBtn] = useState(false);
  const handleSubmitOtp = () => {
    if(!orgOtpParent){
      alert("Please generate OTP ... ");
      return;
    }
    if(!userOtpParent){
      alert("Please enter an OTP ... ");
      return;
    }
    if (+orgOtpParent === +userOtpParent) {
      alert("Correct OTP");
    } else {
      alert("Wrong OTP");
    }
  };
  return (
    <div className="otp-parent-container">

      <GenerateOTP setOrgOtpParent={setOrgOtpParent} />
      <InputOTP
        setUserOtpParent={setUserOtpParent}
        handleSubmitOtp={handleSubmitOtp}
        isDisableBtn={isDisableBtn}
        setIsDisableBtn={setIsDisableBtn}
      />
    </div>
  );
};
export default OTP;
