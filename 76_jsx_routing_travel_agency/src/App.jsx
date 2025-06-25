import { BrowserRouter, Routes, Route } from "react-router";
import { Home, Destinations, DestinationDetail, About, Contact } from "./pages";
import { MainLayout } from "./layout/MainLayout";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
