import { useRouter } from "next/router";
import React from "react";

function OptionalCatchAllProduct() {
  const router = useRouter();
  return <div>OptionalCatchAllProduct: {JSON.stringify(router.query)}</div>;
}

export default OptionalCatchAllProduct;
