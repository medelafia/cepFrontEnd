import { useDispatch, useSelector } from "react-redux"
import { pageSelector } from "../store/selectors/pageSelector"
import { closeCofirm } from "../features/pageSlice"
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { Button } from "@mui/base"

export default function CustomConfirm() {
    const page = useSelector(pageSelector)
    const dispatch = useDispatch()
    const onCloseConfirm = () => {
        dispatch(closeCofirm())
    }
    const onCofirm = () => {
        dispatch(page.confirm.confirmCallBack())
        dispatch(closeCofirm()) ;  

    }
    return (
    <Dialog
        open={page.confirm.open}
        onClose={onCloseConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {page.confirm.confirmText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className="btn custom-outlined-btn" onClick={onCloseConfirm}>no</button>
          <button className="btn custom-btn-primary"  onClick={onCofirm}>yes</button>
        </DialogActions>
      </Dialog>
    )
}