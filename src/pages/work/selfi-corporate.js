import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Helmet from "react-helmet"

import WorkBottomNav from "../../components/WorkBottomNav"
import "./work.scss"

const SelfiProject = ({ location }) => {

    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])

    const data = useStaticQuery(graphql`
		query {
			bg: file(relativePath: { eq: "projects/selfi-corporate/bg.png" }) {
				childImageSharp {
					fluid(maxWidth: 2000, maxHeight: 2091, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            main_actions: file(relativePath: { eq: "projects/selfi-corporate/00-main-actions.png" }) {
				childImageSharp {
					fluid(maxWidth: 1533, maxHeight: 410, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            read_about_different_use_cases: file(relativePath: { eq: "projects/selfi-corporate/01-read-about-different-use-cases.png" }) {
				childImageSharp {
					fluid(maxWidth: 1533, maxHeight: 410, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            create_assessment: file(relativePath: { eq: "projects/selfi-corporate/02-create-assessment.png" }) {
				childImageSharp {
					fluid(maxWidth: 1533, maxHeight: 410, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            view_results: file(relativePath: { eq: "projects/selfi-corporate/04-view-results.png" }) {
				childImageSharp {
					fluid(maxWidth: 1533, maxHeight: 410, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            use_results_to_guide_decisions: file(relativePath: { eq: "projects/selfi-corporate/05-use-results-to-guide-decisions.png" }) {
				childImageSharp {
					fluid(maxWidth: 1533, maxHeight: 410, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            view_trends_or_results_by_tags: file(relativePath: { eq: "projects/selfi-corporate/07-view-trends-or-results-by-tags.png" }) {
				childImageSharp {
					fluid(maxWidth: 1533, maxHeight: 410, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            assessment_result: file(relativePath: { eq: "projects/selfi-corporate/assessment-result.png" }) {
				childImageSharp {
					fluid(maxWidth: 1339, maxHeight: 725, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            assessment_summary: file(relativePath: { eq: "projects/selfi-corporate/assessment-summary.png" }) {
				childImageSharp {
					fixed(width: 336, height: 387, quality: 90) {
						...GatsbyImageSharpFixed
					}
				}
            },
            create_assessment_flow: file(relativePath: { eq: "projects/selfi-corporate/create-assessment-flow.png" }) {
				childImageSharp {
					fluid(maxWidth: 1533, maxHeight: 376, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            current_vs_proposed: file(relativePath: { eq: "projects/selfi-corporate/current-vs-proposed.png" }) {
				childImageSharp {
					fluid(maxWidth: 1285, maxHeight: 407, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            dashboard_landing: file(relativePath: { eq: "projects/selfi-corporate/dashboard-landing.png" }) {
				childImageSharp {
					fluid(maxWidth: 1817, maxHeight: 949, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            data_explorer: file(relativePath: { eq: "projects/selfi-corporate/data-explorer.png" }) {
				childImageSharp {
					fluid(maxWidth: 920, maxHeight: 337, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            how_to_use_an_assessment: file(relativePath: { eq: "projects/selfi-corporate/how-to-use-an-assessment.png" }) {
				childImageSharp {
					fluid(maxWidth: 907, maxHeight: 745, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            interactive_data: file(relativePath: { eq: "projects/selfi-corporate/interactive-data.png" }) {
				childImageSharp {
					fluid(maxWidth: 1471, maxHeight: 1251, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            invitation_flow: file(relativePath: { eq: "projects/selfi-corporate/invitation-flow.png" }) {
				childImageSharp {
					fluid(maxWidth: 1209, maxHeight: 376, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            landing: file(relativePath: { eq: "projects/selfi-corporate/landing.png" }) {
				childImageSharp {
					fluid(maxWidth: 1814, maxHeight: 945, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            overall_results: file(relativePath: { eq: "projects/selfi-corporate/overall-results.png" }) {
				childImageSharp {
					fluid(maxWidth: 1537, maxHeight: 869, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            participant_profile: file(relativePath: { eq: "projects/selfi-corporate/participant-profile.png" }) {
				childImageSharp {
					fluid(maxWidth: 1819, maxHeight: 951, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            ranking_additions: file(relativePath: { eq: "projects/selfi-corporate/ranking-additions.png" }) {
				childImageSharp {
					fluid(maxWidth: 1533, maxHeight: 415, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            ranking_wireframe: file(relativePath: { eq: "projects/selfi-corporate/ranking-wireframe.png" }) {
				childImageSharp {
					fluid(maxWidth: 1355, maxHeight: 557, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            tags: file(relativePath: { eq: "projects/selfi-corporate/tags.png" }) {
				childImageSharp {
					fixed(width: 337, height: 125, quality: 90) {
						...GatsbyImageSharpFixed
					}
				}
            },
            use_case: file(relativePath: { eq: "projects/selfi-corporate/use-case.png" }) {
				childImageSharp {
					fluid(maxWidth: 1823, maxHeight: 1300, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            use_case_page_needs: file(relativePath: { eq: "projects/selfi-corporate/use-case-page-needs.png" }) {
				childImageSharp {
					fluid(maxWidth: 1430, maxHeight: 657, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
            user_adoption_channels: file(relativePath: { eq: "projects/selfi-corporate/user-adoption-channels.png" }) {
				childImageSharp {
					fixed(width: 376, height: 400, quality: 90) {
						...GatsbyImageSharpFixed
					}
				}
            },
		}
		`)

    return (
        <>
            <Helmet>
                <title>Work • Selfi.ai</title>
            </Helmet>
            <div className="work">
                <section className="header">
                    <div className="row">
                        <div className="col-12 col-md-6 order-2 order-md-1">
                            <div className="project-details">
                                <h1 className="wipeIn ani-1">Selfi.ai</h1>
                                <div className="description">
                                    <ul>
                                        <li>
                                            <p className="name wipeIn ani-2">Period</p>
                                            <p className="desc wipeIn ani-2">July 2020 - May 2021</p>
                                        </li>
                                        <li>
                                            <p className="name wipeIn ani-3">Role</p>
                                            <p className="desc wipeIn ani-3">Product Design, Front-end Dev, Project Planning, Pricing</p>
                                        </li>
                                    </ul>
                                </div>
                                <a className="btn-primary btn-hover-pulse" role="button" href="https://selfi.ai" target="_blank" rel="noopener noreferrer">Visit website</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2">
                            <Image
                                className="image"
                                fluid={data.bg.childImageSharp.fluid}
                                alt="Selfi.ai" />
                        </div>
                    </div>
                </section>

                <section className="body">
                    
                    <p>Selfi is a psychometric assessment platform built for HR executives and team leaders in organisations to assess characteristics, potentials and well-being of employees.</p>

                    <Image
                        className="image full-width-image"
                        fluid={data.landing.childImageSharp.fluid}
                        alt="Selfi.ai Landing Page" />

                    <p className="text-gray-medium"><i>Psychometric assessments can either be personality-based or aptitude-based, and seek to assess an individual’s behaviour, or abilities and skills. The Myers-Briggs Type Indicator (MBTI) is one out of the many popular personality tests in the market.</i></p>

                    <h1>Why are we building this platform? Insights and needs-finding:</h1>
                    <ol>
                        <li>
                            <strong>Reusable psychometrics data</strong>
                            <ul>
                                <li>Traditional psychometric assessment data is siloed. After a job candidate completes an assessment and is interviewed, the results data is never used again. With Selfi, data is gathered in one place for reusability. Beyond recruitment, this data can be used in such things as training, peer reviews and team-building.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Platform-agnostic psychometrics data</strong>
                            <ul>
                                <li>To create an open and secure psychometrics data layer in Web3. Beyond simply breaking down the current psychometrics data silos, data, when movable across platforms, can be used in various other use cases such as internal analyses and data feeds for other HR tools.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Accessible for all</strong>
                            <ul>
                                <li>Assessments out there are typically in the $100 - $200 range.</li>
                                <li>Whether this price range is an indicator of quality or due to price anchors, I believe recruitment tests should be made accessible to all, no matter the size of an organisation, to provide executives with useful perspectives of their workforce. Increased understanding will lead to an increase in satisfaction and productivity.</li>
                                <li>
                                    Based on our research, psychometrics assessments are done after the initial selection process, before interviews. Beyond GPAs, there are many other factors that determine whether a new employee thrives in a new workplace. By making psychometrics assessments cost-scalable (the higher the usage, the lower per assessment cost), we seek to make psychometric assessments the entrance to future recruitment processes. Considerations:
                                    <ul>
                                        <li>Doesn’t disrupt current flow, but instead enhances it</li>
                                        <li>During the "Initial screening" stage, assessors will be able to filter candidates that fits their screening criteria (e.g. specific characteristic scores) <strong>at scale</strong>.</li>
                                        <li>Psychometrics data can be used in the later "Interview" sage as well.</li>
                                    </ul>

                                    <figure>
                                        <Image
                                            className="image"
                                            fluid={data.current_vs_proposed.childImageSharp.fluid}
                                            alt="Current vs Proposed Flow" />
                                        <figcaption>Current recruitment flow vs proposed recruitment flow</figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </li>
                    </ol>

                    <h1>My Role</h1>

                    <p>I was the product owner of Selfi from product inception (Jul 2020) to MVP completion (May 2021). I collaborated with one backend developer and various psychology researchers, led the planning and coordination, designed the user flows, wireframes, prototypes, and developed the front-end of the now-live platform (<a href="https://selfi.ai" target="_blank">selfi.ai</a>).</p>


                    <h1>Introducing Selfi.ai</h1>

                    <blockquote><p>How might we help HR executives and team leaders to holistically understand who they are hiring, so they can make informed decisions with critical information?</p></blockquote>

                    <p>The main goal of the Selfi platform is to help HR executives and team leaders <mark>understand people at scale, from individual, team, organisation to universal level</mark>. I'll use the term “assessors” to refer to the HR executives and team leader - the primary user of the platform. The main actions that lead to this objective are:</p>
                    
                    <Image
                        className="image"
                        fluid={data.main_actions.childImageSharp.fluid}
                        alt="A User's Main Actions" />

                    <ol>
                        <li>
                            <h2>Selfi Learn</h2>
                            <Image
                                className="image"
                                fluid={data.read_about_different_use_cases.childImageSharp.fluid}
                                alt="Selfi Learn" />
                            
                            <h3>1.1 ... <br/>Increase platform usage through Selfi Learn</h3>

                            <p>A key design challenge is how to increase platform usage. To do so, I proposed building a library of blog posts and Use Case pages based on the assessments on Selfi. These blog posts will help us build an audience through social media sharing, and the Use Case pages will serve as landing for ads and for sharing with potential users as a quick way to understand what we offer on the platform.</p>

                            <figure>
                                <Image
                                    className="image d-block"
                                    fixed={data.user_adoption_channels.childImageSharp.fixed}
                                    alt="User Adoption Channels" />
                                <figcaption>Selfi Learn is a medium to increase platform usage through education</figcaption>
                            </figure>
                            

                            <h3>1.2 ... <br/>Why build a Use Case page for each assessment?</h3>

                            <p>
                                When users don’t understand what an assessment is used for, they either:
                                <ol>
                                    <li>Ignore it due to complexity (not good for adoption), or</li>
                                    <li>Try it anyway but get confused when they don’t know how to use it or when to use it, or</li>
                                    <li>Try it and have no problems using it</li>
                                </ol>
                            </p>

                            <p>
                                The goal of the Use Case pages is to help users understand how each assessment (a use case) can help them find out the information they need, and identify whether an assessment is suitable. Each page details the assessment in a structured way:
                                <ol>
                                    <li>Brief description of what the assessment does</li>
                                    <li>Which characteristics will be tested, and why they are being tested</li>
                                    <li>When (best) to use the assessment</li>
                                    <li>How to use the assessment, and analyse the results</li>
                                    <li>Recommended frequency (if applicable e.g. Employee Satisfaction Survey could be weekly, monthly or annually)</li>
                                </ol>
                            </p>

                            <figure>
                                <Image
                                    className="image"
                                    fluid={data.use_case.childImageSharp.fluid}
                                    alt="Use Case page" />
                                <figcaption>UI of each Use Case page, with “Use Assessment” shortcut links to help users create an assessment quickly.</figcaption>
                            </figure>


                            <h3>1.3 ... <br/>Who needs the Use Case pages?</h3>

                            <p>There are two types of viewers of the Use Case Page who may have different, but concerns that overlap to some degrees:</p>

                            <figure>
                                <Image
                                    className="image"
                                    fluid={data.use_case_page_needs.childImageSharp.fluid}
                                    alt="Types of users of the Use Case Page" />
                                <figcaption>Each type of user has his concerns. Some of the concerns overlap.</figcaption>
                            </figure>

                        </li>

                        <li>
                            <h2>Create assessment</h2>
                            <figure>
                                <Image
                                    className="image"
                                    fluid={data.create_assessment.childImageSharp.fluid}
                                    alt="Create Assessment" />
                            </figure>
                            <p>To begin assessing job candidates or employees, the assessor has to create an assessment.</p>

                            <h3>2.1 ... <br/>What is an assessment?</h3>
                            <p>An assessment consists of a number of characteristics that the assessor wishes to assess of candidates. There are two kinds to allow for simplicity and flexibility:</p>
                            <ol>
                                <li><strong>Simplicity:</strong> Assessment where the characteristics are defined and formulated by the Selfi team,</li>
                                <li><strong>Flexibility: </strong>Select any number of characteristics to assess from a list. We have 14 characteristics as of May 2021, such as “Independence”, “Motivators”, “Leadership Style” etc.</li>
                            </ol>

                            <p>Flexibility comes at a cost: some assessors might choose many characteristics to assess at once. Each addition of characteristic adds to the test duration. To discourage this behaviour, we display assessors the estimated total time required to complete an assessment. One thing I look forward to is the reduction of overall test duration as the AI engine improves. This means more inferred characteristic scores per answered question.</p>

                            <figure>
                                <Image
                                    className="image d-block"
                                    fixed={data.assessment_summary.childImageSharp.fixed}
                                    alt="Assessment Summary" />
                                <figcaption>Highlighted text shows estimated time required to complete an assessment based on how many characteristics are selected</figcaption>
                            </figure>

                            <h3>2.2 ... <br/>What happens if assessors come across an assessment they don’t understand? </h3>
                            <p>An assessment’s perceived usefulness comes from experience. For example, assessment titles like “Work From Home Suitability” are self-explanatory, but “Employee Essentials” is less inferrable. As suggested by our intern, we included a link to the Use Case page, essentially a page that details the assessment with comprehensive details, within each assessment button as shown below.</p>

                            <figure>
                                <Image
                                    className="image"
                                    fluid={data.how_to_use_an_assessment.childImageSharp.fluid}
                                    alt="How to use an assessment" />
                                <figcaption>Highlighted link brings assessors to an information page of each assessment</figcaption>
                            </figure>

                            <h3>2.3 ... <br/>Create Assessment Flow</h3>

                            <figure>
                                <Image
                                    className="image"
                                    fluid={data.create_assessment.childImageSharp.fluid}
                                    alt="Create Assessment Flow" />
                            </figure>

                            <p>Once an assessment is created, assessors are able to invite participants to take it. </p>

                            <figure>
                                <Image
                                    className="image"
                                    fluid={data.invitation_flow.childImageSharp.fluid}
                                    alt="Invitation Flow" />
                            </figure>

                            <p>Results are consolidated live within an assessment page as soon as a participant takes it.</p>

                        </li>

                        <li>
                            <h2>View Results</h2>
                            <figure>
                                <Image
                                    className="image"
                                    fluid={data.view_results.childImageSharp.fluid}
                                    alt="View Assessment Results" />
                            </figure>

                            <p>After the invitees have completed the assessment, results are immediately available in the Results page. The first visualisation introduced, after iterations with heat maps and radar charts, is a custom visualisation that looks similar to bar charts - <strong>Horizontal Score Bar</strong>. It is made up of rows of bars, each representing either (1) an individual, or (2) a characteristic.</p>

                            <figure>
                                <Image
                                    className="image"
                                    fluid={data.assessment_result.childImageSharp.fluid}
                                    alt="View Assessment Results" />
                                <figcaption>Assessment results with score filters</figcaption>
                            </figure>

                            <h3>3.1 ... <br/>The Design Behind - Based on Objectives of an Assessor</h3>
                            <p>There are many personality reports out there that are designed to represent individuals. An assessor’s objective, however, is to be able to sieve out important conclusions based on the data of not just one, but <strong>many</strong> individuals.</p>
                            
                            <p>
                                An assessor’s needs:
                                <ol>
                                    <li>
                                        What do I want to find out?
                                        <ol type="a">
                                            <li>
                                                Hiring:
                                                <ol type="i">
                                                    <li>Who should I shortlist for a job role?</li>
                                                    <li>How do I know whether this person is suitable or not?</li>
                                                </ol>
                                            </li>
                                            <li>
                                                Internal
                                                <ol type="i">
                                                    <li>How’s the overall team mental well-being?</li>
                                                    <li>Will people in this assessment work well together?</li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>Are there any red flags that I should look out for?</li>
                                    <li>How do I compare individuals? Who is better and how is he better?</li>
                                </ol>
                            </p>

                            <p>
                                <strong>Using Schneiderman’s Mantra:</strong>
                                <ul>
                                    <li>
                                        Display overview of data
                                        <ul>
                                            <li>Who participated in this assessment?</li>
                                            <li>Which characteristics are assessed and how does each participant fare in each characteristic?</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Zoom and Filter
                                        <ul>
                                            <li>Filtering of scores by set ranges (0 to 0.2, 0.2 to 0.4 … 0.8 to 1.0)</li>
                                            <li>When a characteristic is selected, it adopts a colour that shows up in all other participants’ rows (in the above example, the characteristic, Adaptability, is in pink and its score is represented in each participant’s row)</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Details on demand
                                        <ul>
                                            <li>When hovering over the data points, more information shows up in tooltips</li>
                                            <li>When hovering over characteristics, definitions show up in tooltips</li>
                                            <li>When hovering over people, a brief summary of one’s characteristic and a hyperlink to his profile page are displayed</li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>

                            <h3>3.2 ... <br/>Post-design Review and Next Steps</h3>
                            <p>TOn one side of the spectrum, we have experienced HR personnel who know what to look out for - red flags, good characteristics combinations etc. And on the other side, we have less experienced users who suggested that this design is too complicated for their use. I came up with the concept of ranking as a next step:</p>

                            <figure>
                                <Image
                                    className="image"
                                    fluid={data.ranking_additions.childImageSharp.fluid}
                                    alt="Adding ranking to the flow" />
                                <figcaption>Adding ranking to the flow</figcaption>
                            </figure>

                            <h3>3.2.1 ... <br/>Mechanics</h3>
                            <ul>
                                <li>Ranking is made optional because there are cases where ranking is not required</li>
                                <li>When ranking is enabled, suggested characteristic scores are populated with societal norms (e.g. Creativity should be high, Self-Confidence should be high). But the assessor can choose to modify them as they wish. If he wants to find someone with low Creativity, he’d slide the slider so that low scores (i.e. low creativity) contribute to a higher weightage of the overall score of a participant.</li>
                                <li>Slider snaps to 6 positions to lower cognitive load. Fewer choices, easier to select.</li>
                                <li>Each slider position corresponds to a weightage. The more negative a weightage, the more it contributes to the total ranking score when the score is low. The more positive a weightage, the more it contributes to the total ranking score when the score is high.</li>
                            </ul>

                            <figure>
                                <Image
                                    className="image"
                                    fluid={data.ranking_wireframe.childImageSharp.fluid}
                                    alt="Ranking wireframe" />
                            </figure>

                            <h3>3.3 ... <br/>Overall Results</h3>

                            <p>In some assessments where the primary objective is to get an average of the sum of all participants’ responses, we have a result to display the output. Individual responses may still matter, and these results are available below the overall results.</p>
                            <figure>
                                <Image
                                    className="image"
                                    fluid={data.overall_results.childImageSharp.fluid}
                                    alt="Overall results" />
                                <figcaption>An overall results section displays recommendations based on all participants’ scores in the assessment.</figcaption>
                            </figure>
                        </li>
                        <li>
                            <h2>View trends or results by tags</h2>
                            <figure>
                                <Image
                                    className="image"
                                    fluid={data.view_trends_or_results_by_tags.childImageSharp.fluid}
                                    alt="View trends or results by tags" />
                            </figure>

                            <blockquote>As the amount of data increases, what would be a good way to organise and view them?</blockquote>

                            <h3>4.1 ... <br/>Introducing Tags</h3>
                            <p>The concept of a “tag” isn’t new. It is widely used in everyday tools such as Gmail, Reddit, YouTube, Medium.com. A tag is a method to categorise millions of data points into manageable, understandable chunks. I started out by exploring how it can be used and how it can be incorporated into Selfi seamlessly.</p>

                            <figure>
                                <Image
                                    className="image"
                                    fixed={data.tags.childImageSharp.fixed}
                                    alt="Tags" />
                            </figure>

                            <h3>4.2 ... <br/>Types of Tags</h3>
                            <ul>
                                <li>Roles (designer, programmer, HR executive, department heads etc.)</li>
                                <li>Departments (finance, HR, logistics, innovation etc.)</li>
                                <li>Demographics (male, female, age group, race, religion, marital status etc.)</li>
                                <li>Job grades (interns, entry-level, middle-level, top-level etc.)</li>
                                <li>Salary range</li>
                            </ul>

                            <h3>4.3 ... <br/>Why tags?</h3>
                            <p>
                                Expand no. of ways of interacting and visualising data to answer questions such as:
                                <ul>
                                    <li>What types of people are we attracting to our internship program?</li>
                                    <li>How does salary range relate to productivity?</li>
                                    <li>How are people in the HR department different from the Innovation team and why?</li>
                                    <li>Which department has the highest potential for creativity?</li>
                                    <li>What kinds of graduates are we hiring?</li>
                                    <li>and so on...</li>
                                </ul>
                            </p>

                            <p>The possibilities are endless. The next question would be: what kind of visualisation helps assessors get to their answers in the shortest possible time, and provide them with succinct evidence which they can present to others?</p>

                            <h3>4.4 ... <br/>Data Explorer</h3>

                            <figure>
                                <Image
                                    className="image"
                                    fluid={data.interactive_data.childImageSharp.fluid}
                                    alt="Data Explorer" />
                            </figure>

                            <p>The Data Explorer is a ground where data gets a consolidated view to answer important questions. An assessment’s results are limited to the participants within it. The Data Explorer, on the other hand, pulls data across participants from all assessments and gives assessors the freedom to turn data into new forms of information through new connections.</p>

                            <figure>
                                <Image
                                    className="image"
                                    fluid={data.data_explorer.childImageSharp.fluid}
                                    alt="Data Explorer" />
                                <figcaption>The Data Explorer helps assessors find new connections and trends with the same set of data available across assessments.</figcaption>
                            </figure>

                            <p>The concept of a tag is the foundation for this design. Every selectable and filterable item is a tag. The lowest-level tag is a “name”, which in the example above are “Cassandra” and “Thomas”. The highest-level tag is “Globally”, which represents the average of all Selfi users’ scores across all organisations of a particular characteristic.</p>
                        </li>

                        <li>
                            <h2>Platform Launch</h2>
                            <p>In May 2021, the Selfi platform’s first working version with payments was launched, at the same time I left the project team for other endeavours. I had fun setting the foundation of the platform, bringing it to life from sketches to a working product. There are many more ways to streamline the user flows to help assessors more easily bridge the gap between traditionally available data (salary, demographics, roles) to psychometrics data. This bridge will answer many interesting questions previously unanswerable, with concrete data, which will support better decision-making for a happier and more productive workforce.</p>
                            <p><mark>PS: I also built <strong>Selfi Personal</strong>, a self-discovery tool for individuals.</mark> When our team first started, we wanted to onboard individuals and team leaders, a bottom-up approach, to gain traction. The idea didn't work and we went for top-down approach instead. Still, it's a nice piece of work where I worked with various researchers and illustrators :) If you are piqued, check the web app <a href="https://selfipersonal.ai" target="blank">here</a>!</p>
                        </li>
                    </ol>


                </section>
                
                <WorkBottomNav path={location.pathname} />
            </div>
        </>
    )
}

export default SelfiProject