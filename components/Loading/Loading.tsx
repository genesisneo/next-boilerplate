import Image from "next/image";
import { useSelector } from "react-redux";

const Loading: React.FunctionComponent = () => {
  const loading = useSelector((state: any) => state.global.loading);

  return loading ? (
    <div className="Loading">
      <Image alt="Loading..." src="/loading.gif" layout="fixed" width={64} height={64} />
    </div>
  ) : null;
};

export default Loading;
