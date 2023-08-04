
import { AiFillHtml5 , AiFillLinkedin} from 'react-icons/ai';
import { TbBrandFiverr } from 'react-icons/tb';
import { BiLogoTailwindCss , BiLogoJavascript , BiLogoUpwork , BiLogoReact ,BiLogoFirebase } from 'react-icons/bi';


const skill = [
    {
        text:'As a web app developer, I possess a diverse skill set that empowers me to create dynamic and responsive applications. My expertise includes JavaScript, React.js, and Next.js, enabling me to build robust and interactive user interfaces. Additionally, I am proficient in leveraging Tailwind CSS and HTML to craft visually appealing designs. Furthermore, my proficiency in Firebase allows me to implement real-time data storage and authentication, ensuring seamless functionality and user experiences.',
        icon: [{html:<AiFillHtml5 />,css:<BiLogoTailwindCss />}]
    }
]
const education = [
    {
        text:'Bachelor degree in Computer Science or related field provides a strong foundation in programming languages and algorithms. Continual learning through online courses and workshops keeps me updated with the latest industry trends and technologies. Participating in hackathons and coding competitions hones my problem-solving and teamwork skills. Open-source contributions demonstrate my passion for collaboration and dedication to the developer community.'
    }
]
const experience = [
    {
        text:'Over X years of professional experience as a developer, working on diverse projects in various domains. Proficient in designing, developing, and maintaining software applications. Skilled in collaborating with cross-functional teams and delivering high-quality code to meet project goals. Continuously seeking opportunities to learn and improve coding practices..'
    }
]


const projects = [
    {
      name: "Ecommerce web app",
      description:
        "This is the ecommerce store app which deails with clients to sell some thing.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind Css",
          color: "pink-text-gradient",
        },
      ],
      image: '/project-1.png',
      source_code_link: "https://github.com/",
    },
    {
      name: "CarsHub Web app",
      description:
        "This is the cars hut for buying and seeling cars with us.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind Css",
          color: "pink-text-gradient",
        },
      ],
      image: '/project-2.png',
      source_code_link: "https://github.com/",
    },
    {
      name: "Blog web app",
      description:
        "This is the blog web app here is blogs about programming and much more for you try out it.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind Css",
          color: "pink-text-gradient",
        },
        {
          name: "App write",
          color: "pink-text-gradient",
        },
      ],
      image: '/project-3.png',
      source_code_link: "https://github.com/",
    },
]

const services = [
  {
    name:'React web app',
    img:'/services-1.png',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, nunc in ullamcorper ultrices, libero velit ultrices felis, eu interdum odio ipsum et ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, nunc in ullamcorper ultrices, libero velit ultrices felis, eu interdum odio ipsum et ex.',

  },
  {
    name:'Hrml Css js',
    img:'/services-2.png',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, nunc in ullamcorper ultrices, libero velit ultrices felis, eu interdum odio ipsum et ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, nunc in ullamcorper ultrices, libero velit ultrices felis, eu interdum odio ipsum et ex.',
   
  },
  {
    name:'React with firebase',
    img:'/services-3.png',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, nunc in ullamcorper ultrices, libero velit ultrices felis, eu interdum odio ipsum et ex.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla, nunc in ullamcorper ultrices, libero velit ultrices felis, eu interdum odio ipsum et ex.',
    
  }
]

const blogs = [
  {
    name:'php',
    desc:'this is a dsce',
    img:'img',
    slug:'slug',
  }
]
export {
    skill,
    education,
    experience,
    projects,
    services,
    blogs
    
}