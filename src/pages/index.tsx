import Layout from "@/components/layout";
import Confessions from "@/components/Confessions";
import Wrapper from "@/components/layout/Wrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { AuthProvider } from "@/context/authContext";
import type { NextApiRequest, NextApiResponse } from "next";

type HomeProps = {
  session?: {
    expires: string;
    user: { email: string; image: string; name: string };
  };
};

export default function Home({ session }: HomeProps) {
  return (
    <AuthProvider session={session}>
      <Layout title="Confesiones UPC | Feed">
        <Wrapper>
          {/* <h1 className="text-2xl font-bold">Feed</h1> */}
          <Confessions />
        </Wrapper>
      </Layout>
    </AuthProvider>
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
