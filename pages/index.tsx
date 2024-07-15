import Image from "next/image";
import { Inter } from "next/font/google";
import { GetServerSideProps } from "next";
import { api } from "@/utils/network/axios";
import { Blog } from "@/types/blog";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  blogs: Blog[];
};

export default function Home(props: Props) {
  console.log({ props });
  return (
    <>
      <Head>
        <title>Blog Post</title>
        <meta name="description" content="Amazing blog" />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center bg-gray-200 p-24 ${inter.className}`}
      >
        <div className="space-y-3">
          {props.blogs.map((blog) => (
            <div
              className="space-y-2 w-full bg-white p-5 shadow rounded"
              key={blog.id}
            >
              <h4 className="text-lg font-semibold">{blog.title}</h4>
              <p>{new Date(blog.createdAt).toISOString()}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await api.get("/api/blogs");

  return {
    props: {
      blogs: response.data,
    },
  };
};
