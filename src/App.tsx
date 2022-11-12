import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage";

import DetailPage from "./Pages/DetailPage/DetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/:owner/:repo" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
