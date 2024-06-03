export default function SignStep({stepName , stepStatus}) {
    return (
        <div className="d-flex my-2 align-items-center">
            { stepStatus == "done" ? <i class="fa-solid fa-circle-check text-success"></i> : <i class="fa-solid fa-circle-xmark text-danger"></i> }
            <div className="ms-3 text-secondary">{stepName}</div>
        </div>
    )
}