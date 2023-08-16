import { api } from "@/utilities/api";
import { endpoints } from "@/utilities/endpoints";
import { reduxStore } from "@/redux/store";
import { setLoading } from "@/redux/slices/global";
import { setUsersList } from "@/redux/slices/users";
import { errorHandler } from "@/utilities/errorHandler";

/*
 * ⚠️ NOTES:
 * When doing SSR, we need to use 'reduxStore.getState()' function, to access redux states
 * and use 'reduxStore.dispatch' function, to dispatch redux actions. The 'useSelector' and
 * 'useDispatch' are CSR only and it will show an error if used on SSR.
 *
 * Reference:
 * https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch
 */

async function getData() {
  reduxStore.dispatch(setLoading(true));
  try {
    const response = await api.get(endpoints.users);
    reduxStore.dispatch(setUsersList(response.data));
  } catch (error: any) {
    errorHandler(error);
  }
  reduxStore.dispatch(setLoading(false));
}

export default async function Page() {
  await getData();
  const list = reduxStore.getState().users.list;

  return (
    <div>
      Data below are fetched from:{" "}
      <a href="https://reqres.in/" target="_blank" rel="noreferrer">
        https://reqres.in/
      </a>{" "}
      before rendering in server-side.
      <br />
      <br />
      {JSON.stringify(list)}
    </div>
  );
}
