import { useState } from "react"
export default function ImageUpload({currentImage , onChangeHandler}) {
    const [ imageUrl , setImageUrl ] = useState(currentImage) 
    const upload = (e) => {
        const image = e.currentTarget.files[0] 
        const url = URL.createObjectURL(image)
        setImageUrl(url)
        onChangeHandler(image)
    }
    return(
    <div className="form-group d-flex align-items-center justify-content-center flex-column">
        <img src={imageUrl} alt="" style={{width : "200px" , height : "200px"}} className="border rounded-circle"/>
        <input type="file" name="" accept="image/*" id="imageProfileRegestration" hidden onChange={upload}/>
        <button className="btn btn-dark my-3" onClick={()=>document.getElementById("imageProfileRegestration").click()}>upload image</button>
      </div>
    )
} 