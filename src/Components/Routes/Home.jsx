import HeroSection from '../HeroSection'
import Logos from '../Logos'
import ArrivalsSection from '../ArrivalsSection'
import SellingSection from '../SellingSection'
import StyleSection from '../StyleSection'
import CustomersSection from '../CustomersSection'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div>
      <HeroSection/>
      <Logos/>
      <ArrivalsSection/>
      <SellingSection/>
      <StyleSection/>
      <CustomersSection/>
    </div>
  )
}

export default Home
