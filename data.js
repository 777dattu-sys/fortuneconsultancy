const universitiesDatabase = [
    {
        id: "leicester",
        name: "University of Leicester",
        location: "Leicester, UK",
        rank: "Top 250",
        description: "A leading UK university committed to international excellence, world-changing research and high quality, inspirational teaching.",
        image: "./uni1.png",
        intake: "September, January",
        fee: "£16,000 - £22,000 / year",
        psw: "2 Years"
    },
    {
        id: "greenwich",
        name: "University of Greenwich",
        location: "London, UK",
        rank: "Top 500",
        description: "Set on a UNESCO World Heritage Site in London, offering excellent facilities, great teaching and strong industry connections.",
        image: "./uni2.png",
        intake: "September, January",
        fee: "£15,000 - £18,000 / year",
        psw: "2 Years"
    },
    {
        id: "coventry",
        name: "Coventry University",
        location: "Coventry, UK",
        rank: "Top 600",
        description: "Award-winning university known for outstanding student experience and innovative teaching methodologies.",
        image: "./uni3.png",
        intake: "September, January, May",
        fee: "£14,500 - £19,000 / year",
        psw: "2 Years"
    },
    {
        id: "bucks-new",
        name: "Buckinghamshire New University",
        location: "High Wycombe, UK",
        rank: "Growing",
        description: "A highly employment-focused university offering innovative courses across nursing, aviation, business, and computing.",
        image: "./uni4.png",
        intake: "September, February",
        fee: "£13,000 - £15,500 / year",
        psw: "2 Years"
    },
    {
        id: "dmu",
        name: "De Montfort University",
        location: "Leicester, UK",
        rank: "Top 800",
        description: "DMU empowers students to succeed in a vibrant global environment. Voted among the top UK universities for teaching excellence.",
        image: "./uni1.png",
        intake: "September, January",
        fee: "£14,000 - £17,500 / year",
        psw: "2 Years"
    },
    {
        id: "wolverhampton",
        name: "University of Wolverhampton",
        location: "Wolverhampton, UK",
        rank: "Top 1000",
        description: "The University of Opportunity - providing students with the knowledge, skills, and confidence to thrive in the global economy.",
        image: "./uni2.png",
        intake: "September, January",
        fee: "£13,500 - £16,000 / year",
        psw: "2 Years"
    },
    {
        id: "uel",
        name: "University of East London",
        location: "London, UK",
        rank: "Top 800",
        description: "A careers-led university based in East London, driving innovation and bringing out the very best in student potential.",
        image: "./uni3.png",
        intake: "September, January",
        fee: "£14,000 - £16,500 / year",
        psw: "2 Years"
    },
    {
        id: "anglia-ruskin",
        name: "Anglia Ruskin University",
        location: "Cambridge, UK",
        rank: "Top 400",
        description: "An innovative global university with campuses in Cambridge and Chelmsford, recognized globally for employability and excellence.",
        image: "./uni4.png",
        intake: "September, January",
        fee: "£14,500 - £17,000 / year",
        psw: "2 Years"
    },
    {
        id: "sunderland-london",
        name: "University of Sunderland (London)",
        location: "London, UK",
        rank: "Top 1000",
        description: "The London campus of the influential Sunderland University, combining academic excellence with central London convenience.",
        image: "./uni1.png",
        intake: "September, February, June",
        fee: "£13,000 - £15,000 / year",
        psw: "2 Years"
    },
    {
        id: "teesside-london",
        name: "Teesside University (London)",
        location: "London, UK",
        rank: "Top 800",
        description: "An innovative hub tailored for ambitious tech, business, and enterprise students situated in the UK capital.",
        image: "./uni2.png",
        intake: "September, January",
        fee: "£14,000 - £16,000 / year",
        psw: "2 Years"
    },
    {
        id: "middlesex",
        name: "Middlesex University",
        location: "London, UK",
        rank: "Top 500",
        description: "Experience world-class teaching and research at this vibrant North London campus that focuses on making an impact.",
        image: "./uni3.png",
        intake: "September, January",
        fee: "£14,500 - £17,500 / year",
        psw: "2 Years"
    },
    {
        id: "napier",
        name: "Edinburgh Napier University",
        location: "Edinburgh, UK",
        rank: "Top 600",
        description: "Scotland's top modern university for student satisfaction and employability, delivering meaningful, professional-oriented education.",
        image: "./uni4.png",
        intake: "September, January",
        fee: "£15,000 - £18,000 / year",
        psw: "2 Years"
    },
    {
        id: "ulster-london",
        name: "Ulster University (London)",
        location: "London, UK",
        rank: "Top 600",
        description: "Benefit from the academic rigor of Ulster University right in the heart of London. Excellent industry connections.",
        image: "./uni1.png",
        intake: "September, January, May",
        fee: "£13,500 - £16,500 / year",
        psw: "2 Years"
    },
    {
        id: "northumbria-london",
        name: "Northumbria University (London)",
        location: "London, UK",
        rank: "Top 400",
        description: "A research-rich, business-focused, professional university with a global reputation for academic excellence.",
        image: "./uni2.png",
        intake: "September, January",
        fee: "£15,500 - £18,500 / year",
        psw: "2 Years"
    },
    {
        id: "chester",
        name: "University of Chester",
        location: "Chester, UK",
        rank: "Top 1200",
        description: "One of the oldest high education institutions in the UK offering a warm welcome and comprehensive support for international students.",
        image: "./uni3.png",
        intake: "September, February",
        fee: "£13,000 - £15,000 / year",
        psw: "2 Years"
    },
    {
        id: "west-london",
        name: "University of West London",
        location: "London, UK",
        rank: "Top 800",
        description: "The career university. Offering strong industry links, excellent graduate employment rates, and a prime London location.",
        image: "./uni4.png",
        intake: "September, February",
        fee: "£13,500 - £16,500 / year",
        psw: "2 Years"
    },
    {
        id: "bedfordshire",
        name: "University of Bedfordshire",
        location: "Luton, UK",
        rank: "Top 1000",
        description: "A modern, innovative university with a heritage of top-quality education going back more than 100 years.",
        image: "./uni1.png",
        intake: "September, November, February",
        fee: "£13,500 - £15,500 / year",
        psw: "2 Years"
    },
    {
        id: "london-met",
        name: "London Metropolitan University",
        location: "London, UK",
        rank: "Top 1000",
        description: "Situated in one of the world's most exciting capital cities, focused on providing practical, employment-oriented education.",
        image: "./uni2.png",
        intake: "September, January",
        fee: "£14,500 - £17,500 / year",
        psw: "2 Years"
    },
    {
        id: "gcu",
        name: "Glasgow Caledonian University (GCU)",
        location: "Glasgow, UK",
        rank: "Top 800",
        description: "The University for the Common Good, delivering innovation through world-class research and teaching.",
        image: "./uni3.png",
        intake: "September, January",
        fee: "£14,500 - £17,000 / year",
        psw: "2 Years"
    },
    {
        id: "portsmouth-london",
        name: "University of Portsmouth (London)",
        location: "London, UK",
        rank: "Top 500",
        description: "Experience Portsmouth’s TEF Gold-rated teaching in a dedicated modern campus right in the heart of London.",
        image: "./uni4.png",
        intake: "September, January",
        fee: "£15,000 - £18,000 / year",
        psw: "2 Years"
    },
    {
        id: "oxford-brookes",
        name: "Oxford Brookes University",
        location: "Oxford, UK",
        rank: "Top 400",
        description: "Set in a historic student city, Brookes is one of the UK's leading modern universities, enjoying international recognition.",
        image: "./uni1.png",
        intake: "September, January",
        fee: "£15,500 - £18,500 / year",
        psw: "2 Years"
    },
    {
        id: "salford",
        name: "University of Salford",
        location: "Manchester, UK",
        rank: "Top 800",
        description: "Pioneering exceptional industry partnerships and providing real-world experience. Based in the rapidly growing city of Manchester.",
        image: "./uni2.png",
        intake: "September, January",
        fee: "£14,500 - £17,500 / year",
        psw: "2 Years"
    },
    
    // --- USA ---
    {
        id: "asu",
        name: "Arizona State University",
        location: "Tempe, USA",
        rank: "Top 200",
        description: "Recognized globally as a top-tier research university offering innovative Master's programs and excellent STEM OPT pathways.",
        image: "./uni3.png",
        intake: "August, January",
        fee: "$30,000 - $40,000 / year",
        psw: "3 Years (STEM OPT)"
    },
    {
        id: "uic",
        name: "University of Illinois Chicago",
        location: "Chicago, USA",
        rank: "Top 300",
        description: "A major research institution located in the heart of Chicago, offering outstanding career opportunities for Master's students.",
        image: "./uni4.png",
        intake: "August, January",
        fee: "$28,000 - $38,000 / year",
        psw: "3 Years (STEM OPT)"
    },

    // --- Canada ---
    {
        id: "utoronto",
        name: "University of Toronto",
        location: "Toronto, Canada",
        rank: "Top 25",
        description: "Canada's top university, providing world-class Master's programs and excellent Post-Graduation Work Permit (PGWP) opportunities.",
        image: "./uni1.png",
        intake: "September, January",
        fee: "CAD 30,000 - 45,000 / year",
        psw: "Up to 3 Years"
    },
    {
        id: "ubc",
        name: "University of British Columbia",
        location: "Vancouver, Canada",
        rank: "Top 50",
        description: "A global center for research and teaching, consistently ranked among the top public universities in the world.",
        image: "./uni2.png",
        intake: "September, January",
        fee: "CAD 28,000 - 42,000 / year",
        psw: "Up to 3 Years"
    },

    // --- Australia ---
    {
        id: "melbourne",
        name: "University of Melbourne",
        location: "Melbourne, Australia",
        rank: "Top 35",
        description: "Australia's leading university for Master's programs, offering unparalleled academic and professional growth.",
        image: "./uni3.png",
        intake: "February, July",
        fee: "AUD 35,000 - 50,000 / year",
        psw: "Up to 4 Years"
    },
    {
        id: "sydney",
        name: "University of Sydney",
        location: "Sydney, Australia",
        rank: "Top 40",
        description: "Consistently ranked among the top universities globally, known for exceptional campus life and employability.",
        image: "./uni4.png",
        intake: "February, July",
        fee: "AUD 38,000 - 52,000 / year",
        psw: "Up to 4 Years"
    },

    // --- France ---
    {
        id: "sorbonne",
        name: "Sorbonne University",
        location: "Paris, France",
        rank: "Top 100",
        description: "A world-class, multidisciplinary research university situated in the heart of Paris, France.",
        image: "./uni1.png",
        intake: "September",
        fee: "€3,000 - €5,000 / year",
        psw: "2 Years"
    },
    {
        id: "ecole-polytechnique",
        name: "École Polytechnique",
        location: "Palaiseau, France",
        rank: "Top 100",
        description: "The leading French institute blending top-level research, academics, and innovation at the cutting edge of science and technology.",
        image: "./uni2.png",
        intake: "September",
        fee: "€15,000 - €20,000 / year",
        psw: "2 Years"
    },

    // --- Ireland ---
    {
        id: "tcd",
        name: "Trinity College Dublin",
        location: "Dublin, Ireland",
        rank: "Top 100",
        description: "Ireland's premier university, offering prestigious Master's degrees in Europe's thriving tech hub.",
        image: "./uni3.png",
        intake: "September",
        fee: "€15,000 - €25,000 / year",
        psw: "2 Years"
    },
    {
        id: "ucd",
        name: "University College Dublin",
        location: "Dublin, Ireland",
        rank: "Top 200",
        description: "One of Europe's leading research-intensive universities and Ireland's largest and most diverse institution.",
        image: "./uni4.png",
        intake: "September",
        fee: "€14,000 - €24,000 / year",
        psw: "2 Years"
    },

    // --- Germany ---
    {
        id: "tum",
        name: "Technical University of Munich",
        location: "Munich, Germany",
        rank: "Top 50",
        description: "Germany's top-ranked university, offering elite English-taught Master's programs with little to no tuition fees.",
        image: "./uni1.png",
        intake: "October, April",
        fee: "€0 - €3,000 / year",
        psw: "18 Months"
    },
    {
        id: "lmu",
        name: "Ludwig Maximilian University",
        location: "Munich, Germany",
        rank: "Top 60",
        description: "A premier European research institution providing exceptional Master's programs across multiple disciplines.",
        image: "./uni2.png",
        intake: "October, April",
        fee: "€0 - €1,000 / year",
        psw: "18 Months"
    },

    // --- New Zealand ---
    {
        id: "auckland",
        name: "University of Auckland",
        location: "Auckland, New Zealand",
        rank: "Top 100",
        description: "New Zealand’s highest-ranked university, offering top-tier Master's programs in a safe, vibrant environment.",
        image: "./uni3.png",
        intake: "February, July",
        fee: "NZD 35,000 - 45,000 / year",
        psw: "Up to 3 Years"
    },
    {
        id: "otago",
        name: "University of Otago",
        location: "Dunedin, New Zealand",
        rank: "Top 250",
        description: "New Zealand's oldest university, celebrated for its research excellence and top-tier Master's courses.",
        image: "./uni4.png",
        intake: "February, July",
        fee: "NZD 32,000 - 42,000 / year",
        psw: "Up to 3 Years"
    }
];

// If node/frontend module system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = universitiesDatabase;
}
