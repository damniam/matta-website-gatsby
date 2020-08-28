import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import styled from "styled-components";
import Image from "gatsby-image";
import PageInfo from "../components/PageInfo/PageInfo";

const pageData = {
  title: "about",
  paragragh:
    " While artists work from real to the abstract, architects must work from the abstract to the real.",
};

const StyledImg = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 50%;
  object-fit: cover;
  height: 100vh;
`;
const ContentWrapper = styled.div`
  width: 50%;
  text-align: left;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: calc(100vh-120px);
  gap: 0px;

  h1 {
    font-size: 52px;
    margin-top: 55px;
    padding: 0;
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

const DetailInfoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 20%;
  left: -30px;
  top: 349px;
  padding: 50px 80px;
  background: #ffffff;
  border: 4px solid #000000;
  box-sizing: border-box;

  p {
    text-align: left;
  }

  h1 {
    font-size: 25px;
  }
`;

const AboutPage = ({ data }) => {
  const { datoCmsAbout } = data;

  console.log(data);
  return (
    <>
      {/* {console.log(props)} */}
      <SEO title="Home" />
      <PageInfo title={pageData.title} paragragh={pageData.paragragh} />
      <ContentWrapper>
        <DetailInfoWrapper>
          <p>{datoCmsAbout.description}</p>
          <h1>{datoCmsAbout.author}</h1>
        </DetailInfoWrapper>
      </ContentWrapper>
      <StyledImg fluid={datoCmsAbout.authorPhoto.fluid} />
    </>
  );
};

export const query = graphql`
  {
    datoCmsAbout {
      author
      description
      authorPhoto {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
