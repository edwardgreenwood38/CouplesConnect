# CouplesConnect
ThriveDX milestone project 3 final

Deployed to Vercel.
https://couples-connect-pl9h58fdj-edward-greenwoods-projects.vercel.app/

## Developeres
Frontend
* Roy Minor, Darius Porch

Backend
* Jaleesa Robison, Edward Greenwood


## Description
A site where couples can meet other like minded couples to enjoy activities together.


## How to use
You will need to register and login to use the site. Once logged in you can view events that have been listed for activities based on personnel preferences.

+ Events page shows what upcoming events we have on Couples Connect. 

=============================================
### Technologies used
All frontend photos were from upsplash.com
+ Frontend Sign up Photos 

+ Email: Email.png came from 
https://www.vecteezy.com/

+ Password: Password.png came from https://www.veryicon.com/icons/internet--web/sesame-treasure/login-password-3.html

+ Node and Bootstrap was used for the frontend 

+ React and Express with PostgresDB

-----------------------------------------------


### Future enhancements and/or known issues
+ change link for 'Sign Up' to point to new user page
+ change 'Sign In' to point to login page
+ finish view for events
+ add comments for events
+ add categories for users to select as part of user profile
+ add categories to events
+ add gallery feature to app. shell of feature is partially started
+ need backend deployed and a postgres db for online use


==============================================
#### database scema
**User table**
|column|description|
|--------|---------|
|user_id|unique id for users|
|username|holds user name|
|email|user email|
|password|hash of user password|

**Events table**
|column|description|
|--------|---------|
|id|unique id for events|
|title|name of event|
|description|information about the event|
|date|date that the event occurs|

