import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Error404 from "./pages/error";

// Components
import {
  Bio,
  Degree,
  Cert,
  Design,
  Dev,
  Devops,
  Skill,
} from "./components/about";

const routes = [
  {
    index: true,
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      { index: true, element: <Bio /> },
      {
        path: "/about/education",
        children: [
          { index: true, element: <Degree /> },
          { path: "/about/education/cert", element: <Cert /> },
        ],
      },

      {
        path: "/about/experience",
        children: [
          { index: true, element: <Dev /> },
          { path: "/about/experience/design", element: <Design /> },
          { path: "/about/experience/cloud", element: <Devops /> },
          { path: "/about/experience/skills", element: <Skill /> },
        ],
      },
    ],
  },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <Error404 /> },
];

export default routes;
