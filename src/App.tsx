import styled from "styled-components";
import { Postbox } from "./Postbox";

const Heading = styled.h1`
  font-family: Arial;
  text-align: center;
`;

const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HorizontalBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

const Letter = styled.div`
  width: 400px;
  height: 200px;
  background: #fff8f9;
  box-shadow: 3px 3px #ffe5ea;
  padding: 10px;
  margin: 200px;
`;

const StyledPostbox = styled(Postbox)`
  margin: 200px;
`;

const LetterInput = styled.textarea`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  background: #fff8f9;
  border: 2px solid #ffe5ea;
  margin: 20px;
`;

function App() {
  return (
    <VerticalBox>
      <Heading>The Amazing A-Team Feedback Box</Heading>
      <HorizontalBox>
        <Letter
          draggable="true"
          onDragStart={(e: any) => {
            e.dataTransfer.setData("text", e.target.children[0].value);
          }}
        >
          <LetterInput />
        </Letter>
        <StyledPostbox
          onDrop={(e: any) => {
            console.log(e);
            alert(e.dataTransfer.getData("text"));
          }}
          onDragOver={(e: any) => {
            e.preventDefault();
          }}
        />
      </HorizontalBox>
    </VerticalBox>
  );
}

export default App;
