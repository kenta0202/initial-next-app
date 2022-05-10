import Footer from "components/general/Footer";
import Header from "components/general/Header";
import { LayoutErrorBoundary } from "components/general/layout/LayoutErrorBoundary";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <LayoutErrorBoundary>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutErrorBoundary>
  );
};

export default Layout;
