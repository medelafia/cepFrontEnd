import CurrentPath from "../../components/CurrentPath";

export default function AddDataTemplate({name , children}) {
    return( 
     <div className="bg-light page">
        <div className="custom-container py-5">
          <CurrentPath />
          <form className="p-4 rounded shadow bg-white my-3">
            <div className="text-uppercase text-secondary">
                {name}
            </div>
            {children}
          </form>
        </div>
      </div> 
    )
}