import React from "react";
import { graphql } from "gatsby";
import PageInfo from "../components/PageInfo/PageInfo";
import Image from "gatsby-image";
import styled from "styled-components";

const pageData = {
  title: "gallery",
  paragragh:
    " While artists work from real to the abstract, architects must work from the abstract to the real.",
};

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  padding-bottom: 50px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryPage = ({ data }) => {
  const {
    allDatoCmsGallery: { nodes },
  } = data;

  console.log(data);
  return (
    <>
      <PageInfo title={pageData.title} paragragh={pageData.paragragh} />
      <GalleryWrapper>
        {nodes[0].gallery.map(item => (
          <Image fluid={item.fluid} />
        ))}
      </GalleryWrapper>
    </>
  );
};

export const query = graphql`
  {
    allDatoCmsGallery {
      nodes {
        gallery {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default GalleryPage;
