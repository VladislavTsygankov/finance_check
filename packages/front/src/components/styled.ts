import { Layout, Input, Button, Typography} from "antd";
import styled from "styled-components";

export const Wrapper = styled(Layout)`
  height: 100vh;
  width: 100%;
  background-color: #222128;
`;

export const Content = styled(Layout.Content)`
  height: 100%;
  width: 100;

  margin: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CustomInput = styled(Input)`
  background: #2C2B32;
  padding: 10px 15px;
  border: none;
  color: #BEBEBE;
  border-radius: 10px;

  &::placeholder {
    color: #787884;
  }

  &:focus {
    border: none;
    box-shadow: none;
  }
`;


export const DefaultButton = styled(Button)`
  border-radius: 10px;
  padding: 0 20px;
  display: flex;
  align-items: center;

  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  border: none;

  margin-left: 40px;
`;

export const DarkButton = styled(DefaultButton)`
  background-color: #2C2B32;
  color: #E9E9E9;

  width: 295px;

  &:hover {
    background-color: #2C2B32 !important;
    color: #E9E9E9;
    border: none;
  }
`;

export const Title = styled(Typography.Title)`
  &.ant-typography {
    color: #E9E9E9;
  }
`;


