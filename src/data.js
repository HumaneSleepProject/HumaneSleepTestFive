// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import HSPLogo from "./components/hsp.png"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/GoldenStateBridgeLight.jpg";
import HeroDark from "./images/GoldenStateBridgeDark.jpg";
import BlogLight from "./images/white-screen.jpg";
import BlogDark from "./images/dark-screen.jpg";
import HSPBanner from "./images/HSPBanner.jpeg"
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };
export { BlogLight as BLight };
export { BlogDark as BDark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "HumaneSleepProject";

// Navbar Logo image
export const navLogo = HSPLogo;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Us
 **************************************************************
  Add a second paragraph for the about us section.
*/
export const moreInfo =
  "Humane Sleep Project is dedicated to providing assistance to individuals facing homelessness by ensuring access to essential sleep provisions. Recognizing sleep as a fundamental human necessity, we strongly believe that every person deserves the opportunity to enjoy a restful and comfortable night's sleep.";

export const sidInfo = "My name is Sidharth Sreedar, and I’m the CEO of Humane Sleep Project. I created this organization envisioning a future of corrected sleeping measures for people of unprivileged communities. This endeavor will help the community foster change in others, and this is something in my personal life I strive to do.";

export const abhiInfo = "I'm Abhi Vishwas, joining HSP as the Director of Finance aligns with my mission to make meaningful impacts by improving the well-being of both our community and the homeless. I am committed to leveraging my background in business and financial acumen to support HSP's mission of providing healthy sleep solutions to those in need.";

export const lukeInfo = "My name is Luke Decroix and I am the Project Coordinator for Humane Sleep project. While being raised in different areas of the Bay Area, I have had the opportunity to volunteer over 1000+ hours to help those in need.";

export const mehakInfo = "My name is Mehak Sharma, the Social Media Director at HSP, and I am dedicated to advocating for human well-being and social impact. My background in organizing drives for women in need as well as my work in mental health have strengthened my dedication to supporting vulnerable communities and promoting well-being.";

export const adiInfo = "My name is Aditi Sharma and I am the COO and Secretary of Humane Sleep Project. I co-founded the Humane Sleep Project with a belief that every individual, regardless of their financial situation, should have access to essential sleeping supplies. I am committed to providing kindness and vital resources to ensure the well-being of every individual experiencing homelessness through HSP!";

export const danielInfo = "I joined Humane Sleep Project as the Director of Engineering as I am passionate about attempting to alleviate the hardships of those less fortunate in the area that I have grown up in. Living in the Bay Area, I was able to hear and learn about their unique experiences and hope to give back to the community.";
/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="file-icons:styledcomponents" className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mgejdqgl";
