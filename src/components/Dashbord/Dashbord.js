
// create cliant router
//npm install --save-dev react-router-dom
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ViewApp from './ViewApp';
import ApplicationForm from './ApplicationForm';
import EditApplicant from './EditApplicant';
import AddCourse from './AddCourse';
import GetDetail from './GetDetail';
function Dashboard(){

    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' exact element={<ViewApp/>}/>
                
                    <Route path='/new-applicant' element={<ApplicationForm/>}/>
                    <Route path='/edit-applicant/:id' element={<EditApplicant/>}/>
                    <Route path='/addCourse/:id' element={<AddCourse/>}/>
                    <Route path='/getDetail/:id' element={<GetDetail/>}/>
                </Routes>
            </div>
        </Router>
    )
}
export default Dashboard;       