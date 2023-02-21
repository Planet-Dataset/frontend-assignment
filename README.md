<img src="https://user-images.githubusercontent.com/28607713/212879228-3ca54e74-ee8f-485c-a5d2-e54758b471dc.png"
     alt="planet-logo-white-no-bg"
     width="240">


# Planet frontstack-assignment
Front-Stack position skill assessment home assignment.

## Context
As a Front-End developer in Planet Dataset, you will be asked to participate in the design
and implementation of new features that will be used in our price-management platform for
eCommerce.

New features usually involve implementing an interface to configure the user's preferences.
However, we also implement extensions in the Shopify ecosystem; so you can expect to encounter
Liquid source files, HTML and webcomponents in part of the development process.

## Overview
We provide you with a project that has a working API and a web app.

This project has part of the functionality of fictitious software solution that provides an
administration dashboard for a Reddit translation company. The company is encharged of making
post translations for existing ones: this is done by choosing of one of the remaining posts
and creating a new one based on it.

You are responsible of finishing the app by implementing a dashboard page that:
- Lists current posts.
- Looking at specific details of a post, so that the worker can prioritize which one to choose next.
- A form to create a new post translation (a new post based on the existing one).

## About this repository
This repository holds the basic project structure for implementing an Angular web app.

The code is organized as follows:

- `services`
     - \ `api` - A NodeJS project with ExpressJS, TypeScript that implements the API.
     - \ `front-end` - An Angular project with TypeScript, SCSS, Material and NgRX to implement the web app. Implementation details can be found in `services/front-end/README.md`.
- `docker-compose.yml` - 
- `data` - The datasource for the project.
- `Makefile` - Makefile for your ease of development, see below.
- `frontend.mk` - Makefile rules for the web app.
- `backend.mk` - Makefile rules for the API.
- `README.md` - This file.
- `LICENSE`


Disclaimer: The purpose and usage of this repo is solely for insight acquisition regarding problem-solving,
and does not represent an existing and ongoing implementation task.

PS: We provide this structure as a starting point but you may discard it and approach the task in
any other way.

## The problem
#### What we want
We provide you with two basic endpoints for retrieving the data and sending post creation requests:

- `[POST] /api/posts` Create a new post from existing one
     
     ```
     HTTP POST Body:
     {
          "author": string!,
          "author_fullname": string?,
          "categroy": string?
          "language": string!
          "originalPostId": string!
          "title": string!
     }
     ```
- `[GET] /api/posts?limit=number&page=number` Get existing posts (supports pagination in the specified format)

We want a view that lists the existing posts with a summary of the details and the possibility of seeing
more information; in addition to this, it should allow creating new posts based on a chosen one.
Here is a mockup of it could look, although you are free to design it however you feel it works best.

![image](https://user-images.githubusercontent.com/28607713/212859859-462fe5b8-e05f-4332-a5ee-098500a78418.png)


#### What we will evaluate
- Whether the interface fulfills the functional requirements: it shows the current currency subscriptions along with
  their data, and it allows adding or removing subscriptions.
- How functionality is organized though components and services.
- Efective use of Angular life cycle hooks to perform data subscription and tearing.
- A coherent implementation of the interface that involves a limited number of spaces, fonts and colors; and the use
  of CSS3 and SCSS features to keep styles easily maintainable.

## How to run the services
We provide you with Makefile rules for you to lift individual services:
- The _services/api_ directory holds the code for the API. The following make commands are available:
     - `backend-build` Builds the corresponding Docker images.
     - `backend-up` Raises the platform.
     - `backend-down` Shuts down the platform. _Requires having the platform up (you can use make backend-up)_
     
- The _services/front-end_ directory holds the code for the Front-end. The following make commands are available:
     - `frontend-build` Builds the corresponding app dist files.
     - `frontend-dev` Runs the front-end service locally (accessible at http://localhost:4200). _It will install the dependencies (requires having a local installation of node)._

## Data
Data sample was obtained from https://www.reddit.com/r/linux.json

# frontend-assignment
Front-End position skill assessment home assignment.

**[Place here any extra documentation or comments you want us to have.]**
