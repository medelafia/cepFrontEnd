export default function PropertyBox({value , children}) {
    return (
        <div className="text-secondary d-flex align-items-center my-2">
            {children}
            {value}
        </div>
    )
} 