import Text from "../../../Components/Text";
import Button from "../../../Components/Button";

import "./styles.css";

function Orcament() {
  return (
    <div className="orcament-container">
      <Text fontSize={32} fontWeight={600} color="#272727">
        Orçamento
      </Text>
      <Text
        fontSize={18}
        fontWeight={500}
        color="#797979"
        padding="20px 20px 30px"
      >
        Interessado em entrar em contato com um de nossos profissionais?
      </Text>
      <div className="orcament-button">
        <Button
          fontSize={18}
          fontWeight={500}
          color="#272727"
          padding="12px 32px"
        >
          Entre em contato
        </Button>
      </div>
    </div>
  );
}

export default Orcament;
