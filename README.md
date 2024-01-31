# sparkfun.github.io

This repo creates the GitHub pages custom domain [test.sparkfun.com](https://test.sparkfun.com) and builds a landing page for the domain, listing all the SparkFun GitHub product repos that have documentation hosted on GitHub pages.

The list of available pages is created automatically by a GitHub Action that runs nightly. The GitHub action searches for repos under the SparkFun organization that have the topic `sparkfun-tutorial`.

For a repo to be added to the list of documents, the following should be true in the About section of the repo:

* The repo has the topic `sparkfun-tutorial`
* The `website` section for the repo points to the GitHub Pages URL for that repo (check the provided option when editing the About page).
* The value of the description is provided
* The repo includes a `thumbnail.jpg` image (1000 x 667 pixels) for the hookup guide. The image should be located in the `/docs/assets/img/thumbnail.jpg` directory of the repository.

### How this works

* Daily, or on a check-in, the update action runs
* The Action uses the `gh` command to search for all public SparkFun repositories that have the topic `sparkfun-tutorial`
* For each repository found, the repo URL, About website and About description are retrieved
* The results of the query are written to the file `gsg.json` as an array of JSON objects.
* The updated `gsg.json` file is checked into this repo and the landing page is rebuilt (automatically by GitHub)
* The MkDocs Material theme is used to build the webpage, which reads the file `gsg.json` and renders the documentation list using javascript
