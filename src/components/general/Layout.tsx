import Footer from "components/general/Footer";
import Header from "components/general/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
