export default function SignSteps({currentStep , steps}) {
    const lineStyle = {
        width : "100%" , 
        height : "10px" 
    }
    const renderSteps = () => {
        return steps.map((step , index)=>{
            return <div className="text-capitalize text-secondary">{step}</div>
        })
    }
  return (
    <div>
        <div className="d-flex align-items-center justify-content-between my-1" style={{ width: "400px" }}>
            {renderSteps()}
        </div>
      <div
        className="d-flex align-items-center justify-content-around"
        style={{ width: "400px" }}
      >
        <button className={`btn rounded-circle ${currentStep == 1 ? "custom-btn-primary" : "custom-btn-outlined-primary"}`}>1</button>
        <div className="line custom-bg-primary" style={lineStyle}></div>
        <button className={`btn rounded-circle ${currentStep == 2 ? "custom-btn-primary" : "custom-btn-outlined-primary"}`}>2</button>
        <div className="line"></div>
        <button className={`btn rounded-circle ${currentStep == 3 ? "custom-btn-primary" : "custom-btn-outlined-primary"}`}>3</button>
      </div>
    </div>
  );
}
