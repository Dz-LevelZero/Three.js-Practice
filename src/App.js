import "./App.css";
import styled from "styled-components";

import Background from "./components/Background";
import TextSection from "./components/TextSection";

export default function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
`;