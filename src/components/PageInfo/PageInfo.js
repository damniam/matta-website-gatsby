import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 30px 0;
  max-width: 470px;

  h1 {
    font-size: 52px;
    margin: 0;
    color: black;
  }

  p {
    font-size: 18px;
    margin: 15px 0 0;
  }
`

const PageInfo = props => (
  <Wrapper>
    <h1>{props.title}</h1>
    <p>{props.paragragh}</p>
  </Wrapper>
)

export default PageInfo
