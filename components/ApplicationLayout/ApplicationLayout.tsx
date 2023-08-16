import Loading from "../Loading/Loading";

const ApplicationLayout = ({ children }: React.PropsWithChildren) => (
  <div className="ApplicationLayout">
    <Loading />
    <main>{children}</main>
  </div>
);

export default ApplicationLayout;
