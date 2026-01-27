import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NoticeWritePage from './pages/notice/NoticeWritePage';
import NoticeListPage from './pages/notice/NoticeListPage';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/notices' element={<NoticeListPage />}/>
          <Route path="/notices/new" element={<NoticeWritePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
