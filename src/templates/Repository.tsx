import React from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const Repository = ({ repo, getFiles }) => {
  return (
    <Card sx={{ margin: 10 }} variant="outlined">
      <CardContent>
        <Typography data-testid="repo-name" variant="h6">{repo.name}</Typography>
        <Typography variant="subtitle2">{repo.url}</Typography>
        <Button
          variant="contained"
          onClick={() => {
            getFiles(repo.name);
          }}
        >
          Select
        </Button>
      </CardContent>
    </Card>
  );
};

export default Repository;
