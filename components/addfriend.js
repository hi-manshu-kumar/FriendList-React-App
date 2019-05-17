import {Component} from 'react';

class AddFriend extends Component{
    state={
        friendName: ''
    }

    handleChange = (e) => {
        this.setState({
            friendName: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPropFriend(this.state);
        this.setState({
            friendName: ''
        });
    }

    render(){
        return(
            <>
                <form action="" onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    id="friendName"
                    onChange={this.handleChange} 
                    value={this.state.friendName} 
                    placeholder="Type the name of a friend"
                    />
                </form>

                <style jsx>{`
                    form{
                        width:100%
                    }                
                `}
                </style>
            </>
        )
    }

}

export default AddFriend;