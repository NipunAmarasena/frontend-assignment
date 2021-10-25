import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

interface Props {
  handleOnchange?: (value) => void;
  username?: string;
  handleOnsubmit?: () => void;
  onBlurHandler: () => void;
}

const UserForm: React.FC<Props> = ({
  handleOnchange,
  username,
  handleOnsubmit,
  onBlurHandler
}) => {
  return (
    <>
      <Typography data-testid="header" variant="h6">
        Enter Github Username
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            onBlur={onBlurHandler}
            inputProps={{ "data-testid": "txt-username" }}
            placeholder="Github Username"
            value={username}
            onChange={(e) => {
              handleOnchange(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
          data-testid="btn-search"
            variant="contained"
            onClick={() => {
              handleOnsubmit();
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default UserForm;
