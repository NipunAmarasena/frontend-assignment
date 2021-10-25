import React from "react";
import ReactMarkdown from "react-markdown";

import { Button, Typography, Card, CardContent } from "@mui/material";
import Alert from '@mui/material/Alert';

type TypeFile = {
  name: string;
  content: string;
  url: string;
};

interface Props {
  fileList: TypeFile[];
  content: string;
  goBack: () => void;
}

const Files: React.FC<Props> = ({ fileList, content, goBack }) => {
  let markdownEl = (
    <>
      <Typography variant="h6">Content of README.md</Typography>
      <Card variant="outlined">
        <CardContent>
          <ReactMarkdown>{content}</ReactMarkdown>
        </CardContent>
      </Card>
    </>
  );

  return (
    <>
      <Typography variant="h3">{`File List`}</Typography>
      <Button
        variant="outlined"
        onClick={() => {
          goBack();
        }}
      >
        Back
      </Button>
      {fileList.map((file) => {
        return (
          <Card key={file.name} sx={{ margin: 10 }} variant="outlined">
            <CardContent>
              <Typography data-testid="file-name" variant="h6">
                {file.name}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
      { content ? markdownEl : <Alert severity="warning">Could not find Readme.md file</Alert> }
    </>
  );
};

export default Files;
