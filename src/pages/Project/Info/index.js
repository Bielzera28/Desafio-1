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
      <div>
        <Text>Produtos</Text>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </div>

      <div>
        <Text>Mais Informações</Text>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </div>

      <div>
        <Text>Redes Sociais</Text>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default Info;
