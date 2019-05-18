const Friend = ({friends, deleteFriend, toggleFavourite}) => {

    const friendList = friends.length ? (
        friends.map(friend => {
            return (
                <div className="friendlist" key={friend.id}>
                    <span>
                        <p>{friend.name}</p>
                        <p>xx friends in common</p>
                    </span>
                    <span>
                        <input 
                            className="star"
                            id={`box${friend.id}`}
                            type="checkbox"
                            checked={friend.favourite}
                            onChange={() => toggleFavourite(friend.id)}
                        />
                          <label htmlFor={`box${friend.id}`}></label>
                        <button onClick={() => deleteFriend(friend.id)}><i className="far fa-trash-alt"></i></button>
                    </span>
                </div>
            )
        })
    ) : (
        <p>Friend List empty!!! Add new Friend</p>
    );


    return (
        <>
        {friendList}

        <style global jsx>{`
        @import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);

            .star{
                display: none;   
            }
            
            input[type=checkbox] + label:before {
                font-family: FontAwesome;
                content: '\f006';
            }
            input[type=checkbox]:checked + label:before {
                content: "\f005"
            }
            label{
                border:1px solid red;
            }

            label,button{
                background: none;
                padding: 0.5em 1em;
                border: 1.5px solid #e3e3e3;
                border-radius: 10%;
                margin: 0.2em;
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
        </>
    )
}

export default Friend;