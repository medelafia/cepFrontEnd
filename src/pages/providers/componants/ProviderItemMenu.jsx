export default function ProviderItemsMenu({text , active , onClickFunction }) {
    return (
        <button className={`btn rounded-pill mx-2 ${active ? "btn-dark" : "btn-outline-dark" }`} onClick={onClickFunction}>{text}</button> 
    )
}