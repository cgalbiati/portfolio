app.config(function ($stateProvider) {
    $stateProvider.state('resume', {
        url: '/resume',
        templateUrl: 'js/resume/resume.html',
        controller: 'ResumeCtrl'
    });
});

app.controller('ResumeCtrl', function ($scope, ProjectFactory) {

    $scope.skills = [
	    {name: 'JavaScript', numCols: '12', cat: 'high'},
	    {name: 'NodeJs', numCols: '12', cat: 'high'},
	    {name: 'Angular', numCols: '12', cat: 'high'},
        {name: 'React', numCols: '10', cat: 'med'},
        {name: 'Redux', numCols: '10', cat: 'med'},
        {name: 'MongoDB', numCols: '12', cat: 'high'},
        {name: 'PostgreSQL', numCols: '10', cat: 'med'},
	    {name: 'MySQL', numCols: '10', cat: 'med'},
	    {name: 'CSS3', numCols: '12', cat: 'med'},
        {name: 'HTML5', numCols: '10', cat: 'med'},
        {name: 'Sass', numCols: '10', cat: 'med'},
        {name: 'Gulp', numCols: '10', cat: 'med'},
        {name: 'Webpack', numCols: '10', cat: 'med'},
        {name: 'JQuery', numCols: '8', cat: 'med'},
        {name: 'Python', numCols: '6', cat: 'low'},
        {name: 'Django', numCols: '6', cat: 'low'},
        {name: 'WebGL', numCols: '6', cat: 'low'},
        {name: 'C++', numCols: '6', cat: 'low'},
        // {name: 'Mongoose', numCols: '12', cat: 'high'},
	    {name: 'Express', numCols: '12', cat: 'high'},
	    // {name: 'JSData', numCols: '12', cat: 'high'},
        {name: 'Bootstrap', numCols: '10', cat: 'med'},
        {name: 'Sequelize', numCols: '10', cat: 'med'},
        {name: 'Lodash', numCols: '10', cat: 'med'},
        // {name: 'Web Scraping', numCols: '8', cat: 'med'},
        {name: 'Testing', numCols: '10', cat: 'med'},
        // {name: 'Google Maps API', numCols: '8', cat: 'med'},];
        {name: 'Heroku', numCols: '10', cat: 'med'},
        {name: 'Websockets', numCols: '8', cat: 'med'},
        {name: 'Vagrant', numCols: '6', cat: 'low'},
    // $scope.tools = [{name: 'Git', numCols: '12', cat: 'high'},
	   //  {name: 'AWS', numCols: '6', cat: 'low'},
	   //  {name: 'Google Analytics', numCols: '6', cat: 'low'},
       ];

    $scope.projects = ProjectFactory.projects.filter(project=>project.resume);

    $scope.jobs = [
    {
        name: 'Participant',
        place: 'The Recurse Center',
        date: 'Feb - Apr 2016',
        descr: 'Self-directed educational retreat for programmers who want to improve their craft',
        bullets: [
            'Collaborated with engineers on a variety of projects and lectures',
            'Built a computer starting from NAND gates using hardware simulation (including ALU, CPU and assembler)',
            'Led workshops including finite automata and computational geometry algorithms focussing on convex hull'
        ]
    },{
    	name: 'Science Teacher', 
    	place: 'Talented and Gifted School for Young Scholars',
    	date: '2012 - 2015',
		descr: 'Certification: Science Teacher (Biology) grades 7-12',
		bullets: [
			'Created and implemented curricula for Regents Biology, Regents Earth Science, and 7th grade General Science',
            'Taught, tracked, and analyzed performance of 100 students per year on 25 standards',
			'Nominated to feature in a video of exemplary discussion facilitation partnering with the The Danielson Group'
		]
    }, {
        name: 'Biology Research Lab Assistant', 
        place: 'Wesleyan University',
        date: '2008 - 2012',
        bullets: [
            'Prepared and analyzed chemical and biological samples for developmental biology lab',
            'Revised and digitized lab protocols to correct errors, add new methods, and make instructions more clear',
            'Led new assistant trainings'
            ]}
    ];
    $scope.education = [{
    	name: 'Fullstack Academy',
    	place: 'New York, NY',																		    
    	date: 'Oct 2015',
		bullets: [
			'Studied software engineering full-time in 13-week program focused on the JavaScript MEAN stack',
			'Designed and implemented multiple independent and collaborative projects using Agile methodologies'
	]},{
		name: 'Relay GSE',
		place: 'Master\'s in Teaching, Grades 7-12, Biology, New York, NY',
		date: 'Jul 2014',
		bullets: ['Data-driven, skills-oriented Master\'s Degree, aimed at developing teachers who engage, track, and impact students of all levels and backgrounds'
	]},{
		name: 'Wesleyan University',
		place: 'Bachelor of Arts,  Middletown, CT', 													  
		date: 'May 2012',
		bullets: ['Major: English, GPA: 3.9, Dean’s list: 2011, 2012, Phi Beta Kappa']
    }];
    // $scope.interests = [];

});

