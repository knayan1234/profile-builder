import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Start from './components/Start';

const AppRoutes=()=>{
    return(
        <div>
            <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/aboutme' element={<AboutMe/>}/>
                    <Route path='/project' element={<Project/>}/>
                    <Route path='/start' element={<Start/>}/>
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;