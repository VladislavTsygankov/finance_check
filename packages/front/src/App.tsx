import { Content, Wrapper, Title } from "./components/styled";

import "antd/dist/reset.css";
import "./index.css"
import Search from "./modules/search";

const App = () => (
  <Wrapper>
    <Content>
      <Title>Finance Check</Title>
      <Search />
    </Content>
  </Wrapper>
)

export default App;
