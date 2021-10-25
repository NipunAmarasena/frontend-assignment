import React from "react";
import {
  Button,
  Typography,
} from "@mui/material";

import Repository from "../templates/Repository";

type TypeRepo = {
  name: string;
  url: string;
};

interface Props {
  repoList?: TypeRepo[];
  username?: string;
  getFiles?: (value) => void;
  goBack?: () => void;
}

const Repositories: React.FC<Props> = ({
  repoList,
  username,
  getFiles,
  goBack,
}) => {
  return (
    <>
      <Typography data-testid="repo-header" variant="h3">{`Repositories of user-${username}`}</Typography>
      <Button
        variant="outlined"
        onClick={() => {
          goBack();
        }}
      >
        Back
      </Button>
      {repoList.map((repo) => {
        return <Repository key={repo.name} repo={repo} getFiles={getFiles} />;
      })}
    </>
  );
};

export default React.memo(Repositories);
