import { Routes, Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import EducationContainer from "./components/Education/EducationContainer";
import Error from "./components/Error/Error";
import ExperienceContainer from "./components/Experience/ExperienceContainer";
import ProjectsContainer from "./components/Projects/ProjectsContainer";

const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProfileContainer />} />
      <Route path="/profile" element={<ProfileContainer />} />
      <Route path="/education" element={<EducationContainer />} />
      <Route path="/experience" element={<ExperienceContainer />} />
      <Route path="/projects" element={<ProjectsContainer />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default useRoutes;
