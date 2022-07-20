import Base from "./Base";
import Help from "./Help";

import "./styles.css";

function Home() {
    return (
      <div className="home-container">
        <div className="home-container__content">

         <Base />

         <Help />

         <div>
           Design
         </div>

         <div>
           Galery
         </div>
         
         <div>
            Orcament
         </div>

         <div>
           Info
         </div>

        </div>        
      </div>
    );
  }
  
  export default Home;