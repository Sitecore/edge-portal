import { Blogpost } from "interfaces/blogposts";
import { GetBlogpostByTitle, GetLatestBlogpostTitles } from "lib/blogposts";


export default function Blogs({ blogpost }: { blogpost: Blogpost; }) {
    console.log("BLOGGGGGGGGGGG", blogpost);
    return (
        <div>
            {blogpost.Body}
        </div>

    );
}

export async function getStaticPaths() {
    const paths = await GetLatestBlogpostTitles();
    console.log("NO titles?", paths);

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
