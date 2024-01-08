import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
// import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();
  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data?.message || error.statusText;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorMessage}</p>
      {/* <LinkButton to="-1">&larr; Go back</LinkButton> */}
    </div>
  );
}

export default Error;
