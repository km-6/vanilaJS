const quotes = [
    {
        quote:"Crying does not indicate that you are weak. Since birth, it has always been a sign that you are alive.",
        author:"Charlotte Bronte, <Jane Eyre>",
    },
    {
        quote:"FEMINISM is radical notion that women are people.",
        author:"Marie Shear",
    },
    {
        quote:"It's time for women to stop being politely angry.",
        author:"Layman Gbowee, Nobel Peace Prize Winner",
    },
    {
        quote:"Some women being empowered does not prove the patriarchy is dead. it proves that some of us are lucky.",
        author:"Roxane Gay",
    },
    {
        quote:"I think the degree of nation's civillzation may be measured by the degree of enlightenment of its women.",
        author:"Helen Keller",
    },
    {
        quote:"Courage in women is often mistaken for insanity.",
        author:"",
    },
    {
        quote:"살되, 네 생명을 살아라. 생각하되, 네 생각으로 하여라. 알되, 네가 깨달아 알아라.",
        author:"독립유공자‧덕성학원 설립자 차1미리사 선생",
    },
    {
        quote:"Ther is no gate, no lock, no bolt that you can set upon the freedom of my mind.",
        author:"Viginia Woolf",
    },
    {
        quote:"I'm tough, i'm ambitious, and i know exactly what i want. if that makes me a bitch, okay",
        author:"Madonna",
    },
    {
        quote:"We need to encourage girls that their voice matters. I think there are hundreds and thousands of Malalas out there.",
        author:"Malala Yousafzai",
    },
    {
        quote:"A woman without a man is like a fish without a bicycle.",
        author:"Irina Dunn",
    },
    {
        quote:"It took me quite a long time to develop a voice, and now that I have it, I an not going to be slient.",
        author:"Maeleine Albright",
    },
    {
        quote:"Feminism isn't about making women strong. Women are already strong. It's about changing the way the wold perceives that strength.",
        author:"G.D Anderson",
    },
    {
        quote:"A woman with a voice is, by definition, a strong woman.",
        author:"Melinda Gates",
    },
]
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");


//Math.random() * 10
//Math.round(1.2) = 1 반올림
//Math.ceil() 숫자를 천장으로 올려줌. 1.9는 2, 1.4도 2, 1.01.도 2. 1.0만 1 (올림)
//Math.floor()  숫자를내림하는 거
// Math.floor(Math.random() * 10)

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;