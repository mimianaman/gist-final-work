import React, { useHistory } from "react";

const ErrorPage = () => {
  const history = useHistory();

  const goBackHandle = () => {
    history.goBack();
  };

  return (
    <>
      <div>page not found</div>
      <button onClick={goBackHandle}>go back</button>
    </>
  );
};

export default ErrorPage;
