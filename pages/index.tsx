import { useSelector } from "react-redux";
import { wrapper } from "../redux/store";
import { getUserList } from "../redux/reducers/user/actions";

export default function Index() {
  const userList = useSelector((state: any) => state.user.list);

  return (
    <div>
      Data below are fetched from:{" "}
      <a href="https://reqres.in/" target="_blank" rel="noreferrer">
        https://reqres.in/
      </a>{" "}
      before rendering in server-side.
      <br />
      <br />
      {JSON.stringify(userList)}
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store: any) => async (context: any) => {
  await store.dispatch(getUserList());

  return {
    props: {},
  };
});
