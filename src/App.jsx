import useAnalytics from "./useAnalytics";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
} from "./components";

const App = () => {
  useAnalytics(); // ✅ Now BrowserRouter exists above this

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Works />
      <Feedbacks />
      <Contact />
      
    </div>
  );
};

export default App;
