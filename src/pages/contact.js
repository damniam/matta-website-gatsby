import React from "react";
import { graphql } from "gatsby";
import PageInfo from "../components/PageInfo/PageInfo";

const pageData = {
  title: "contact",
  paragragh:
    " While artists work from real to the abstract, architects must work from the abstract to the real.",
};

const ContactPage = () => (
  <>
    <PageInfo title={pageData.title} paragragh={pageData.paragragh} />
  </>
);

export default ContactPage;
