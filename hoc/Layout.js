import Head from 'next/head';
import Navbar from "../components/Navbar" ; 

const Layout = (props) => (
    <div className="root">
        <Head>
            <title>Friend App</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="https://fonts.googleapis.com/css?family=Gentium+Basic|Open+Sans" rel="stylesheet"></link>
        </Head>

        <header>
            <Navbar></Navbar>
        </header>
        
        <div className="content">
        <div>
            {/* <h1>{props.title}</h1> */}
            {props.children}
            </div>
        </div>
        
        <footer>&copy; {new Date().getFullYear()}</footer>    
        
        <style jsx>{`
            .root{
                display:flex;
                height: 100vh;
                align-items: center;
                flex-direction: column;
                background: #f2f2f2;
            }

            header{
                width: 100%;
                padding: 1em;
                font-size: 1.2rem;
                background: #001529;
                height: 4.1rem;
            }

            .content {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                flex: 1 0 auto;
            }
            .content div{
                background: #fff;
                border: 1px solid #e3e3e3;
                display: flex;
                flex-direction: column;
                align-items: center;
                min-height: 326px ;
                width: 399px;
            }

            header a: hover{
                font-weight: bold;
                color: lightgrey;
            }

            footer{
                display: flex;
                padding: 1em;
                color: blue;
                flex-shrink: 0;
            }
        `}
        </style>
        <style global jsx>{`
            html,body {
                height: 100vh;
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
            }
            body{
                margin: 0;
                font-size: 110%;
                background: #F2F2F2;                  
            }
        `}
        </style>
    </div>
)

export default Layout;