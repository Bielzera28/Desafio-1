import Button from "../../../Components/Button";
import Text from "../../../Components/Text";
import imageDesign from "./assets/design.png";

import "./styles.css";

function Design() {
  return (
    <div className="design-container">
      <div className="design-container__left">
        <div>Invisivel</div>
        <img alt="Imagem Design Minimalista" src={imageDesign} />
      </div>

      <div className="design-container__content">
        <div className="design-container__right">
          <Text fontSize={28} color="#FFFFFF" fontWeight={600}>
            Design Minimalista
          </Text>
          <Text fontsize={16} color="#FFFFFF" fontWeight={500}>
            Móveis apenas essenciais e com design moderno, além de revestimentos
            bonitos e em cores neutras para manter a casa sempre com um estilo
            clean e suave.
          </Text>
        </div>
        <div className="design-container__button">
          <Button fontSize={18} color="#272727" fontWeight={500}>
            Quero Saber mais sobre os designs
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Design;
