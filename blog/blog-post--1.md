---
title: Blog Post -1
description: blog description
published: true
---

This website is my first personal project that I've worked on. I wanted to challenge myself to create a website that uses all of the things I've learned using Angular. I think the site works pretty well, and I'm proud of what it looks like. All of the components are interactive, and they are easy to modify and move around whenever I want to. This first blog post will be about what the individual parts of the components that make up this website.

So first, I wanted to make it not only clean, and simple, but I wanted it to be responsive. The general template for this site came from Digital Ocean, but I've tried to modify it to make it a little more...me.

I started this project by first setting up Angular, Bootstrap, Scully, and the Node Package Module. One of the things to keep in mind is that all of these frameworks, and modules need to be compatible. Which for me meant running ~ng v, to figure out what version of Angular was installed globally on my computer:
![Alt text](../src/assets/img/Screenshot%202023-01-20%20at%2010.35.09%20AM.png)

I also had to make sure that the Node package module was set the version 6 or later. This is also where I ran into a lot of problems the first time I tried building this website. The problem stemmed from my global vs local version of npm that I was running. Globally, I was running the most up-to-date version of npm, and I didn't want to change that, so I had to setup nvm, which allowed me to change the version of node that I was running on this particular website without affecting the global version. This was important because as I'm still learning, most of the template, or tutorials I am following use different versions of node and nvm allows me to move between the versions without affecting my overall code bases.

Once this was taken care, I began building each component. I started with the home page, which I wanted to be very simple--meaning it was going to just contain a brief bio, an about me, and a headshot image in the header. The headshot, along with my name needed to be interactive, meaning a user can click on either one and it would take them back to this landing page. My initial thought was to have all of this exist on the home/landing page, but this presented a problem: when user moves away from the landing page, my name and image would not move with them, so I immediately had to make a change, and place my name and image in the header.

Here is the structure of the homepage.
![Alt text](../src/assets/img/Screenshot%202023-01-20%20at%2011.12.20%20AM.png)

- The above code snippet is the html for the homepage. The top div creates a flexbox that will hold all of the other page components. The next thing it does it loop through the bio.json file and reads the information in that file, but doesn't do anything with that information.
- The next div creates another flexbox that will contain the other aspects of the code. This smaller flexbox holds the first line of the bio "Hello, My name is...". Here, I'm using dot notaion to access the corresponding pieces of information from the bio.json.
  ![Alt text](../src/assets/img/Screenshot%202023-01-20%20at%2011.23.57%20AM.png)

* The previous steps get repeated for the next lines as well. That is, the next div, reads through the bio.json and pulls out the the value of the intro, and writes it into the flexbox (so to speak). Simply put then, this html component displays the bio.firstName and bio.lastName, as well as the introduction from the bio. It also displays all of the other components that will make up the page, as interactive links.

Now the home.component.ts, drives the overall html page.

![Alt text](../src/assets/img/Screenshot%202023-01-20%20at%2011.29.07%20AM.png)

- This component uses typescript, which allows us to simply declare not only the components of the homepage, but also the javascript constructors that will put everything together. If the homepage html displays the name and short bio which it retrieves from bio.json, the homepage.component.ts, injects the BioService into the component. That is, it imports it the BioService, from its corresponding directory and makes it accessible within the homepage. Once we call the getBio method in line 11, the resulting object gets stored in the bio$ property. And the rest of the "respOptions" store the configurations that make/ensure the page remains responsive.

These steps get repeated for each component of the site, so I won't go through each one, but the code tends to remain the same. I tried to make it a little more effiecient by calling methods accross each component, but I'm not sure how effective all of this was.

![Alt text](../src/assets/img/Screenshot%202023-01-20%20at%2011.35.45%20AM.png)

In the projects component for example, you'll see that we begin to import the HeaderService, which contains the header that appears in all of the pages. The only service that gets imported into every component or page of the website is HeaderService, because its the main navigational element of the website.

![Alt text](../src/assets/img/Screenshot%202023-01-20%20at%2011.41.20%20AM.png)

This component also imports every other service that the website runs.

The other thing I had to make sure to do with each one of these components was routing, which simply means generating Angular modules with routing services turned on. Once these are geneated, I needed to make sure that they were all imported into the portfolio-routing-module.

![Alt text](../src/assets/img/Screenshot%202023-01-20%20at%2011.45.51%20AM.png)

- Routing essentially creates a link, telling the website what to do when a user clicks on each of the parts of the website. That is, routing directs the user to the corresponding page of the website, without the routing component the page would not work.

One of the lessons I've learned from building this website is that Angular can be a little challenging, especially for beginners. It's important to makes sure you really understand all of the different components that go into an Angular website. Other important things to consider:

- Have a plan for the look and feel of the website before getting started.
  - I cannot overemphasize the importance of this point. Without a plan you're just building a bunch of components without a clue how it will all come together. Now, I understand that this can be great in theory, because Angular allows you to build the components and then add or remove them as you need, but, how will you know what to build if you don't know what you want the website to look like, do, or what individual sections it will have? For me, it helped to just follow a tutorial, and skip the parts that weren't relevant to the overall look I was going for. I knew, for example, that I wanted the site to contain a headshot, and the tutorial I was following did not have that, nor did it discuss how to incorporate images into the site, let alone the blog post, all of which I knew I wanted before I started.
- Take your time.
  - There is no point in rushing if you don't really understand what you're building. As I was building I was also learning, which meant I had multiple windows open, Google(ing) how each component or question I had as I went.

* Document the process. And have fun.
  - This is one that I will be using as I begin my next project. Stay tuned.

# Blog Post -1
