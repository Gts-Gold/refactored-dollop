export default function SportDetail() {
	return (
		<div className="sport-detail">
			<div className="pb-5 boder-game" style={{ color: "beige" }}>
				<div className="row">
					<div className="col-md-12  ">
						<div style={{ paddingTop: "5%" }}>
							<div className="container ">
								<center>
									<h1 className=" text-neno-titel">ดูตารางบอลออนไลน์</h1>
								</center>
						
						
							</div>
						</div>
					</div>
					<div className="col-md-12  ">
						<iframe
							src="https://freelive.7m.com.cn/live.aspx?mark=th"
							width="100%"
							height="1000"
						></iframe>
						{/* <iframe src="https://freelive.7m.com.cn/live.aspx?mark=th&amp;TimeZone=%2B0700&amp;wordAd=%u0E1E%u0E1A%u0E1B%u0E31%u0E0D%u0E2B%u0E32%u0E01%u0E32%u0E23%u0E23%u0E31%u0E1A%u0E0A%u0E21%u0E40%u0E27%u0E47%u0E1A%u0E44%u0E0B%u0E14%u0E4C%u0E2B%u0E23%u0E37%u0E2D%u0E21%u0E35%u0E02%u0E49%u0E2D%u0E40%u0E2A%u0E19%u0E2D%u0E41%u0E19%u0E30%u0E15%u0E48%u0E32%u0E07%u0E46%u0E41%u0E08%u0E49%u0E07%u0E2A%u0E32%u0E22%u0E15%u0E23%u0E07%u0E42%u0E17%u0E23085-0000005%20%2C%20085-0000009&amp;width=900&amp;cpageBgColor=FFFFFF&amp;t" width="100%" height="1000"></iframe> */}
					</div>
				</div>
			</div>
		</div>
	);
}
