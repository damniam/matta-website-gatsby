import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Button from "../components/Button/Button";
import styled from "styled-components";
import Image from "gatsby-image";

const StyledImg = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 40%;
  object-fit: cover;
  height: 100vh;
`;
const ContentWrapper = styled.div`
  width: 60%;
  text-align: right;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: calc(100vh-120px);
  gap: 0px;

  h1 {
    font-size: 85px;
    margin: 120px 0 0;
    color: black;
    line-height: 100.1%;
    margin-bottom: 25px;
  }
  p {
    width: 50%;
    color: black;
    margin-bottom: 50px;
  }
`;

const IndexPage = ({ data }) => (
  <>
    {/* {console.log(props)} */}
    <SEO title="Home" />
    <ContentWrapper>
      <h1>Your new space</h1>
      <p>
        While artists work from real to the abstract, architects must work from
        the abstract to the real.
      </p>
      <Button>See More</Button>
    </ContentWrapper>
    <StyledImg fluid={data.datoCmsAsset.fluid} />
  </>
);

export const query = graphql`
  {
    datoCmsAsset(filename: { eq: "main.jpg" }) {
      fluid {
        ...GatsbyDatoCmsFluid_tracedSVG
      }
    }
  }
`;

export default IndexPage;
