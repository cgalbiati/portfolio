app.config(function ($stateProvider) {
    $stateProvider.state('resume', {
        url: '/resume',
        templateUrl: 'js/resume/resume.html',
        controller: 'ResumeCtrl'
    });
});

app.controller('ResumeCtrl', function ($scope, ProjectFactory) {

    $scope.skills = [
	    {name: 'JavaScript', numCols: '12'},
	    {name: 'Python', numCols: '6'},
	    {name: 'C++', numCols: '6'},
	    {name: 'NodeJs', numCols: '12'},
	    {name: 'ES6', numCols: '10'},
	    {name: 'Angular', numCols: '12'},
	    {name: 'MySQL', numCols: '10'},
	    {name: 'Sequelize', numCols: '10'},
	    {name: 'MongoDb', numCols: '12'},
	    {name: 'Mongoose', numCols: '12'},
	    {name: 'CSS3', numCols: '10'},
	    {name: 'Sass', numCols: '10'},
	    {name: 'JQuery', numCols: '8'},
	    {name: 'HTML5', numCols: '10'},
	    {name: 'Bootstrap', numCols: '10'},
	    {name: 'Websockets', numCols: '8'},
	    {name: 'Express', numCols: '12'},
	    {name: 'Lodash', numCols: '10'},
	    {name: 'JS-Data', numCols: '12'},
	    {name: 'Google Maps API', numCols: '8'},];
    $scope.tools = [{name: 'Git', numCols: '12'},
    	{name: 'Heroku', numCols: '10'},
	    {name: 'AWS', numCols: '6'},
	    {name: 'Google Analytics', numCols: '6'},];

    $scope.projects = ProjectFactory.projects.filter(project=>project.resume);

    $scope.jobs = [{
    	name: 'Science Teacher', 
    	place: 'Talented and Gifted School for Young Scholars',
    	date: '2012- 2015',
		descr: 'Certification: Science Teacher (Biology) grades 7-12',
		bullets: [
			'Taught, tracked and analyzed performance of 100 students per year on 25 standards',
			'Created and implemented curricula for Regents Biology, Regents Earth Science, and 7th grade General Science',
			'Nominated to feature in a video of exemplary discussion facilitation partnering with the The Danielson Group'
		]
    }];
    $scope.education = [{
    	name: 'Fullstack Academy',
    	place: 'New York, NY',																		    
    	date: 'Oct 2015',
		bullets: [
			'Immersive web-development course featuring the MEAN stack',
			'Completed multiple independent and collaborative projects using agile methodologies'
	]},{
		name: 'Relay GSE',
		place: 'Masters in Teaching, Grades 7-12, Biology, New York, NY',
		date: 'Jul 2014',
		bullets: ['Completed a Masters Degree while teaching as part of the New York City Teaching Fellowship',
			'Data-driven, skills oriented masters program, aimed at developing teachers who engage, track and impact students of all levels and backgrounds'
	]},{
		name: 'Wesleyan University',
		place: 'Bachelor of Arts,  Middletown, CT', 													  
		date: 'May 2012',
		bullets: ['Major: English, GPA: 3.9, Dean’s list: 2011, 2012, Phi Beta Kappa']
    }];
    // $scope.interests = [];

});

