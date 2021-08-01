# TMDB API

![movie](https://tmdb.eu/images/logo.png)

## Overview

In this exercise you will fetch movie data from the [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction) and render it in the browser.

## TMDB

First, head over to the TMDB website and sign up for your own API key (free option is perfectly fine). Next, check out the documentation [Here](https://developers.themoviedb.org/3/getting-started/introduction). Here you will find instructions on how to structure your endpoint for your axios calls. You can also find different parameters to use and what they are for. Remember, every API is different so you will need to read into what works for this API.

### Starter Code

If you look at the files we've given you, you will find some basic HTML and CSS to get you started. In the Javascript file, we've set you up a base url for your endpoint. All you need to do is plug in your API key and add your parameter to the end.

## Getting Started

- `Fork` and `clone` this repo.
- `cd` into it and `code .`

### Requirements

- A text input + button for searching TMDB by _movie title_(provided in the starter code.)
- Display a list of movies returned by the search api call. At least the movie's title and poster should be visible.
- Incorporate CSS flexbox (and maybe grid?) into your page.

### Steps

Here is a compressed and totally not mandatory suggested guide for getting through the task:

- Attach an event listener that simply logs the text value of the input
- Once you can see the value being outputted, store this in a variable outside of your even listener.
- Next, add the `axios` api call. For searching, the url should look something like this: `https://api.themoviedb.org/3/search/movie?query=[your search query]&api_key=[yourkey]`
- Remember to use `async` and `await` for the axios calls
- Try to `console.log` the search results.

For this first bit, you should be able to verify in the console that you are successfully retrieving information from TMDB.

- Next, write a method `renderList` that receives an array of "movie" objects as a parameter. Call `renderList` from the event handler you wrote in the previous step and pass it the Search results from the axios response
- `renderList` should iterate over the movies it receives as an argument and insert the movie data from each object into the DOM as a new HTML element.

Before moving on, try to verify that you can enter text into the text input, click the button, and then see a list of movies appear on the page

### Bonus !!!

If you need an extra challenge and practice, let's get ready to add a viewDetails button to each movie.
We will need an event listener either on the movie's poster or a button near the movie's title that will allow a user to "select" or "view more info" about the movie. The listener should make a second api call to fetch information about the movie. If a movie is "selected" display the movie's data at the top of the page.

- Go back to the movie list. Add a button to each movie in the list.
- When a user clicks on this button, pass the movie's id or title to the omdb api to fetch more information about the movie. Try to console log or display the url for each button and test it in the browser's navigation bar if you're having issues with this step.
- Using the data returned from the api, display the movie's additional data at the top of the page.

### More Bonus !

- Style the search button - make it fancy!
- Style the whole page while you're at it! Make this a portfolio piece!

## Resources

- [Axios](https://github.com/axios/axios)
- [Apis For Beginners](https://medium.com/@LewisMenelaws/a-beginners-guide-to-web-apis-and-how-they-will-help-you-23923a0da450)
