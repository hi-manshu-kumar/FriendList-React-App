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
                            class="star"
                            id={`box${friend.id}`}
                            type="checkbox"
                            checked={friend.favourite}
                            onChange={() => toggleFavourite(friend.id-1)}
                        />
                          <label for={`box${friend.id}`}></label>
                        <button onClick={() => deleteFriend(friend.id)}><i class="far fa-trash-alt"></i></button>
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

            button{
                background: none;
                padding: 0.5em 0.;
                border: 1px solid #e3e3e3;
                border-radius: 10%;
            }
        `}</style>   
        </>
    )
}

export default Friend;