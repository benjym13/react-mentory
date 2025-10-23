import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import JobListView from './components/JobListView';
import { FilterContextProvider } from './context/filterContext';
import JobDetailPage from './components/JobDetailPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <main role="main">
        <FilterContextProvider>
          <Routes>
            <Route path="/" element={<JobListView />}></Route>
            <Route path="/job/:id" element={<JobDetailPage />}></Route>
          </Routes>
        </FilterContextProvider>
      </main>
    </BrowserRouter>
  );
}

export default App;
