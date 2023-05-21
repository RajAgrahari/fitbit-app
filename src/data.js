import {SiOpenaigym} from 'react-icons/si';
import {BiDumbbell} from 'react-icons/bi';
import {MdSupportAgent,MdOutlineSportsGymnastics} from 'react-icons/md';
import {BsFillHeartPulseFill} from 'react-icons/bs';
import {GrUserExpert} from 'react-icons/gr';
import {SiReasonstudios} from 'react-icons/si';
import {AiOutlineScan} from 'react-icons/ai';



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <BiDumbbell/>,
        title: "Varied and Challenging Workouts",
        info: "FitBit offers a diverse range of group fitness classes and personal training options that are designed to challenge you and keep you engaged. Whether you're looking to improve your cardiovascular health, build strength, or burn fat, Sweat has a workout that's right for you.",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <MdSupportAgent/>,
        title: "Personalized Coaching and Support",
        info: "At FitBit, our expert trainers provide personalized coaching and support to help you achieve your fitness goals. Whether you need help with technique, motivation, or accountability, our team is here to help you every step of the way.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <BsFillHeartPulseFill/>,
        title: "Premium Facility and Supportive Community",
        info: "FitBit's state-of-the-art facility provides all the equipment you need for a great workout, and our supportive community of like-minded individuals will help keep you motivated and on track. With a friendly and welcoming atmosphere, Sweat is the perfect place to achieve your fitness goals and have fun while doing it.",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <MdOutlineSportsGymnastics/>,
        title: "Personal Training",
        info: "Our certified personal trainers will build a tailored program specifically designed for you and help you achieve your individual goals.Whether you want to build strength, improve endurance, or get in better shape, there is a class that suits your needs.",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <GrUserExpert/>,
        title: "The Experience",
        desc: "Mix-and-match fitness classes from any of our group fitness modalities (HIIT, Cycle, Barre, Row, Yoga) or chart your own course in our Lab.  Our one-of-a-kind studio combines high-end lighting and sound to ensure an experience like no other."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Our approach",
        desc: "Sweat offers the ultimate cardio and strength conditioning workouts in a single studio location.  Maximize your movements with instructor-led cardio and weight training sessions. Get lost in immersive workouts built for your body. The combination of strength and cardio training will burn more calories while toning your arms, back, abs, glutes, and legs. "
    },
    {
        id: 3,
        icon: <SiReasonstudios/>,
        title: "The Studio",
        desc: "From custom artwork to high-end lighting, sound, and equipment, Sweat is a studio like no other. We are passionate team of fitness professionals inspired to help you achieve the best version of yourself in an inclusive and judgement-free environment. Sweat is locally owned and operated and is not a franchise."
    },
    {
        id: 4,
        icon: <AiOutlineScan/>,
        title: "Fit3D Scans",
        desc: "With Sweat Elite, members have access to Fit3D scans—highly accurate body scans to track fitness progress and body composition changes."
    }
]









export const faqs = [
    {
        id: 1,
        question: "What kind of workouts do you offer?",
        answer: "We offer a variety of group fitness classes, including HIIT, cycling, barre, row, yoga, sculpt and more. We also provide personal training options for customized coaching and support."
    },
    {
        id: 2,
        question: "Do I need to be in shape to join Fitbit?",
        answer: "Personal training at Fitbit involves one-on-one coaching with one of our expert trainers. Your trainer will work with you to develop a customized workout plan that takes into account your fitness level, goals, and any special considerations."
    },
    {
        id: 3,
        question: "What's the difference between group fitness classes and personal training?",
        answer: "Group fitness classes are instructor-led workouts that are performed in a group setting, while personal training is one-on-one coaching with a trainer. Personal training allows for more personalized attention and customized workouts, while group fitness classes provide a fun and motivating atmosphere."
    },
    {
        id: 4,
        question: "How often should I come to FitBit to see results?",
        answer: "The frequency of your workouts will depend on your fitness level, goals, and schedule. We recommend starting with a few workouts per week and gradually increasing as you become more comfortable and progress."
    },
    {
        id: 5,
        question: "Can I try a class before signing up for a membership?",
        answer: "Yes! You can book a class at FitBit by purchasing a drop-in at any time. If you are signing up for a fitness challenge, we will help you book your first class."
    },
    {
        id: 6,
        question: "Can I cancel my membership at any time?",
        answer: "Yes! We understand that life happens, and we offer flexible membership options that allow you to cancel any month-to-month plan at any time with no additional fees.Please note, cancellations for plans that included a commitment in exchange for a discounted rate will be cancelled at the end of the term you agreed to during sign-up and registration. We do not prorate or refund unused portions of membership plans."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "I love this gym! I have been going here for almost a year and a half. This is the longest I have ever been committed to working out and I owe it all to FitBit! There’s so many options for your workout and the options really meet the needs of everyone. The staff are kind and helpful. No matter where you are at in your fitness journey, this place will help you be a better version of yourself.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "The best gym in Fredericksburg by far! Everyone is so encouraging and friendly. It doesn't matter what stage of life or your gym experience level. All are welcomed.",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "I've been a member of FitBit for about a year now and I would go back and join all over again! The place is spotless, upbeat, encouraging and the workouts are challenging in the best ways. The sense of community is so strong and welcoming; I am so grateful! If you haven't joined yet…what are you doing??!! Join the best workout studio in FXBG!!",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 999.99,
        features: [
            {feature: 'Group fitness workouts', available: true},
            {feature: 'Nutritions', available: true},
            {feature: 'expert guidance', available: false},
            {feature: 'supportive community', available: false},
            {feature: 'Body Scan', available: false},
            {feature: 'Personal training', available: false}
            // {feature: 'Sixth Feature', available: false},
            // {feature: 'Seventh Feature', available: false},
            // {feature: 'Seventh Feature Plus', available: false},
            // {feature: 'Eighth Feature', available: false},
            // {feature: 'Ninth Feature', available: false},
            // {feature: 'Tenth Feature', available: false},
            // {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 2999.99,
        features: [
            {feature: 'Group fitness workouts', available: true},
            {feature: 'Nutritions', available: true},
            {feature: 'expert guidance', available: true},
            {feature: 'supportive community', available: true},
            {feature: 'Body Scan', available: false},
            {feature: 'Personal training', available: false}
            // {feature: 'Sixth Feature', available: true},
            // {feature: 'Seventh Feature', available: true},
            // {feature: 'Seventh Feature Plus', available: true},
            // {feature: 'Eighth Feature', available: false},
            // {feature: 'Ninth Feature', available: false},
            // {feature: 'Tenth Feature', available: false},
            // {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 4999.99,
        features: [
            {feature: 'Group fitness workouts', available: true},
            {feature: 'Nutritions', available: true},
            {feature: 'expert guidance', available: true},
            {feature: 'supportive community', available: true},
            {feature: 'Body Scan', available: true},
            {feature: 'Personal training', available: true}
            // {feature: 'Seventh Feature', available: true},
            // {feature: 'Seventh Feature Plus', available: true},
            // {feature: 'Eighth Feature', available: true},
            // {feature: 'Ninth Feature', available: true},
            // {feature: 'Tenth Feature', available: true},
            // {feature: 'Eleventh Feature', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]