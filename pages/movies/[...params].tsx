import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

type MovieDetailParams = string[] | [];

interface MovieDetailProps {
  params: string[];
}

export default function MovieDetail({ params }: MovieDetailProps) {
  const router = useRouter();

  return (
    <div>
      <h4>{params[0]}</h4>
    </div>
  );
}

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const {
    params: { params },
  } = ctx;
  return {
    props: {
      params,
    },
  };
}
