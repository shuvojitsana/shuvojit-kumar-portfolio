import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Skill from "../Pages/Home/Skill/Skill";
import ContactMe from "../Pages/Home/Contact/ContactMe";
import ProjectsId from "../Pages/Home/Projects/ProjectsId";
import ProjectsId2 from "../Pages/Home/Projects/ProjectsId2";
import ProjectsId3 from "../Pages/Home/Projects/ProjectsId3";
import Projects from "../Pages/Home/Projects/Projects";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/skill",
          element:<Skill></Skill>
        },
        {
          path:"/contact",
          element:<ContactMe></ContactMe>
        },
        {
          path:"/projects",
          element:<Projects></Projects>
        },
        {
          path:"/projectsId",
          element:<ProjectsId></ProjectsId>
        },
        {
          path:"/projectsId2",
          element:<ProjectsId2></ProjectsId2>
        },
        {
          path:"/projectsId3",
          element:<ProjectsId3></ProjectsId3>
        }
      ]
    },
  ]);

 