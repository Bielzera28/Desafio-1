import Galery1 from "./assets/galery1.png";
import Galery2 from "./assets/galery2.png";
import Galery3 from "./assets/galery3.png";
import Text from "../../../Components/Text";

import "./styles.css";

function Galery() {
  return (
    <div className="galery-container">
      <div className="galery-container__top">
        <div className="galery-heading">
          <Text fontSize={32} fontWeight={600}>
            Galeria
          </Text>
        </div>
        <Text fontSize={18} color="#797979" fontWeight={500}>
          Se você está entediado com a aparência da decoração de interiores da
          casa comuns, trabalhamos com designs diferentes e inovadores.
        </Text>
      </div>

      <div className="galery-container__bottom">
        <img alt="Foto da Galeria 1" src={Galery1} />
        <img alt="Foto da Galeria 2" src={Galery2} />
        <img alt="Foto da Galeria 3" src={Galery3} />
      </div>
    </div>
  );
}

export default Galery;
