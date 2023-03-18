import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "@/components/navigation";
import Modal from "../modal";
import CreateForm from "../modal/CreateForm";
import useModal from "@/hooks/useModal";
import QueryWrapper from "../auth/QueryWrapper";
import ConfessionDetail from "../modal/ConfessionDetail";

type Props = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

function Layout({
  children,
  title = "Confesiones UPC",
  description = "Una página web donde podrás confesarnos lo que desees sobre lo que pasa dentro de la universidad.",
}: Props) {
  const { isOpen } = useModal();
  const router = useRouter();

  const { type } = router.query;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryWrapper>
        {isOpen ? (
          <Modal>
            {type === "create" ? <CreateForm /> : <ConfessionDetail />}
          </Modal>
        ) : null}
        <Navigation />
        <main className="mx-6 bg-background md:mx-40">{children}</main>
      </QueryWrapper>
    </>
  );
}

export default Layout;
