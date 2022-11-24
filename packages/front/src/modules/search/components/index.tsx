import {Typography} from "antd";
import {CaretUpOutlined, CaretDownOutlined} from "@ant-design/icons";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { CustomInput, DarkButton } from "../../../components/styled";
import { Container, DataContainer, DataItem, InputContainer } from "./styled";
import { formatDate } from "../../../helpers/date";

type SeachProps = {
  getQuote: (ticker: string) => void,
  isBusy?: boolean,
  quote?: any
};

const Search: React.FC<SeachProps> = ({getQuote, isBusy, quote}) => {
  const difference = useMemo<number>(() => quote ? Math.round(quote.close - quote.prevClose) : 0, [quote]);
  const date = useMemo<string>(() => quote ? formatDate(quote.date) : formatDate(new Date().toString()), [quote]);
  const [ticker, setTicker] = useState<string>("");

  const onChangeTikcer = (e: ChangeEvent<HTMLInputElement>) => {
    setTicker(e.target.value.toUpperCase());
  };

  const onSearch = useCallback(() => {
    getQuote(ticker)
  }, [getQuote, ticker]);

  return (
    <Container>
      <InputContainer>
        <CustomInput value={ticker} onChange={onChangeTikcer} />
        <DarkButton type="primary" onClick={onSearch}>Search</DarkButton>
      </InputContainer>
      <DataContainer>
        {
          Boolean(quote) && quote.close !== 0 && !isBusy ? 
          <>
            <DataItem isPrimary>{quote.symbol}</DataItem>
            <DataItem isPrimary>{quote.close}</DataItem>
            <DataItem>
              {
                difference > 0 ? <CaretUpOutlined /> : <CaretDownOutlined />
              }
              {difference}
            </DataItem>
            <DataItem>{date}</DataItem> 
          </> :
           <DataItem isPrimary>{isBusy ? "Loading..." : "Nothing"}</DataItem>
        }
      </DataContainer>
    </Container>
  )
}

export default Search