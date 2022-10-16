import { useRef, useState } from "react";
import OtpInput from "react-otp-input";
import "./OTP.scss";
import CountDown from "./CountDown";
import CountDownAnimation from "./CountDownAnimation";
const InputOTP = (props) => {
  const childRef = useRef(); // kết nối cha với con
  const [otp, setOtp] = useState("");
  const [count, setCount] = useState(10);
  const handleChange = (otp) => {
    setOtp(otp);
    props.setUserOtpParent(otp);
  };
  const handleConfirmOtp = () => {
    props.handleSubmitOtp();
  };
  const handleClearOtp = () => {
    setOtp("");
    props.setIsDisableBtn(false);
    childRef.current.resetTimer();
  };
  return (
    <div className="input-otp-container">
      <div className="title">Enter verification code</div>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
        inputStyle={"input-customize"}
      />
      <div className="timer">
        {/* <CountDown
      setCount = {setCount}
      count={count}
      setIsDisableBtn={props.setIsDisableBtn} /> */}
        <CountDownAnimation
          setIsDisableBtn={props.setIsDisableBtn}
          ref={childRef}
        />
      </div>
      <div className="action">
        <button
          className="clear"
          onClick={() => handleClearOtp()}
          disabled={!props.isDisableBtn}
        >
          Clear
        </button>
        <button
          className="confirm"
          onClick={() => handleConfirmOtp()}
          disabled={props.isDisableBtn}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
export default InputOTP;
