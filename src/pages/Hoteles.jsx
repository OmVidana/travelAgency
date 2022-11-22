import NavBar from '../components/global/NavBar';
import Input from "../components/global/Input";
import Card from '../components/global/Card';
import styled from "styled-components";

function Hoteles() {
    return (
<Page>
    <NavBar/>
    <InputContainer>
        <Input placeholder="buscar..."/>
    </InputContainer>
    <Left_col>
        <Categorys_container>Categorias</Categorys_container>
    </Left_col>
    <Rigth_col>
        <Card_list_container>
            <Card desc="guachcu guacchu gua" title="el rap de fernanfloo" imgurl="https://esports.as.com/2020/01/24/bonus/Fernanfloo_1321677827_329926_1024x576.jpg" />
            <Card desc="guachcu guacchu gua" title="el rap de fernanfloo" imgurl="https://esports.as.com/2020/01/24/bonus/Fernanfloo_1321677827_329926_1024x576.jpg" />
            <Card desc="guachcu guacchu gua" title="el rap de fernanfloo" imgurl="https://esports.as.com/2020/01/24/bonus/Fernanfloo_1321677827_329926_1024x576.jpg" />
            <Card desc="guachcu guacchu gua" title="el rap de fernanfloo" imgurl="https://esports.as.com/2020/01/24/bonus/Fernanfloo_1321677827_329926_1024x576.jpg" />
            <Card desc="guachcu guacchu gua" title="el rap de fernanfloo" imgurl="https://esports.as.com/2020/01/24/bonus/Fernanfloo_1321677827_329926_1024x576.jpg" />
        </Card_list_container>
    </Rigth_col>
</Page>
    );
}

const Page = styled.html`
    width: 100%;
`;

const Categorys_container = styled.div`
color: white;
`;

const Card_list_container= styled.div`
display: flex;
align-items: right;
flex-wrap: wrap;
height: calc(100vh - 120px);
margin: auto;
overflow: scroll;
justify-content: space-between;
width: 100%;
padding: 0 100px;

@media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;

    @media only screen and (min-width: 360px) {
        width: 80vw;
        height: 90vh;
      }
      @media only screen and (min-width: 411px) {
        width: 80vw;
        height: 90vh;
      }
    
      @media only screen and (min-width: 768px) {
        width: 80vw;
        height: 80vh;
      }
      @media only screen and (min-width: 1024px) {
        width: 70vw;
        height: 50vh;
      }
      @media only screen and (min-width: 1280px) {
        width: 30vw;
        height: 80vh;
      }
`;


const InputContainer = styled.div`
  display: flex;
  margin-top:10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  height: 20%;
  width: 90%;
`;

const Left_col = styled.div`
    position:fixed; 
    margin-top:20px;
    left:0;
    width:235px;
    min-height:100%; 
    background:#090909;
`;
const Rigth_col = styled.div`
    margin-left:235px;
    margin-top:20px;
    align-items: right;
    background:41424C#; 
    max-width: 100%;
    width: 100%;
    padding: 0 30px;
`;

export default Hoteles;