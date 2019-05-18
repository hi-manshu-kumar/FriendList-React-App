import Layout from "../hoc/Layout";
import {Component} from "react"; 
import Friend from "../components/friend";
import AddFriend from "../components/addfriend";

class index extends Component{
    constructor(){
        super();
        this.state={                //state that will hold the list of friends with its details
            friends: [
                { id:1, name: "Theodore Roosevelt", gender: "M", favourite: true },
                { id:2, name: "Abraham Lincoln", gender: "F", favourite: false },
                { id:3, name: "George Washington", gender: "F", favourite: false }
            ],
            currentPage: 1,
            friendsPerPage: 2,
            genderFilter: "A"
        };
        this.handlePagination = this .handlePagination.bind(this);
    }

    handlePagination(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }

    toggleFavourite = (id) => {                 //id is for searching the index of array element that is getting changed
        let {friends} = this.state;

        friends = friends.map(friend => {
            if(friend.id === id ){
                friend.favourite = friend.favourite? false : true;
            }
            return friend;
        });

        this.setState({friends});
    }

    deleteFriend = (id) => {
        const friends =this.state.friends.filter( friend => {
            return friend.id!==id;                                      //returning all elements that do not match with given id
        });
        this.setState({friends});
    }

    addFriend = (friendData) => {                   // function tob add friends which execute from the addfriend child 

        let friend    = {};                         //create a empty object
        let {friends} = this.state;                 //have immutable friendlist

        friend.id        = friends.length+1;       //calculate the id 
        friend.name      = friendData.friendName;  //add the friendname from arguments
        friend.gender       = friendData.gender;
        friend.favourite = false;
        friends.push(friend);                       //push the new friend to the immutable friendlist 
        
        this.setState({friends});                    //update the state to rerender the list
        console.log(this.state.friends);
    }

    handleGenderChange = (gender) => {
        this.setState({genderFilter: gender});
    }

    render(){
        let { friends,currentPage, friendsPerPage, genderFilter } = this.state;
        
        const indexOfLastFriend = currentPage * friendsPerPage;
        const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
        friends = friends.filter(friend => friend.gender!==genderFilter);
        const currentList = friends.slice(indexOfFirstFriend, indexOfLastFriend);

        const pageNumbers = [];
        for (let i =1; i<=Math.ceil(friends.length / friendsPerPage); i++){
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li
                key={number}
                id={number}
                onClick={this.handlePagination}
                className="pageNo"
              >
                {number}
              </li>
            );
        });

        return (
            <Layout title="Home">
                <div className="heading">
                    The FriendList
                </div>

                <AddFriend addPropFriend={this.addFriend}/>         
                <Friend friends={currentList} toggleFavourite={this.toggleFavourite} deleteFriend={this.deleteFriend}></Friend>
                <span className="pagination">
                {renderPageNumbers}
                </span>

                <div>
                <span className="filter" onClick={() => this.handleGenderChange("M")}>Male</span>/ <span className="filter" onClick={() => this.handleGenderChange("F")}>Female</span> / <span className="filter"  onClick={() => this.handleGenderChange("A")}>All</span> 
                </div>
                <style global jsx>{`
                    Friend{
                        width:100%;
                        color:white;
                    }
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
                    .pagination{
                        list-style: none;
                        color: blue;
                        display: flex;
                        margin: auto 0;
                    }
                    .pageNo{
                        margin: 0 0.3em;
                    }
                    form{
                        border-bottom: 1px solid #aaaaaa;
                    }
                    input[type=text]{
                        width: 80%;
                        border:0px;
                        padding:0.2em;    
                        padding-left: 1em;            
                    }

                    .filter,{
                        cursor: pointer;
                    }
                    .filter:hover{
                        color:#2FA4E7;
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
    }    
}

export default index;