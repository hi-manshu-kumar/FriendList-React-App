import Layout from "../hoc/Layout";

const index = () => (
    <Layout title="Home">
        <div className="heading">
            The FriendList
        </div>
        <input type="text" placeholder="Type the name of a friend"/>   
        <div className="friendlist">
            <span>
                <p>Theodore Roosevelt</p>
                <p>xx friends in common</p>
            </span>
            <span>
                <button>Star</button>
                <button>Delete</button>
            </span>
        </div>
        <div className="friendlist">
            <span>
                <p>Abraham Lincoln</p>
                <p>xx friends in common</p>
            </span>
            <span>
                <button>Star</button>
                <button>Delete</button>
            </span>
        </div>
        <div className="friendlist">
            <span>
                <p>George Washington</p>
                <p>xx friends in common</p>
            </span>
            <span>
                <button>Star</button>
                <button>Delete</button>
            </span>
        </div>

        <style jsx>{`
            .heading{
                width:100%;
                height: 50px;
                background-color: #868686;
                color: #fff;
                font-size:1.2em;
                padding : 1em;
                padding-left:0.8em;
                padding-top : 0.5em;
                border-bottom:1px solid #aaaaaa;
            }

            input[type=text]{
                width: 100%;
                border:0px;
                border-bottom: 1px solid #aaaaaa;
                padding:0.2em;    
                padding-left: 1em;            
            }

            .friendlist{
                border-bottom:2px solid #e3e3e3;
                padding: 4% 6%;
                width:100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .friendlist p {
                margin:0px;
                color: black;
            }

            .friendlist p:first-child{
                font-weight: bold;
            }

        `}</style>
    </Layout>    
)

export default index;