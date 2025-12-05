export interface Course {
    slug: string
    title: string
    tagline: string
    description: string
    whatYouLearn: string[]
    schedule: string
    duration: string
    level: string
    pricing: string
    color: string
}

export const courses: Course[] = [
    {
        slug: 'adult-fundamentals',
        title: 'Adult Fundamentals',
        tagline: 'Master the Basics',
        description: 'Perfect for beginners or those returning to tennis after a break. This comprehensive program covers all essential techniques including proper grip, footwork, and stroke mechanics. Our certified coaches provide personalized attention in small groups, ensuring you build a solid foundation. You\'ll learn the rules of the game, court positioning, and basic strategy while gaining confidence on the court.',
        whatYouLearn: [
            'Proper grip techniques for forehand and backhand',
            'Basic footwork and court positioning',
            'Fundamental strokes and swing mechanics',
            'Serving basics and ball toss technique',
            'Rules and scoring system',
            'Introduction to singles and doubles play'
        ],
        schedule: 'Mon/Wed',
        duration: '6:00 PM - 7:30 PM',
        level: 'Beginner',
        pricing: '$25 per session',
        color: 'blue'
    },
    {
        slug: 'junior-academy',
        title: 'Future Stars (Ages 8-14)',
        tagline: 'Develop Champions',
        description: 'Our junior academy focuses on skill development, physical fitness, and character building. Through age-appropriate drills and games, young players learn technique, strategy, and sportsmanship. We emphasize fun while building competitive skills. The program includes match play, tournament preparation, and mental game training. Perfect for kids who want to take their tennis to the next level.',
        whatYouLearn: [
            'Advanced stroke technique and consistency',
            'Tactical awareness and court coverage',
            'Physical conditioning and agility training',
            'Mental toughness and competitive mindset',
            'Match play strategies',
            'Tournament preparation and etiquette'
        ],
        schedule: 'Sat',
        duration: '9:00 AM - 11:00 AM',
        level: 'Intermediate',
        pricing: '$30 per session',
        color: 'green'
    },
    {
        slug: 'intermediate-skills',
        title: 'Intermediate Skills',
        tagline: 'Elevate Your Game',
        description: 'Take your tennis to the next level with advanced tactics and techniques. This program focuses on consistency, spin control, and strategic play. You\'ll learn how to construct points, exploit opponent weaknesses, and develop a more complete game. Includes video analysis, match simulation, and personalized feedback from our coaching staff.',
        whatYouLearn: [
            'Topspin and slice techniques',
            'Approach shots and net transitions',
            'Point construction and patterns',
            'Reading opponents and adjusting tactics',
            'Advanced serving variations',
            'Doubles formations and communication'
        ],
        schedule: 'Tue/Thu',
        duration: '7:00 PM - 8:30 PM',
        level: 'Intermediate',
        pricing: '$30 per session',
        color: 'purple'
    },
    {
        slug: 'competition-prep',
        title: 'Competition Prep',
        tagline: 'Tournament Ready',
        description: 'Intensive training for competitive players preparing for tournaments. This program combines high-level technical work with mental game training and match strategy. Work on weapons development, creating your game identity, and performing under pressure. Includes controlled match play, video review, and one-on-one coaching sessions.',
        whatYouLearn: [
            'Weapon development (signature shots)',
            'Match strategies and game plans',
            'Mental toughness and pressure management',
            'Physical conditioning for competition',
            'Pre-match preparation routines',
            'Post-match analysis and improvement'
        ],
        schedule: 'Mon/Wed/Fri',
        duration: '5:00 PM - 7:00 PM',
        level: 'Advanced',
        pricing: '$40 per session',
        color: 'red'
    },
    {
        slug: 'doubles-mastery',
        title: 'Doubles Mastery',
        tagline: 'Perfect Team Play',
        description: 'Specialized training focused exclusively on doubles strategy and teamwork. Learn proper court positioning, poaching techniques, and communication with your partner. This class covers all formations, return strategies, and how to handle different playing styles. Perfect for league players and social doubles enthusiasts.',
        whatYouLearn: [
            'Traditional and Australian formations',
            'Poaching and I-formation plays',
            'Return positioning and strategies',
            'Net play and volleys',
            'Partner communication and signals',
            'Serving patterns for doubles'
        ],
        schedule: 'Sat',
        duration: '11:00 AM - 12:30 PM',
        level: 'All Levels',
        pricing: '$28 per session',
        color: 'yellow'
    },
    {
        slug: 'womens-circle',
        title: 'Women\'s Tennis Circle',
        tagline: 'Empower & Connect',
        description: 'A supportive and encouraging environment designed specifically for women. This program combines skill development with social connection and fitness. Whether you\'re a complete beginner or returning player, you\'ll find a welcoming community. Focus on technique, strategy, and having fun while getting a great workout.',
        whatYouLearn: [
            'Fundamental techniques in supportive setting',
            'Confidence building through progressive drills',
            'Social play and round-robin matches',
            'Fitness and wellness through tennis',
            'Game strategy and tactics',
            'Building lasting friendships'
        ],
        schedule: 'Wed',
        duration: '10:00 AM - 11:30 AM',
        level: 'All Levels',
        pricing: '$25 per session',
        color: 'pink'
    },
    {
        slug: 'paddle-power',
        title: 'Paddle Power',
        tagline: 'Master the Walls',
        description: 'Dedicated paddle tennis instruction covering the unique aspects of this fast-growing sport. Learn how to use the glass walls, master the lob, and develop paddle-specific strategies. Our coaches have competitive paddle experience and will teach you the nuances that make this sport special. Includes equipment introduction and court-specific tactics.',
        whatYouLearn: [
            'Wall play techniques and angles',
            'Paddle-specific grip and strokes',
            'Lob and bandeja shots',
            'Court positioning in the enclosed space',
            'Vibora and other signature shots',
            'Doubles communication in paddle'
        ],
        schedule: 'Thu',
        duration: '6:30 PM - 8:00 PM',
        level: 'All Levels',
        pricing: '$30 per session',
        color: 'indigo'
    },
    {
        slug: 'active-seniors',
        title: 'Active Seniors (55+)',
        tagline: 'Stay Active & Social',
        description: 'Low-impact tennis for active adults 55 and over. This program emphasizes enjoyment, fitness, and social connection. Modified drills focus on technique and consistency while being mindful of joint health and mobility. The perfect way to stay active, make new friends, and enjoy the sport at a comfortable pace.',
        whatYouLearn: [
            'Modified techniques for comfort and safety',
            'Low-impact footwork and movement',
            'Doubles strategies for senior play',
            'Flexibility and injury prevention',
            'Social play and round-robins',
            'Maintaining an active lifestyle'
        ],
        schedule: 'Tue/Thu',
        duration: '10:00 AM - 11:30 AM',
        level: 'Beginner to Intermediate',
        pricing: '$22 per session',
        color: 'teal'
    },
    {
        slug: 'mini-tennis',
        title: 'Mini Tennis Stars (Ages 5-7)',
        tagline: 'Fun First Steps',
        description: 'Introduction to tennis for young children using modified equipment and age-appropriate activities. Kids develop motor skills, hand-eye coordination, and a love for the game through fun games and challenges. We use softer balls, smaller rackets, and shortened courts to ensure success and enjoyment.',
        whatYouLearn: [
            'Basic hand-eye coordination',
            'Introduction to racket and ball control',
            'Fun games that teach tennis fundamentals',
            'Social skills and teamwork',
            'Following instructions and taking turns',
            'Building confidence and love for sport'
        ],
        schedule: 'Sat',
        duration: '10:00 AM - 11:00 AM',
        level: 'Beginner',
        pricing: '$20 per session',
        color: 'cyan'
    },
    {
        slug: 'serve-workshop',
        title: 'Serve Workshop',
        tagline: 'Ace Your Serve',
        description: 'Dedicated workshop focused solely on improving your serve. Learn proper biomechanics, toss consistency, and power generation. Work on both first and second serve techniques, including placement and spin variations. Includes video analysis and personalized feedback. Perfect for players looking to add a weapon to their game.',
        whatYouLearn: [
            'Proper service motion and biomechanics',
            'Consistent ball toss technique',
            'Power generation through kinetic chain',
            'First serve placement and variations',
            'Second serve spin and consistency',
            'Mental approach to serving under pressure'
        ],
        schedule: 'Sun',
        duration: '2:00 PM - 3:30 PM',
        level: 'Intermediate to Advanced',
        pricing: '$35 per session',
        color: 'lime'
    },
    {
        slug: 'net-play',
        title: 'Net Play Excellence',
        tagline: 'Dominate at the Net',
        description: 'Master the art of net play with focused training on volleys, overheads, and court positioning. Learn when to come to net, how to finish points quickly, and develop touch and feel. This specialized class will transform your net game and make you more complete player. Essential for doubles players and aggressive singles players.',
        whatYouLearn: [
            'Forehand and backhand volley technique',
            'Overhead smash mechanics',
            'Approach shot strategies',
            'Net positioning and anticipation',
            'Touch volleys and drop volleys',
            'Transition game from baseline to net'
        ],
        schedule: 'Fri',
        duration: '6:00 PM - 7:30 PM',
        level: 'Intermediate to Advanced',
        pricing: '$32 per session',
        color: 'amber'
    },
    {
        slug: 'match-sessions',
        title: 'Competitive Match Play',
        tagline: 'Real Match Experience',
        description: 'Practice in true competitive conditions with proper scoring, umpiring, and match protocols. Play against different opponents each week, work on implementing strategies, and developing your competitive mindset. Includes brief coaching between sets and post-match analysis. Great preparation for league play and tournaments.',
        whatYouLearn: [
            'Match tactics and strategy implementation',
            'Competitive mindset and mental toughness',
            'Handling pressure situations',
            'Between-point and between-game routines',
            'Adapting to different playing styles',
            'Match analysis and self-assessment'
        ],
        schedule: 'Sun',
        duration: '4:00 PM - 6:00 PM',
        level: 'Intermediate to Advanced',
        pricing: '$30 per session',
        color: 'emerald'
    }
]

export function getCourseBySlug(slug: string): Course | undefined {
    return courses.find(course => course.slug === slug)
}
