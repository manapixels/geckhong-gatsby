import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Helmet from "react-helmet"

const AskSimpleProject = () => {

    const data = useStaticQuery(graphql`
		query {
			bg: file(relativePath: { eq: "projects/asksimple/bg.png" }) {
				childImageSharp {
					fluid(maxWidth: 2000, maxHeight: 2091, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
            },
		}
		`)

    return (
        <>
            <Helmet>
                <title>Work • AskSimple</title>
            </Helmet>
            <div className="work">
                <section className="header">
                    <div className="row">
                        <div className="col-12 col-md-6 order-2 order-md-1">
                            <div className="project-details">
                                <h1>AskSimple</h1>
                                <div className="description">
                                    <ul>
                                        <li><p className="name">Period</p><p className="desc">Sep 16 to Jan 17</p></li>
                                        <li><p className="name">Role</p><p className="desc">Team member</p></li>
                                        <li><p className="name">Project Scope</p><p className="desc">AskSimple solves the need of shy students to be able to ask questions in class without the fear of getting embarrassed. Also, the concept fosters class participation in general and might encourage more unmotivated students to participate and be interested in class topics again.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2">
                            <Image
                                className="image"
                                fluid={data.bg.childImageSharp.fluid}
                                alt="AskSimple" />
                        </div>
                    </div>
                </section>

                <section className="body">
                    <a className="btn-primary" role="button" href="https://www.csie.ntu.edu.tw/~r04922001/hcid_edulearn/" target="_blank" rel="noopener noreferrer">Website</a>
                    <h1>Needfinding</h1>
                    <p>We were given the task of finding problems faced in the education sector. Narrowing it down to frustrations faced by students, we decided that these frustrations should be similar across borders. We interviewed 8 students across 5 different countries, cultures, and course specializations.</p>
                    <p>Classes are not only taught in physical classrooms anymore, online alternatives also exist. One might even say that physical classrooms are starting to move towards classes exclusively taught online, due to scalability and convenience. These online classrooms are not fully mature yet and might bring even more frustrations to students and teachers, which is why we also want to explore this part of our studio theme using contextual inquiries.</p>
                    <blockquote>"What do you find frustrating in the classroom?"</blockquote>
                    <p>The 3 big questions we wanted to know were:</p>
                    <ul>
                        <li>"What do you find frustrating in the classroom?"</li>
                        <li>"What would you like to change if you think about previous classroom experiences?"</li>
                        <li>"What do you like about the interaction between you and the teacher?"</li>
                    </ul>

                    <h1>Initial POV</h1>
                    <p>Based on our interviews with students, we identified the following initial point of view:</p>
                    <img src="images/load.svg" data-src="images/projects/asksimple/AS-03.png" alt="" />
                    <p>We noticed that both students who took both types of classes or just one type have a common frustration. We conducted additional needfinding based on this point of view. We also focused our new interview questions on bringing online and offline classes together, since both types of students have more or less the same frustrations in a different context. To understand our findings, we translated the things mentioned by our users to an empathy map:</p>
                    <img src="images/load.svg" data-src="images/projects/asksimple/AS-01.png" alt="" />

                    <h1>Additional Needfinding</h1>
                    <p>We noticed that both students who took both types of classes or just one type have a common frustration. We conducted additional needfinding based on this point of view. We also focused our new interview questions on bringing online and offline classes together, since both types of students have more or less the same frustrations in a different context.</p>

                    <h1>Low-fi Prototype</h1>

                    <p><b>Enter a classroom:</b><br />If a user wants to enter a new course, the “+” button is clicked, scan the QR code provided in class or enter an ID and then the course will be added to the course list.</p>
                    <img src="images/load.svg" data-src="images/projects/asksimple/ss-enterclassroom.jpg" alt="" />
                    <p><b>Navigation:</b><br />Users can navigate in the order: Choose a course -> choose a session -> choose a question.</p>
                    <img src="images/load.svg" data-src="images/projects/asksimple/ss-navigation.jpg" alt="" />
                    <p><b>Ask a question:</b><br />Click on the “Ask” button, enter a question in the pop-up text field and submit the question. A “Thanks for asking” message will appear and the question will appear in the question list.</p>
                    <img src="images/load.svg" data-src="images/projects/asksimple/ss-askquestion.jpg" alt="" />
                    <p><b>Answer a question:</b><br />The arrow “v” below the question is clicked to open all answers to the question. Click on answer opens a pop-up text field, Click on submit adds the answer to the answer list.</p>
                    <img src="images/load.svg" data-src="images/projects/asksimple/ss-answerquestion.jpg" alt="" />
                    <p><b>Upvote a question:</b><br />To upvote a question, user clicks on the triangle sign. To redo the action, the triangle is clicked again.</p>
                    <img src="images/load.svg" data-src="images/projects/asksimple/ss-upvote.jpg" alt="" />

                    <h1>Concept Video</h1>
                    <p>To better illustrate the above actions, we created a video to show how the app can be used in a lecture theatre.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yZC8SCDMloU" frameborder="0" allowfullscreen></iframe>

                    <h1>User Testing</h1>
                    <p>We found 3 random students from the dorm to try out our low-fi prototype. We cannot test the prototype in a real setting, so we got the next best thing; we simulated a classroom session in a small room with tables and chairs. During the testing, we have a person tells the scenario, and another person as 'The computer' who switches the paper screens when the user interacts with the prototype. Two other people were observing and recording down what they hear and saw from the user. We have qualitative measures, that consists of observations of mistakes. Mistakes are defined as pushing something with the wrong assumption. Another thing is when the test participant is wanting to do something, but could not because it was not in the prototype. We noted that down as possible major points of improvements. Our other test measure is a quantitative measure: the time to complete a task.</p>
                    <p>Thanks to the testing of the paper prototype, we were able to find out about several bugs that our first paper prototype carries, certain issues that were unclear to the testing participants as well as several ideas that the participants had concerning the improvement of the app. Each tasks was completed within 3 minutes, which is fast enough. They should not spend more that 5 minutes on each tasks, as our value proposition is asking made simple, so every participant met those quantitative expectations.</p>

                    <h1>Discussion on the user testing</h1>
                    <p>We gained many learnings from the testing of our prototype. First of all, we learned that it is difficult to take all ways of usages into account as a designer. Our test participants suggested many basic functionalities which sounded logical to include. However, some suggestions were clearly personal preferences. We have to think carefully about these suggestions, as we cannot respond to everyone’s needs and preferences in one app. However, we will try to respond to the preferences of the majority.</p>
                    <p>A clear fault in our design was a button that was clickable, but was not seen as clickable (upvote button). On the other hand, a button that was not clickable, was seen as clickable (approved sign for questions). For these cases we decided to change the buttons into something that is more obvious to their intended functions. We did the same for any other unclear functions in our design that were pointed out.</p>
                    <p>Furthermore, we simply forgot many of the basic functionalities, like e.g. a basic logout function. Even if not everyone wants to logout the app, and rather stay logged in the app, we agreed that the option should be there. After each test, several of those basic functionalities were added.</p>
                    <p>Another improvement was in the complicated process regarding the notification of receiving an answer to a questions you asked. Clicking through the app to reach the answer took too much time, so we simplified it. Although it was not in our three tasks,we considered it still an important part of our design.</p>
                    <p>Our testing did not reveal anything regarding how the TA and teacher is using our application. Both interfaces are showing the students’ part of the app, however some functionalities need to be different. For example, teachers can make sessions, but can’t upvote questions. Both the TA and teacher have the ability to approve answers, and possibly moderate the questions/answers. In the following process, we will have to decide if we will create the TA/teacher interface and how it will be designed.</p>

                    <h1>See it in action</h1>

                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/pP_nR8pnHXU" allowfullscreen></iframe>
                    </div>



                </section>
            </div>
        </>
    )
}

export default AskSimpleProject