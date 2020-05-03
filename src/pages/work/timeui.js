import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Helmet from "react-helmet"

import WorkBottomNav from "../../components/WorkBottomNav"
import "./work.scss"


const TimeProject = ({ location }) => {

    useEffect(() => {
        document.documentElement.scrollTop = 0
    }, [])

    const data = useStaticQuery(graphql`
    query {
        bg: file(relativePath: { eq: "projects/timeui/bg.png" }) {
            childImageSharp {
                fluid(maxWidth: 2000, maxHeight: 2091, quality: 90) {
                    ...GatsbyImageSharpFluid
                }
            }
        },
        design2: file(relativePath: { eq: "projects/timeui/design2.png" }) {
            childImageSharp {
                fluid(maxWidth: 2000, maxHeight: 2091, quality: 90) {
                    ...GatsbyImageSharpFluid
                }
            }
        },
        design4: file(relativePath: { eq: "projects/timeui/design4.png" }) {
            childImageSharp {
                fluid(maxWidth: 2000, maxHeight: 2091, quality: 90) {
                    ...GatsbyImageSharpFluid
                }
            }
        },
        design5: file(relativePath: { eq: "projects/timeui/design5.png" }) {
            childImageSharp {
                fluid(maxWidth: 2000, maxHeight: 2091, quality: 90) {
                    ...GatsbyImageSharpFluid
                }
            }
        },
        design6: file(relativePath: { eq: "projects/timeui/design6.png" }) {
            childImageSharp {
                fluid(maxWidth: 2000, maxHeight: 2091, quality: 90) {
                    ...GatsbyImageSharpFluid
                }
            }
        },
        design10_1: file(relativePath: { eq: "projects/timeui/design10.1.png" }) {
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
                <title>Work • Time</title>
            </Helmet>
            <div className="work">

                <section className="header">
                    <div className="row">
                        <div className="col-12 col-md-6 order-2 order-md-1">
                            <div className="project-details">
                                <h1>Time Homescreens for Android</h1>
                                <div className="description">
                                    <ul>
                                        <li><p className="name">Period</p><p className="desc">Jan to Apr 17</p></li>
                                        <li><p className="name">Role</p><p className="desc">Team member</p></li>
                                        <li><p className="name">Project Scope</p><p className="desc">To increase accessibility to apps and documents by shortening the click distance and improving categorisation of apps.</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2">
                            <Image
                                className="image"
                                fluid={data.bg.childImageSharp.fluid}
                                alt="Time Homescreens for Android" />
                        </div>
                    </div>
                </section>

                <section className="body">
                    <h1>Brief</h1>
                    <p>This series is an experimentation of different home screens in a modern smartphone. There's no final design per se.</p>

                    <p>With the increasing number of applications in smartphones today, accessing the desired applications can potentially be time consuming, effortful and result in cognitive load due to visual clutter. This will disperse the user’s attention and hence access to functions may be delayed or even hindered. This projects seeks to enhance access to applications in smartphones which would be especially effective in smartphones containing a high number of applications. By applications, we refer not just to apps, but to things like contacts, documents, images as well.</p>

                    <h1>Progress</h1>
                    <p>This project is named 'Time UI' not because we already have a solution in mind. At the beginning, we came up with various ideas, tried ways to make shortcuts more accessible. We explored different ways of categorising apps and presentation, going back and forth between coming up with new ideas and getting feedback from users. After rounds of iteration, we decided to go with the concept of time and voice in our final design. Below are some of the designs that we came up with along the way:</p>

                    <Image
                        className="image"
                        fluid={data.design2.childImageSharp.fluid}
                        alt="Design 2" />

                    <p><b>Design elements</b><br /><br />(A) This blue region (the left side of the screen) holds pinned apps. These apps are selected by the users to be shown on the screen. The user can choose to resize the app icon sizes as required, but the default size for the top-most app has the largest size. Other than apps, users can also pin contacts here.<br /><br />(B) Search bar. This allows the user to search for apps without scrolling through the list of apps.<br /><br />(C) Similar to Design 1, the apps are sorted by frequency of use, with the most frequently used apps at the top. The difference is the ability to scroll through the list of apps for this design. With a narrower width space allocated to showing the list of apps, introducing a scrollbar is necessary.</p>
                    <p><b>Evaluation</b><br /><br />
            If the user has many apps, he’ll have to take a long time to find an app. Furthermore, a long scrollable section increases the difficulty of accessing apps. Facing this problem, the user might have to resort to using the search bar very frequently, making the scrollable section redundant.</p>
                    <p><b>Refinement ideas</b><br /><br />Instead of a 50-50 distribution of space, the user should be allowed to change the ratio to fit his needs. For example, if the user wants more space for his frequency-sorted apps, he can make it fill 70% of the width, and leave 30% for the pinned apps. Is there any way to separate the long list of apps into manageable folders or sections? Do we really need to show all the apps installed in the user’s phone in the home screen? If not, what can we do? We can try showing just a number of apps frequently used by the user. And if they can’t find it, there can be a button to ‘Show All Apps’. Prioritising what to show on a space limited screen is important.</p>

                    <Image
                        className="image"
                        fluid={data.design4.childImageSharp.fluid}
                        alt="Design 4" />

                    <p><b>Design elements</b><br /><br />(A) A drawer. There is space to allow user to peek into the available apps in a section. By pressing on this grey area, the drawer section will come to the front of the interface and cover most of the screen. Each drawer is customizable to contain either apps or widget.<br /><br />(B) There are a total of 4 drawers in this interface, indicated in the colours of blue, red, yellow and grey. For right-handed users, the red section could contain apps that are frequently used, followed by red and yellow, and finally grey. The rationale behind this design is our assumption that the space that is further away from the screen is hard for the user’s fingers to reach and hence, could be used to contain less frequently used apps. For each section, there’s a number indicator to indicate how many apps there are inside the section.<br /><br />(C) A drawer. This blue section contains a calendar widget. In the toggle off state, the current date is shown. In the toggle on state, a full calendar expands to cover the phone screen.  Other possible widgets are Maps, Music and Photo Gallery.<br /><br />(D) The section in the centre of the user interface contains a list of pinned apps. These apps should be accessible with a single click and frequently used by users, as opposed to other apps which can be accessed only with 2 clicks and above.</p>
                    <p><b>Evaluation</b><br /><br />
            Apps are partially shown to signify that the section can be pressed. However, there could be better signifiers such as the use of arrow icons. In the blue section, there could be an arrow pointing diagonally towards the top right to indicate that the drawer will expand towards that direction.<br /><br />Spacial positioning of apps helps in mapping. This design takes into account the behaviours of both right-handed and left-handed users – the user gets to choose the placement of widgets and apps based on the ease of reaching each section with their fingers.<br /><br />Mapping can reduce cognitive load when users try to access apps. For example, he wishes to access Line Messenger. He subconsciously knows that he placed it in the red section, and the red section is at the bottom right. With little effort, he will be able to find the app despite the click distance. However, this user-performed classification means extra work for the users. They have to classify which apps they wish to place in each of the four sections before they can start using the design efficiently.<br /><br />What if the user wishes to have more than four sections? Will this design be able to accommodate such customizations? Also, are the numbers indicating the number of apps in each section useful to the users or a waste of visual space? Could that space be turned into something else to give better information for users?</p>
                    <p><b>Refinement ideas</b><br /><br />We have been trying to look at designs that restricts all interface elements to a single page. Does this help or hinder the accessibility of apps? Could we try having multiple pages instead? In his book ‘Design of Everyday Things’, Donald Norman mentions that designs can be complicated as long as it is not confusing. So far, we have been designing interfaces that look simple to reduce the chances of confusing. However, this restricts the functions that we can have in the interface.</p>

                    <Image
                        className="image"
                        fluid={data.design5.childImageSharp.fluid}
                        alt="Design 5" />

                    <p><b>Design elements</b><br /><br />(A) A day is divided into 4 time sections, each holding 6 hours out of a total of 24 hours. The background changes with the time section and is indicative of the amount of light the user sees around him at that time.<br /><br />(B) This calendar acts as a shortcut and a container for a number of information. As a shortcut, it allows the user to access photographs, events and apps that he used on a specific date. For example, let’s assume that today is 20 Mar 2017, as shown in the interface. By pressing on ‘20’ in the calendar, the user will be brought to the screen of 20 Mar 2017, showing relevant events, photos and apps of that date. The left and right buttons changes the month of the calendar.<br /><br />(C) Button that links to the App Drawer. The App Drawer is a screen in Android that lists all the apps installed in the phone. In case the user cannot find an app he wants in the time-based apps section (D), he can still find his app with a click of this button.<br /><br />(D) Time-based apps. Based on the user’s past app usage, only apps that have been frequently used in a time slot (for example 12 to 6pm) will be shown. The most frequently used apps is shown at the top, followed by the next frequently used and so on.<br /><br />(E) Photographs taken and events specific to a date are shown together with the apps. Each type is colour-coded differently. For example, the events are colour-coded in red.<br /><br />(F) Pinned apps. The user can choose to pin up to three apps here for easy access. Unlike the apps in Section D, these apps do not change in position.</p>
                    <p><b>Evaluation</b><br /><br />
            In an attempt to make the interface more “complex” while not increasing the confusion to users, we decided to design an interface that changes dynamically based on time. One problem faced by users is accessing downloaded documents and images quickly. We decided to pull out this function and integrate it into this design.<br /><br />Our assumption: the user knows the date he downloaded a document on. If he wishes to open the document, he can (Step 1) press on the date on the calendar widget (Section B), and quickly (Step 2) locate the document on that date.<br /><br />The things that change in this design are the documents and images downloaded specific to a date. The apps frequently used in a time section does not change and hence, is consistent in all the dates.<br /><br />A limitation in this design is the number of apps the user can pin. We can have a scrollbar to provide more room for pinned apps. But is it required? Do users really want to pin so many apps? In case the user cannot find an app, he will still be able to access all apps from the App Drawer button in Section C.</p>
                    <p><b>Refinement ideas</b><br /><br />Does showing time and dividing a day into four time sections help the user in accessing apps faster? How might we change the background graphics to better suit what the user sees around them? If they were indoors, and they did not know that it is raining outside, does showing a rain background and displaying rain-related apps on the screen helpful?<br /><br />Perhaps we can try circumstances-related user interface, such as displaying apps relevant to what the user is doing – apps that show up when the user is travelling on public transport, driving in cars, sleeping, when it is raining outside.</p>

                    <Image
                        className="image"
                        fluid={data.design6.childImageSharp.fluid}
                        alt="Design 6" />

                    <p><b>Design elements</b><br /><br />(A) A single arrow represents a change in day, and a double arrow represents a change in month.<br /><br />(B) If there is at least one photograph taken in a specific date, an icon is shown at the top of the day. This applies to events as well – if there is an event, an icon will be shown.<br /><br />(C) The outermost ring contains pinned apps, and the inner circles contains time-based apps that changes based on the frequency of use for apps in a time section.<br /><br />(C) App drawer. Links to a page that lists down all the apps in case the user can’t find it in the home screen.<br /><br />(D) The numbers represent the hour in the 24-hour time format. (i.e. 15:00 is 3pm). The user can either choose to swipe the circle bounded by the numbers to change the time shown on the screen, or by pressing a left or right button.<br /><br />(E) This region is made up of a circular clock. By swiping it left or right, the time shown in Section E changes.</p>
                    <p><b>Evaluation</b><br /><br />
            This design works similar to Design 5 in that the background colour changes with the current sky colours. It is an attempt to bring circles into the interface to make it look less angular. Also, time and clocks are associated with circles and we thought it would be good to bring in circles to make it look more consistent. There are two major disadvantages with introducing circles into the design. (1) Untidiness and (2) Less items can be contained in a given space as compared for a four-sided space like square or rectangle. In fact, we tried adding documents, images and events into Section F but it looks disorganized.<br /><br />In Section C, we tried placing apps at the periphery of the circles and it did not feel organized too. Although the numbers on the circumference of a circular clock makes sense, placing apps around a circle do not seem to produce the desired effect we want. It is not as visually appealing.<br /><br />We tried introducing interaction into the interface with this design. The light blue circle (behind the yellow circle) can be swiped left or right to change time. Interaction may increase the interactivity and fun factor for users. But how could we provide affordance to show that the circle is a “wheel” and can be turned?</p>
                    <p><b>Refinement ideas</b><br /><br />There are two ways we can proceed from here. Go angular, or think of more ways to display apps so that it makes sense on a circle. In any case, it is worth considering interaction into the design. Instead of simply swiping left, right, up or down, could we introduce some gestures that show or hide certain portions of the user interface when something is triggered?</p>

                    <Image
                        className="image"
                        fluid={data.design10_1.childImageSharp.fluid}
                        alt="Design 10.1" />

                    <p><b>Design elements</b><br /><br />(A) This area shows the calendar and the current date is highlighted.<br /><br />(B) The purple part shows any events and birthdays or reminders on the day.<br /><br />(C) This shows any files that were downloaded on the day. They are combined with any pictures taken on the day as well. Sections B and C are combined together to form a scrollable area where all the relevant events and files are put together in the middle of the screen.<br /><br />(D) These are the pinned apps for easy accessibility.<br /><br />(E) This is a scrollable area to show the apps that are used by the user on a particular day.<br /><br />(F) The button here accesses the recent downloads.</p>
                    <p><b>Evaluation</b><br /><br />
            In this design, we re-attempted combining events, images and documents downloaded into one component on the screen, as shown in Section B. The technique was last used in Design 5. Users told us that as a first-time user, it is confusing seeing so many colours and elements in a single screen. Our rationale for colour-coding events as purple, documents as red was to set a constraint in the user’s mind – once they registered that a specific colour refers to a particular type, it will be easier for them to use this design in future. It seems that we shouldn’t have forced this down the user. Perhaps we could come up with something better to visually differentiate images from documents and events.<br /><br />The today button beside the time is not easily registered as a button. Furthermore, what will the button text show when the user has changed the day? The text in the button is unclear. The location shown below the time is not easily noticed at first glance. While we wanted to introduce the location-based app by combining apps filtered by location and time, the relation is once again not clear.<br /><br />Having scrollable apps in Section E increases the click distance. To find a certain app, the user will have to (Step 1) scroll if is not found on the home screen, and (Step 2) click the app.</p>
                    <p><b>Refinement ideas</b><br /><br />Perhaps there could be some sort of hierarchy in the apps as users tend to not use more than 6 apps equally at any time period. There should also be some indicator that the time-based apps do change according to the time. As in this design, the timeline and the circular section are removed, it is even less obvious that the apps being displayed are time-based. We could bring back the timeline and make the relation clearer by some form of grouping. The calendar at the top also does not give any indication that there is an event on that day or not.</p>

                    <h1>Consolidating findings</h1>
                    <a href="websites/timeui/frame.html" target="_blank">
                        <Image
                            className="image"
                            fluid={data.bg.childImageSharp.fluid}
                            alt="" />
                    </a>
                    <p><b>Homescreen</b><br /><br />Tab-based user interface – tabs are automatically activated under specific conditions. For example, it is currently afternoon, and the user is travelling (detected by GPS through movement). Both the Afternoon and Travelling tabs will be activated. This means that apps that are usually used in the afternoon and while travelling, such as eBook readers and Music Player apps.<br /><br />Voice-activation function – There is a hands-free voice control function where users can open an app by saying an activation word, followed by a voice command. From a phone with screen off, calling out “Spotty, open Twitter”. Here, spotty refers to the name given by the user to his phone, and ‘open twitter’ is the command to open up the Twitter app from a screen off state.<br /><br />App sizes shown on the main screen corresponds to the frequency of use. The bigger it is, the more frequent the user uses it, and hence, the easier it is for users to press the button.<br /><br />When the phone interface is used for the first time, There will be no app shown on the home screen. Apps installed will be immediately placed in the home screen, until the 6 app slots are filled up, or when the frequency of use of some other apps exceeds this app’s frequency of use. This will reduce users’ need to access the app drawer often when the user starts using this interface.</p>
                    <p><b>Recent Apps screen</b><br /><br />This screen is accessed by swiping up in any screen.<br /><br />The Recent apps section shows apps that have been recently accessed by the user and are considered open. There is a perspective shift to increase visibility of the content in the opened apps. Tapping on the Instagram screen takes the user to the Instagram page.<br /><br />Recommended apps are displayed at the bottom. If there are many recommended apps, the bar will become horizontally scrollable.</p>
                    <p><a className="btn-primary" href="websites/timeui/frame.html" alt="Time UI Proto.io" target="_blank" role="button">Proto.io Prototype</a></p>

                    <h1>User Testing and Limitations</h1>
                    <p><i>Existing technologies</i><br /><br />There are currently no similar ways of pushing apps to user. However, the concept of the proposed interface hinges on the assumption that the phone is smart enough to push apps to users accurately. Hence, there is a limitation if the concept were to be prototyped into a fully functionable product.</p>

                    <p><i>Limited adoption of proposed interface</i><br /><br />While our user test reveals relatively high acceptance of the proposed concept, they are generally adept to the use of smartphones. They require less time to familiarise themselves with the interface. The user interface proposed in this project combines many elements, both obvious and subtle ones, on a relatively small screen of a smartphone. There is a variation of tabs and icons combined together in a relatively unorderly manner. No explanation was given to explicitly explain how the user can interact with the element, nor was there explanation for the function of each UI element – why they were placed at particular positions on the screen.. An inexperienced smartphone user may not be able to be able to fully understand all the elements presented to them.</p>

                    <p><i>User controllability</i><br /><br />Based on acceptance review of the design, user’s would prefer if they could have more control over the customizability of the phone to allow for their sense of control. In the current proposal, apps pushed to users on the homescreen purely based on past behaviour at any one particular time and location. However, there may be cases whereby user may do different things at one particular time, or be at a particular place at various times. Yet, users would want to access this particular app regardless of the change in either time or location. Having partial control of what apps can be pushed may be more practical and feasible then just dependent on the data the smartphone collected on app usage patterns.</p>

                    <p><i>Privacy invasion</i><br /><br />Since apps are pushed to users based on the time and location, it is constantly tracking user’s actions in an implicit manner. Users may feel uncomfortable that they are constantly monitored.</p>
                </section>

                <WorkBottomNav path={location.pathname} />

            </div>
        </>
    )
}
export default TimeProject