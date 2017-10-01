/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	name : "Yousef",
	role : "developer",

	contacts :{
		mobile : +966544988973,
		email : "yousefalablan@gmail.com",
    github: "https://github.com/YousefAbdullah",
    twitter: "@Yousef_Abdullh",
    location: "Saudi Arabia - Riyadh",
	},
      welcomeMessage: "Welcom to my resumie" ,
	
      skills: ["programing Java Script","HTML/CSS","C#","ASP.NET"],
      biopic: "https://lh3.googleusercontent.com/ffxRMP3JCNX5PONdJUS3ZVlHBjhff5K3LYpR0Kq0doZ1pxaXm06hiTK2PZHQPROSHEt1xk1nzAMTXRsklzGUDmmTL9ArjJD0aAUdTuu8nfTQ12aUNH5f0zoz_oUkuFEa44QokdF4sm_n_7vpu5r4MjlaOVELiFsE3ttT8cfUTHJAjI601DQu2OTTAA4sVpnZqjnUmTyBB3D_jAsdww1Pbdg_S8P1x5xbOfmVn7CGf_6300OzWRrN4WpgjWKX6PN4epQ1DAC9XjMz4RS_6TGd5YvjM4Nld9NBNJcVP3rj-Rq3GsLTvqzH7yzam5nY358kSjCS5ydLA6zL-Q586KD9prFu7OBQRz-3RWARmFzheu9ViJrfziJ8_Ri_hpUbj1FTclX1qOSF4biBJiX2g2GO1rIaWjsOk_2vZi13nXgJIxlbYQYR_rw8znJGu5CjjWfTNoxvxtQsHHbgDJO8WVaccZoq4vehR4Lsw_qX3Rlhnv7-VEMGihvcr4NMEQIlnYOHYfoW-JtJIv1dmkrw0gU8nNIvLLcNWf8nN567pMIc9YfihpPWGG7GwMd_-Ww58al-SDsy7-Y6cU8SJg6xGn3ol-RTlElCAtSxeJq9gYG5f-KK29U6YKiR=w300-h478-no",
   

    display : function() {
		  
			var formattedname = HTMLheaderName.replace("%data%", bio.name);
			$( "#headerNameandRol" ).append( formattedname);
			
			
			var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
			$( "#headerNameandRol" ).append( formattedrole );
			
			var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			$( "#topContacts" ).append( formattedmobile );
			
			var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
			$( "#topContacts" ).append( formattedemail );
			
			var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			$( "#topContacts" ).append( formattedtwitter );
			
			var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
			$( "#topContacts" ).append( formattedgithub );
			
			var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
			$( "#topContacts" ).append( formattedlocation );
			
			var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
			$( "#header" ).append( formattedbiopic );
			
			var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
			$( "#header" ).append( formattedwelcomeMessage );
			
			var formattedskills = HTMLskillsStart.replace("%data%", bio.skills);
			$( "#header" ).append( formattedskills );
		
		for (i = 0; i < bio.skills.length; i++) { 
    var formattedskills = HTMLskills.replace("%data%", bio.skills[i]);
			$( "#header" ).append( formattedskills );
			}
	
            }

    
};

	bio.display();


var education  ={
	  
	
	schools :{name: 'Computer Scinence, King Saud University, KSU.', 			
				location: 'Saudi Arabia - Riyadh', 
				  degree: 'Bachelor', 
				  majors: ["CS"], 
				  dates:["2013-2017"],
				  url:''},
 

	 
	onlineCourses :{title: "Front-End.", 
						school: "Udacity", 
						dates:["2017"],
				  		url:"https://www.udacity.com/"},
    
      displayED : function() {
		  
			var formattedschool = HTMLschoolStart.replace("%data%", education.schools);
		  	$( "#education" ).append( formattedschool );
		  
		
		   var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools.name);
			$( "#education" ).append( formattedHTMLschoolName );
		  
		   var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
			$( "#education" ).append( formattedHTMLschoolDegree );
		  
		   var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools.dates);
			$( "#education" ).append( formattedHTMLschoolDates );
		
		   var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
			$( "#education" ).append( formattedHTMLschoolLocation );
		 
		     var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools.majors);
			$( "#education" ).append( formattedHTMLschoolMajor );
		  
		  
		  
			var formattedHTMLonlineClasses = HTMLonlineClasses.replace("%data%", education.onlineCourses);
		  	$( "#education" ).append( formattedHTMLonlineClasses );
		  
		
		   var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
			$( "#education" ).append( formattedHTMLonlineTitle );
		  
		   var formattedHTMLonlineSchool = HTMLschoolDegree.replace("%data%", education.onlineCourses.school);
			$( "#education" ).append( formattedHTMLonlineSchool );
		  
		   var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses.dates);
			$( "#education" ).append( formattedHTMLonlineDates );
		
		   var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses.url);
			$( "#education" ).append( formattedHTMLonlineURL );
		 
	  },
	
};

education.displayED();

var work ={
	jobs: {employer: "Training programmer in Ministry of Housing ",
			   title: "developer", 
				  location: "Saudi Arabia - Riyadh",
				  dates:["2017"],
				  description:"Working on programing Java Script,HTML/CSS and C#,ASP.NET"},

	
	displayWO: function(){
		var formattedHTMLworkStart = HTMLworkStart.replace("%data%", work.jobs);
		  	$( "#workExperience" ).append( formattedHTMLworkStart );
		
		
		
    var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs.employer);
			$( "#workExperience" ).append( formattedHTMLworkEmployer );
		
		var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs.title);
			$( "#workExperience" ).append( formattedHTMLworkTitle );
		
			var formattedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs.dates);
			$( "#workExperience" ).append( formattedHTMLworkDates );
		
			var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.jobs.location);
			$( "#workExperience" ).append( formattedHTMLworkLocation );
		
			var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs.description);
			$( "#workExperience" ).append( formattedHTMLworkDescription );
			
	
	
	
	
	}
	
	
	
};
work.displayWO();

var projects ={
	
	projects :{title: "Projects 3 ",
				  dates:["2017"],
				  description:"Working on programing Java Script, Responsive design",
				  images:["http://www.digitalgreys.com/wp-content/uploads/2013/06/responsive-web-design1-300x300.jpg"]
			  },
    
	

	
      displayPR: function(){
		  
		  	var formattedHTMLprojectStart = HTMLprojectStart.replace("%data%", projects.projects);
			$( "#projects" ).append( formattedHTMLprojectStart );
	
		   	var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects.title);
			$( "#projects" ).append( formattedHTMLprojectTitle );
		  
		  var formattedHTMLprojectDates = HTMLprojectTitle.replace("%data%", projects.projects.dates);
			$( "#projects" ).append( formattedHTMLprojectDates );
		  
		  var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects.description);
			$( "#projects" ).append( formattedHTMLprojectDescription );
		  
		  var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", projects.projects.images);
			$( "#projects" ).append( formattedHTMLprojectImage );
	  }
};

projects.displayPR();

	
		
		
			$( "#mapDiv" ).append( googleMap );


	
