import GitHub from '../../assets/imagesAndIcons/github.png';
import LinkedIn from '../../assets/imagesAndIcons/linkedin.png';
// import Instagram from '../../assets/imagesAndIcons/instagram.png';
import Vector1 from '../../assets/imagesAndIcons/Vector1.png';
import Vector2 from '../../assets/imagesAndIcons/Vector2.png';
import boy from '../../assets/imagesAndIcons/boy.png';
import glassesemoji from '../../assets/imagesAndIcons/glassesimoji.png';
import thumbup from '../../assets/imagesAndIcons/thumbup.png';
import Crown from '../../assets/imagesAndIcons/crown.png';
import HeartEmoji from '../../assets/imagesAndIcons/heartemoji.png';
import Dveloper from '../../assets/imagesAndIcons/glasses.png';
import Humble from '../../assets/imagesAndIcons/humble.png';
import Upwork from '../../assets/imagesAndIcons/Upwork.png';
import Fiverr from '../../assets/imagesAndIcons/fiverr.png';
import Amazon from '../../assets/imagesAndIcons/amazon.png';
import Shopify from '../../assets/imagesAndIcons/Shopify.png';
import Facebook from '../../assets/imagesAndIcons/Facebook.png';
import Sidebar from '../../assets/imagesAndIcons/sidebar.png';
import Ecommerce from '../../assets/imagesAndIcons/ecommerce.png';
import HOC from '../../assets/imagesAndIcons/hoc.png';
import MusicApp from '../../assets/imagesAndIcons/musicapp.png';
import profilePic1 from '../../assets/imagesAndIcons/profile1.jpg';
import profilePic2 from '../../assets/imagesAndIcons/profile2.jpg';
import profilePic3 from '../../assets/imagesAndIcons/profile3.jpg';
import profilePic4 from '../../assets/imagesAndIcons/profile4.jpg';
import profilePic5 from '../../assets/imagesAndIcons/profile5.jpg';
import profilePic6 from '../../assets/imagesAndIcons/profile6.jpg';

export const navBarList = [
    {listItem: 'Home', redirectTo: 'NavBar'},
    {listItem: 'Pursuits', redirectTo: 'Pursuits'},
    {listItem: 'Experience', redirectTo: 'Experience'},
    {listItem: 'Portfolio', redirectTo: 'MyCssExpertiese'},
    {listItem: 'Testimonials', redirectTo: 'Testimonials'}
];

export const myIntro = [
    'Hi! I Am',
    'Prashant Kumar Koli',
    `I am a Software engineer with a strong background in developing responsive UIs for web and mobile using React, React Native, JavaScript,
     HTML, and CSS. Proficient in MongoDB, MySQL, PostgreSQL, and writing unit tests with Jest. Experienced in maintaining code quality
     with ESLint and SonarQube.`,    
];

export const mySocials = [
    {
        src: GitHub,
        alt: 'github',
        href: 'https://github.com/PrashantKoli-21'
    },
    {
        src: LinkedIn,
        alt: 'linkedin',
        href: 'https://www.linkedin.com/in/prashant-kumar-koli/'
    },
    // {
    //     src: Instagram,
    //     alt: 'instagram',
    //     href: 'https://www.instagram.com/master_koli?igsh=eWd4Njc0Y2Zkazls'
    // }
];

export const introRightSection = [
    {
        src: Vector1,
        alt: 'vector1',
        animation: 'still',
    },
    {
        src: Vector2,
        alt: 'vector2',
        animation: 'still',
    },
    {
        src: boy,
        alt: 'boy',
        animation: 'still',
    },
    {
        src: glassesemoji,
        alt: 'glassesemoji',
        animation: 'motion',
    }
];

export const myInterests = [
{
    image: Crown,
    application: 'Web',
    dev: 'Developer',
    motion: 'left-to-right'
},
{
    image: thumbup,
    application: 'Mobile',
    dev: 'Developer',
    motion: 'right-to-left'
}
]

export const buttonTexts = {
    contact: 'Contact',
    downloadCV: 'Download CV',
    hireMe: 'Hire Me',
};

export const pursuitsTexts = {
    myPassionate: 'My Passionate',
    pursuits: 'Pursuits',
    strongPassion: 'I have a strong passion for front-end development and a dedication to creating seamless and robust user interfaces.',
    skills: 'My skills include a solid understanding of core web technologies and writing effective test cases.'
}

export const pursuitCards = [
    {
        style: {left: '14rem'},
        emoji: HeartEmoji,
        heading:'Front-End Development',
        content: 'React, React Native, Next.js, HTML and CSS',
        whileInView: {left: '14rem'},
        initial: {left: '25%'},
    },
    {
        style: {top: '12rem', left: '-4rem'},
        emoji: Dveloper,
        heading:'Databases',
        content: 'MongoDB, PostgreSQL, MySQL',
        whileInView: { left: '-11rem', top: '12rem' },
        initial: { left: '-4rem' },
    },
    {
        style: {top: '19rem', left: '12rem'},
        emoji: Humble,
        heading:'Testing Tools',
        content: 'Unit Testing using Jest Testing Library',
        whileInView: { left: '12rem' },
        initial: { top: '19rem', left: '25rem' },
    }
];

export const experienceContent = [
    {
        count: '2+',
        title1: 'years',
        title2: 'Experience'
    },
    {
        count: '3+',
        title1: 'completed',
        title2: 'Projects'
    },
    {
        count: '1',
        title1: 'companies',
        title2: 'Work'
    }
];

export const myLearningsTexts = {
    myLearnings: 'My Learnings in',
    frontendDevelopment: 'Front-End Development',
    content: 'Frontend development is a dynamic field that focuses on creating visually appealing and user-friendly interfaces. By combining creativity with technical expertise, frontend developers ensure seamless and responsive user experiences across various devices. The field constantly evolves with new frameworks and tools, allowing developers to build innovative and efficient applications. Collaboration and problem-solving are key aspects, as developers work closely with designers and backend teams to deliver high-quality products. On the right side you may find some famous web-sites which used frontend technology to build user friendly and responsive UI.'
};

export const myLearningsImages = [
    {
        src: Upwork,
        alt: 'Upwork'
    },
    {
        src: Fiverr,
        alt: 'Fiverr'
    },
    {
        src: Amazon,
        alt: 'Amazon'
    },
    {
        src: Shopify,
        alt: 'Shopify'
    },
    {
        src: Facebook,
        alt: 'Facebook'
    }
];

export const myCssExpertieseImages = [
    {
        src: Sidebar,
        alt: 'sidebar'
    },
    {
        src: Ecommerce,
        alt: 'ecommerce'
    },
    {
        src: HOC,
        alt: 'hoc'
    },
    {
        src: MusicApp,
        alt: 'musicapp'
    },
];

export const testimonialsStrings = ['What my ', 'Seniors and Colleagues ', 'say about me...'];

export const seniorsAndColleagues = [
    {
        src: profilePic1,
        name: 'Kotham Raj',
        post: 'Software Engineer II',
        review: `Prashant is a proficient React Native developer with a talent for solving bugs and handling stylesheets. His expertise shines in developing user-friendly UIs that precisely match Figma designs. Prashant's attention to detail and problem-solving skills make him a standout in React Native development`,
    },
    {
        src: profilePic2,
        name: 'Shiva Sai Kumar',
        post: 'Software Engineer II',
        review: `Prashant is an excellent React Native developer with a strong understanding of Gradle and Android Studio. He excels in designing responsive UIs for mobile applications using React Native and demonstrates a solid grasp of screen stack management and routing. His skills ensure efficient and intuitive navigation within mobile apps, highlighting his expertise in mobile development.`,
    },
    {
        src: profilePic3,
        name: 'Mohit Raj',
        post: 'Software Engineer II',
        review: `Prashant is a skilled React developer with a strong command of React and JavaScript. He excels in designing and solving bugs, with a particular talent for creating responsive UIs and developing reusable components. His expertise ensures efficient and high-quality development, making him a valuable asset in frontend development.`,
    },
    {
        src: profilePic4,
        name: 'Geetha Vemula',
        post: 'Software Engineer II',
        review: `Prashant is skilled in working with tables and API responses. His hands-on experience with CSS is commendable, enabling him to create common table components that can be reused across the frontend. Additionally, his work on graph UIs is impressive, showcasing his versatility in frontend    development.`,
    },
    {
        src: profilePic5,
        name: 'Sreeram Subrahmanya',
        post: 'Senior Software Engineer',
        review: `Prashant is a talented developer with a solid understanding of Next.js, particularly in page routing and CSS. He excels in developing responsive user interfaces from scratch, creating seamless and intuitive navigation experiences. His skills ensure applications perform well across various devices and screen sizes, showcasing his commitment to delivering high-quality and user-friendly frontend solutions`,
    },
    {
        src: profilePic4,
        name: 'Sourav Kumar Swain',
        post: 'Software Engineer',
        review: `Prashant is excellent with HTML and CSS. His work in designing fully responsive web pages is fantastic, showcasing his outstanding understanding of HTML tags and CSS classes. He also excels in developing user input forms, demonstrating his attention to detail and proficiency in frontend development.`,
    },
    {
        src: profilePic6,
        name: 'Akanksha',
        post: 'Software Engineer',
        review: `Prashant's work in forms is excellent. His CSS expertise enables him to create user-friendly UIs that are responsive across all screen sizes. His understanding of React libraries and packages and their efficient usage is fabulous. Additionally, Prashant excels at guiding juniors in building code that is ready for deployment and production.`,
    }
];
