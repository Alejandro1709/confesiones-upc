import Head from "next/head";

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
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-background">{children}</main>
    </>
  );
}

export default Layout;
