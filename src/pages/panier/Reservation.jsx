import Counter from "../../components/Counter";

export default function Reservation() {
    return(
            <div className="bg-light d-flex justify-content-between border-top my-3 py-3 px-5">
                <div>
                    100
                </div>
                <div>
                    room in lalla menana hotel
                </div>
                <div>
                    adults : 
                    <Counter />
                    childs : 
                    <Counter />
                </div>
                <div className="text-warning">
                    waiting
                </div>
                <div >
                    <button className="d-block btn btn-dark my-1">cancel</button>
                    <button className="d-block btn btn-outline-dark my-1">pay</button>
                </div>
            </div>
    )
}