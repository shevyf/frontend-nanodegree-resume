
var bio = {
  "name":"Shevaun Frazier",
  "role" : "Front-End Web Developer",
  "contacts" : { 
    "email":"shevaunfrazier@googlemail.com",
    "github": "shevyf",
    "mobile": "0879786425",
    "twitter": "@shevyf",
    "location": "Dublin"
    },
  "image" : "images/shevaun.jpg",
  "welcome" : "Shevaun is a determined and skilled learner who rises to a challenge and enjoys problem solving.",
  "skills" : ["Python", "Javascript", "HTML", "CSS3", "InDesign", "Photoshop"],
  "display": function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    var formattedMsg = HTMLWelcomeMsg.replace("%data%",bio.welcome);
    var formattedImg = HTMLbioPic.replace("%data%",bio.image);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    
    $("#footerContacts").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    
    $("#topContacts").append(formattedLocation);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);

    $("#header").append(formattedMsg);
    $("#header").append(formattedImg);
    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);
      for (var skill in bio.skills) {
        var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
        $('#skills').append(formattedSkill);
        
      }
    };
  }
};
  
var work = {
  "jobs": [
    {
    "employer": "Amazon Web Services",
    "location": "Burlington Road, Dublin",
    "roles": [
      {
      "title": "Technical CS Lead",
      "dates": "5th April 2013 - Now",
      "description": "Team Lead for the Amazon Web Services account and billing-focussed customer services team in Dublin. Responsibilities include training, coaching, providing operational leadership for up to 4 sites around the globe, helping team members to develop towards advanced roles in the organisation."
      },
      {
      "title": "Technical CS Agent",
      "dates": "10th October 2012 – 5th April 2013",
      "description": "Team Lead for the Amazon Web Services account and billing-focussed customer services team in Dublin. Responsibilities include training, coaching, providing operational leadership for up to 4 sites around the globe, helping team members to develop towards advanced roles in the organisation."
      }
      ]
    },
    {
    "employer": "Bitbuzz",
    "location": "Merrion Square, Dublin",
    "roles": [
      {
      "title":  "Remote Sales Researcher",
      "dates": "30th May 2011 – 7th October 2011",
      "description": "Researching hotels in London and the south on England, then reaching out to them to try and book appointments for the Sales team to visit and discuss potential WiFi arrangements."
      }
    ]
    },
    {
    "employer": "Lloyds Banking Group",
    "location": "Edinburgh, UK",
    "roles": [
      {
      "title": "Case Manager, Large Corporate Service Team",
      "dates": "10th November 2008 – 11th March 2011",
      "description": "Provide dedicated support to High Value Corporate customers for all non-lending/deposits related queries."
      },
      {
      "title": "Corporate Analyst, Corporate Relationship Banking",
      "dates": "3rd December 2007 – 7th November 2008",
      "description": "Support for the Relationship Management team, customer liaison."
      },
      {
      "title": "Customer Service Advisor, Lending Support Unit",
      "dates": "5th December 2005 – 30th November 2007",
      "description": "Data input and management for the analysis of account information, production of loan offer letters."
      },
      {
      "title": "Customer Service Advisor, Business/Corporate Customer Contact Centre",
      "dates": "3rd March 2003 – 3rd December 2005",
      "description": "Handling customer enquiries for Telephone & Internet banking, which includes problem solving, investigations, and communicating with other colleagues within various departments of the bank."
      }
    ]
  }
  ],
  "display": function() {
    for (var job in work.jobs) {
      $('#workExperience').append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
      var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
      $('.work-entry:last').append(formattedEmployer);
      $('.work-entry:last').append(formattedLocation);
      for (role in work.jobs[job].roles) {
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].roles[role].title);
        var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].roles[role].dates);
        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].roles[role].description);
        $('.work-entry:last').append(formattedTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedDescription);
      }
    }
  }
};


var education = {
  "schools": [
    {
      "name": "University of Edinburgh",
      "degree": "B.Sc.",
      "location": "Edinburgh, UK",
      "major": "Biological Sciences",
      "gradYear": "1997 - 2001",
      "website": "www.ed.ac.uk"
    }
  ],
  "onlineCourses": [
    {
      "title": "An Introduction to Interactive Programming in Python",
      "school": "Coursera",
      "dates": "2012",
      "url": "https://www.coursera.org/course/interactivepython"
    },
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": "December 2014",
      "url": "https://www.udacity.com/course/ud304"
    },
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "January 2015",
      "url": "https://www.udacity.com/course/ud804"
    },
    {
      "title": "Intro to jQuery",
      "school": "Udacity",
      "dates": "January 2015",
      "url": "https://www.udacity.com/course/ud245"
    }
  ],
  "display": function() {
    for (var school in education.schools) {
      $('#education').append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
      var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].gradYear);
      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
      $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
      $('.education-entry:last').append(formattedSchoolDates);
      $('.education-entry:last').append(formattedSchoolLocation);
      $('.education-entry:last').append(formattedSchoolMajor);
    };
    $('#education').append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
    $('#education').append(HTMLschoolStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
      var formattedOnlineURL = HTMLonlineURL.replace(/%data%/g, education.onlineCourses[course].url);
      $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
      $('.education-entry:last').append(formattedOnlineDates);
      $('.education-entry:last').append(formattedOnlineURL);
    }
  }
};

var projects = {
  "project": [
  {
    "title": "Pixiespace",
    "dates": "2011",
    "description": "Every The Cloud has a sparklepixie lining - a place to store your favourite colours in the cloud.",
    "images": ["images/pixiespace.png"]
  },
  {
    "title": "Queue Dashboard",
    "dates": "March 2014",
    "description": "Live tracking of agent availability for task queues, drawing json data from an existing tool. Django back-end.",
    "images": ["images/queuedashboard.png","images/queuedashboardagent.png"]
  },
  {
    "title": "WFH Overtime Submission form",
    "dates": "2011",
    "description": "Web form to submit time spent and cases worked while working from home. Django back-end produced a formatted email response.",
    "images": ["images/wfhsubmission.png"]
  }
  ],
  "display": function() {
  for (var proj in projects.project) {
    $('#projects').append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.project[proj].title);
    var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.project[proj].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.project[proj].description);

    $('.project-entry:last').append(formattedProjectTitle);
    $('.project-entry:last').append(formattedProjectDates);
    $('.project-entry:last').append(formattedProjectDescription);
    if (projects.project[proj].images.length > 0) {
      for (image in projects.project[proj].images) {
        var formattedProjectImages = HTMLprojectImage.replace('%data%', projects.project[proj].images[image]);
        $('.project-entry:last').append(formattedProjectImages);
      };
    };
  };
}
};



$(document).click(function(loc) {
  // your code goes here!
  logClicks(loc.pageX, loc.pageY);
}); 

$('#main').append(internationalizeButton);

var inName = function(name) {
  var splitName = name.trim().split(" ");
  var firstName = splitName[0];
  var lastName = splitName[1];
  firstName = firstName.toLowerCase();
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  lastName = lastName.toUpperCase();
  var interName = firstName + ' ' + lastName;
  return interName
}

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);