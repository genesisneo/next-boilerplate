"use client";

import Image from "next/image";
import { useSelector, type ReduxState } from "@/redux/store";

/*
 * ⚠️ NOTES:
 * When doing CSR, we need to use 'userSelector' function, to access redux states
 * and use 'useDispatch' function, to dispatch redux actions. We can also use both
 * 'reduxStore.getState()' function and 'reduxStore.dispatch' on CSR.
 *
 * Reference:
 * https://github.com/vercel/next.js/blob/canary/examples/with-redux/app/components/Counter/Counter.tsx
 */

const Loading = () => {
  const loading: boolean = useSelector((state: ReduxState) => state.global.loading);

  return loading ? (
    <div className="Loading">
      <Image alt="Loading..." src="/loading.gif" width={64} height={64} />
    </div>
  ) : null;
};

export default Loading;
