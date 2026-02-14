import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { FreeTest } from './pages/FreeTest';
import { JoinBatch } from './pages/JoinBatch';
import { SelectedNursingOfficers } from './pages/SelectedNursingOfficers';
import { Events } from './pages/Events';
import { OffersAlters } from './pages/OffersAlters';
import { Podcast } from './pages/Podcast';
import { FreeDemoContent } from './pages/FreeDemoContent';
import { VacancyResults } from './pages/VacancyResults';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { SubjectTests } from './pages/SubjectTests';
import { MockTests } from './pages/MockTests';
import { RouterWrapper } from './next/RouterWrapper';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="freetest" element={<FreeTest />} />
          <Route path="subject-tests" element={<SubjectTests />} />
          <Route path="mock-tests" element={<MockTests />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="join-batch" element={<JoinBatch />} />
          <Route path="selected-nursing-officers" element={<SelectedNursingOfficers />} />
          <Route path="events" element={<Events />} />
          <Route path="offers-alters" element={<OffersAlters />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="free-demo-content" element={<FreeDemoContent />} />
          <Route path="vacancy-results" element={<VacancyResults />} />
        </Route>
      </Routes>
    </RouterWrapper>
  );
}

export default App;
