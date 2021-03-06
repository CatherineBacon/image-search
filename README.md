# image-search

## introduction

This api was built as part of the freecodecamp course. The aim was to create an image search abstraction layer. It uses google custom serach engine to conduct the search.

You can search for images and also get a list of the latest 10 searches.


## API Resources

- [GET /search/term[?offset=x]](#get-search-term)
- [GET /latest/imagesearch](#get-latest-imagesearch)


## GET /search/term

Gives you 10 results from Google image search for `term`.

Optionally offset by x results by adding query parameter `?offset=x`.

Example:  https://catherineimagesearch.herokuapp.com/search/kittens?offset=0

Response body:

         [
                {
                        "url": "http://cdn.playbuzz.com/cdn/260e39ce-346c-4eb0-a3ef-1aeb3724f7c7/875bb5ef-4043-49a8-80f4-56da5e024d38.jpg",
                        "alt-text":"... on your favorite kitten.",
                        "thumbnail":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS1xDro_GVGz3AVgdiOsrplIMHhjQHalHDl2ZurIbfvltAkjKzckH1nPMpm",
                        "context":"http://www.playbuzz.com/bloomsbury13/we-know-what-2016-ya-book-you-should-read-based-on-your-favorite-kitten"
                },
                ...
         ]


## GET /latest/imagesearch

Gives you the last 10 searches run on this api.

Example: https://catherineimagesearch.herokuapp.com/latest/imagesearch

Response body:

         [
                {
                        "search":"trumpet",
                        "date":"2016-10-31T19:34:41.059Z"
                },
                {
                        "search":"news",
                        "date":"2016-10-31T19:34:33.477Z"
                },
                ...
         ]



