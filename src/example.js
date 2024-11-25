
const assesmentPageSection = {
    section1: {
        header: "Take a Self-Assessment",
        para1: `<p class='text-sm text-center mb-5'>
                           RCI Certified Clinicians provide various tests and Assessments
                        </p>
    
                        <p class='text-sm text-center'>If you are looking for an psychological assessment reach out to your nearest clinic.
                         </p>`,
        AvailableTest: [
            {
                id: 1,
                title: "Take the PHQ-9 Test",
                title2: "Am I Depressed?",
                para: `This test helps evaluate the severity of depression symptoms.`,
                img: '/home/positive2.svg',
                link:'/assesment/phq9/selfAssesment'
            },
            {
                id: 2,
                title: "Take the GAD-7 Test",
                title2: "Do I have Anxiety?",
                para: `This test helps evaluate the severity of anxiety symptoms.`,
                img: '/home/positive3.svg',
                link:'/assesment/gad7/selfAssesment'
            },
            {
                id: 3,
                title: "Take the PSS-10 Test",
                title2: "How stressed am I?",
                para: `This test assesses how stressful you find your life situations.`,
                img: '/home/positive4.svg',
                link:'/assesment/pss10/selfAssesment'
            },
        
        ],

    },
    section2: {
        header: "Not sure which test to take?",
        para: `<p class='text-center text-sm'>The K10 is designed to measure general psychological distress and can be an effective initial screening tool to identify whether you may need further assessment or support.  </p>`,
        defaultTest: {
            id: 4,
            title: "Take the K10 Test",
            title2: "K10 (Kessler Psychological Distress Scale)",
            para: `This test assesses the level of distress you have experienced in the past month. It helps identify symptoms of anxiety and depression, emotional and physical fatigue, and the impact on daily functioning. `,
            img: '/home/positive1.svg',
        },
    },
    section3: {
        blogs: [
            {
                id: 1,
                img: "dep1.svg",
                title: "TMS for Depression"
            },
            {
                id: 2,
                img: "",
                title: "TMS for OCD"
            },
            {
                id: 3,
                img: "",
                title: "TMS for Anxiety"
            },
        ],
        button: {
            text: "Learn More",
            link: "/",
        }
    }
}


const HomePageSections = {
    heroSection: {
        banner: "/home/banner01.svg",
        title: "You Deserve to Feel Better ",
        para: `Get the best care from our experienced psychologists, TMS experts and psychiatrists for help with depression,OCD and more.
With empathy and confidence, our professionals will guide you through every challenge.`,
        button: {
            text: "SCHEDULE CONSULTATION",
            link: "/consultation/location",
        }
    },
    section2: {
        para1: `Not sure what you need?`,
        para2: `These tests can help identify
what you may have and need`,
        para3: `Take a FREE TEST to identify your symptoms`,
        html1: `
        

                    <h1 class='text-2xl text-center text-gray-800'>
                        Take a <span class="font-semibold">FREE TEST</span> to identify your symptoms
                    </h1>`,
        button: {
            text: "FREE TEST",
            link: "/assesment",
        }
    },
    section3: {
        title: "TMS Treatment",
        para1: `A new approach to treat depression, anxiety, OCD and more.`,
        box: {
            banner: "/home/doctor.png",
            para: `<p class='font-bold mb-3 text-gray-700 text-md'>NON-INVASIVE</p>
                    <p class='font-bold mb-3 text-gray-700 text-md'>NO MEDICATION</p>
                    <p class='font-bold mb-3 text-gray-700 text-md'>SAFE</p>
                    <p class='font-bold mb-3 text-gray-700 text-md'>US FDA Approved</p>`
        },
        para2: `<p style="font-size: 15px; color: #3A3A3A; text-align: center">At MindfulTMS, we bring 5+ years of TMS experience with 10+ clinics in India and USA.</p>

        <p style="font-size: 15px; color: #3A3A3A; text-align: center">Is TMS for me? Learn how it works and if it is the right option for you. </p>`,
        button: {
            text: "MORE ABOUT TMS",
            link: "/pages/tmsPage",
        }

    },
    section4: {
        header: `<h1 class='text-2xl font-[30px] text-center '>
                    Why choose <span class='font-semibold'>MindfulTMS?</span>
                </h1>`,
        para: `<p class='text-center'>
                    Your well being is our mission.
                </p>`,
        services: [
            {
                icon: '/home/medical.svg',
                text: 'Personalized care',
            },
            {
                icon: '/home/handshake.svg',
                text: 'Trust',
            },
            {
                icon: '/home/group.svg',
                text: 'Safe',
            },
            {
                icon: '/home/heart.svg',
                text: 'Holistic',
            },
        ]
    },
    section5: {
        header: 'Services we offer',
        services: [
            {
                array: [
                    {
                        img: "",
                        name: 'Therapy (Psychology)',
                    },
                    {
                        img: "",
                        name: 'Psychiatry ',
                    },
                    {
                        img: "",
                        name: 'Assessments',
                    },
                    {
                        img: "",
                        name: 'TMS',
                    },
                ],
                button: {
                    text: 'LEARN MORE',
                    link: '/services/Therapy Services'
                }
            },
        ]
    },
    section6: {
        header: 'Our Locations',
        para: `Lorem ipsum dolor sit amet`,
        locations: [
            {
                title: 'Bangalore',
                locationArray: [
                    {
                        title: "Aster CMI",
                        address: "Bangalore North",
                    },
                    {
                        title: "Whitefield",
                        address: "Bangalore East",
                    },
                ]
            },
            {
                title: 'Delhi',
                locationArray: [
                    {
                        title: "Greater Kailash",
                        address: "Delhi",
                    },

                ]
            },
        ]
    },
    section7: {
        header: 'Our Experts',
        expertArray: [
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },
            {
                img: '/home/doctor1.png',
                name: 'Dr.Sheela Rao',
                desig: 'Clinical Psychologist',
                location: 'Bangalore',
            },

        ]
    }, 
    section8:{
        videos : [
            { id: 1, service: 'Therapy for Depression', speaker: 'Sanjana Mathur', src: '/home/random.mp4' },
            { id: 2, service: 'Anxiety Management', speaker: 'John Doe', src: '/home/health.mp4' },
            { id: 3, service: 'Stress Relief Techniques', speaker: 'Jane Smith', src: '/home/random.mp4' },
            { id: 4, service: 'Anxiety Management', speaker: 'John Doe', src: '/home/health.mp4' },
        ]
    }
}



const blog = {
    "title": "A Journey Through the Mountains",
    "mainImage": "https://picsum.photos/200/300",
    "sections": [
        {
            "type": "content",
            "content": "<p>This is the first paragraph describing the journey.</p>",
            "order": 1
        },
        {
            "type": "image",
            "content": "https://picsum.photos/200/300",
            "order": 2
        },
        {
            "type": "content",
            "content": "<p>This section provides more details about the mountain ranges.</p>",
            "order": 3
        },
        {
            "type": "button",
            "text": "Read More",
            "link": "/",
            "order": 3
        },
        {
            "type": "accordion",
            "order": 4,
            "sections": [
                {
                    "type": "content",
                    "content": "<p>Details about the first part of the journey inside the accordion.</p>",
                    "order": 1
                },
                {
                    "type": "image",
                    "content": "https://picsum.photos/200/300",
                    "order": 2
                },
                {
                    "type": "content",
                    "content": "<p>Additional information inside the accordion section.</p>",
                    "order": 3
                }
            ],
        }

    ]
}

const clinicLocation = [
    {
        "addressTitle": "MindfulTMS @ Greater Kailash 1, New Delhi",
        "city": "New-Delhi",
        "address": "S-35 first floor, Greater Kailash-1, Masjid Moth, Greater Kailash, New Delhi, Delhi 110048",
        "googleMapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.749635826523!2d77.2155231871582!3d28.549114000000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1da20c0c681%3A0x4bb15098e31edc9c!2smindful%20TMS%20Neurocare%20-%20Best%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20in%20Delhi!5e0!3m2!1sen!2sin!4v1724673517475!5m2!1sen!2sin",
        "call": "011 – 415 000 11 / +91 96060 67372",
        "slug": "new-delhi",
        "images": [
          { "src": "/home/clinicImg2.jpg", "alt": "Company Image 1", "className": "col-span-2" },
          { "src": "/home/clinicImg3.jpg", "alt": "Company Image 2", "className": "col-span-2 row-span-2" },
          { "src": "/home/clinicImg4.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg2.jpg", "alt": "Company Image 1" },
          { "src": "/home/clinicImg3.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg4.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg2.jpg", "alt": "Company Image 1" },
          { "src": "/home/clinicImg3.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg4.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg2.jpg", "alt": "Company Image 1" },
          { "src": "/home/clinicImg3.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg4.jpg", "alt": "Company Image 2" }
        ]
      },
      {
        "addressTitle": "MindfulTMS @ Bengaluru Whitefield",
        "city": "Bengaluru-Whitefield",
        "address": "704, 2nd Floor, ASN Signature, Varthur Road, near Laughing Waters Siddapura, Ramagondanahalli, Bengaluru, Karnataka 560066",
        "googleMapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.231653179486!2d77.73074949678954!3d12.95702330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae132558211f3b%3A0x5a7282022d462888!2sMindful%20TMS%20Whitefield%20Clinic%20-%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20Bengaluru!5e0!3m2!1sen!2sin!4v1724673750137!5m2!1sen!2sin",
        "call": "080- 41500055 / +91 81973 41114",
        "slug": "bangluru-whitefield",
        "images": [
          { "src": "/home/clinicImg2.jpg", "alt": "Company Image 1", "className": "col-span-2" },
          { "src": "/home/clinicImg3.jpg", "alt": "Company Image 2", "className": "col-span-2 row-span-2" },
          { "src": "/home/clinicImg4.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg2.jpg", "alt": "Company Image 1" },
          { "src": "/home/clinicImg3.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg4.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg2.jpg", "alt": "Company Image 1" },
          { "src": "/home/clinicImg3.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg4.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg2.jpg", "alt": "Company Image 1" },
          { "src": "/home/clinicImg3.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg4.jpg", "alt": "Company Image 2" }
        ]
      },
      {
        "addressTitle": "MindfulTMS @ Bengaluru Hebbal",
        "city": "Bengaluru-Hebbal",
        "address": "#43/2, New Airport Road, NH-7, Outer Ring Rd, Sahakar Nagar, Bengaluru, Karnataka 560092",
        "googleMapLink": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7041049286468!2d77.58899097470847!3d13.054496987268534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15250dbbd083%3A0x4e8aba2a52fa8613!2sMindful%20TMS%20Aster%20CMI%20Clinic%20-%20Best%20Psychiatrist%20%7C%20Clinical%20Psychologist%20%7C%20(TMS)%20%7C%20Anxiety%20%7C%20Depression%20%7C%20OCD%20%7C%20Sahakar%20Nagar!5e0!3m2!1sen!2sin!4v1724673904955!5m2!1sen!2sin",
        "call": "080 – 415 000 11 / +91 96069 69296",
        "slug": "bangluru-hebbal",
        "images": [
          { "src": "/home/clinicImg2.jpg", "alt": "Company Image 1", "className": "col-span-2" },
          { "src": "/home/clinicImg3.jpg", "alt": "Company Image 2", "className": "col-span-2 row-span-2" },
          { "src": "/home/clinicImg4.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg2.jpg", "alt": "Company Image 1" },
          { "src": "/home/clinicImg3.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg4.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg2.jpg", "alt": "Company Image 1" },
          { "src": "/home/clinicImg3.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg4.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg2.jpg", "alt": "Company Image 1" },
          { "src": "/home/clinicImg3.jpg", "alt": "Company Image 2" },
          { "src": "/home/clinicImg4.jpg", "alt": "Company Image 2" }
        ]
      }
      
      
]

const FooterLocationDetails =  [
    {
      name: "Aster CMI",
      area: "Bangalore North",
      bgColor: "bg-primary-orange",
      location: "Banglore Aster CMI",
      whatsapp: +919663095632,
      call: +919663095632,
      officeOpen:10, 
      officeClose:24,
    },
    {
      name: "Whitefield",
      area: "Bangalore North",
      bgColor: "bg-[#F8A51C]",
      location: "Banglore Whitefield",
      whatsapp: +919663095632,
      call: +919663095632,
      officeOpen:10, 
      officeClose:18,
    },
    {
      name: "Greater Kailash 1",
      area: "Delhi",
      bgColor: "bg-primary-orange",
      location: "Delhi",
      whatsapp: +919663095632,
      call: +919663095632,
      officeOpen:10, 
      officeClose:18,
    }
  ];

     const testimonials = [
    {
      _id:1,
      type: "text",
      patientName: "John Doe",
      doctor: "Dr. Smith",
      condition: "Anxiety and Stress",
      treatment: "Therapy for Anxiety & Stress",
      location: "Bangalore 1",
      title: "Therapy for Anxiety & Stress",
      shortQuote: `"I feel more balanced and equipped to face challenges."`,
      fullTestimonial: `"I feel more balanced and equipped to face challenges. The therapy sessions have provided me with valuable tools and insights that I use in my daily life. It's been a transformative experience, and I'm grateful for the support I've received."`,
    },
    {
      _id:2,
      type: "video",
      patientName: "Jane Smith",
      doctor: "Dr. Williams",
      condition: "Depression",
      treatment: "Depression Management",
      location: "Bangalore 2",
      title: "Depression Management",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      fullTestimonial: `"I feel more balanced and equipped to face challenges. The therapy sessions have provided me with valuable tools and insights that I use in my daily life. It's been a transformative experience, and I'm grateful for the support I've received."`,

    },
    {
      _id:3,
      type: "text",
      patientName: "Emily Johnson",
      doctor: "Dr. Smith",
      condition: "Stress",
      treatment: "Stress Relief Techniques",
      location: "New Delhi",
      title: "Stress Relief Techniques",
      shortQuote: `"These sessions have helped me find peace in chaos."`,
      fullTestimonial: `"These sessions have helped me find peace in chaos. I'm now able to handle stressful situations much more effectively. The techniques I've learned are easy to implement, and they work wonders in calming my mind."`,
    },
    {
      _id:4,
      type: "video",
      patientName: "Michael Brown",
      doctor: "Dr. Williams",
      condition: "Low Self-Esteem",
      treatment: "Therapy for Self-Esteem Improvement",
      location: "Bangalore 1",
      title: "Improved Self-Esteem",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      fullTestimonial: `"I feel more balanced and equipped to face challenges. The therapy sessions have provided me with valuable tools and insights that I use in my daily life. It's been a transformative experience, and I'm grateful for the support I've received."`,

    },
    {
      _id:5,
      type: "text",
      patientName: "Sarah Wilson",
      doctor: "Dr. Smith",
      condition: "Personal Growth",
      treatment: "Therapy for Personal Growth",
      location: "Bangalore 2",
      title: "Personal Growth Journey",
      shortQuote: `"This experience has helped me grow emotionally and mentally."`,
      fullTestimonial: `"This experience has helped me grow emotionally and mentally. I'm more aware of my thoughts and emotions, and I've gained tools to continuously improve myself. It's been a fulfilling journey."`,
    },
  ];

module.exports = { 
    HomePageSections, 
    assesmentPageSection, 
    blog ,
    clinicLocation,
    FooterLocationDetails,
    testimonials
    
}