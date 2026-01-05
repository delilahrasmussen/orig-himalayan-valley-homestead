import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { StayOptions } from './pages/StayOptions';
import { Amenities } from './pages/Amenities';
import { Experiences } from './pages/Experiences';
import { Gallery } from './pages/Gallery';
import { Location } from './pages/Location';
import { Policies } from './pages/Policies';
import { Booking } from './pages/Booking';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="stay-options" element={<StayOptions />} />
          <Route path="amenities" element={<Amenities />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="location" element={<Location />} />
          <Route path="policies" element={<Policies />} />
          <Route path="booking" element={<Booking />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
