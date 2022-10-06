import Head from 'next/head';

export default function Page({ title, metaDesc, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={
            metaDesc
              ? metaDesc
              : 'Consignment store sepatu nasional yang menyediakan informasi penjualan yang dapat di akses di seluruh indonesa dengan cepat, mudah, dan dapat di percaya'
          }
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{children}</main>
    </div>
  );
}
