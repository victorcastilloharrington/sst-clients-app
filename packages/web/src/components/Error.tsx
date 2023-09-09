import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const Error = () => {
  return (
    <div className="flex items-center space-x-4 h-96 justify-center">
      <Alert className="max-w-xl">
        <AlertTitle className="text-2xl">Oh no!</AlertTitle>
        <AlertDescription>
          We were unable to fetch the data. Please reload the page to try again
          or{" "}
          <a href="#" className="underline">
            contact support
          </a>
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default Error;
