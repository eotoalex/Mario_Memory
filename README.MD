## Mario Memory Game

A game of clicks and giggles, this memory game challenges your ability to simply remember what you've clicked. Are you up to the task? Are you worthy of being crowned click master?

# Links
>[Mario Memory Game App](https://hidden-woodland-83442.herokuapp.com/)
>
>[Video Demo](https://youtu.be/DJXsn6v9W0I)

# Technologies
* Javascript
* ES6
* React
* NodeJS
* HTML
* CSS

# How exactly does it work?
> Click on any character to begin.
>
> Check your score near the mid-to-left upper area of the page.
>
> One point is given for every new character clicked.
>
> If you click the same character again, the game will reset and show you how many points you made and how many characters where left for you to win.
>
> There are 12 characters in all, and it is not easy, but it is pretty fun to try.

## Development Process

>I found working with React to be some what tedious at first, but very simplistic as I moved forward with passing props and setting state to get the page to re-render. Documentation also deserves credit here as well. The biggest task seemed to be the randomizing images after each click event, but after taking the React state into consideration, I simply kept setting state within the function that handled the click events.  
>
>To render the images in different sections of the page after each click, I thought I'd create a bit more randomness to Math.random by moving the images within the array they were in one index over after each selection from math.random. I made a for loop that takes in an array to create a temporary array that I can throw around for the sake of putting this array in the next function that mutated it based on the mario characters that were selected. I did this so that the array could get smaller and smaller until there were no characters left. I considered using a filter method on the array to do this. I felt like I could have done this better.




