app.factory('ProjectFactory', function () {


    var projects = [{
        name: 'SpellBook',
        date: 'Oct 2015',
        url: 'myspellbook.org',
        descr: 'Interactive story-driven computer science education',
        bullets: [
            'Designed a visual programming language inspired by Scratch to expose children to basic programming logic',
            'Implemented a heavily customized game engine of top of Crafty for players to run commands on a game board',
            'Used Angular and JS-data to modularize code and manage logic on the front end'
        ],
        resume: true,
        imgUrl: '',
        keywords: '',
        longDescr: ''
    },{
        name: 'Slopes',     
        date: 'Sept 2015',
        url: 'murmuring-ridge-5510.herokuapp.com',
        descr: 'Visualization of (ski) trails built in four-day hackathon',
        bullets: [
            'Designed an application using Google Maps and Visualizer APIs to analyze elevation profiles of (ski) trails',
            'Built sleek ui using Angular and JS-data to seamlessly interact with backend data through Mongoose',
        ],
        resume: true,
        imgUrl: '',
        keywords: '',
        longDescr: ''
    },{
        name: 'SocketJam',
        date: 'Sept 2015',
        url: 'socket-jam.herokuapp.com/',
        descr: 'Online jam session space for users to collaborate to play music using digital instruments',
        bullets: [
            'Enabled real-time collaboration using socket.io',
        ],
        resume: false,
        imgUrl: '',
        keywords: '',
        longDescr: ''
    },{
        name: 'Tanks',
        date: 'Aug 2015',
        descr: 'Interactive target practice game',
        bullets: [
            'Won ‘Most Interactive’ award at Fullstack Academy Tessel Hackathon',
            'Used a Tessel micro controller to move a ‘tank’, sensed an RFID chip if hit, and updated players scores online',
        ],
        resume: true,
        imgUrl: '',
        keywords: '',
        longDescr: ''
    }];

    return {
        projects: projects
    };

});
