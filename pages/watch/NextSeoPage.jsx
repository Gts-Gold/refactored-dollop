import { NextSeo } from "next-seo";
import Head from "next/head";

export default function NextSeoPage() {
  return (
    <>
      <NextSeo
        title="GTS GOLD 168 - WATCH"
        description="GTS GOLD 168 นาฬิกาข้อมือผู้ชาย"
        canonical="https://gtsgold168.com/watch"
        openGraph={{
          url: "https://gtsgold168.com/watch",
          title: "GTS GOLD 168 - WATCH",
          description:
            "เสริมข้อมือของคุณผู้ชายให้โดดเด่นมากยิ่งขึ้นด้วยเหล่านาฬิกาข้อมือผู้ชายจากแบรนด์ดังที่มีให้คุณเลือกซื้อแล้ววันนี้",
          images: [
            {
              url: "https://images.ralunar.com/unsafe/450x0/https://ralunar-pro.s3-ap-southeast-1.amazonaws.com/home-banner/home-banner_13624869.jpeg",
              width: 800,
              height: 600,
              alt: "Emporio Armani เป็นแบรนด์ในสังกัด Giorgio Armani ซึ่งถือว่าเป็นแบรนด์ระดับไฮเอนด์ สัญชาติอิตาลี่ เป็นที่รู้จักในวงการแฟชั่นในเรื่องของดีไซน์หรูหรามาตั้งแต่ปี 1975 โดย Emporio Armani จะเจาะกลุ่มคนวัยหนุ่มสาว และมีราคาที่เบาลงมาหน่อยจากแบรนด์แม่อย่าง Giorgio Armani แต่ยังคงคุณภาพและ และดีไซน์ที่หรูหราในแบบที่คุณสามารถสัมผัสได้",
            }
          ],
        }}
      />
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="forntEnd-Developer" content="Mamunur Rashid" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> GTS GOLD 168 - WATCH </title>
        <link
          rel="shortcut icon"
          href="/assets/images/favicon.ico"
          type="image/x-icon"
        />
      </Head>
    </>
  );
}
