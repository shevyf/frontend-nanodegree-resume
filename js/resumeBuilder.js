// string.replace([old],[new])

// var awesomeThoughts = "I am Shevy and I am AWESOME";

// var funthoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funthoughts);

var name = "Shevaun Frazier";

var formattedName = HTMLheaderName.replace("%data%", name);



var role = "Front-end Ninja";

var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);