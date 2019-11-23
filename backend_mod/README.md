# Theme Social & Chatting Website

Name of Groupe : éclair
Member : Freder Sip, Runcong Li, Zixin Zou

# Synopsis


## Topic :

Our topic consists to create a Chat Website which can have many subjects be discussed. The users can see the most popular subject and choose the one they like and discuss together. They can also create new subjects and some activities about this project. They can even uploading their videos, images and so on in the opened subject forum in order to share their hobbies and interests.
## Analyze :

The main goal of our project is that users will able to share their interests and hobbies in our website. The users can also read the comment of the others and share their center of interest with them. Our website could link people to their hobbies and make them friend.

First of all, we have to realize the most important thing which is to install a server-client system. Then the other goals have to be realized, for example the user has to create an account for being identified. Moreover, once the users will be logged in the website, they can choose severals subjects created beforehand. They can also upload images, videos, movies, video games and so on.

We did some research about how to create a Chat Website and forum, we think it is entirely possible to do this kind of site. With some videos and tutorial from the internet, we think we can realize our website.

If during the realization of our project, somes issues we didn’t think before emerge. We will try to adapt to these issues. We will also to anticipate the problems we can have. For example, we will create a setting to users in order to set their interface as they wish. If the user sees the font is too small, then he can set the font, for example.

## Design :

### Basic Function
A Chat Website has a HomePage and a ChatRoomPage. 
1. All subjects display in the home page.=>express( API REST )
2. User can create a new subject. =>express( API REST )
3. User can choose exist subject and join it. =>express( API REST )
4. Chat room page support multi-person live chat.=>(Socket.io)

### Intermediate Function
There are some new pages SubjectPage, UploadPage, UserPage.=> express( API REST )+Database (MySql)
1. In the top of HomePage, you can find the subjects in a search bar. 
2. User can upload their videos, images even video games etc. It display in   SubjectPage by sorted in chronological order. 
3. User can modify person information, password at personal centre.

### Advanced Function
Friend system has pages like: ListPage, AddFriendsPage.=> express( API REST )+Database
1. In SubjectPage, when user create a new subject, they can choose friends or not friends to invite them into this subject.

We use the express in JAVASCRIPT to build the WEB system, thus satisfying the interaction between the user and the website. Then store important data in the database (mongoose or others). User chat system We will use Socket.io technology to quickly make chat functions.


## Planning :

1. Create a server-client system for transfer data. And HomePage[Before 21/10/2018]
2. Build the basic database (Subjects, Users, Dialogues, Media_data_links) [Before 28/10/2018]
3. Improve basic page functionality. Create a search box and UploadPage, Person Centre[Before 03/11/2018]
4. Joint adjustment, more functions[Before 08/11/2018]
5. Test and Debug [Before 10/11/2018]

Division of labor: 
Zixin Zou : chef de projet, Database design, Operation of DB
Freder Sip : coding, ChatRoomPage
Runcong Li : coding, WebPagec and basic functions

Our team conducted a normal group discussion through messenger. When necessary, we will hold a progress meeting. Determine project progress and designation of new goals.


## Original :

### Functions :
1. A Chat Website where users can create a new subject. He can invite his friends or not.
2. All subjects (include this new subject) display in the home page. All users can choose it and join it.
3. In the top of home page, it has a search bar, you can find the subjects you want. Even you can find related users.
4. In the page of subject. It display some based information of subject (Name, description, participants, activities, photos, videos and so on). It sort in chronological order.
5. Chat room page support multi-person live chat.
6. User can modify person information, password at personal centre.

### Function models:
1. Subjects model (display, new create, join in)
2. Search model (search subject and user)
3. Chat model (multi-person live chat, upload the files, display the files)
4. Personal center (modify username, password etc.)

### Tesing:
We will make the testing by division of fonction models. Consider that many user’s incorrect operations, our website has some processes to avoid reoccuring. Our testing will focus on it.
