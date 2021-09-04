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
			<h2>Digital Media &amp; Psychological Well-Being</h2>
			{digitalMediaPublications && digitalMediaPublications.map((item, i) => (
				<div className="publication-item" key={item.title}>
					<div className="numbering">
						{i+1}
					</div>
					<div className="content">
						<div className="title">{item.title}</div>
						<div className="author">{item.author}</div>
						<div className="journal">{item.journal}</div>
					</div>
					<div className="link">
						<a href={item.url} target="_blank">
							{externalLinkIcon}
						</a>
					</div>
				</div>
			))}

			<h2 className="mt-5">Culture, Adolescents' and College Students' Development</h2>
			{culturePublications && culturePublications.map((item, i) => (
				<div className="publication-item" key={item.title}>
					<div className="numbering">
						{i+1}
					</div>
					<div className="content">
						<div className="title">{item.title}</div>
						<div className="author">{item.author}</div>
						<div className="journal">{item.journal}</div>
					</div>
					<div className="link">
						<a href={item.url} target="_blank">
							{externalLinkIcon}
						</a>
					</div>
				</div>
			))}
		</section>
	)
}

const digitalMediaPublications = [
	{
		title: "A comparison of mobile health platforms developed for depression and anxiety available for research or commercial Purposes: A systematic review of the literature and app store review",
		url: "https://preprints.jmir.org/preprint/27388",
		author: "Leong QY, Sridhar S, Blasiak A, Tadeo X, Yeo GH, Remus A, Ho D. (2021)",
		journal: "Journal of Medical Internet Research. Preprint."
	},
	{
		title: "Does social media use improve or worsen adolescents’ internalizing behaviors? Conclusions from a systematic narrative review",
		url: "https://link.springer.com/article/10.1007/s40894-018-0095-2",
		author: "Sarmiento, I. G., Olson, C., Yeo, G., Chen, Y. A., Toma, C. L., Brown, B. B., Bellmore, A., & Mares, M-L. (2018)",
		journal: "Adolescent Research Review, 1-24"
	},
	{
		title: "Does social media use improve or worsen adolescents' internalizing behaviors? Conclusions from a systematic narrative review",
		url: "https://dl.acm.org/doi/abs/10.1145/3183654.3183699",
		author: "Sarmiento, I. G., Olson, C., Yeo, G., Chen, Y. A., Toma, C. L., Brown, B. B., ... & Mares, M. L. (2018, April)",
		journal: "In Proceedings of the Technology, Mind, and Society (p. 36). ACM"
	},
	{
		title: "Education and new technologies: Perils and promises for learners",
		url: "https://www.tandfonline.com/doi/abs/10.1080/1554480X.2018.1534677?journalCode=hped20",
		author: "Yeo, G. (2018)",
		journal: "Pedagogies: An International Journal, 13(4), 377-380"
	},
]

const culturePublications = [
	{
		title: "Emotional disclosure and secrecy in the development of autonomous-related self among Singaporean adolescents",
		url: "https://link.springer.com/article/10.1007/s10826-021-01899-2",
		author: "Yeo, G. (2021)",
		journal: "Journal of Child and Family Studies. Online First."
	},
	{
		title: "A tale of two countries: Singaporean and Chinese parents’ emotion socialization during childhood and the relation to adolescents’ emotion regulation",
		url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/ijop.12576",
		author: "Yeo, G., Cheah, C. S. L., & Sim, T. N. (2020)",
		journal: "International Journal of Psychology, 55(2), 163-172"
	},
	{
		title: "Peer crowds in Singapore",
		url: "https://journals.sagepub.com/doi/abs/10.1177/0044118X10388220",
		author: "Sim, T. N., & Yeo, G. H. (2012)",
		journal: "Youth & Society, 44(2), 201-216"
	},
]

export default PublicationsPage