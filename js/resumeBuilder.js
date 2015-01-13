
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
        // var formattedSkills = HTMLskills.replace("%data%",bio.skills);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#footerContacts").append(formattedLocation);
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedGithub);

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
        "title": "Technical CS Lead",
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
    ],
    "display": function() {
        for (var job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
            var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
            var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            $('.work-entry:last').append(formattedEmployer + formattedTitle);
            $('.work-entry:last').append(formattedLocation);
            $('.work-entry:last').append(formattedDates);
            $('.work-entry:last').append(formattedDescription);
        }
    }
};


var education = {
    "schools": [
        {
            "name": "University of Edinburgh",
            "degree": "B.Sc",
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
            "title": "HTML5/CSS",
            "school": "Udacity",
            "dates": "December 2014",
            "url": "https://www.udacity.com/course/ud304-nd"
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
            var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
            $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
            $('.education-entry:last').append(formattedOnlineDates);
            $('.education-entry:last').append(formattedOnlineURL);
        }
    }
};

var projects = {
    "project": [
    {
        "title": "pixiespace.com",
        "dates": "2011",
        "description": "Every The Cloud has a sparklepixie lining",
        "images": ["images/pixiespacesplash.jpg"]
    },
    {
        "title": "Queue Dashboard",
        "dates": "March 2014",
        "description": "Live tracking of agent availability for task queues, drawing json data from an existing tool.",
        "images": []
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

/* was told to hide this stuff, grump
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedMsg = HTMLWelcomeMsg.replace("%data%",bio.welcome);
var formattedImg = HTMLbioPic.replace("%data%",bio.image);
// var formattedSkills = HTMLskills.replace("%data%",bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



$("#footerContacts").append(formattedLocation);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);

$("#header").append(formattedMsg);
$("#header").append(formattedImg);
// $("#header").append(formattedSkills); 
// end grump


if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
        $('#skills').append(formattedSkill);
    }
};

*/





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
