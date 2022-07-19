import User from "./icons/user";
import Heart from "./icons/heart";
import Search from "./icons/search";
import Text from "../../../Components/Text";
import Home from "./icons/home";

import "./styles.css";

function Base() {
  return (
    <div className="base-container">
      <div className="base-container__left">
        <div className="base-container__left__content">
          <div className="base-container__left__home">
            <Home />
          </div>

          <Text fontSize={24} fontWeight={600} color="#272727">
            HOMEYOU
          </Text>
        </div>

        <div className="icons">
          <div className="icons-container">
            <Text fontSize={18} fontWeight={500}>Inicio</Text>
            <Text fontSize={18} fontWeight={500}>Galeria</Text>
            <Text fontSize={18} fontWeight={500}>Contato</Text>
          </div>
          <div className="icons-container__content">
            <User />
            <Heart />
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Base;
