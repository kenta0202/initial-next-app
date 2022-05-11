import CSR from "components/general/CSR";
import PracticeLayout from "components/general/layout/PracticeLayout";
import Sppinner from "components/general/Sppinner";
import FetchTasks from "components/practice/react18/FetchTasks";
import FetchUsers from "components/practice/react18/FetchUsers";
import { Suspense } from "react";

const NestedSuspense = () => {
  return (
    <CSR>
      <p className="mb-3 text-xl font-bold text-blue-500">Nested Suspense</p>
      <Suspense
        fallback={
          /* 3秒 */

          <>
            <p className="my-5 text-green-500 ">Showing outer skelton...</p>
            <Sppinner />
          </>
        }
      >
        <FetchUsers />
        <Suspense
          fallback={
            /* 2秒 */
            <>
              <p className="my-5 text-pink-500 ">Showing inner skelton...</p>
              <Sppinner />
            </>
          }
        >
          <FetchTasks />
        </Suspense>
      </Suspense>
    </CSR>
  );
};

NestedSuspense.getLayout = function getLayout(page) {
  return <PracticeLayout>{page}</PracticeLayout>;
};

export default NestedSuspense;
