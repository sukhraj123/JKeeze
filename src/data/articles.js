import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid blue;
					max-width: 50%;
				}
					@media (max-width: 1024px) {
	.randImage {
					align-self: left;
					outline: 2px solid blue;
					max-width: 100%;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="subtitle">What are the benefits of cloud computing?
Cloud computing provides greater flexibility, efficiency and strategic value by enabling organizations to use IT infrastructure and applications over the internet instead of installing and maintaining them on-premises.
<div className="paragraph"></div>
The benefits of cloud computing are far-reaching. Here, we break them down into 3 main categories:
<p></p><div className="paragraph">
<u>Flexibility:</u> Users can scale services to fit their needs, customize applications and access cloud services from anywhere with an internet connection.</div>
<div className="paragraph">
<u>Efficiency:</u> Enterprise users can get applications to market quickly without worrying about underlying infrastructure costs or maintenance.</div>
<div className="paragraph">
<u>Strategic value:</u> Cloud services give enterprises a competitive advantage by providing the most innovative technology available.</div></div><p></p>
					<img
						src="../cloud.jpg"
						alt="https://www.ibm.com/think/topics/cloud-computing-benefits"
						className="randImage"
					/><p></p>
					<div className="paragraph">Today, cloud computing is omnipresent, continuously transforming how individuals and organizations—from small startups to large enterprises—operate. Businesses rely on cloud computing to enable remote work and harness innovative technologies such as artificial intelligence (AI), machine learning (ML) and edge computing.</div>
						<p></p>
<div className="paragraph">Cloud computing infrastructure relies on a network of remote data centers, servers and storage systems owned and operated by a third-party cloud service provider (CSP), such as Amazon Web Services (AWS), Google Cloud Platform, Microsoft Azure and IBM Cloud®.</div>
<p></p>
<div className="paragraph"></div>
<div className="paragraph">There are 4 main cloud delivery models:</div>
<p></p>
<div className="paragraph"></div>
<div className="paragraph">Public cloud</div>
<div className="paragraph"></div>
<div className="paragraph">Private cloud</div>
<div className="paragraph"></div>
<div className="paragraph">Hybrid cloud</div>
<div className="paragraph"></div>
<div className="paragraph">Hybrid multicloud</div>


</div>
				
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			
		],
		body: (
			<React.Fragment>
				<h1>Content </h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
