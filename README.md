**Please note: since January 2022, this demo is now hosted at [https://github.com/meilisearch/demos/tree/main/src/MoMA](https://github.com/meilisearch/demos/tree/main/src/MoMA)**

---
<p align="center">
  <img src="https://raw.githubusercontent.com/meilisearch/integration-guides/master/assets/logos/logo.svg" alt="MeiliSearch-Vue" width="200" height="200" />
</p>
<h1 align="center">MeiliSearch x MoMA</h1>

<h4 align="center">
  <a href="https://github.com/meilisearch/MeiliSearch">MeiliSearch</a> |
  <a href="https://docs.meilisearch.com">Documentation</a> |
  <a href="https://www.meilisearch.com">Website</a> |
  <a href="https://blog.meilisearch.com">Blog</a> |
  <a href="https://twitter.com/meilisearch">Twitter</a> |
  <a href="https://docs.meilisearch.com/faq">FAQ</a>
</h4>

<p align="center">
  <a href="https://slack.meilisearch.com"><img src="https://img.shields.io/badge/slack-MeiliSearch-blue.svg?logo=slack" alt="Slack"></a>
  <a href="https://github.com/meilisearch/MeiliSearch/discussions" alt="Discussions"><img src="https://img.shields.io/badge/github-discussions-red" /></a>
  <a href="https://doi.org/10.5281/zenodo.4408594"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.4408594.svg" alt="DOI"></a>
</p>

In this repository, you will find the front-end interface to search through the [Museum Of Modern Art Collection](https://github.com/MuseumofModernArt/collection). The search is powered by [**MeiliSearch**](https://github.com/meilisearch/meilisearch), a powerful, fast and open-source search engine easy to use and deploy.

## Requirements

 - [npm](https://www.npmjs.com/get-npm)

## Demo

If you want to replicate this demo using your own MeiliSearch instance, you will have to follow these steps:

  
### 1. Download and launch MeiliSearch

[Download and launch MeiliSearch](https://docs.meilisearch.com/guides/advanced_guides/installation.html) using the basic configuration. For example, by using [cURL](https://curl.haxx.se/) in your terminal.

```bash

$ curl -L https://install.meilisearch.com | sh

$ ./meilisearch

```

This walkthrough runs MeiliSearch in a development environment, and therefore it does not use any [master key](https://docs.meilisearch.com/guides/advanced_guides/configuration.html#master-key).

 There are many other easy ways to [download and run a MeiliSearch instance](https://docs.meilisearch.com/guides/advanced_guides/installation.html#download-and-launch).


### 2. Set your credentials

Set the credentials of the MeiliSearch instance as environment variables. 
```
VUE_APP_MEILISEARCH_HOST="yourMeiliSearchInstanceAddress"
VUE_APP_MEILISEARCH_API_KEY="yourMeiliSearchAPIKey"
```
Because we did not set any Master key in the previous step, we can leave `VUE_APP_MEILISEARCH_API_KEY` as an empty string and only set the host: 
`VUE_APP_MEILISEARCH_HOST='http://127.0.0.1:7700'`


### 3. Donwload the dataset:

You can download the dataset by running the following commands: 
```bash

$ npm install

$ npm run get-dataset

```
Or you can get it manually in the [MoMA repository](https://github.com/MuseumofModernArt/collection/blob/master/Artworks.json) and copy it in the setup folder.


### 4. Run the setup


```bash

$ npm run prep-meili

```
Don't forget to run `$ npm install` first, if you didn't do it in the previous step.

This will do the following:

- Create three indexes called `artWorks`, `artWorksAsc` and `artWorksDesc` in your MeiliSearch instance.

- Add all artworks documents to those indexes.

- Add custom settings to each one for a more relevant search.


### 5. Run the project

You can now run the project. The front-end client is now communicating with your MeiliSearch instance.

```bash

$ npm run serve

```

 Visit `http://localhost:8080/` in your browser and start searching with MeiliSearch!

<hr>

**MeiliSearch** provides and maintains many **SDKs and Integration tools** like the ones used in this project. We want to provide everyone with an **amazing search experience for any kind of project**. If you want to contribute, make suggestions, or just know what's going on right now, visit us in the [integration-guides](https://github.com/meilisearch/integration-guides) repository.
