export default function Alert() {
    return(
            <div class="alert alert-success position-absolute end-0  alert-dismissible" style={{zIndex : 100 }}>
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <strong>Success!</strong> Indicates a successful or positive action.
            </div> 
    )
}