import HotelsSlider from "../../../components/HotelsSlider";

export default function Section4() {
    return (
        <div className="page bg-light p-5">
            <div className="custom-container d-flex flex-column">
                <h1 className="title">top hotels</h1>
                <div className="">
                    <HotelsSlider />
                </div>
            </div>
        </div>
    )
}