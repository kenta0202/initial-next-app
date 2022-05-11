import Footer from "components/general/Footer";
import { LayoutErrorBoundary } from "components/general/layout/LayoutErrorBoundary";
import NavBar from "components/practice/react18/NavBar";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PracticeLayout: FC<Props> = ({ children }) => {
  return (
    <LayoutErrorBoundary>
      <div className="flex flex-col justify-center items-center min-h-screen text-gray-600">
        <NavBar />
        <main className="flex flex-col flex-1 justify-center items-center w-screen">
          {children}
        </main>
        <Footer />
      </div>
    </LayoutErrorBoundary>
  );
};

export default PracticeLayout;
