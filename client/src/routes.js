import {Routes, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Error from "./components/Error/Error";

const useRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<ProfileContainer/>}/>
            <Route path='/profile' element={<ProfileContainer/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    )
}

export default useRoutes;