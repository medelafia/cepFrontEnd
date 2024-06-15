import { Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DataFormModal from "../../components/DataFormModal";
import LoadingComponent from "../../components/LoadingComponent";
import { useFetch } from "../../hooks/custom-hooks";
import image from "../../assets/user.jpeg" ; 
import { useState } from "react";
import {DataGrid} from "@mui/x-data-grid" ; 
import { useEffect } from "react";
import CurrentPath from "../../components/CurrentPath";
import InternalError from "../../components/InternalError";


export default function DataPage({dataUrl , columns , dataAddingPath}) {
  const {pathname} = useLocation() 
  const navigate = useNavigate() 
  const { data , error , isLoading } = useFetch(dataUrl)  
  return (
    <div className="py-3 px-5 h-75 w-100">
      <div className="d-flex align-items-center justify-content-between">
        <CurrentPath />
        {dataAddingPath != null && 
          <button className="btn custom-btn-secondary" onClick={()=>{navigate(dataAddingPath)}}>
          <i class="fa-solid fa-plus mx-1"></i>add
        </button>
        }
      </div>
      <div className="rounded d-flex align-items-center justify-content-between my-2">
        <input type="text" className="form-control w-25" placeholder="search by email or username"/>
      </div>
      { isLoading ? 
        <LoadingComponent /> 
        : 
        (
          error ?
            <InternalError />
          :
          <DataGrid 
        columns={columns}
        rows={data}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowClick={(e)=>console.log(e)}
      /> 
        )
      }
      </div>
  );
}
