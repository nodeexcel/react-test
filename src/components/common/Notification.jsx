import { Alert, Collapse } from "@mui/material";
import { useEffect } from "react";

const defaultAlert = {
  state: false,
  message: "some message ",
  type: "error",
};

function Notification({ showAlert, setShowAlert }) {
  useEffect(() => {
    if (showAlert.state)
      setTimeout(() => {
        setShowAlert(() => defaultAlert);
      }, 2000);
  }, [setShowAlert, showAlert?.state]);

  return (
    <>
      {showAlert.state && (
        <Collapse in={showAlert.state}>
          <Alert severity={showAlert.type}>{showAlert.message}</Alert>
        </Collapse>
      )}
    </>
  );
}

export default Notification;
