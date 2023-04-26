import { Container, Grid } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCrud from "../components/UserCrud";
import Notification from "../components/common/Notification";
import CustomizedTables from "../components/common/Table";
import {
  deletUserData,
  resetCurrentForm,
  setUserData,
  updateUserById,
  updateUserData,
} from "../store/slices/userSlice";
const keys = ["name", "email", "username", "mobile", "roleKey", "password"];
const tableHead = ["Name", "Email", "Username", "Mobile", "Role", "Password"];

function User() {
  const [showAlert, setShowAlert] = useState({
    state: false,
    message: "some message ",
    type: "error",
  });
  const [update, setUpdate] = useState({ current: false, id: -1 });
  const rows = useSelector((state) => state.user.allUsers);
  const dispatch = useDispatch();
  const initialValues = useSelector((state) => state.user.initialValue);
  const handleSubmit = (values, { resetForm }) => {
    if (update.current) {
      dispatch(updateUserData({ id: update.id, data: values }));
      setUpdate(() => ({ current: false, id: -1 }));
      dispatch(resetCurrentForm());
      setShowAlert(() => ({
        state: true,
        message: "User Updated Successfully",
        type: "success",
      }));
      return;
    }
    dispatch(setUserData(values));
    resetForm();
  };

  const onEdit = (id, doNotDelete) => {
    if (doNotDelete) {
      setUpdate(() => ({ current: false, id: -1 }));
      dispatch(resetCurrentForm());
      return;
    }
    dispatch(updateUserById(id));
    setUpdate(() => ({ current: true, id }));
  };

  const onDelete = (id) => {
    dispatch(deletUserData(id));
    setShowAlert(() => ({
      state: true,
      message: "User Deleted Successfully",
      type: "success",
    }));
  };

  return (
    <Container>
      <Notification setShowAlert={setShowAlert} showAlert={showAlert} />
      <Grid container>
        <Grid item xs={12}>
          <UserCrud
            setUpdate={setUpdate}
            update={update}
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            type={update.current ? "Update User" : "Add User"}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: "2rem" }}>
          <CustomizedTables
            keys={keys}
            columnRow={rows}
            headRow={tableHead}
            editAction={onEdit}
            tableName={"User"}
            deleteAction={onDelete}
            disabled={update.current ? update.id : -1}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default User;
