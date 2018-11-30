# Potent Potables Potluck Party Planner
An app for organizing a potluck party, with features such as letting guests state their intended meal contribution, whether or not it needs to be placed in the oven, a link to the meal's online recipe, number of +1's attending, dietary restrictions, etc...

# Languages used to construct the site:
* Mongo
* Express
* AngularJS
* Node.js  

(there's probably an acronym for that, but I don't know what)

# Evolution of the site

I originally wanted something that would have a login for the host and a separate login for the guests. This way, both sets of users could be secure and still be able to interact. However, I was ultimately unable to combine the two databases in a way that would mimic SQL's One-To-Many relationship. 

I also had intended to use modal's for both the editing and guest creation menus. The angular code for the modals turned out to be too time intensive to figure out, so instead I used my remaining time to install a complex system of toggles that carefully mapped out which features and menus will be hidden and shown at any given moment. I find it almost as aesthetically pleasing as the modals would have been, but it is adequate for the moment. 

# Conclusion (aka Wins & Struggles)

In the end, this system of toggles is something I consider my biggest win in this project, due to its complexity and constant evolution when adding the additional components. I had fun coming up with all the ways to incorporate hiding or showing any number of things, and certainly would have paired nicely with clever CSS animations, had time permitted.

On the other hand, my biggest struggle was the aforementioned separation of databases. It has been a point of struggle throughout my time with angular, and its solution has thus far eluded me. My original plans for the site had started much bigger and more complex, but simply could not be carried out without overcoming this flaw first. With time and further coding courses, I anticipate finally getting that onto my resume, as well. 
