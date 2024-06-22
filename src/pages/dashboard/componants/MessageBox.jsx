export default function MessageBox({name , message}) {
    return (
    <div className="px-3 py-2 bg-light">
        <h6 className="text-bold text-capitalize">{name}</h6>
        <div className="text-secondary">{message}</div>
    </div> )
}