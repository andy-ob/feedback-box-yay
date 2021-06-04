import styled from "styled-components";

const Heading = styled.h1`
  font-family: Georgia;
  text-align: center;
`;

const PostboxTop = styled.div`
  transform: translateY(100px);
  width: 220px;
`;

const PostboxMiddle = styled.div`
  width: 200px;
  height: 500px;
  background: linear-gradient(
    to right,
    hsl(346, 68%, 40%) 0%,
    hsl(346, 68%, 60%) 25%,
    hsl(346, 68%, 70%) 100%
  );
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: ;
`;

const PostboxTopTop = styled.div`
  height: 100px;
  background: linear-gradient(
    to right,
    hsl(346, 61%, 40%) 0%,
    hsl(346, 61%, 50%) 25%,
    hsl(346, 61%, 60%) 100%
  );
  border-radius: 50%;
  transform: rotateX(45deg) translateY(70px);
`;

const PostboxTopBottom = styled.div`
  height: 100px;
  background: linear-gradient(
    to right,
    hsl(346, 61%, 40%) 0%,
    hsl(346, 61%, 50%) 25%,
    hsl(346, 61%, 60%) 100%
  );
  border-radius: 50%;
  transform: rotateX(45deg) translateY(-70px);
`;

const PostboxTopMiddle = styled.div`
  height: 20px;
  background: linear-gradient(
    to right,
    hsl(346, 61%, 40%) 0%,
    hsl(346, 61%, 50%) 25%,
    hsl(346, 61%, 60%) 100%
  );
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: ;
`;

const PostboxBottom = styled.div`
  width: 200px;
  height: 100px;
  background: linear-gradient(
    to right,
    hsl(346, 68%, 40%) 0%,
    hsl(346, 68%, 60%) 25%,
    hsl(346, 68%, 70%) 100%
  );
  border-radius: 50%;
  transform: rotateX(45deg) translateY(-70px);
`;

const PostboxEntry = styled.div`
  width: 140px;
  height: 25px;
  background: linear-gradient(
    to top,
    hsl(215, 100%, 10%) 0%,
    hsl(215, 100%, 15%) 25%,
    hsl(215, 100%, 20%) 100%
  );
  margin-top: 80px;
`;

const PostboxLogo = styled.div`
  border: 3px solid #ffa6b6;
  border-radius: 5px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px 20px 30px;
  font-family: Georgia;
  text-align: center;
`;

const PostboxContainer = styled.div`
  transform: translateY(-150px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Postbox = () => (
  <PostboxContainer>
    <PostboxTop>
      <PostboxTopTop />
      <PostboxTopMiddle />
      <PostboxTopBottom />
    </PostboxTop>
    <PostboxMiddle>
      <PostboxEntry />
      <PostboxLogo>
        <img src="/a-team.png" alt="a-team van" width="80px" height="80px" />
        <div>A Team Feedback Box</div>
      </PostboxLogo>
    </PostboxMiddle>
    <PostboxBottom />
  </PostboxContainer>
);

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Box>
      <Heading>The Amazing A-Team Feedback Box</Heading>
      <Postbox />
    </Box>
  );
}

export default App;
