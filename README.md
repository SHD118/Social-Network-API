# Social-Network-API

### Siddharth Desai

## Description
The objective here was to use Express.js, Compass, mongoose, mongoDB to build a social network where the user can have a network of friends, react, and share opinions. With the power of Insomina we can fetch data from the mongo database and oment.js was used to organize the the dates in a more wide-spread format.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

```
[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

## Table of Contents
1. [ Description. ](#description)
2. [ Installation. ](#installation)
3. [ Usage. ](#usage)
4. [ License. ](#license)
6. [ Tests. ](#tests)
7. [ Questions. ](#questions)
8. [ Video. ](#video)
9. [ Screenshots. ](#screenshots)
10. [ Links. ](#links)
11. [ Resources. ](#resources)
## Installation
* Clone the repository using:
```
git clone git@github.com:SHD118/Tech-Blog.git
```
* Ensure you are in the current working directory
* Ensure all dependencies are installed as shown below installation instructions are below:
```
{
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^6.0.13"
  },
}

```
Run the below commands to install any missing dependencies
```
npm install express
````
```
npm install mongoose
```
Or, 
```
npm i
```
To run the Social Media API project enter the following command:
```
npm run start 

```
## Usage
* Ensure all depencies and above steps are fulfilled 
* Navigate to the working directory and open a terminal and run the below command
```
mysql -u root -p
```
* After entering password run the below command to initiliaze the database
```
SOURCE schema.sql 
```
* In the working directory run the below to initialize data into the database tables:
```
npm run seed || npm run dev

```
* Lastly, in the working directory run the below to start the application
```
node index.js
```

## License

Copyright <2022>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
## Tests
N/A
## Questions?
Want to see more of my work? [Github Link](https://github.com/SHD118/Team-Profile)
<br/>
Want to learn more please contact me at shdesai118@gmail.com

## Video
https://www.awesomescreenshot.com/video/6057594?key=0b906fd55e89fad4549f742a94d6afe6

## Screenshots
![](./Assets/role.PNG)
![](./Assets/emp.PNG)
![](./Assets/dep.PNG)

## Links

* https://github.com/SHD118/Employee-Tracker

## Resources

