import { Button, TextField } from "@mui/material";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const RoleCrud = ({ initialValues, handleSubmit }) => {
  const validationSchema = Yup.object().shape({
    roleLabel: Yup.string().required("Role Label is required"),
    roleKey: Yup.string().required("Role Key is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            as={TextField}
            id="roleKey"
            name="roleKey"
            label="Role Key"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <ErrorMessage name="roleKey" component="div" />
          <Field
            as={TextField}
            id="roleLabel"
            name="roleLabel"
            label="Role Label"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <ErrorMessage name="roleLabel" component="div" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RoleCrud;
