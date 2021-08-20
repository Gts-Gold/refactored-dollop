import { NextSeo } from "next-seo";
import Head from "next/head";

export default function NextSeoPage() {
  return (
    <>
      <NextSeo
        title="GTS GOLD 168 - MASK"
        description="GTS GOLD 168 ชุดผ้าปิดจมูก 2 ชิ้น"
        canonical="https://gtsgold168.com/mask"
        openGraph={{
          url: "https://gtsgold168.com/mask",
          title: "GTS GOLD 168 - MASK",
          description:
            "GTS GOLD 168 ชุดผ้าปิดจมูก 2 ชิ้น",
          images: [
            {
              url: "https://mpics.mgronline.com/pics/Images/564000007887201.JPEG",
              width: 800,
              height: 600,
              alt: "ป้องกันฝุ่นได้อย่างมีประสิทธิภาพ",
            },
            {
              url: "https://www.matichon.co.th/wp-content/uploads/2021/08/00234802830948092384.jpg",
              width: 900,
              height: 800,
              alt: "ปลอดภัยจากมลภาวะ",
            },
            {
              url: "https://resource.nationtv.tv/resource/photo_news/2021/06/12/1024_eab8gc5i9ebkka9976khg.jpg",
              alt: "สวมใส่ได้อย่างมั่นใจ",
            },
            {
              url: "https://img.pptvhd36.com/thumbor/2021/05/17/news-4cf6b839df.jpg",
              alt: "ช่วยป้องกันฝุ่น มลภาวะ และเชื้อไวรัสโควิด-19(COVID-19)",

            },
          ],
        }}
      />
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="forntEnd-Developer" content="Mamunur Rashid" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> GTS GOLD 168 - MASK </title>
        <link
          rel="shortcut icon"
          href="/assets/images/favicon.ico"
          type="image/x-icon"
        />
      </Head>
    </>
  );
}
