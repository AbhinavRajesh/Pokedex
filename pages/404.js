import { useEffect } from "react";
import { useRouter } from "next/router";

import Loading from "../components/Loading";

const custom404 = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, []);

  return <Loading error={true} />;
};

export default custom404;
