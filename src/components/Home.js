import Section from './Section';
import teslaS from '../images/model-s.jpg'
import tesla3 from '../images/model-3.jpg'
import teslaX from '../images/model-x.jpg'
import teslaY from '../images/model-y.jpg'
import solarPanel from '../images/solar-panel.jpg'
import solarRoof from '../images/solar-roof.jpg'
import accessory from '../images/accessories.jpg'

function Home() {
  return (
    <div className='h-screen'>
      <Section
        title='Model S'
        desc='Order Online for Touchless Delivery'
        backgroundImg={teslaS}
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model 3'
        desc='Order Online for Touchless Delivery'
        backgroundImg={tesla3}
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model X'
        desc='Order Online for Touchless Delivery'
        backgroundImg={teslaX}
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model Y'
        desc='Order Online for Touchless Delivery'
        backgroundImg={teslaY}
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Lowest Cost Solar Panel in America'
        desc='Money-back guarantee'
        backgroundImg={solarPanel}
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Solar for New Roofs'
        desc='Solar Roof Cost Less than a New Roof'
        backgroundImg={solarRoof}
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title=''
        desc='Accessories'
        backgroundImg={accessory}
        leftBtnText='Shop now'        
      />
    </div>
  );
}

export default Home;
