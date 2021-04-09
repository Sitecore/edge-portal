import { GetStaticProps } from "next";
import { gql } from "@apollo/client";
import { client } from "../lib/gql";

export default function Playground({ contentTypes }: { contentTypes: any }) {
  return (
    <div>
      <h1>Playground</h1>
      <p>
        A page to try things out without interfering with pages being built.
      </p>
      <p>There are {contentTypes.length} content types in the system.</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      {
        allM_ContentType {
          results {
            contentType_Label
            id
          }
        }
      }
    `,
  });

  return {
    props: {
      contentTypes: data.allM_ContentType.results,
    },
  };
};
