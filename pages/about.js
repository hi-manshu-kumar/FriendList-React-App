import Layout from "../hoc/Layout";

const about = () => (
    <Layout title="About Page">
        <h1>About Page</h1>
        <ul>
            <li>This application is made with <img src="/static/next.png" alt="next.js image" height="35px"/> for SSR.</li>
            <li>User can add friends and set Gender.</li>
            <li>Pagination has been done.</li>
            <li>Gender filter has been done.</li>
            <li>Delete friend implemented.</li>
            <li>Favourite friend implemented.</li>
            <li>Clean Component Strucutre.</li>
            <li>Reusable Functions.</li>
        </ul>
        <p></p>
        <style jsx>{`
            h1{
                margin-top: 0.5em;
            }
            ul {
                margin: auto 2em;
            }
        `}</style>
    </Layout>
)

export default about;