app.factory('ProjectFactory', function () {
    function makeImgUrl(projName){
        return '/images/' + projName + '.png';
    }

    var projects = [{
        name: 'SpellBook',
        date: 'Oct 2015 - Pres',
        url: 'myspellbook.org',
        github: 'github.com/becks25/spellbook',
        descr: 'Interactive story-driven computer science education',
        bullets: [
            'Designed a visual programming language inspired by Scratch to teach programming logic to children',
            'Implemented a heavily customized game engine on top of Crafty for players to run commands on a game board'
            // 'Built a game engine using functional approaches and Redux for players to run commands on a game board on HTML5 Canvas',
            // 'Used Angular and JSData to modularize code and manage logic on the front end'
        ],
        resume: true,
        imgUrl: '/images/spellbook2.png',
        keywords: '',
        longDescr: '',
        size: '200pt'
    },{
        name: 'Nand2Tetris',
        date: 'Feb 2016 - Pres',
        url: 'github.com/cgalbiati/Nand2Tetris',
        github: 'github.com/cgalbiati/Nand2Tetris',
        descr: 'Building a computer from scratch',
        bullets: [
            'Followed the Nand2Tetris curriculum to build a computer starting with a NAND gate',
            'Used hardware simmulation to build gates, and ALU, a CPU, RAM and a computer',
            'Wrote an assembler in JavaScript'
        ],
        resume: false,
        imgUrl: '/images/xor.png',
        keywords: ['Functional Programming', 'Redux', 'Game Logic', 'HTML5'],
        longDescr: '',
        size: '200pt',
        id: 'Nand'
    },{       
        name: 'SketchPad.js (in progress)',
        date: 'Mar 2016 - Pres',
        url: 'github.com/cgalbiati/game-engine',
        github: 'github.com/cgalbiati/game-engine',
        descr: '2-D Game Engine for HTML5 Canvas',
        bullets: [
            'Used Redux to implement a functional approach to state management',
            'Wrote custom render-er to draw items on board when updated'
        ],
        resume: true,
        imgUrl: '/images/game-board.png',
        keywords: ['Functional Programming', 'Redux', 'Game Logic', 'HTML5'],
        longDescr: '',
        size: '200pt'
    },{       
        name: 'Fractals (in progress)',
        date: 'Apr 2016 - Pres',
        url: 'cgalbiati.github.io/fractals/',
        github: 'github.com/cgalbiati/fractals',
        descr: 'Algorithmic image generation',
        bullets: [
            'Designed and implemented algorithms to draw L-systems and Dilution Limited Aggregations',
            'Used HTML5Canvas to render drawings'
        ],
        resume: true,
        imgUrl: '/images/fractals.png',
        keywords: ['Functional Programming', 'Redux', 'Game Logic', 'HTML5'],
        longDescr: '',
        size: '200pt'

    },{
        name: 'Places (in progress)',
        date: 'Feb 2016 - Pres',
        url: 'github.com/cgalbiati/places',
        github: 'github.com/cgalbiati/places',
        descr: 'Map-based game',
        bullets: [
            'Wrote sleek UI using React and Redux to manage views and data on the front end',
            // 'Used Webpack to transpile and bundle js, jsx, and sass files',
            'Used React-Leaflet map to visualize locations, connections and game play'
        ],
        resume: false,
        imgUrl: '/images/places.png',
        keywords: ['Functional Programming', 'Redux', 'Game Logic', 'HTML5'],
        longDescr: '',
        size: '200pt'
    },{
        name: 'When I Was Your Age',
        date: 'Mar - Apr 2016',
        url: 'wheniwasyourage.herokuapp.com',
        github: 'github.com/ksullivan2/whenIWasYourAge',
        descr: 'The Dad-est app ever',
        bullets: [
            'Wrote a custom scraper to find and rate events on Wikipedia',
            'Used React to build UI to see events along a lifetime using a slider'
        ],
        resume: true,
        imgUrl: '/images/when.png',
        keywords: ['Functional Programming', 'Redux', 'Game Logic', 'HTML5'],
        longDescr: '',
        size: '200pt',
        id:'When'
    },{
        name: 'Slopes',     
        date: 'Sept 2015',
        url: 'murmuring-ridge-5510.herokuapp.com',
        github: 'github.com/cgalbiati/slopes',
        descr: 'Visualization of ski trails built in four-day hackathon',
        bullets: [
            'Designed an application using Google Maps and Visualizer APIs to analyze elevation profiles of ski trails',
            'Built sleek UI using Angular and JSData to seamlessly interact with backend data through Mongoose',
        ],
        resume: false,
        imgUrl: '/images/slopes2.png',
        keywords: '',
        longDescr: '',
        size: '200pt'
    // },{
    //     name: 'Wedsite',
    //     date: 'Mar 2016',
    //     url: 'chandraandchris.com/',
    //     descr: 'My wedding website',
    //     bullets: [
    //         'Implemented paralax scrolling using CSS3',
    //     ],
    //     resume: false,
    //     imgUrl: '/images/wedding.png',
    //     keywords: ['CSS3', 'Paralax scroll', 'HTML5', 'Sass'],
    //     longDescr: ''
    },{
        name: 'SocketJam',
        date: 'Sept 2015',
        url: 'socket-jam.herokuapp.com/',
        descr: 'Online jam session space for users to collaborate and play music using digital instruments',
        bullets: [
            'Enabled real-time collaboration using socket.io',
        ],
        resume: false,
        imgUrl: '/images/socketjam2.png',
        keywords: '',
        longDescr: '',
        size: '200pt'
    },{
        name: 'Tanks',
        date: 'Aug 2015',
        descr: 'Interactive target practice game',
        bullets: [
            'Won ‘Most Interactive’ award at Fullstack Academy Tessel Hackathon',
            'Used a Tessel microcontroller to move a ‘tank’, sense an RFID chip if hit, and update players scores online',
        ],
        resume: false,
        imgUrl: '/images/target.png',
        keywords: '',
        longDescr: '',
        size: '200pt',
        id: 'Tanks'
    }];



    return {
        projects: projects
    };

});
