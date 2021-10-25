import React, { useState } from "react";

import { getRequest } from "../util/http/makeRequest";
import UserDetails from "./UserDetails";
import Repositories from "./Repositories";
import Files from "./Files";
import { decodeContent, handleError } from "../util/common/commonUtils";

type TypeFile = {
  content?: string;
};

const MainPage: React.FC = () => {
  let [username, setUsername] = useState<string>("");
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [files, setFiles] = useState([]);
  const [content, setContent] = useState("");

  const updateUsername = (value) => {
    setUsername(value);
  };

   const onBlurHandler = () => {
     setUsername(username.trim());
   }

  const getFiles = async (repo) => {
    try {
      const files = await getRequest(
        `https://api.github.com/repos/${username}/${repo}/contents/`
      );
      let filesArray = Object.values(files);
      
      //remove below filter if directories are needed to be shown
      filesArray = filesArray.filter((file) => file.type === "file");

      setFiles(filesArray);
      const readmeFile = filesArray.filter((file) => file.name === "README.md");
      let file: TypeFile;
      if (readmeFile.length) {
        file = await getRequest(readmeFile[0].url);
        let fileContent = file.content;
        const decodedFileContent = decodeContent(fileContent);
        setContent(decodedFileContent);
      }
      nextPage();
    } catch (err) {
      let error = err.toJSON();
      handleError(error.status);
    }
  };

  const goBack = () => {
    if (page !== 1) {
      setPage(page - 1);
      setContent("");
    }
  };
  const nextPage = () => {
    if (page !== 3) {
      setPage(page + 1);
    }
  };

  const searchUser = async () => {
    if (!username) {
      alert("Please enter Github Username");
      return;
    }

    try {
      const data = await getRequest(
        `https://api.github.com/users/${username}/repos`
      );
      var userRepositories = Object.values(data);
      var formattedData = userRepositories.map((repo) => {
        return {
          name: repo.name,
          url: repo.html_url,
        };
      });
      setRepos(formattedData);
      nextPage();
    } catch (err) {
      let error = err.toJSON();
      handleError(error.status);
    }
  };

  switch (page) {
    case 1:
      return (
        <UserDetails
          handleOnchange={updateUsername}
          username={username}
          handleOnsubmit={searchUser}
          onBlurHandler={onBlurHandler}
        />
      );

    case 2:
      return (
        <Repositories
          repoList={repos}
          username={username}
          getFiles={getFiles}
          goBack={goBack}
        />
      );

    case 3:
      return <Files fileList={files} content={content} goBack={goBack} />;
  }
};

export default MainPage;
