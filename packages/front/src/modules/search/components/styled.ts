import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  margin: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 40px;
`;

export const DataItem = styled.div<{isPrimary?: boolean}>`
  color: #E9E9E9;

  font-size: ${props => props.isPrimary ? "20px" : "14px"};

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;