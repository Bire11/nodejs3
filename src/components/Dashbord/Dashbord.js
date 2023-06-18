
// create cliant router
//npm install --save-dev react-router-dom
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ViewApp from './ViewApp';
import ApplicationForm from './ApplicationForm';
import EditApplicant from './EditApplicant'
function Dashboard(){

    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' exact element={<ViewApp/>}/>
                
                    <Route path='/new-applicant' element={<ApplicationForm/>}/>
                    <Route path='/edit-applicant/:id' element={<EditApplicant/>}/>
                </Routes>
            </div>
        </Router>
    )
}
export default Dashboard;       