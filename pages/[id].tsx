import { Blog } from "@/types/blog";
import { api } from "@/utils/network/axios";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  data: Blog;
};

function DetailPage({ data }: Props) {
  const router = useRouter();
  const { id } = router.query;

  console.log({ data });

  return <div>DetailPage: {id}</div>;
}

export default DetailPage;

export const getStaticPaths = async () => {
  const response = await api.get<Blog[]>("/api/blogs");

  const paths = response.data.map((blog) => {
    return {
      params: { id: blog.id?.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

type ContextParam = {
  id: string;
};

export const getStaticProps = async (
  context: GetStaticPropsContext<ContextParam>
) => {
  const id = context.params?.id;

  const response = await api.get(`/api/blogs/${id}`);
  const blog = response.data;

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: blog },
  };
};
