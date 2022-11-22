import styled from "styled-components";


export default function Card({ title,desc, imgurl}) {
  return(
  <Cardcontainer>
    <Img_container>
      <Img src={imgurl} alt=''/>
    </Img_container>
    <Cardcontent>
      <Cardtitle><h1>{title}</h1></Cardtitle>
      <Carddesc><p>{desc}</p></Carddesc>
    </Cardcontent>
    <View_button_container>
        <View_button>View more</View_button>
      </View_button_container>
  </Cardcontainer>
  )
}

const Cardcontainer= styled.div`
  width: 60%;
  heigth: 200px;
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: 0.3s;
  animation: ease-in-;

  &:hover{
    transform: scale(1.1);
    box-shadow: opx ,0px, 15px, 0px;

  }


`;

const View_button_container= styled.div`
display:flex;
justify-content: center;
margin: 0.3rem;
margin-top: 8rem;
  }

`;

const View_button= styled.button`
background: linear-gradient(to right, #C5C6D0  0%, #ADADC9 79%);
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 50%;
height: 2rem;
border: none;
color: black;
transition: 0.3s;
border-radius: 2rem;
cursor: pointer;

&:hover{
  transform: scale(1.1);
  box-shadow: opx ,0px, 15px, 0px;

}

  }

`;


const Cardcontent= styled.div`
  margin-left: 15rem;
  margin-top: -10rem;
  padding: 20rem:
`;

const Cardtitle= styled.div`
margin-bottom: 0.5rem;
`;

const Carddesc= styled.div`
margin: 0;
padding 0;
`;

const Img_container= styled.div`
overflow: hidden;
height 200px;
`;

const Img= styled.img`
  width: 200px;
  height: 300px;
  object-fit: fill;
`;