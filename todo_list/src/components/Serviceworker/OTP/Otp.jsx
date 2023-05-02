import { useState } from "react";
import "./Otp.css";
import { Button } from "react-bootstrap";

const Otp=({ otp ,setOtp}) =>{
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
      {otp ? (
        <div className="otp_modal">
          <div className="otp_modal-content">
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
            <Button className="otp_btn" onClick={handleClose}>Close me</Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Otp;