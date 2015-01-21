# Shevyf's Online Resume Project

Completed as part of the Front-end Developer Nanodegree from Udacity. The original repo contained the basic framework including an empty resumeBuilder.js file to add my own data and functions to.

## Changes

This resume has several changes from the original format.

* Background image for the header, which is stretched to fill the whole div. 
* Some colour scheme differences.
* 'Skills at a glance' header now stays in place when screen is below 750px wide. I like it that way.
* Jobs in the work object now have a number of roles which are iterated through. This allows more than one role per employer, which fitted my own employment history better.
* urls for online classes now link to those pages, using /%data%/g regex to match more than one instance of %data% in the HTML template.

Some data fields have been added in a different order to allow UK degree structure to make some sense.

Sadly, I've got too much stuff on right now to go into adding more interactive elements, but I would have, if possible, converted the whole page to use Bootstrap and added modals to give more info on the projects.


# The Resume Project

## How do I complete this project?

1. If you need a refresher on JavaScript syntax, go to the [Javascript Basics course](https://www.udacity.com/course/viewer#!/c-ud804-nd); if you would like to understand how this project is manipulating and traversing the DOM, check out [Intro to jQuery](https://www.udacity.com/course/ud245-nd).
2. Go through the videos and assignments in this course to learn the JavaScript necessary to build your resume.
3. Review your work against the Project Rubric (on the next page).
4. When you are satisfied with your project, submit it according to the Submission Instructions on the next page.

### By the end:
Your resume will look something like this
![](http://i.imgur.com/pWU1Xbl.png)

And your repository will include the following files:

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: This file is empty. You should write your code here.
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: 
The GitHub readme file.
* and some images in the images directory.

## Your starting point...
### js/helper.js
Within helper.js, you’ll find a large collection of strings containing snippets of HTML. Within many snippets, you’ll find placeholder data in the form of `%data%` or `%contact%`.

Each string has a title that describes how it should be used. For instance, `HTMLworkStart` should be the first `<div>` in the Work section of the resume. `HTMLschoolLocation` contains a `%data%` placeholder which should be replaced with the location of one of your schools.

### Your process:
The resume has four distinct sections: work, education, projects and a header with biographical information. You’ll need to:

1. Build four JSONs, each one representing a different resume section.
 * `work` contains an array of `jobs`. Each `job` object in `jobs` should contain an `employer`, `title`, `location`, `dates worked` and `description`.
 * `projects` contains an array of `projects`. Each `project` object in `projects` should contain a `title`, `dates worked`, `description`, and an `images` array with URL strings for project images.
 * `bio` contains a `name`, `role`, `welcomeMessage`, `contacts` object and `skills` array. The `contacts` object should contain (but doesn't have to) a `mobile number`, `email` address, `github` username, `twitter` handle and `location`.
 * `education` contains an array of `schools`. Each `school` object in `schools` contains a `name`, `location`, `degree`, `majors` array, `dates attended` and a `url` for the school's website. `education` also contains an `onlineCourses` array. Each `onlineCourse` object in `onlineCourses` should contain a `title`, `school`, `dates attended` and a `url` for the course.
2. Iterate through each JSON and append its information to index.html in the correct section.
 * First off, you’ll be using jQuery’s `selector.append()` and `selector.prepend()` functions to modify index.html. `selector.append()` makes an element appear at the end of a selected section. `selector.prepend()` makes an element appear at the beginning of a selected section.
   * Pay close attention to the ids of the `<div>`s in index.html and the HTML snippets in helper.js. They’ll be very useful as jQuery selectors for `selector.append()` and `selector.prepend()`
* You’ll also be using the JavaScript method `string.replace(old, new)` to swap out all the placeholder text (e.g. `%data%`) for data from your resume JSONs.
* Here’s an example of some code that would add the location of one your companies to the page:
   * `var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);`
   * `$(".work-entry:last").append(formattedLocation);`
 * Use the mockup at the bottom of this document as a guide for the order in which you should append elements to the page.
3. The resume includes an interactive map. To add it, append the googleMap string to `<div id=”map”>`.
4. All of your code for adding elements to the resume should be within functions. And all of your functions should be encapsulated within the same objects containing your resume data. For instance, your functions for appending work experience elements to the page should be found within the same object containing data about your work experience.
5. Your resume should also `console.log()` information about click locations. On line 90 in helper.js, you’ll find a jQuery onclick handler that you’ll need to modify to work with the `logClicks(x,y)` function above it.
6. It’s possible to make additional information show up when you click on the pins in the map. Check out line 174 in helper.js and the Google Maps API to get started.