import { useEffect, useRef, useState } from "react";
import SignCompanyInfo from "../../components/SignCompanyInfo";
import SignCostumerInfo from "../../components/SignCostumerInfo";
import SignAccountInfo from "../../components/SignAccountInfo";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { Step, StepLabel, Stepper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignUp() {
  const [step, setStep] = useState(0);
  const [stepsValidity, setStepsValidity] = useState({
    0: false,
    1: false,
  });
  const steps = ["account info", "user info", "confirmation"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intialState = {
    username: null,
    password: null,
    email: null,
    accountType: "cotumer",
    tel: null,
    registerByGoogle: false,
    emailVerified: false,
  };
  const [errors, setErrors] = useState({});
  const [info, setInfo] = useState(intialState);
  useEffect(()=>{
    console.log(info)
  } , [info])
  const updateItem = (key, value) => {
    setInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const next = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };
  const prev = () => {
    if (step >= 1) setStep(step - 1);
  };
  const register = () => {
    if ((stepsValidity[0] && stepsValidity[1]) || info.registerByGoogle) { 
      const formData = new FormData() 
      formData.append( info.accountType == "costumer" ? "profile" : "logo", info.image  )
      formData.append(info.accountType , new Blob([JSON.stringify(info)] , { type : "application/json" }))
      fetch(`http://localhost:8089/accounts/register/${info.accountType}`, {
        method: "post",
        body: formData ,
      })
        .then((res) => {
          if (res.status == 200) {
            return res.json();
          } else {
            Swal.fire({
              icon: "error",
              title: "error in the account creation",
              timer: 2000,
            });
          }
        })
        .then((data) => {
          if (data != null) {
            console.log(data)
            Swal.fire({
              icon: "success",
              title: "the account created successfully",
              timer: 2000,
            });
            navigate("/");
            /* dispatch(login(data)); */
          }
        });
    } else {
      Swal.fire({
        title: "couldn't register because you have errors in the form",
        icon : "error"
      });
    }
  };
  return (
    <div className="row w-100" style={{ height: "100vh" }}>
      <div className="col-lg-4 bg-dark h-100"></div>
      <div className="p-5 col-lg-8 col-sm-12 my-3">
        <h1 className="text-capitalize custom-text-primary text-center ">
          travelboot registration
        </h1>
        <div className="px-5 my-5">
          <Stepper activeStep={step}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          {step == 0 && (
            <SignAccountInfo
              errors={errors}
              setErrors={setErrors}
              currentInfo={info}
              onChangeFunction={updateItem}
              next={next}
              setStepValidity={(val) =>
                setStepsValidity({ ...stepsValidity, 0: val })
              }
            />
          )}
          {step == 1 && info.accountType == "costumer" && (
            <SignCostumerInfo
              currentInfo={info}
              onChangeFunction={updateItem}
              errors={errors}
              setErrors={setErrors}
              setStepValidity={(val) =>
                setStepsValidity({ ...stepsValidity, 1: val })
              }
            />
          )}
          {step == 1 && info.accountType == "provider" && (
            <SignCompanyInfo 
              onChangeFunction={updateItem} 
              currentInfo={info}
              errors={errors}
              setErrors={setErrors}
              setStepValidity={(val) =>
                setStepsValidity({ ...stepsValidity, 1: val })
              }
            />
          )}
          {step != 2 ? (
            <div className="d-flex align-items-center justify-content-end my-3">
              <button
                className="btn custom-btn-outlined-primary me-2 px-4"
                onClick={prev}
              >
                prev
              </button>
              <button
                className="btn custom-btn-primary ms-2 px-4"
                onClick={next}
                disabled={!stepsValidity[step]}
              >
                next
              </button>
            </div>
          ) : (
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h3 className="text-capitalize">confirm your information</h3>
              <div className="d-flex align-items-center justify-content-between my-5">
                <button
                  className="btn custom-btn-outlined-primary  px-5 me-3"
                  onClick={prev}
                >
                  prev
                </button>
                <button
                  className="btn custom-btn-primary px-5 ms-3"
                  onClick={register}
                >
                  confirm
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
