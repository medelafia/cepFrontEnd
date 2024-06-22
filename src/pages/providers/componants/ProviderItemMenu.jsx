export default function ProviderItemsMenu({text , active}) {
    return (
        <button className={`btn rounded-pill mx-2 ${active ? "btn-dark" : "btn-outline-dark" }`}>{text}</button> 
    )
}