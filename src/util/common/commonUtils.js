export const decodeContent = (content) => {
  let buffer = new Buffer(content, "base64");
  return buffer.toString("ascii");
};

export const handleError = (status) => {
  switch (status) {
    case 404:
      alert("Not found!");
      break;

    default:
      alert("OOps something went wrong");
      break;
  }
};

export const logError = (error, info) => {
    console.error(error);
    console.error(info);
  };