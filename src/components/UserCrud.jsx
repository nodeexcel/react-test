import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  mobile: Yup.number()
    .required("Mobile is required")
    .integer("Mobile must be a number")
    .typeError("Mobile must be a number")
    .positive("Mobile must be a positive number")
    .max(9999999999, "Mobile must be up to 10 digits only")
    .required("Mobile is required"),
  roleKey: Yup.string().required("Role is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const UserCrud = ({ initialValues, handleSubmit, type }) => {
  const navigate = useNavigate();
  const roles = useSelector((state) => state.role.allRoles);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {({ errors, touched }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">Sign up</Typography>
            </Grid>
            <Grid item xs={12}>
              <Field
                name="name"
                as={TextField}
                label="Name"
                variant="outlined"
                fullWidth
                error={errors.name && touched.name}
                helperText={errors.name && touched.name && errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="email"
                as={TextField}
                label="Email"
                variant="outlined"
                fullWidth
                error={errors.email && touched.email}
                helperText={errors.email && touched.email && errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="username"
                as={TextField}
                label="Username"
                variant="outlined"
                fullWidth
                error={errors.username && touched.username}
                helperText={
                  errors.username && touched.username && errors.username
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="mobile"
                as={TextField}
                label="Mobile"
                variant="outlined"
                fullWidth
                error={errors.mobile && touched.mobile}
                helperText={errors.mobile && touched.mobile && errors.mobile}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Grid item xs={8}>
                  <Field
                    name="roleKey"
                    as={TextField}
                    select
                    label="Role"
                    variant="outlined"
                    fullWidth
                    error={errors.roleKey && touched.roleKey}
                    helperText={
                      errors.roleKey && touched.roleKey && errors.roleKey
                    }
                  >
                    {roles.map((option) => (
                      <MenuItem key={option.roleKey} value={option.roleKey}>
                        {option.roleLabel}
                      </MenuItem>
                    ))}
                  </Field>
                </Grid>
                <Grid xs={4} item sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate("/role/add")}
                  >
                    Add Roles
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Field
                name="password"
                as={TextField}
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password && errors.password
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                {type}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default UserCrud;
