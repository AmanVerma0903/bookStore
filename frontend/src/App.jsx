import Home from "./home/Home"
import Course from "./components/Course"
 import { Route,Routes } from "react-router-dom"
import Courses from "./Courses/Courses"
import SignUp from "./components/SignUp"


 function App(){
  return (
    <>
      
    
     <Routes>
         <Route path ="/" element={<Home />} />
        <Route path ="/course" element={<Courses />}  />
        <Route path ="/signup" element={<SignUp />}  />
         

     </Routes>
      
    </>
  )
}

export default App
