import React, { useState } from "react";
import { toast } from "react-toastify";
const MBICalculater = () => {
  const [height, setHeight] = useState("");
  const [weight, setweight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight and gender");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning(
        "You are underweight, Consider seeking advice from a healthcare provider."
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.5) {
      toast.success(
        "You are normal weight. keep maintaing a health lifestyle."
      );
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning(
        "You are overweight, Consider seeking advice from a healthcare provider"
      );
    } else {
      toast.error(
        "You are obese, Consider seeking advice from a healthcare provider"
      );
      // toast.success("You are overweight, Consider seeking advice from a healthcare provider");
    }
  };

  return (
    <section className="bmi">
      <h1>BMI CALCULATER</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (Cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Weight (Kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setweight(e.target.value)}
              />
            </div>
            <div>
              <label >Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="Transgender">Transgender</option>
              </select>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="" alt="MBImage" />
        </div>
      </div>
    </section>
  );
};

export default MBICalculater;
