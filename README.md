### TRIZ
TRIZ_Assignment 6

## INTRO
My submission for CMU HCI Programming Usable Interfaces_Assignment 6 is a responsive ‘informational tool’ website. It is based around the engineering tool called TRIZ. TRIZ is a problem-solving method based on logic and data, which accelerates creative problem solving using 40 inventive principles. This website intends to focus on these 40 principles as well as list the 39 design parameters and offer links to contradiction diagrams and further resources to develop innovation solutions further. Current tools for TRIZ consist of mediocre websites and information hubs which are not appealing and are very text heavy (i.e the triz journal). As this is an engineering tool, it appears to me that these sites may have been designed or implemented by an engineer with little knowledge of HCI and minimum focus on usability.

I set out to create a site that would be a quick reference guide and educational tool, giving users a brief run-down of what TRIZ is and outlining the 40 main principles and 39 Inventive Operators that are the main components to this tool. Employing a one page scroll website and in response to the brief, I included various animations and background function to create a fully interactive, engaging experience with multiple interaction click points and reference notes.

## WEBFLOW
When a user lands on the homepage they are met with a rotating hero image carousel, this gives them a taster through visual images and brief text of what TRIZ implies and tempts them to scroll further.
Once they start scrolling they are immediately met with some vector animations and different colored sections that add structure to the flow. These were created using the ‘vivus instant’ .svg animator tool. This required a linked svg file and addition of some .js libraries and functionality. 
There is then a brief description of TRIZ, an explanation of the contradictions (which are what TRIZ is based around) and then they are met with the star of the show - the ‘40 Principles’. 
Each principle has been created using vector data inputted into the html and effects added to each element so that they flow smoothly as the user scrolls up or down. As the user hovers over a principle, some css coding changes the pointer to a mouse click and enlarges the font, giving affordances and cues for the user to click and investigate further, at which time a Bootstrap-Modal will pops up on screen and explains the principle more in depth. There are two JavaScript tools utilized here: AOS.js (animate on scroll) and Paralax.js.
I also designed the visual aspect of these pieces to move in a flow, working with the patent picture in the background it allows the user to get slightly lost as they explore through the principles and options further adding to the experience.
A brief description about Genrich Altshuller (the inventor of TRIZ) provides a little break before the 39 Triz Parameters are outlined and the main content of the website concludes.


The website has been designed to be fully responsive and all elements adjust to suit a broad range of screen resolutions from desktop to mobile. This was done using the bootstrap toolkit and utilizing further JavaScript coding to switch between class elements once a screen resolution fell below 540 pixels in width. A menu bar at the top allows uses to quickly move to anchored points further down the screen and this menu remains at the top of the screen at all times switching to a burger menu once the mobile site is initiated.

## ITERATION
I kept as much in line with the original mock-up as possible.
I moved the headings around a little and made them more consistent.
I had to reverse the flow of the principles as it worked out easier when coding the vectors (I think it works better also).
The contradiction tool was dropped completely as this was a little beyond my capabilities in the timeframe, but something I wish to return to in the future.

## CHALLENGES
Designing my second ever website, I took extra effort to make sure I was keeping track with classes, ID’s and the structuring of div elements. I made sure that each would relate fluidly in to the .css file and tried to categorize each section as I built it so it could be found easily when updating.
As I set about building the website first, then applying the functionality, I found that when I went to include the JavaScript tooling, it was quite messy and hard to de-bug, so I gathered the files I was thinking of using and set them up in a separate ‘tester’ file. In here I did most of the de-bugging and copied them directly into the main files, adjusting where necessary. I found this method very successful. Getting the JavaScript to function properly, whenever a new piece was added to the main.js file would disrupt previous functionality, and this always proved to be tricky.
Initially I spent a while trying to figure out why the js functionality wasn’t working and moved the linked files around within my <head> tags as well as switching between CDN and downloaded saved files. With help from you (Alexandra), I was enlightened and remembered about that slide telling us to include the script within the html <body> … You were also to thank for…
CONSOLE LOG! I should have been using this earlier, but honestly I forgot. This really helped in the final stages of the build. 
The 40 principles section was probably the hardest task, and so should it have been as this was the main attraction. I love vectors and I love svg, so instead of using pngs or jpgs I wanted to create illustrative elements with the svg tools offered within html. This was a huge task, and took up probably the largest singular chuck of my time, as I was applying the (somewhat simple) line graphic 40 times:
I had to figure out how to position them on the screen in the correct place, and adjust the x and y pixel points accordingly. I had to apply the dot at the end, which I did by using a <marker>. 
This then all fell apart when I came to try and animate them as one piece, line, dot and name. So I had to restructure everything. Add the interaction and on-click function to each principle to activate the modal pop-up, which upset my .js file even further and took quite a bit of de-bugging also.

So now everything was up to date, I had to make it responsive. This caused a lot of grief trying to get the vectors to work properly (I still think the shrinking of the 40 Principles needs to be improved) and also keep all the text in line a make sure the bootstrap elements were acting properly. I queried and played, but was still unhappy with the huge text and crazy margins once the screen would shrink, eventually deciding to create 2 states and add further functionality into my JavaScript file. This allowed me to create a new class which had smaller headers and acute margins. Though this also meant a lot of work going back through all the code and changing elements and values around here and there.

## UNFINISHED WORK
I need to finish the descriptions and modal boxes for the remainder of the principles and make these interactive also.
I had to cut out the Contradiction tool as it was too much to complete effectively and required a little more specific JavaScript coding (so I may need some guidance with that one day).
Prepare additional resource files and supporting materials, branding them to look in line with the design of the website.
I hope to publish this website with its own URL once all work is completed to be used by future students of my TRIZ course and other interested parties.


