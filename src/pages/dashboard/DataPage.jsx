import { Component } from "react";
import { useLocation } from "react-router-dom";
import DataFormModal from "../../components/DataFormModal";
import LoadingComponent from "../../components/LoadingComponent";
import { useFetch } from "../../hooks/custom-hooks";
import image from "../../assets/user.jpeg" ; 
import { useState } from "react";
import { useEffect } from "react";
import CurrentPath from "../../components/CurrentPath";

export default function DataPage({  dataColumns  , auth_delete=false , auth_update=false }) {
  const [currentPage , setCurrentPage] = useState(1)
  const {pathname} = useLocation() 
  const {data , isLoading , error } = useFetch(
    "ACCOUNTS-SERVICES",
    "/costumers/?page="+currentPage
  ) ; 
  const [pageData ,setPageData] = useState(data) ; 
  const dataRendering = () => {
    return data?.map((ele, index) => {
      return <tr>
          <td>{ele.id}</td>
          <td>{ele.firstName}</td>
          <td>{ele.lastName}</td>
          <td>{ele.gender == "m" ? "male" : "female"}</td>
          <td>{ele.email}</td>
          <td>{ele.profileImage == null ? <img src={image} className="profileImage profileImageSmall"/> : <></>}</td>
          <td>
            {auth_delete && <button className="btn"><i class="fa-solid fa-trash text-danger"></i></button>}
            {auth_update && <button className="btn" ><i class="fa-regular fa-pen-to-square text-success "></i></button>}
            {!auth_delete && !auth_delete && <strong>no action</strong>}
          </td>
        </tr>;
    });
  };
  const dataColumnsRendering = () => {
    return dataColumns.map((elem, index) => {
      return <th key={index}>{elem}</th>;
    });
  };
  const sort = (e) => {
  }
  const search = (e) => {
  }
  return (
    <div className="py-3 px-5 h-75">
      <DataFormModal /> 
      <div className="d-flex align-items-center justify-content-between">
        <CurrentPath />
        <button className="btn custom-btn-secondary" data-bs-toggle="modal" data-bs-target="#dataModal">
          <i class="fa-solid fa-plus mx-1"></i>add
        </button>
      </div>
      <div className="rounded d-flex align-items-center justify-content-between my-2">
        <input type="text" className="form-control w-25" placeholder="search by email or username" onChange={search}/>
        <div>
          <button className="btn"><i class="text-secondary fa-solid fa-sort me-2"></i> sort</button>
        </div>
      </div>
      <div className="bg-white p-3 border rounded my-2 h-100">
        <table className="table custom-text-secondary text-center">
          <thead>
            <th>id <button className="btn ms-3"></button></th>
            {dataColumnsRendering()}
            <th>actions</th>
          </thead>

          <tbody className="text-secondary">
            {isLoading ? <tr><td colSpan={dataColumns.length + 2} className="py-5"><LoadingComponent /></td></tr>
            : data?.length == 0 ? (
              <tr>
                <td colSpan={dataColumns.length + 2}>no items</td>
              </tr>
            ) : (
              dataRendering()
            )}
          </tbody>
        </table>
        </div>
        <div className="border p-2 rounded d-flex align-items-center justify-content-between">
          <div className="text-secondary">
            number of pages : {Math.round(data?.length / 9)} page , number of elements in page : 9 elements
          </div>
          <div class="d-flex">
              <button className="btn btn-outline-secondary mx-2" disabled={currentPage - Math.round(data?.length / 9) <= 0 && `disbled`}>previeus</button>
              <button className="btn btn-dark mx-2">{currentPage}</button>
              <button className="btn btn-outline-secondary mx-2" disabled={currentPage === Math.round(data?.length / 9) && `disabled`} >next</button>
          </div>
        </div>
      </div>
  );
}
