import Service from "../../components/Service";

export default function Services() {
    return (
        <div className="page h-100">
            <div className="custom-container h-100 d-flex align-items-center justify-content-center flex-column">
                <header className="mt-5 mb-3">
                    <h4 className="bold text-capitalize text-center">our services</h4>
                    <p className="text-secondary">our plateform give you some services</p>
                </header>
                <div className="row w-100">
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                </div>
            </div>
        </div>
    )
}