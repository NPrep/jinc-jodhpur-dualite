import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { RouterWrapper } from './next/RouterWrapper';
import { InfoPage } from './pages/InfoPage';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="jinc-jodhpur-institute" element={<InfoPage />} />
          <Route path="jinc-jodhpur-courses" element={<InfoPage />} />
          <Route path="jinc-jodhpur-admission" element={<InfoPage />} />
          <Route path="jinc-jodhpur-fees" element={<InfoPage />} />
          <Route path="jinc-jodhpur-faculty" element={<InfoPage />} />
          <Route path="nursing-coaching-jodhpur" element={<InfoPage />} />
          <Route path="norcet-coaching-jodhpur" element={<InfoPage />} />
          <Route path="rrb-nursing-coaching-jodhpur" element={<InfoPage />} />
          <Route path="nursing-officer-coaching-jodhpur" element={<InfoPage />} />
          <Route path="aiims-norcet-exam-overview" element={<InfoPage />} />
          <Route path="rrb-nursing-exam-overview" element={<InfoPage />} />
          <Route path="nursing-officer-exam-overview" element={<InfoPage />} />
          <Route path="jinc-jodhpur-admission-process" element={<InfoPage />} />
          <Route path="student-experience" element={<InfoPage />} />
        </Route>
      </Routes>
    </RouterWrapper>
  );
}

export default App;
