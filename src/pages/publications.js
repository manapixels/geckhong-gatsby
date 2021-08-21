import React from "react"
import "./publications.scss"

const PublicationsPage = () => {

	const externalLinkIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			<path id="Path_23" data-name="Path 23" d="M0,0H24V24H0Z" fill="none"/>
			<path id="Path_24" data-name="Path 24" d="M11,7H6A2,2,0,0,0,4,9v9a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2V13" fill="none" stroke="#265fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
			<line id="Line_12" data-name="Line 12" y1="10" x2="10" transform="translate(10 4)" fill="none" stroke="#265fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
			<path id="Path_25" data-name="Path 25" d="M15,4h5V9" fill="none" stroke="#265fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
		</svg>
	)

	return (

		<section className="publications-page">
			{publications && publications.map((item, i) => (
				<div className="publication-item" key={i}>
					<div className="numbering">
						{i+1}
					</div>
					<div className="title">
						{item.title}
					</div>
					<div className="link">
						<a href={item.link} target="_blank">
							{externalLinkIcon}
						</a>
					</div>
				</div>
			))}
		</section>
	)
}

const publications = [
	{
		title: "Yeo, G. (2021). Emotional disclosure and secrecy in the development of autonomous-related self among Singaporean adolescents. Journal of Child and Family Studies. Online First.",
		url: "https://link.springer.com/article/10.1007/s10826-021-01899-2",
	},
	{
		title: "Leong QY, Sridhar S, Blasiak A, Tadeo X, Yeo GH, Remus A, Ho D. (2021). A comparison of mobile health platforms developed for depression and anxiety available for research or commercial Purposes: A systematic review of the literature and app store review. Journal of Medical Internet Research. Preprint.",
		url: "https://www.researchgate.net/publication/348802280_A_comparison_of_mobile_health_platforms_developed_for_depression_and_anxiety_available_for_research_or_commercial_purposes_A_systematic_review_of_the_literature_and_app_store_review_Preprint"
	},
	{
		title: "Yeo, G., Cheah, C. S. L., & Sim, T. N. (2020). A tale of two countries: Singaporean and Chinese parents’ emotion socialization during childhood and the relation to adolescents’ emotion regulation. International Journal of Psychology, 55(2), 163-172. ",
		url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/ijop.12576"
	},
	{
		title: "Sarmiento, I. G., Olson, C., Yeo, G., Chen, Y. A., Toma, C. L., Brown, B. B., Bellmore, A., & Mares, M-L. (2018). Does social media use improve or worsen adolescents’ internalizing behaviors? Conclusions from a systematic narrative review. Adolescent Research Review, 1-24. ",
		url: "https://dl.acm.org/doi/abs/10.1145/3183654.3183699"
	},
	{
		title: "Sarmiento, I. G., Olson, C., Yeo, G., Chen, Y. A., Toma, C. L., Brown, B. B., ... & Mares, M. L. (2018, April). Does social media use improve or worsen adolescents' internalizing behaviors? Conclusions from a systematic narrative review. In Proceedings of the Technology, Mind, and Society (p. 36). ACM. ",
		url: "https://dl.acm.org/doi/abs/10.1145/3183654.3183699"
	},
	{
		title: "Yeo, G. (2018). Education and new technologies: Perils and promises for learners. Pedagogies: An International Journal, 13(4), 377-380. ",
		url: "https://www.tandfonline.com/doi/abs/10.1080/1554480X.2018.1534677?journalCode=hped20"
	},
	{
		title: "Sim, T. N., & Yeo, G. H. (2012). Peer crowds in Singapore. Youth & Society, 44(2), 201-216. ",
		url: "https://journals.sagepub.com/doi/abs/10.1177/0044118X10388220"
	},
]

export default PublicationsPage