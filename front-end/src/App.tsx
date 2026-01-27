import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NoticeWritePage from './pages/notice/NoticeWritePage';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/notices/new" element={<NoticeWritePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
