import type { ReactNode } from "react";
import type { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <div className="flex gap-3 items-center">
      <ExclamationCircleIcon className="my-5 w-10 h-10 text-pink-500" />
      <div>
        <p className=" text-base text-pink-400">Something went wrong:</p>
        <pre className=" text-base">{error.message}</pre>
      </div>
    </div>
  );
};

type Props = {
  children: ReactNode;
};

export const LayoutErrorBoundary: React.FC<Props> = ({ children }) => {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};
