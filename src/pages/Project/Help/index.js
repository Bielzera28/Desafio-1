import Imagem from "./assets/Help-image.png";
import Text from "../../../Components/Text";
import Button from "../../../Components/Button";

import "./styles.css";

function Help() {
  return (
    <div className="help-container">
      <div>
        <div className="help-container__left">
            <Text fontSize={40} fontWeight={600}>
              Ajudar você a encontrar o melhor conforto, é nossa prioridade.
            </Text>
          <Text
            fontSize={18}
            fontWeight={500}
            color="#797979"
            padding="32px 0px"
            lineHeight={1.5}
          >
            Encontre uma variedade de propriedades que combinam com você.
            Esqueça todas as dificuldades em encontrar uma residência
          </Text>
          <div className="help-container__content">
            <Button
              backgroundColor="#272727"
              color="#FFFFFF"
              fontSize={18}
              padding="12px 32px"
            >
              Entre em contato
            </Button>
            <Button fontWeight={500} color="#272727" fontSize={18}>
              Mais sobre nós
            </Button>
          </div>
        </div>
      </div>
      <div>
        <img alt="Imagem da Casa" src={Imagem} />
      </div>
    </div>
  );
}

export default Help;
