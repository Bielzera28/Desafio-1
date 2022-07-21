import Info from "./Info"
import Orcament from "./Orcament";
import Galery from "./Galery";
import Design from "./Design";
import Base from "./Base";
import Help from "./Help";

import "./styles.css";

function Home() {
    return (
      <div className="home-container">
        <div className="home-container__content">

         <Base />

         <Help />

         <Design />

         <Galery />
         
         <Orcament />

         <Info />

        </div>        
      </div>
    );
  }
  
  export default Home;