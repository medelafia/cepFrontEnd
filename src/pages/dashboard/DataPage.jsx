import { Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DataFormModal from "../../components/DataFormModal";
import LoadingComponent from "../../components/LoadingComponent";
import { useFetch } from "../../hooks/custom-hooks";
import image from "../../assets/user.jpeg" ; 
import { useState } from "react";
import { useEffect } from "react";
import CurrentPath from "../../components/CurrentPath";

export default function DataPage({ data ,  dataColumns = [] , fetchColumns,  auth_delete=false , auth_update=false , dataAddingPath , deletePath }) {
  const [currentPage , setCurrentPage] = useState(1)
  const {pathname} = useLocation() 
  const navigate = useNavigate() 
  const renderColumns = () => {
    return dataColumns.map((col , index) => <th>{col}</th>)
  }
  const deleteItem = (id) => {
    if(confirm("are you sure ") ) {
      fetch(deletePath+ id , {
        method : "POST" , 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => console.log(res))
    }
  }
  const renderData = () => {
    return data.map((row , index ) => {
      return (
        <tr key={index}>
          <td>{row['id']}</td>
          {
            fetchColumns.map((fetchCol ,index) =><td>{row[fetchCol]}</td>)
          }
          <td>
            <button className="btn text-danger me-2 ">
              <i class="fa-solid fa-trash"></i>
            </button>
            <button className="btn text-success me-2">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </td>
        </tr>
      )
    })
  }
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
        <div>
          <button className="btn"><i class="text-secondary fa-solid fa-sort me-2"></i> sort</button>
        </div>
      </div>
      <div className="bg-white p-3 border rounded my-2 h-100">
        <div className="table-responsive">
        <table className="table custom-text-secondary text-center">
          <thead>
            <th>id <button className="btn ms-3"></button></th>
            {renderColumns()}
            <th>actions</th>
          </thead>

          <tbody className="text-secondary">
            {data.length == 0 ? 
              <tr>
                <td colSpan={dataColumns.length + 2 } >no items</td>
              </tr> :
              renderData().slice(0 , 7)
            }
          </tbody>
        </table>
        </div>
        </div>
        <div className="border p-2 rounded d-flex align-items-center justify-content-between row">
          <div className="text-secondary col-sm-12 col-lg-6">
            number of pages :  page , number of elements in page : 9 elements
          </div>
          <div class="d-flex col-sm-12 col-lg-6 justify-content-end">
              <button className="btn btn-outline-secondary mx-2" disabled={currentPage - Math.round(data?.length / 9) <= 0 && `disbled`}>previeus</button>
              <button className="btn btn-dark mx-2">{currentPage}</button>
              <button className="btn btn-outline-secondary mx-2" disabled={currentPage === Math.round(data?.length / 9) && `disabled`} >next</button>
          </div>
        </div>
      </div>
  );
}
