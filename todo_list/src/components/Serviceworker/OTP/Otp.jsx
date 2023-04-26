import { useState } from "react";
import "./Otp.css";

const Otp=({ otp ,setOtp}) =>{
    console.log(otp,"otp")
  const [otpState, setOtpState] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (/^[0-9]{0,4}$/.test(value)) {
      setOtp(value);
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (otp.length === 4) {
      // perform OTP verification
      
    } else {
      setError("Please enter a valid OTP.");
    }
  };
  const handleClose = () => {
    setOtp(false);
  };

  return (
    <div>
      <button onClick={otp}>CLick me</button>
      
      {otp ? (
        <div className="modal">
          <div className="modal-content">
            <h2>Enter OTP</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  maxLength="1"
                  value={otp[0] || ""}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  maxLength="1"
                  value={otp[1] || ""}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  maxLength="1"
                  value={otp[2] || ""}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  maxLength="1"
                  value={otp[3] || ""}
                  onChange={handleInputChange}
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit">Verify</button>
            </form>
            <button onClick={handleClose}>Close me</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Otp;