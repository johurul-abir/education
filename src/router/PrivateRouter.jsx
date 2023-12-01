
//import Layouts from "../components/layouts/Layouts"
import Admin from "../pages/admin/Admin"
import CreateCorse from "../pages/admin/pages/CreateCorse"
import CreateStudent from "../pages/admin/pages/CreateStudent"
import CreateTeam from "../pages/admin/pages/CreateTeam"
import Dashboard from "../pages/admin/pages/Dashboard"
const PrivateRouter = [
   {
    // element: <Layouts/>,
    // children: [
    //     {
            path: "/admin",
            element: <Admin/>,
            children:[
                {
                    path: "dashboard",
                    element: <Dashboard/>
                },
                {
                    path: "course",
                    element: <CreateCorse/>
                },
                {
                    path: "team",
                    element: <CreateTeam/>
                },
                {
                    path: "student",
                    element: <CreateStudent/>
                }
    
            ]
    
    //     }
    // ]
   }
]



export default PrivateRouter