

var bio = {
    "name":"Shevaun Frazier",
    "role" : "Front-end Ninja",
    "contacts" :  { 
        "email":"shevaunfrazier@googlemail.com",
        "github": "shevyf",
        "mobile": "0879786425",
        "twitter": "@shevyf",
        "location": "Dublin"
        },
    "image" : "images/fry.jpg",
    "welcome" : "Shevaun is a determined and skilled learner who rises to a challenge and enjoys problem solving.",
    "skills" : ["Python", "Javascript", "HTML", "CSS3", "InDesign", "Photoshop"],
    };
    
var work = {
    "jobs": [
        {
        "employer": "Amazon Web Services",
        "title": "Techical CS Lead",
        "location": "Burlington Road, Dublin",
        "dates": "October 10th 2011 - Now",
        "description": "Team Lead for the Amazon Web Services account and billing-focussed customer services team in Dublin. Responsibilities include training, coaching, providing operational leadership for up to 4 sites around the globe, helping team members to develop towards advanced roles in the organisation."
        },
        {
        "employer": "Bitbuzz",
        "title":  "Remote Sales Researcher",
        "location": "Merrion Square, Dublin",
        "dates": "May - October 2011",
        "description": "Researching hotels in London and the south on England, then reaching out to them to try and book appointments for the Sales team to visit and discuss potential WiFi arrangements."
        },
        {
        "employer": "Lloyds Banking Group",
        "title": "Customer Service Analyst",
        "location": "Edinburgh, UK",
        "dates": "March 3rd, 2003 - March 10th 2011",
        "description": "Providing account information and processing payments for a small portfolio of high value customers"
        }
    ]
};


var education = {
    "schools": [
        {
            "name": "University of Edinburgh",
            "city": "Edinburgh",
            "major": "Biological Sciences",
            "gradYear": "1997 - 2001",
            "website": "www.ed.ac.uk"
        },
        {
            "name": "Coursera",
            "city": "Online",
            "major": "Interactive Python",
            "gradYear": "2012",
            "website": "www.coursera.com"
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
            "title": "HTML5/CSS",
            "school": "Udacity",
            "dates": "December 2014",
            "url": "https://www.udacity.com/course/ud304-nd"
        }
    ]
};

var projects = {
    "project": [
    {
        "title": "pixiespace.com",
        "dates": 2011,
        "description": "Every The Cloud has a sparklepixue lining",
        "images": ["images/pixispacesplash.png"]
    },
    {
        "title": "Queue Dashboard",
        "dates": "March 2014",
        "description": "Live tracking of agent availability for task queues, drawing json data from an existing tool.",
        "images": ["images/queuedashboard.png"]
    }
    ]
};

if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
  $('#skills').append(formattedSkill);
  var formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
  $('#skills').append(formattedSkill);
  var formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
  $('#skills').append(formattedSkill);
  var formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
  $('#skills').append(formattedSkill);
  var formattedSkill = HTMLskills.replace('%data%', bio.skills[4]);
  $('#skills').append(formattedSkill);
  var formattedSkill = HTMLskills.replace('%data%', bio.skills[5]);
  $('#skills').append(formattedSkill);
}


// string.replace([old],[new])

// var awesomeThoughts = "I am Shevy and I am AWESOME";

// var funthoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funthoughts);

// var skills = ["Python", "Javascript", "HTML", "CSS3", "InDesign", "Photoshop"];

/* var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedMsg = HTMLWelcomeMsg.replace("%data%",bio.welcome);
var formattedImg = HTMLbioPic.replace("%data%",bio.image);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



$("#footerContacts").append(formattedLocation);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);

$("#header").append(formattedMsg);
$("#header").append(formattedImg);
$("#header").append(formattedSkills); */

