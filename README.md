# MarvelAngular


## Overview

This application show a list of 22 characters starting from the hundredth. Each item in the list have the name's character and its
image.
Each character has a description, to see it, just click in character's name.

Data for this app is from ```Marvel API```.

## Running end application

Go to the website : http://monica-esrodriguez.connect-hm.com:4200/

## Technical details

This is a single-page web application built using Angular 5 as the front end. 

When the character's page is loaded, a request will be sent to Marvel API to get response. This request sends as parameters: the limit,
the offset and the orderBy(name) for filter the content. The returned information is stored into data structure and later displaying it (using angulars directives) 
on the page.
While the Marvel API give a response, a loader is shown and when there is a response the loader disappear.
Once you click on the characters name a 'pop-up'(modal) will appear with information about the character.
If the character doesn't have any available information a message show that the content is not available. 

```This first version doesn't persist data and doesn't have a management of http errors.```

## Prerequisites
```
Node.js       (v8.10.0) 
NPM           (v5.6.0)
Angular cli   (v1.7.3)
Angular       (v5.2.9)
Jquery        (v3.3.1)*
Bootstrap     (v4.0.0)
Font-awesome  (v4.7.0)
ts-md5        (v1.2.4)
```
*Bootstrap requirement

## Developpement server

```Once you clone this project ...```

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
