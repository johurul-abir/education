import Home from "../pages/home/home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Course from "../pages/course/Course";
import Login from "../pages/login/Login";
import Team from "../pages/team/Team";
import Blog from "../pages/blog/Blog";
import SingleBlog from "../pages/blog/SingleBlog";
import Layouts from "../components/layouts/Layouts";
import Register from "../components/regster/Register";
import Hsc from "../pages/hsc/Hsc";
import HscScience from "../pages/hsc-science/HscScience";
import HscCommerce from "../pages/hsc-commerce/HscCommerce";
import HscArts from "../pages/hsc-arts/HscArts";

const PublicRouter = [
{
    element: <Layouts/>,
    children : [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
    
        {
            path: "/course",
            element: <Course/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/team",
            element: <Team/>
        },
        {
            path: "/blog",
            element: <Blog/>
        },
        {
            path: "/blog/:slug",
            element: <SingleBlog/>
        },
        {
            path: "/hsc",
            element: <Hsc/>,
            children:[
                {
                    path: "science",
                    element: <HscScience/>
                },
                {
                    path: "commerce",
                    element: <HscCommerce/>
                },
                {
                    path: "arts",
                    element: <HscArts/>
                }
            ]
        },
        {
            path: "/register",
            element: <Register/>
        }
       
    ]
}
];


export default PublicRouter;