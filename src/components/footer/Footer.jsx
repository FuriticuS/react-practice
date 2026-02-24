import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const FooterTitle = styled.h2`
  margin-right: 24px;
`

export default function Footer(props) {
  return (
    <FooterContainer>
      <FooterTitle>{props.title}</FooterTitle>
      <span>{props.description}</span>
    </FooterContainer>
  )
}