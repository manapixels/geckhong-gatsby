import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import GifPlayer from "react-gif-player"

import sizingGif from "../../images/projects/threadparadise/sizing.gif"
import sizingStill from "../../images/projects/threadparadise/measurements.png"

const ThreadParadiseProject = () => {
    const data = useStaticQuery(graphql`
		query {
			bg: file(relativePath: { eq: "projects/threadparadise/bg.png" }) {
				childImageSharp {
					fluid(maxWidth: 2000, maxHeight: 2091, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            product_page: file(relativePath: { eq: "projects/threadparadise/product_page.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, maxHeight: 1392, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            review: file(relativePath: { eq: "projects/threadparadise/review.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, maxHeight: 890, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            comparison: file(relativePath: { eq: "projects/threadparadise/comparison.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, maxHeight: 890, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
		}
		`)

    return (
        <div className="work">
            <section className="header">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="project-details">
                            <h1>Thread Paradise</h1>
                            <div className="description">
                                <ul>
                                    <li><p className="name">Period</p><p className="desc">Jan to Apr 17</p></li>
                                    <li><p className="name">Role</p><p className="desc">Team member</p></li>
                                    <li><p className="name">Project Scope</p><p className="desc">To find out the needs of Singaporean shoppers, based on the assumption that males and females have different shopping behaviours and culture, and implement design changes to solve the problems.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <Image
                            className="image"
                            fluid={data.bg.childImageSharp.fluid}
                            alt="Thread Paradise app" />
                    </div>
                </div>
            </section>
            
            <section className="body">
                <h1>The Issue</h1>
                <p>Based on the issues faced by Singaporean shoppers on Singapore-based eCommerce apps, could we find any major issues that frustrates a shopper enough for him to not purchase an item? We first started the project by conducting multiple needfeeding sessions with 20 young adults. What we found out were issues linked to sizing issues. There were a couple of issues faced by users:</p>
                <ul>
                    <li>Inconsistent clothes sizing charts</li>
                    <li>Clothing does not fit user perfectly</li>
                    <li>Lack of relevant reviews</li>
                    <li>Hard to compare different clothes</li>
                    <li>Hard to judge the quality due to unhelpful photographs</li>
                </ul>
                <p>Due to these reasons, the people we talked to choose to go down to a store personally.</p>
                <h1>Other considerations</h1>
                <p>There were a couple of points that we picked up and helped shape the way we design the app as well:</p>
                <ul>
                    <li>From most to least important: Design, Price, Size, Colour, Brand</li>
                    <li>Filters used most to least often: Price, Size, Brand, User Rating, Colour</li>
                    <li>Size format most to least preferred: (XS, S, M, L), (175/70, 175/80), (170, 175)</li>
                </ul>
                <p>We aim to find solutions to alleviate these problems by enhancing online shopping experience. These solution ideas should also be easily integrated into any existing shopping app.</p>

                <h1>How we approach these problems</h1>
                

                <div>
                    <h4>Measurement record and size guide</h4>
                    <div className="text-center"><GifPlayer gif={sizingGif} still={sizingStill} className="gif-image" /></div>
                    <p>On the homepage, there is a box that encourages users to save their measurements so that the app shows only clothes that fit them. If the user choose not to do so, he can press the 'Don't remind again' checkbox and close the panel. If he chooses to record his measurements, he will be brought through a series of pages to record his size. Each page is used to record just one measurement so as to minimise the clutter and confusion to users. In each page, there is a '?' icon to guide users to measure the respective body part accurately.<br /><br />In each product details page, there is a button that leads to the size guide. This size guide has a zoom-in function to help users focus on different parts of the sizing table. Again, there is a figure to guide users on the proper measurement technique. In addition, there is a short text under 'Recommendation for you' that shows up if the user recorded his measurements. This short auto-generated text informs the user what size he should buy based on his measurements and what people of similar body sizes says about the fit.</p>
                </div>
                <div>
                    <h4>Product details</h4>
                    <Image
                        className="image mobile-screenshot"
                        fluid={data.product_page.childImageSharp.fluid}
                        alt="Product page" />
                    <p>A 'similar item' button is added to each product image. When the user wishes to find clothes similar to the selected item, he presses the button and goes to a new page where items similar to the item selected are shown. To increase the visibility of reviews and size guide, we utilise a three-tab layout, where users can access the Product Detail, Reviews and Size Guide without scrolling at all. The product images are displayed on a swipeable carousel. Although there is already a review tab, we want to bring back the star rating system that is familiar to many of our target users, hence we are showing the number of reviews on two sections of the screen.</p>
                </div>
                <div>
                    <h4>User reviews</h4>
                    <Image
                        className="image mobile-screenshot"
                        fluid={data.review.childImageSharp.fluid}
                        alt="Product page" />
                    <p>The reviews in existing eCommerce apps can be quite irrelevant to users, or at times, number less than 10 due to the lack of incentive to review. We introduce filters to the review system so that users can find relevant reviews. For example, the user wishes to buy the M size shirt but he doesn't know whether he should buy it. He might want to press the Filter by Size to show only reviews of people who bought M size shirts. There is a button at the bottom of the review page to facilitate quick reviews.</p>
                </div>
                <div>
                    <h4>Comparison tool</h4>
                    <Image
                        className="image mobile-screenshot"
                        fluid={data.comparison.childImageSharp.fluid}
                        alt="Product page" />
                    <p>The comparison tool is integrated into the wishlist page. Within the page, users can select a number of items to compare.</p>
                </div>

                <h1>Try it out</h1>

                <iframe width="375" height="667" src="https://xd.adobe.com/embed/fc995aab-b674-40c2-7469-fc533bda0a99-8aa8/?fullscreen" frameborder="0" allowfullscreen></iframe>

                <h1>See it in action</h1>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/nTymbZXHhWE" allowfullscreen></iframe>
                </div>


            </section>

        </div>
    )
}
export default ThreadParadiseProject