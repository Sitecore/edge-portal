import { GetStaticProps } from 'next'
import { ApolloClient, InMemoryCache, gql, createHttpLink, ApolloLink, from } from '@apollo/client'

const httpLink = createHttpLink({
    uri: process.env.CH_PREVIEW_URL,
});

const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            'X-GQL-Token': process.env.CH_PREVIEW_TOKEN
        }
    }));

    return forward(operation);
});

const client = new ApolloClient({
    link: from([
        authMiddleware,
        httpLink
    ]),
    cache: new InMemoryCache()
});

export default function Playground({ contentTypes }: { contentTypes: any }) {
    return (
        <div>
            <h1>Playground</h1>
            <p>A page to try things out without interfering with pages being built.</p>
            <p>There are {contentTypes.length} content types in the system.</p>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await client.query({
        query: gql`
        {
            allM_ContentType
            {
              results
              {
                contentType_Label,
                id
              }
            }
          }
        `
    });

    return {
        props: {
            contentTypes: data.allM_ContentType.results
        }
    }
}