# Oakbrook Yass Valley (Part A)

## Contents

  * [R1 Description](#r1-description)
    + [R1.1 Purpose](#r11-purpose)
    + [R1.2 Functionality](#r12-functionality)
    + [R1.3 Target Audience](#r13-target-audience)
    + [R1.4 Tech Stack](#r14-tech-stack)
  * [R2 Dataflow Diagram](#r2-dataflow-diagram)
* [R3 Application Architecture Diagram](#r3-application-architecture-diagram)
* [R4 User Stories](#r4-user-stories)
 * [R5 Wireframes](#r5-wireframes)
    + [R5.1 Description](#r51-description)
    + [R5.2 Mobile](#r52-mobile)
    + [R5.3 Desktop](#r53-desktop)
  * [R6 Project Management](#r6-project-management)
    + [R6.1 Trello](#r61-trello)
    + [R6.2 Jira](#r62-jira)
    + [R6.2 Source Control](#r63-source-control)
  * [R7 Testing](#r7-testing)

## R1 - Description

### R1.1 Purpose

Primarily the purpose of this project is to provide an online platform for Oakbrook Yass Valley, an olive farming business in need of an online presence. 

Oakbrook is looking to advertise their business with a simple website which can also facilitate online sales of their products.  

### R1.2 Functionality 

* Payment gateway - integration of Stripe to handle secure online credit card payments and automation of invoices.
* Responsive webpage - CSS styling designed to seamlessly adapt to changing screen sizes.
* Collapsible, responsive navbar - page navigation links change location from header row to collapsible column in mobile.
* Single page application - the site will re-render its content in response to navigation actions without making a request to the server to fetch new HTML.
* Administrator site-management front-end - a separate React application which enables site owners to add products, view orders and update stock levels.
* Cloud-based storage and deployment - react app deployed using Amazon S3, express application deployment to Heroku.
* Express api request handling - HTTP requests from React front end processed securely by separate Express application.

### R1.3 Target Audience

The target audience for this web app are the potential buyers of olive oil and olive products. Specifically, this includes; food enthusiasts, people interested in olive farming, visitors in and around Yass Valley, local restaurants and local shops.  

### R1.4 Tech Stack

* MongoDB: Document database that stores Express API resources.

* Mongoose: Object data modeling library used to interface with MongoDB within NodeJS.

* Express: Web framework built on NodeJS that simplifies API backend builds by providing tools for handling client requests and responses.

* Passport: Authentication middleware for NodeJS, that is used to verify users. 

* Celebrate: Express middleware that is used for validating information. 

* React: JavaScript library used to build responsive front end interfaces and single page applications. React provides tools for interfacing with a webpage DOM. 

* Redux: A JavaScript library used to manage a global project state, in order to more easily access necessary data. 

* NodeJS: Javascript environment that runs JavaScript outside of the browser, allowing for backend builds that are capable of hosting web services. 

* Axios: Promise based package that simplifies the obtaining of information through asynchronous HTTP requests. 

* Stripe: Payment API that allows websites to charge users for business services. 

* AWS S3: Amazon cloud storage service that provides hosted files to a website. 

* Heroku: Deployment service that hosts websites and servers.

## R2 - Dataflow Diagram
Figure R3 below outlines how data flows between within the different layers of the application.

There are two front-end react applications; admin and users. These both receive data from the express server, which interfaces with the MongoDB database via separate products, admin and user controllers.

![Data Flow Diagram](docs/Data_Flow_Diagram.png "Data Flow Diagram")
*Figure R2 - Dataflow Diagram*

## R3 - Application Architecture Diagram
This MERN stack application composes of a MongoDB database, Express and node.js back-end, and React.js front-end. 

Figure R3 below illustrates how specific software components are interfaced together to form a fully functional, full-stack web application.

The architecture is MVC style, with the data-access components separated from the business logic and view layers.

![Application Architecture Diagram](docs/Architecture_Diagram.png "Architecture Diagram")
*Figure R3 - Application Architecture Diagram*


## R4- User Stories
User stories detail what various users of the application want to achieve when they use the site. This allows developers to identify the required features and functionality.

- As a consumer, I want to be able to purchase olive products online using my credit card
- As a consumer, I want to be able to read and learn about the olive oil farm
- As a consumer, I want to know where I can buy olive oil direct from retailer in store
- As a tourist in the local area, I want to find the location and contact number of Oakbrook Yass Valley
- As an olive oil enthusiast, I want to learn how this farm operates
- As farm owner, I want to sell olive oil online
- As farm owner, I want to promote the health benefits of olive oil
- As farm owner, I want to blog about news and events at the farm
- As farm owner, I want to have postage costs calculated and paid for by the consumer
- As farm owner, I want to view and keep track of current orders and order records
- As farm owner, I want invoices sent to me automatically
- As farm owner, I want potential customers to be able to contact me
- As farm owner, I want to be able to manage the products I am selling online
- As farm owner, I want to be able to update the advertised inventory list online according to my stock levels
- As farm owner, I want to promote our product online
- As farm owner, I want my website to appear in search engines

This is a dynamic list, as user stories evolve as the project evolves.


## R5 - Wireframes 
### R5.1 Description
Balsamiq Mockups software was used to plan the layout and content of each page of the application. Each layout has been configured for mobile and desktop screen sizes.

The styling is designed such that the content is responsive, it seamlessly adjusts its position to account for differing screen size.

It is designed to be 'mobile first'. In the event that a responsive design error occurs, the default design is mobile. Potential styling errors will therefore likely appear in the desktop size rather than the mobile size, where the majority of users are expected to view the site. The likelihood of critical rendering issues is lower in desktop mode since there is more space for the content to expand into.

The responsive design is also catered to include medium width screens, such as iPads. Specific wireframes have not been generated for iPads, as it will render either similar to the mobile version or similar to the desktop version, depending on the page.

### R5.2 Mobile

![Homepage Mobile](docs/wireframes/HomepageMobile.png "Homepage Mobile")

![OurStory Mobile](docs/wireframes/OurStoryMobile.png "OurStory Mobile")

![Contact Mobile](docs/wireframes/ContactMobile.png "Contact Mobile")

![Products Mobile](docs/wireframes/ProductsMobile.png "Products Mobile")

![Show Product Mobile](docs/wireframes/ShowProductMobile.png "Show Product Mobile")

![Retailers Mobile](docs/wireframes/RetailersMobile.png "Retailers Mobile")

![Health Benefits Mobile](docs/wireframes/HealthBenefitsMobile.png "Health Benefits Mobile")

![Health Benefits Desktop](docs/wireframes/HealthBenefitsMobile.png "Health Benefits Mobile")

![My Cart Mobile](docs/wireframes/MyCartMobile.png "My Cart Mobile")

![Checkout Mobile](docs/wireframes/CheckoutMobile.png "Checkout Mobile")

![Confirmation Mobile](docs/wireframes/ConfirmationMobile.png "Confirmation Mobile")


### R5.3 Desktop

![Homepage Desktop](docs/wireframes/HomepageDesktop.png "Homepage Desktop")

![OurStory Desktop](docs/wireframes/OurStoryDesktop.png "OurStory Desktop")

![Contact Desktop](docs/wireframes/ContactDesktop.png "Contact Desktop")

![Products Desktop](docs/wireframes/ProductsDesktop.png "Products Desktop")

![Show Product Desktop](docs/wireframes/ShowProductDesktop.png "Show Product Desktop")

![Retailers Desktop](docs/wireframes/RetailersDesktop.png "Retailers Desktop")

![My Cart Desktop](docs/wireframes/MyCartDesktop.png "My Cart Desktop")

![Checkout Desktop](docs/wireframes/CheckoutDesktop.png "Checkout Desktop")

![Confirmation Desktop](docs/wireframes/ConfirmationDesktop.png "Confirmation Desktop")

## R6 - Project Management
### R6.1 Trello
Initially, Trello was used as a kanban platform to track the status of backlogged tasks. 

![First Trello Screenshot](docs/Trello1.png "Trello Screenshot 14/01")
*Figure R6.1(a) - Initial screenshot from 14/01/2020 of Trello kanban to manage tasks.*

![Second Trello Screenshot](docs/Trello2.png "Trello Screenshot 16/01")
*Figure R6.1(a) - Subsequent screenshot from 16/01/2020 of Trello kanban to manage tasks.*

### R6.2 Jira

It soon became apparent that simple kanban lists were not adequate to manage the project over a period of weeks. We have therefore switched to using Jira, a more comprehensive agile project management platform. Jira facilitates the creation of project roadmaps, which provide a programme for the execution of the project over the project life.

![Jira RoadMap](docs/jira-2020-01-16.JPG "Jira Roadmap Screenshot 16/01")
*Figure R6.2(a) - Initial Jira roadmap from 16/01/2020.*

In Jira, kanban style task backlogs are integrated with planned sprints, which tie into the overall project road map.

The Jira platform is be constantly monitored and updated in response to the changing requirements and priorities of the project by the project manager.

![Jira Kanban task backlog](docs/jira-2020-01-16-B.JPG "Jira Kanban task backlog 16/01")
*Figure R6.2(b) - Screenshot of Jira task backlog from 16/01/2020.*

The project was broken-up into three sprints which were managed in Jira: 
- Sprint A: Documentation and planning
- Sprint B: MVP Functioning app
- Sprint C: Finalisation - Bug fixes and deployment

![Jira Kanban sprint](docs/jira-2020-02-06-sprint.JPG "Jira Kanban sprint 06/05")
*Figure R6.2(c) - Screenshot of finalisation Sprint C managed in Jira 05/02/2020.*

### R6.3 Task Delegation
It quickly became apparent that different team members have different strengths, working styles and preferences for which features they want to work on.

Tasks were generally delegated as follows:
- Project Management and Client Interaction: Elliot
- Backend development: Tom
- Front-end design: Elliot
- Front-end development: Prad, Elliot
- Bug fixes: Prad, Tom

While these were the general roles of the team, the team followed an agile methodology which meant these roles were not rigid but only a guide. 

Task allocation was documented in the Jira platform.

![Jira Kanban task allocation](docs/jira-2020-02-06.JPG "Jira Kanban task allocation 06/02")
*Figure R6.3(a) - Screenshot of Jira task allocation 05/02/2020.*

### R6.3 Source Control

This project composes of three separate public GitHub repositories:
- React front-end for user: https://github.com/raj1020/T3A2PB-React
- React front-end for admin content management: https://github.com/thomasalfonso/T3A2PB-ReactAdmin
- Express back-end: https://github.com/thomasalfonso/T3A2PB-Express

Seperate branches were utilised by each team member while working on features, which were then merged to master at regular intervals. Commits were made often - after any notable portion of code was edited.

## R7 Testing

