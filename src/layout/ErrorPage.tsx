import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className=" text-5xl font-bold">Oops!</h1>
      <p className=" text-2xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-3xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
