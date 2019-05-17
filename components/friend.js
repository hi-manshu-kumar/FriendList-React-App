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
                            type="checkbox"
                            checked={friend.favourite}
                            onChange={() => toggleFavourite(friend.id-1)}
                        />
                        <button onClick={() => deleteFriend(friend.id)}>Delete</button>
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
        </>
    )
}

export default Friend;