import Button from "../../../Components/Button";
import Home from "../Base/icons/home";
import Text from "../../../Components/Text";

import "./styles.css";

function Info() {
  return (
    <div className="info-container">
      <div className="info-home">
        <Home />
      </div>
      <div className="info-container__1">
        <Text fontSize={18} fontWeight={600} color="#272727">Produtos</Text>
        <Button fontSize={18} fontWeight={400} color="#272727">Mobilia</Button>
        <Button fontSize={18} fontWeight={400} color="#272727">Segurança</Button>
        <Button fontSize={18} fontWeight={400} color="#272727">Design Interior</Button>
      </div>

      <div className="info-container__2">
        <Text fontSize={18} fontWeight={600} color="#272727">Mais Informações</Text>
        <Button fontSize={18} fontWeight={400} color="#272727">Contrato</Button>
        <Button fontSize={18} fontWeight={400} color="#272727">Sobre nós</Button>
        <Button fontSize={18} fontWeight={400} color="#272727">Termos e Condições</Button>
      </div>

      <div className="info-container__3">
        <Text fontSize={18} fontWeight={600} color="#272727">Redes Sociais</Text>
        <Button fontSize={18} fontWeight={400} color="#272727">Pinterest</Button>
        <Button fontSize={18} fontWeight={400} color="#272727">Facebook</Button>
        <Button fontSize={18} fontWeight={400} color="#272727">Instagram</Button>
      </div>
    </div>
  );
}

export default Info;
