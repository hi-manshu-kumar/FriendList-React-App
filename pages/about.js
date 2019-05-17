import Layout from "../hoc/Layout";
import Link from 'next/link';

const about = () => (
    <Layout title="About Page">
        <Link href="/"><a>home</a></Link>
        <p>This application is made with <img src="/static/next.png" alt="next.js image" height="35px"/></p>  
    </Layout>
)

export default about;