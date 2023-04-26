import { Container, Grid } from "@mui/material";
import RoleCrud from "../components/RoleCrud";
import CustomizedTables from "../components/common/Table";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Notification from "../components/common/Notification";
import {
  deleteRoleById,
  resetRoleForm,
  setRole,
  updateRoleById,
  updateUserRole,
} from "../store/slices/roleSlice";
const keys = ["roleKey", "roleLabel"];
const headRow = ["Role Key", "Role Label"];

function Role() {
  const tableData = useSelector((state) => state.role.allRoles);
  const initialValue = useSelector((state) => state.role.initialValue);
  const [update, setUpdate] = useState({ current: false, id: -1 });
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState({
    state: false,
    message: "some message ",
    type: "error",
  });

  const handleSubmit = (values, { resetForm }) => {
    if (update.current) {
      dispatch(updateUserRole({ id: update.id, data: values }));
      setUpdate(() => ({ current: false, id: -1 }));
      dispatch(resetRoleForm());
      setShowAlert(() => ({
        state: true,
        message: "Role Updated Successfully",
        type: "success",
      }));
      return;
    }
    dispatch(setRole(values));
    resetForm();
  };

  const onEdit = (id, doNotDelete) => {
    if (doNotDelete) {
      setUpdate(() => ({ current: false, id: -1 }));
      dispatch(resetRoleForm());
      return;
    }
    dispatch(updateRoleById(id));
    setUpdate(() => ({ current: true, id }));
  };

  const onDelete = (id) => {
    dispatch(deleteRoleById(id));
    setShowAlert(() => ({
      state: true,
      message: "Role Deleted Successfully",
      type: "success",
    }));
  };

  return (
    <Container>
      <Notification setShowAlert={setShowAlert} showAlert={showAlert} />
      <Grid container>
        <Grid item xs={12}>
          <RoleCrud initialValues={initialValue} handleSubmit={handleSubmit} />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: "2rem" }}>
          <CustomizedTables
            keys={keys}
            columnRow={tableData}
            headRow={headRow}
            editAction={onEdit}
            tableName={"Role"}
            deleteAction={onDelete}
            disabled={update.current ? update.id : -1}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Role;
