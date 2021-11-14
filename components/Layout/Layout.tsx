import Loading from "../Loading/Loading";

const Layout: React.FunctionComponent = ({ children }) => (
  <div className="Layout">
    <Loading />
    <main>{children}</main>
  </div>
);

export default Layout;
