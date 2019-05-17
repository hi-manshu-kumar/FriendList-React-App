import Link from 'next/link';

export default () => (
    <div>
        <ul>
            <li>
                <Link href="/"><a>Friend App</a></Link>
            </li>
            <li>
                <Link href="/about"><a>About</a></Link>
            </li>
        </ul>     

        <style jsx>{`
            ul{
                color: ghostwhite;
                list-style: none;
                display: flex;
                justify-content: space-between;
            }

            ul li{
                font-size: 1.2rem;
                // margin-right: 20px;
            }

            ul li a {
                color: ghostwhite;            
                text-decoration: none;
            }
            ul li a:hover{
                color: #2FA4E7;
            }
        `}
        </style>
    </div> 
)