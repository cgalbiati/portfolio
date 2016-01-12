app.factory('ProjectFactory', function () {
    function makeImgUrl(projName){
        return '/images/' + projName + '.png';
    }

    var projects = [{
        name: 'SpellBook',
        date: 'Oct 2015',
        url: 'myspellbook.org',
        descr: 'Interactive story-driven computer science education',
        bullets: [
            'Designed a visual programming language inspired by Scratch to teach programming logic to children',
            'Implemented a heavily customized game engine on top of Crafty for players to run commands on a game board',
            'Used Angular and JSData to modularize code and manage logic on the front end'
        ],
        resume: true,
        imgUrl: '/images/spellbook.png',
        keywords: '',
        longDescr: ''
    },{
        name: 'Slopes',     
        date: 'Sept 2015',
        url: 'murmuring-ridge-5510.herokuapp.com',
        descr: 'Visualization of ski trails built in four-day hackathon',
        bullets: [
            'Designed an application using Google Maps and Visualizer APIs to analyze elevation profiles of ski trails',
            'Built sleek UI using Angular and JSData to seamlessly interact with backend data through Mongoose',
        ],
        resume: true,
        imgUrl: '/images/slopes.png',
        keywords: '',
        longDescr: ''
    },{
        name: 'SocketJam',
        date: 'Sept 2015',
        url: 'socket-jam.herokuapp.com/',
        descr: 'Online jam session space for users to collaborate and play music using digital instruments',
        bullets: [
            'Enabled real-time collaboration using socket.io',
        ],
        resume: false,
        imgUrl: '/images/socketjam.png',
        keywords: '',
        longDescr: ''
    },{
        name: 'Tanks',
        date: 'Aug 2015',
        descr: 'Interactive target practice game',
        bullets: [
            'Won ‘Most Interactive’ award at Fullstack Academy Tessel Hackathon',
            'Used a Tessel microcontroller to move a ‘tank’, sense an RFID chip if hit, and update players scores online',
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
