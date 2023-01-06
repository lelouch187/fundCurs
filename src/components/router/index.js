import { About } from "../../pages/About";
import { Posts } from "../../pages/Posts";
import { Login } from "../Login";
import { PostIdPage } from "../PostIdPage";

export const privateRoutes = [
   {element:<Posts/> , path:'/posts'},
   {element:<PostIdPage />, path:'/posts/:id'},
   {element:<About/>, path:'/about'},
]

export const publicRoutes = [
   {element:<Login/> , path:'/login'},
]