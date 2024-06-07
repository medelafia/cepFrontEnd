import { useNavigate } from "react-router-dom"

export default function FooterCell({title , links}) {
    const navigate = useNavigate() 
    const renderLinks = () => {
        return links.map((link , index)=><li className="cursor-pointer" key={index}><a onClick={()=>navigate(title == "home" ? "" : "/"+title+"/"+link)}>{link}</a></li>)
    }
    return (
        <div className="col-sm-12 col-md-6 col-lg-4">
            <h5 className="text-capitalize">{title}</h5>
            <ul>
                {renderLinks()}
            </ul>
        </div>
    )
}