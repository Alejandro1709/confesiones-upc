import Layout from "@/components/layout";
import Confessions from "@/components/Confessions";
import Wrapper from "@/components/layout/Wrapper";

export default function Home() {
  return (
    <Layout title="Confesiones UPC | Feed">
      <Wrapper>
        {/* <h1 className="text-2xl font-bold">Feed</h1> */}
        <Confessions />
      </Wrapper>
    </Layout>
  );
}
