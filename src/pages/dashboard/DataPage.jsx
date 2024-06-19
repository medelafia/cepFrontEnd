import { Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DataFormModal from "../../components/DataFormModal";
import LoadingComponent from "../../components/LoadingComponent";
import { useFetch } from "../../hooks/custom-hooks";
import image from "../../assets/user.jpeg";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import CurrentPath from "../../components/CurrentPath";
import InternalError from "../../components/InternalError";
import { Button, Stack } from "@mui/material";
import Swal from "sweetalert2";

export default function DataPage({
  dataUrl,
  columns,
  dataAddingPath,
  deletePath,
}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { data, error, isLoading } = useFetch(dataUrl);
  useEffect(() => {
    if (deletePath) {
      columns.push({
        field: "action",
        headerName: "Action",
        width: 180,
        sortable: false,
        disableClickEventBubbling: true,

        renderCell: (params) => {
          const deleteRow = (e) => {
            const currentRow = params.row;
            Swal.fire({
              icon: "question",
              title: "do you want to delete this row ?",
              confirmButtonText: "yes",
              preConfirm: () => {
                fetch(deletePath + currentRow.id, {
                  method: "POST",
                }).then((res) => {
                  if (res.status == 200) {
                    Swal.fire({
                      icon: "success",
                      title: "row deleted successfully",
                      timer: 2000,
                    });
                  }
                });
              },
            });
          };
          return (
            <Stack
              direction="row"
              className="h-100 d-flex align-items-center justify-content-center"
            >
              <button className="btn text-success">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="btn text-danger" onClick={deleteRow}>
                <i class="fa-solid fa-trash"></i>
              </button>
            </Stack>
          );
        },
      });
    }
  }, [columns]);
  return (
    <div className="py-3 px-5 h-75 w-100">
      <div className="d-flex align-items-center justify-content-between">
        <CurrentPath />
        {dataAddingPath != null && (
          <button
            className="btn custom-btn-secondary"
            onClick={() => {
              navigate(dataAddingPath);
            }}
          >
            <i class="fa-solid fa-plus mx-1"></i>add
          </button>
        )}
      </div>
      <div className="rounded d-flex align-items-center justify-content-between my-2">
        <input
          type="text"
          className="form-control w-25"
          placeholder="search by email or username"
        />
      </div>
      {isLoading ? (
        <div className="w-100 my-3 py-3 d-flex align-items-centrr justify-content-center">
          <LoadingComponent />
        </div>
      ) : error ? (
        <InternalError />
      ) : (
        <>
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
          />
        </>
      )}
    </div>
  );
}
