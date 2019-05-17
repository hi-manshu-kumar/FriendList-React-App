import Navbar from "../components/Navbar" ;
import Layout from "../hoc/Layout";

const about = () => (
    <Layout title="About Page">
        <Navbar/>
        <p>This application is made with <img src="/static/next.png" alt="next.js image" height="35px"/></p>  
    </Layout>
)

export default about;