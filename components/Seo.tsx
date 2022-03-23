import Head from "next/head";

const API_KEYS = "6c2a18c3a603a48a447e48c59ffd5b1a";

export default function Seo({ title }: { title: string }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
