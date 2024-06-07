import { useNavigate } from "react-router-dom"

export default function SettingRouting({title , to , active = false , onClickListener , children }) {
    const navigate = useNavigate() 
    const changeRoute = () => {
        onClickListener() ; 
        navigate(to) ; 
    }
    return (
        <div onClick={changeRoute} className={`px-3 cursor-pointer py-2 mx-2 my-2 rounded-pill d-flex align-items-center ${active && 'bg-light'}`}>
            {children}<span>{title}</span>
        </div>
                    
    )
}