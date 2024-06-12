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


export default function DataPage({columns , rows , dataAddingPath}) {
  const {pathname} = useLocation() 
  const navigate = useNavigate() 
  return (
    <div className="py-3 px-5 h-75">
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
      <DataGrid 
        columns={columns}
        rows={rows}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowClick={(e)=>console.log(e)}
      />
      </div>
  );
}
