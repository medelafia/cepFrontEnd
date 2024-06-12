import IndexBox from "../../components/IndexBox";

export default function Index() {
    return (
        <div className="p-5">
            <div className="row w-100">
                <div className="col-sm-12">
                    <h4>overview</h4>
                </div>
                <IndexBox />
                <IndexBox />
                <IndexBox />
                <IndexBox />
            </div>
        </div>
    )
}