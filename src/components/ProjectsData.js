import { BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "3",
    name: "Your metro",
    image: "./your-metro.png",
    icons: [BiLogoReact, BiLogoCss3, TbDatabase, SiExpress],
    description: "This website provides information about Hyderabad Metro, such as shortest route, shortest time, platform information, etc",
    github: "https://github.com/VijayKumarReddyTalakola/IMDB",
    demo: "https://imdb-rho.vercel.app",
  },
  {
    id: "2",
    name: "Food caters",
    image: "./food-caters.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
    description: "This chat application provides an interface to the users to interact with their friends.",
    github: "https://github.com/VijayKumarReddyTalakola/Chat-App",
    demo: "https://vchat4whisperchat.vercel.app",
  },
  {
    id: "1",
    name: "Business connections",
    image: "./ecom.png",
    icons: [BiLogoReact, BiLogoCss3, TbApi, TbDatabase],
    description: "This website provides users with all the basic kinds of shopping items.",
    github: "https://github.com/VijayKumarReddyTalakola/Ecommerce-Demo",
    demo: "https://vijay-ecommerce.vercel.app",
  },
  
];

export default ProjectsData;
