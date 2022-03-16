import React, { PropsWithChildren, useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import TopNav from './molecules/topNav/TopNav';
import Homepage from './pages/homepage/Homepage';
import NotFound from './pages/notFound/NotFound';
import Socials from './molecules/socials/Socials';
import Clip from './pages/clip/Clip';
import Drone from './pages/drone/Drone';
import Portfolio from './pages/portfolio/Portfolio';
import PortfolioVideo from './pages/portfolio/PortfolioVideo';
import PortfolioPhoto from './pages/portfolio/PortfolioPhoto';
import PortfolioIllustration from './pages/portfolio/PortfolioIllustration';
import Contact from './pages/contact/Contact';
import Player from './pages/player/Player';
import Rental from './pages/rental/Rental';

const ScrollManager = ({ children }: PropsWithChildren<any>) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

function Router() {
  return (
    <BrowserRouter>
      <ScrollManager>
        <TopNav />
        <Socials />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/clip" element={<Clip />} />
          <Route path="/drone" element={<Drone />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio/videos" element={<PortfolioVideo />} />
          <Route path="/portfolio/photos" element={<PortfolioPhoto />} />
          <Route
            path="/portfolio/creations"
            element={<PortfolioIllustration />}
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/player" element={<Player />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollManager>
    </BrowserRouter>
  );
}

export default Router;
