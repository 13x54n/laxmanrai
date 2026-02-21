import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Laxman",
  lastName: "Rai",
  name: `Laxman Rai`,
  role: "Web Developer",
  avatar: "/images/avatar.jpg",
  email: "laxmanrai0411@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["JavaScript", "Solidity", "HTML5/CSS3", "AWS", "Node.js", "MongoDB", "Next.js"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/13x54n",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lexworld",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building more open web, one block at a time.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Laxman Rai, I've been bounty hunting at Hackathons, where I craft intuitive web3 products.
      My tech stack includes Next.js, Node.js, MongoDB, AWS, and more.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Toronto-based web developer with a passion for transforming complex challenges
        into simple, elegant web products & solutions. My work spans web interfaces, server & DNS configurations for cloud, and the convergence of analytics and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ming Open Web Headquarters",
        timeframe: "2022 - Present",
        role: "Full Stack Web Developer",
        achievements: [
          <>
            Redesigned the UI/UX for the Ming Open Web Headquarters platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/minghq/cover.png",
            alt: "Ming Open Web Headquarters",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/minghq/cover1.png",
            alt: "Ming Open Web Headquarters",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Hult Prize Foundation",
        timeframe: "2022",
        role: "Marketing Design Manager",
        achievements: [
          <>
            Developing and executing marketing design strategies that align with the overall marketing objectives of the organization.
          </>,
          <>
            Leading and managing a team of designers to ensure timely delivery of high-quality design projects.
          </>,
          <>
            Ensuring that all design work is consistent with the organization's brand guidelines and visual identity.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/hultprize/cover.jpeg",
            alt: "Hult Prize Foundation",
            width: 9,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Nagarjuna College of Information Technology",
        description: <>Studied Bachelor in Computer Science and Information Technology.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Full Stack Web Development",
        description: <>Able to build web applications from scratch using modern technologies.</>,
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React.js",
            icon: "reactjs",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "DNS Configuration",
            icon: "dns",
          },
          {
            name: "Git",
            icon: "github",
          },  
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Web3 Development",
        description: <>Building web3 applications using modern technologies.</>,
        tags: [
          {
            name: "Solidity",
            icon: "solidity",
          },
          {
            name: "Wallet Configuration",
            icon: "wallet",
          },
          {
            name: "Web3.js",
            icon: "web3js",
          },
          {
            name: "Ethers.js",
            icon: "ethersjs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about web technologies...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/10yanniversaryethereum.jpeg",
      alt: "10th Year Anniversary of Ethereum at WeathSimple",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/10yanniversaryethereum-2.jpeg",
      alt: "10th Year Anniversary of Ethereum at WeathSimple",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/cryptomondays.jpeg",
      alt: "Crypto Mondays, BitCoin",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/ethtoronto.png",
      alt: "Ethereum Toronto",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ethtoronto2.jpg",
      alt: "Ethereum Toronto",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
