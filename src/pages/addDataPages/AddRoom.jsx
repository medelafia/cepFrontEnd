import AddDataHeader from "../../components/AddDataHeader";
import CurrentPath from "../../components/CurrentPath";

export default function AddRoom() {
    return (
        <div >
            <div className="custom-container py-3">
                <CurrentPath />
                <AddDataHeader title="add room"/>
                <form action="" className="my-4">
                    <div className="form-group d-flex my-1">
                        <div className="form-group me-1 w-100">
                            <label htmlFor="">number of adults</label>
                            <input type="number" name="" id="" className="form-control" placeholder="enter the number of adultes must be in the room"/>
                        </div>
                        <div className="form-group ms-1 w-100">
                            <label htmlFor="">number of adults</label>
                            <input type="number" name="" id="" className="form-control" placeholder="enter the number of childs must be in the room"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}