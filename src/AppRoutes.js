// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {BrowserRouter,Route,Router} from 'rea'
import AboutMe from './components/AboutMe';
import Project from './components/Project';
// import Start from './components/Start';
import Education from './components/Education';

const AppRoutes=()=>{
    return(
        <div>
            <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/aboutme' element={<AboutMe/>}/>
                    <Route path='/education' element={<Education/>}/>
                    <Route path='/project' element={<Project/>}/>
                    {/* <Route path='/start' element={<Start/>}/> */}
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;