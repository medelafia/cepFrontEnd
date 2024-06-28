import { useState } from "react"
import { useRef } from "react"
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {update} from "../features/userSlice"

export default function ProfileImage({ currentImage , changingUrl}) {
  const [ newImage  , setNewImage ] = useState()
    const [imageProfile , setImageProfile] = useState(currentImage) ;
    const imageProfileRef = useRef() 
    const dispatch = useDispatch()
    const imageProfileChangeListener = () => {
        const image = imageProfileRef.current.files[0]
        setNewImage(image)
        const imageProfileURL = URL.createObjectURL(image) 
        setImageProfile(imageProfileURL)
    }
    const changeImageProfile = () => {
        const formData = new FormData() 
        formData.append("image" , newImage )
        fetch(changingUrl , {
            method : "post" , 
            body : formData
        } )
        .then(res => {
            if(res.status == 200) {
              Swal.fire({
                icon : "success" , 
                timer : 2000 , 
                title : "the profile image changed succeccfully"
              })
              return res.json()
            }
        }).then(data => {
          dispatch(update([{item : "profileImage" , value : data}])) 
        })
    } 
  return (
    <div
      className="position-relative rounded-circle border my-2"
      style={{ width: "200px", height: "200px" }}
    >
      <button
        className="btn position-absolute rounded-circle border btn-dark"
        style={{ bottom: "10px", right: "10px" }}
        data-bs-toggle="modal" data-bs-target="#changeProfileImageModal"
      >
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <img src={currentImage} alt="" className="rounded-circle w-100 h-100" />
      <div
        class="modal fade"
        id="changeProfileImageModal"
        tabindex="-1"
        aria-labelledby="changeProfileImageModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex align-items-center justify-content-center flex-column">
                <img src={imageProfile} className="rounded-circle" alt="" style={{ width : "300px" , height : "300px"}}/>
                <input type="file" ref={imageProfileRef} name="file" accept="image/*" id="profileImage" hidden onChange={imageProfileChangeListener}/>
                <button className="btn btn-dark my-3" type="submit" onClick={() => document.getElementById("profileImage").click()}>upload image</button>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary"
                onClick={changeImageProfile}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
