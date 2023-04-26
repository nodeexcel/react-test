import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ marginBottom: "2rem" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <AdminPanelSettingsIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>
        <Button
          color="inherit"
          startIcon={<GridViewIcon />}
          onClick={() => navigate("/user/add")}
        >
          Dashboard
        </Button>
        <Button
          color="inherit"
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => navigate("/user/add")}
        >
          Add User
        </Button>
        <Button
          color="inherit"
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => navigate("/role/add")}
        >
          Add Role
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
