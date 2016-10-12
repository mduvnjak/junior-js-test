# Kraken Junior Assignment
## Goal
The goal of this assignment is to create a website personalization.

## Intro
Website Personalization is the process of creating customized experiences for visitors to a website. Rather than providing a single, broad experience, website personalization allows companies to present visitors with unique experiences tailored to their needs and desires. 

## Task
Create a website personalization which will display a message to the client. Implement the missing functions in *./js/app.js* and add custom CSS rules in *./css/style.css*.

The user data must be fetched from the  [https://randomuser.me/](randomuser API). Nationality of the user must be French. You can use either ajax or javascript in the implementation. User emails can be considered unique.

The website personalization must be shown to the user whenever he scrolled over 65% of the page. The popups background color will depend on the gender of the fetched user. If the user's gender is male the background color of the popup should be *lightblue* otherwise if female use the color *lightcoral*. The popup should be positioned in the bottom right corner of the screen and be always visible. 

In the popup in the paragraph the word *email* is underlined because it is a link. Clicking on the email text should open the clients default email app with the *to* field prefilled with the users email and the subject 'Junior Assignment'. 

We dont want to render the same user twice. Implement logic for tracking and checking already rendered users in the clients browser. If the fetched user was already rendered don't display the popup.

The popup should be render only on the post.html page. 

Editing any of the html pages is disallowed.

## Technical tasks
1. Implement fetchUser 
2. Implement render
3. Implement shouldRender
4. Implement trackUser
5. Create CSS, HTML