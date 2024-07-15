import React from "react";

function BaruLagi() {
  return <div>BaruLagi</div>;
}

export async function getServerSideProps() {
  throw new Error("error dong");
  return { props: {} };
}

export default BaruLagi;
