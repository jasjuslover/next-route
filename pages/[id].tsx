import { useRouter } from "next/router";
import React from "react";

function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>DetailPage: {id}</div>;
}

export default DetailPage;
