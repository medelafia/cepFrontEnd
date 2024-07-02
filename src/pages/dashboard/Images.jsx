
import { Checkbox, ImageList, ImageListItem } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import CurrentPath from "../../components/CurrentPath";
import InternalError from "../../components/InternalError";
import LoadingComponent from "../../components/LoadingComponent";
import NoItems from "../../components/NoItems";
import { useFetch } from "../../hooks/custom-hooks";
import { userSelector } from "../../store/selectors/userSelector";
export default function Images() {
  const user = useSelector(userSelector);
  const { data, isLoading, error } = useFetch(
    `http://localhost:8089/provider/getImages`
  );
  const [selectedImages , setSelectedImages ] = useState([])
  const renderImages = () => {
    return data?.map((image, index) => (
      <div className="col-sm-12 col-md-6 col-lg-3 my-2">
        <div className="container">
          <img
            src={image.url}
            alt=""
            style={{ width: "100%", height: "300px" }}
          />
        </div>
      </div>
    ));
  };
  useEffect(()=> {
    console.log(selectedImages)
  }  , [selectedImages] ) 
  const selectImage = (e) => {
    if(e.target.checked) {
        setSelectedImages([...selectedImages , Number.parseInt(e.target.getAttribute("imageId"))]) 
    }else {
        setSelectedImages(prev => prev.filter(id => id != Number.parseInt(e.target.getAttribute("imageId"))) )
    }
  }
  const deleteImage = () => {
    Swal.fire({
      text : "do you want to delete these images" , 
      icon :"question" , 
      confirmButtonText : "yes delete" ,
      preConfirm : ()=>{
        fetch("http://localhost:8089/provider/deleteImages" , {
          method : "post" ,
          headers : { 
              "Authorization" : "Bearer " + sessionStorage.getItem("token")  , 
              "Accept" : "application/json",
              "Content-Type": "application/json",
          } , 
          body : JSON.stringify(selectedImages)
        })
        .then(res => {
          if(res.status == 200 ){
            selectedImages.forEach(imageId => {
            data?.filter((image) => image.id != imageId )
          })
          Swal.fire({
            icon : "success" , 
            title :"the images was deleted successfully" , 
            timer : 2000 
          })
        }else {
          Swal.fire({
            icon : "error" , 
            title :"cannot delete now try it again" , 
            timer : 2000 
          })
        }
      })
      } 
    })
  }
  return (
    <div>
      <div className="custom-container py-5">
        <CurrentPath />
        <div className="d-flex align-items-center justify-content-between my-2">
            <div>
                <h5 className="text-capitalize">image list</h5>
                <p className="text-secondary d-block">upload images to make your client exesited to makes experiences</p>
            </div>
            <div className="d-flex">    
                <button className="btn btn-danger me-3"
                    onClick={deleteImage}
                >
                    <i class="fa-solid fa-trash me-2"></i>clear
                </button>
                <button className="btn btn-dark">
                    <i class="fa-solid fa-plus me-2"></i>add
                </button>
            </div>
        </div>
        <div className="row">
          {isLoading && <LoadingComponent />}
          {error != null && <InternalError />}
          {data != null && 
          <>
            { data?.length == 0 ? (
              <div className="d-flex my-5 py-3 align-items-center justify-content-center">
                <NoItems />
              </div>
            ) : (
              <div className="container border p-3 rounded">
                <ImageList
                variant="quilted"
                cols={4}
                rowHeight={250}
                sx={{height : 450 }}
                className="row"
              >
                {data?.map((item , index) => (
                  <ImageListItem
                    className="col-sm-12 position-relative"
                    key={index}
                  >
                    <Checkbox inputProps={{imageId : item.id}} className="position-absolute color-primary" dataTarget={item.id} style={{top : "10px" , right : "10px" }} onChange={selectImage}/>
                    <img
                      src={item.url}
                      loading="lazy"
                      style={{backgroundSize : "cover"}}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
            )}
          </>
            }
        </div>
      </div>
    </div>
  );
}
