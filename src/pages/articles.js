import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import PageInfo from "../components/PageInfo/PageInfo";
import ArticlePreview from "../components/ArticlePreview/ArticlePreview";
import slugify from "slugify";

const pageData = {
  title: "article",
  paragragh:
    " While artists work from real to the abstract, architects must work from the abstract to the real.",
};

const ArticlesWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  grid-auto-rows: minmax(100px, auto);
`;

const ArticlesPage = ({ data }) => {
  const {
    allDatoCmsArticle: { nodes },
  } = data;
  return (
    <>
      <PageInfo title={pageData.title} paragragh={pageData.paragragh} />
      <ArticlesWrapper>
        {nodes.map(({ title, featuredImage }) => (
          <ArticlePreview
            key={title}
            title={title}
            image={featuredImage.fluid}
            slug={slugify(title, { lower: true })}
          />
        ))}
      </ArticlesWrapper>
    </>
  );
};

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        featuredImage {
          fluid(maxWidth: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default ArticlesPage;
