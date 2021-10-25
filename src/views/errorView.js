import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { TextField, Button, Typography } from "@mui/material";

const ErrorView = ({ error, resetErrorBoundary }) => {
  return (
    <>
      <Alert severity="error">
        <AlertTitle>{error}</AlertTitle>
        Oops! Something went wrong
      </Alert>

      <Button variant="outlined" size="large" onClick={resetErrorBoundary}>
        Click Here to Retry
      </Button>
    </>
  );
};

ErrorView.propTypes = {
  resetErrorBoundary: PropTypes.func.isRequired,
  error: PropTypes.instanceOf(Error),
};

export default ErrorView;
