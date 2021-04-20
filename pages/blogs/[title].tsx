import { Blogpost } from "interfaces/blogposts";
import { GetBlogpostByTitle, GetLatestBlogpostTitles } from "lib/blogposts";


export default function Blogs({ blogpost }: { blogpost: Blogpost; }) {
    return (
        <div>
            {blogpost.Body}
        </div>

    );
}

export async function getStaticPaths() {
    const paths = await GetLatestBlogpostTitles();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const blogData = await GetBlogpostByTitle(params.title);
    return {
        props: {
            blogpost: blogData,
        },
    };
}
