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
    }
];

// If node/frontend module system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = universitiesDatabase;
}
