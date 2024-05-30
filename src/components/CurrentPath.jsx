import { useLocation } from "react-router-dom"

export default function CurrentPath({className}) {
    const {pathname} = useLocation() 
    const sharedPrefix ="/dashboard/" 
    const getCurrentPath = () => {
        return pathname.substring(pathname.indexOf("/dashboard/") + "/dashboard/".length)
      }
    return (
        <div className={`custom-text-secondary text-capitalize ${className}`}>
          dashboard / {getCurrentPath()}
        </div> 
    )
}