import Head from "next/head";
import Navigation from "@/components/navigation";
import Modal from "../modal";
import CreateForm from "../modal/CreateForm";
import useModal from "@/hooks/useModal";

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
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isOpen ? (
        <Modal>
          <CreateForm />
        </Modal>
      ) : null}
      <Navigation />
      <main className="mx-6 bg-background md:mx-40">{children}</main>
    </>
  );
}

export default Layout;
