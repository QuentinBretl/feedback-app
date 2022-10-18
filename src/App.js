import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import FeedbackList from './components/FeedbackList.jsx';
import FeedbackStats from './components/FeedbackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import AboutIconLink from './components/AboutIconLink.jsx';
import AboutPage from './pages/AboutPage.jsx';
import { FeedbackProvider } from './context/FeedbackContext.js';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <div className='container'>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </div>
              </>
            }
          ></Route>

          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
