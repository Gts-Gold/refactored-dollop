import { NextSeo } from "next-seo";
import Head from "next/head";

export default function NextSeoPage() {
  return (
    <>
      <NextSeo
        title="GTS GOLD 168 - PROMOTION"
        description="GTS GOLD 168 ข้อมูลเกี่ยวกับโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19) โดยกรมควบคุมโรค กระทรวงสาธารณสุข ดูรายงานสถานการณ์โควิด-19 มาตรการต่างๆ คำแนะนำสำหรับประชาชน และคำถามที่พบบ่อย (FAQ) สายด่วน 1422 ชุดข้อมูลประจำวัน ข้อมูลสถานการณ์ในไทย"
        canonical="https://gtsgold168.com/promotion"
        openGraph={{
          url: "https://gtsgold168.com/promotion",
          title: "GTS GOLD 168 - PROMOTION",
          description:
            "GTS GOLD 168 ข้อมูลเกี่ยวกับโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19) โดยกรมควบคุมโรค กระทรวงสาธารณสุข ดูรายงานสถานการณ์โควิด-19 มาตรการต่างๆ คำแนะนำสำหรับประชาชน และคำถามที่พบบ่อย (FAQ) สายด่วน 1422 ชุดข้อมูลประจำวัน ข้อมูลสถานการณ์ในไทย",
          images: [
            {
              url: "https://mpics.mgronline.com/pics/Images/564000007887201.JPEG",
              width: 800,
              height: 600,
              alt: "รายงานสถานการณ์โควิดในไทย",
            },
            {
              url: "https://www.matichon.co.th/wp-content/uploads/2021/08/00234802830948092384.jpg",
              width: 900,
              height: 800,
              alt: "โควิดไทยยังอ่วม",
            },
            {
              url: "https://resource.nationtv.tv/resource/photo_news/2021/06/12/1024_eab8gc5i9ebkka9976khg.jpg",
              alt: "ติดเพิ่ม เสียชีวิตพุ่ง",
            },
            {
              url: "https://img.pptvhd36.com/thumbor/2021/05/17/news-4cf6b839df.jpg",
              alt: "เกือบหมื่น ตัวเลขผู้ติดเชื้อวันนี้",

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
        <title> GTS GOLD 168 - PROMOTION </title>
        <link
          rel="shortcut icon"
          href="/assets/images/favicon.ico"
          type="image/x-icon"
        />
      </Head>
    </>
  );
}
