// import React from 'react';

import AdvantagesSection from "../components/AdvantagesSection/AdvantagesSection";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";

const styles = {
  '@media screen and (minWidth: 1439px)': {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }
  },
  // Медіа-запит для розширення екрану 1440px
  '@media screen and (minWidth: 1440px)': {
    container: {
      flexDirection: "row",
    }
  }
};

const HomePage = () => {
  return (    
      <div style={styles.container}>
        <WelcomeSection />        
        <AdvantagesSection />      
    </div>    
  );
};
export default HomePage;