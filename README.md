# BrightTech Solutions
A fictional technical marketing service where companies can sign up to receive assistance with maintaining their brand through a variety of different services.  

## Overall Project Goals
* Set up an effective application front-end that is easy for users to navigate and understand the purpose of the project 
* Save company's credentials in a database when they sign up so that they can simply log in with that same information
* Create a simple dashboard that display's a company's analytical information
* Potentially implement an AI chatbot that allows clients to ask any pressing questions

## Target Audience
This platform is designed for administrative members within a tech company that are looking to receive help in enhancing their business in a variety of different ways.
The services that BrightTech Solutions would offer include:
* IT Management
* Sustainable Tech Consulting
* Cybersecurity & Risk Management
* UX/UI Design

## Tech Stack
* IDE: Visual Studio Code
* Vite
* JSX
* JS
* HTML
* CSS
* AWS
* Google Gemini (if there is still time to implement a chatbot using Gemini API Key)

<img width="956" height="505" alt="techStack_image" src="https://github.com/user-attachments/assets/49117191-5943-4987-8792-17cd80d385c0" />


## AWS Implementation Logic

<img width="1021" height="232" alt="BrightTechAWS drawio" src="https://github.com/user-attachments/assets/7028fdae-62cb-4717-9d35-309b2b1c7c75" />



## Website Sections (On the Navigation Bar)
* **Home Page:** Display a brief welcome message and the company's mission.
  
* **About Page:** Gives a more detailed description of what BrightTech Solutions is and what it hopes to accomplish.
  
* **Services:** Each tab on this page will give a brief description on the four services that companies can choose from.
  
* **Contact:** Gives clients and those who are simply curious about the company the opportunity to attach their email and a question/comment they have (this is to focus more on taking information from the application's front-end and saving it in the back-end database).
  
* **Get Started:** This page will lead users to the different pricing tiers for BrightTech Solution Services and their respective benefits. By clicking "Get Started" under one of these plans, users will be taken to a sign up form where they will be prompted to enter their company name, email address, full name, create a password, and choose the type of service they would like to receive.

* **Log In:** Users will be prompted to enter their email and password to log back into their account that have already created through the "Get Started" page. Ideally, if the user enters their credentials correctly, they will be led to their account. If not, an error message will appear and they will be prompted to try again.
    * **Beyond the Log In:** Ideally, once a user successfully logs into their account, they will be led to a dashboard that will display the number of consulting hours for that week, number of tickets attended to within a week, and the priority level of each ticket (Low, Moderate, and Urgent).

## Examples of Website Layout So Far


<img width="958" height="501" alt="initialWebsite_screenshot" src="https://github.com/user-attachments/assets/74c13598-128c-43af-9aaa-c4d6dc537276" />
<img width="419" height="440" alt="initialWebsite_screenshot(part2)" src="https://github.com/user-attachments/assets/26040393-caa8-41b9-b579-b86edb939fe3" />




## Milestone Schedule
**2/13:**
* Create GitHub repository and push code
* Create README file containing project details and scope
* Make website logo, and develop some starter code for each section of the website
* Record 5-minute video describing the project
  
**3/13:**
* Work on code that will handle AWS API requests
* Create AWS Lambda function that process information that is received from the API request
* Create RDS Database that will contain 3 different tables that will contain information from the "Contact", "Get Started" (Sign Up), and "Log In" pages from the website that are entered by the user
  
**4/17:**
* Once all other main objectives are been successfully implemented on time, possibly include an AI chatbot using Google Gemini's API
 

## Milestone 1 Video
[Milestone 1 Video](https://www.youtube.com/watch?v=N9y59C47YQ0) 



