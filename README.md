# Anagram Solver

A simple anagram solver powered by Cloudflare Pages, R2 and Workers.
See it in action: [anagram.savjee.be](https://anagram.savjee.be)

Read about how this works on my blog: [https://savjee.be/2022/09/serverless-anagram-solver-with-cloudflare-r2-and-pages/](https://savjee.be/2022/09/serverless-anagram-solver-with-cloudflare-r2-and-pages/)

## Contents of this repo
* `src-common` Typescript files that are used for the frontend and on the backend (while generating dictionaries).
* `src-www` Source of the website [anagram.savjee.be](https://anagram.savjee.be).
* `functions/` Source code of the Cloudflare Pages function that fetches solutions from R2.
* `scripts` Contains the script that pre-computes anagram solutions based on aspell dictionaries.

## Contributions
Feel free to fork this repository, improve it, and contribute pull requests.