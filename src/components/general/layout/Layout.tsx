import Footer from "components/general/Footer";
import Header from "components/general/Header";
import { LayoutErrorBoundary } from "components/general/layout/LayoutErrorBoundary";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <LayoutErrorBoundary>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutErrorBoundary>
  );
};

export default Layout;
