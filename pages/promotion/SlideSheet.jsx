export default function SlideSheet() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="https://ddc.moph.go.th/covid19-dashboard/?fbclid=IwAR0t3OaITXSuZsv0RxjRrdKzp614QTkcFLbf0_nNbM66hsLJQAskHRuQ_sc">
              <img
                src="https://ddc.moph.go.th/viralpneumonia/img/dashboard_covid19.jpg"
                className="d-block w-100"
                alt="อัพเดทข้อมูลเกี่ยวกับโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19) จากกรมควบคุมโรค
							รายงานสถานการณ์ผู้ติดเชื้อโควิดและการฉีดวัคซีนของแต่ละจังหวัดในประเทศไทย
							รอบรู้เรื่องโควิด19 โคโรนาไวรัส2019 โรคติดเชื้อไวรัสโคโรนา
							เช็คข้อมูลได้ที่นี่"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="https://lin.ee/SGc236G">
              <img
                src="assets/images/pera2.jpg"
                className="d-block w-100"
                alt="อัพเดทข้อมูลเกี่ยวกับโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19) จากกรมควบคุมโรค
				รายงานสถานการณ์ผู้ติดเชื้อโควิดและการฉีดวัคซีนของแต่ละจังหวัดในประเทศไทย
				รอบรู้เรื่องโควิด19 โคโรนาไวรัส2019 โรคติดเชื้อไวรัสโคโรนา
				เช็คข้อมูลได้ที่นี่"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="https://lin.ee/SGc236G">
              <img
                src="/assets/images/home/pera4.png"
                className="d-block w-100"
                alt="อัพเดทข้อมูลเกี่ยวกับโรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19) จากกรมควบคุมโรค
				รายงานสถานการณ์ผู้ติดเชื้อโควิดและการฉีดวัคซีนของแต่ละจังหวัดในประเทศไทย
				รอบรู้เรื่องโควิด19 โคโรนาไวรัส2019 โรคติดเชื้อไวรัสโคโรนา
				เช็คข้อมูลได้ที่นี่"
              />
            </a>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
