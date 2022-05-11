import { ExclamationCircleIcon } from "@heroicons/react/solid";
import CSR from "components/general/CSR";
import PracticeLayout from "components/general/layout/PracticeLayout";
import Sppinner from "components/general/Sppinner";
import FetchComments from "components/practice/react18/FetchComments";
import FetchTasks from "components/practice/react18/FetchTasks";
import FetchUsers from "components/practice/react18/FetchUsers";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const SuspenceDemo = () => {
  return (
    <CSR>
      <p className="mb-3 text-xl font-bold text-blue-500">Suspence Demo</p>
      <ErrorBoundary fallback={<ExclamationCircleIcon className="my-5 w-10 h-10 text-pink-500" />}>
        <Suspense fallback={<Sppinner />}>
          <FetchUsers />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<ExclamationCircleIcon className="my-5 w-10 h-10 text-pink-500" />}>
        <Suspense fallback={<Sppinner />}>
          <FetchTasks />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<ExclamationCircleIcon className="my-5 w-10 h-10 text-pink-500" />}>
        <Suspense fallback={<Sppinner />}>
          <FetchComments />
        </Suspense>
      </ErrorBoundary>
    </CSR>
  );
};

SuspenceDemo.getLayout = function getLayout(page) {
  return <PracticeLayout>{page}</PracticeLayout>;
};

export default SuspenceDemo;
