import styled from "styled-components";
import { Row, Col } from "antd";

const ContentCards = styled(Row)`
margin-top: 40px;
width: 100%;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  `;

const ContentCard = styled(Col)`

  background-color: white;
  border-radius: 10px;
  background-color: #CDD8DA;
  border: 1px solid #6A8890;
  max-width: 22rem;
  text-align: center;
  min-height: 12rem;
  padding: 10px;
  font-family: "Baloo Tamma 2", system-ui;
  h3{
    color: #000080;

}
p{
  color: #333333;
    
}

`

const TitleContents=styled.h3`
    color: #000080;
    font-family: "Baloo Tamma 2", system-ui;
  font-size: 3em;
text-align: center;

`
;

export { ContentCards, ContentCard , TitleContents};
