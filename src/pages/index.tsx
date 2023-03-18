import Layout from "@/components/layout";
import Confessions from "@/components/Confessions";
import Wrapper from "@/components/layout/Wrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import type ISession from "@/types/session";
import type { NextApiRequest, NextApiResponse } from "next";

type HomeProps = {
  session?: ISession;
};

export default function Home({ session }: HomeProps) {
  console.log(session);
  return (
    <Layout title="Confesiones UPC | Feed">
      <Wrapper>
        {/* <h1 className="text-2xl font-bold">Feed</h1> */}
        <Confessions />
      </Wrapper>
    </Layout>
  );
}

export async function getServerSideProps({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  const session = await getServerSession(req, res, authOptions);

  return {
    props: {
      session,
    },
  };
}
