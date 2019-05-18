import {Component} from 'react';

class AddFriend extends Component{
    state={
        friendName: '',
        gender    : 'M'
    }

    handleChange = (e) => {
        this.setState({
            friendName: e.target.value
        })
    }

    handleGenderChange = () => {
        let {gender} = this.state;
         if(gender === 'M'){
             gender = "F"
         } else if (gender==='F'){
             gender = "M"
         }
        this.setState({gender});
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
                    <span id="gender">
                     M<label className="switch"><input type="checkbox" value={this.state.gender} onChange={this.handleGenderChange} /><div></div></label>F
                     </span>
                </form>

                <style global jsx>{`
                    form{
                        width:100%
                    }            
                    
                    .switch input {
                        position: absolute;
                        opacity: 0;
                    }
                      
                    .switch {
                        display: inline-block;
                        font-size: 20px; /* 1 */
                        height: 1em;
                        margin-top:0;
                        width: 2em;
                        background: #BDB9A6;
                        border-radius: 1em;
                        transform: translateY(7px);
                    }
                      
                    .switch div {
                        height: 1em;
                        width: 1em;
                        margin-top:-0.5em;
                        margin-left:-1em;
                        border-radius: 1em;
                        background: #FFF;
                        box-shadow: 0 0.1em 0.3em rgba(0,0,0,0.3);
                        -webkit-transition: all 300ms;
                        -moz-transition: all 300ms;
                        transition: all 300ms;
                    }
                      
                    .switch input:checked + div {
                        -webkit-transform: translate3d(100%, 0, 0);
                        -moz-transform: translate3d(100%, 0, 0);
                            transform: translate3d(100%, 0, 0);
                    }

                    input:focus{
                        outline: none;
                    }
                      
                `}
                </style>
            </>
        )
    }

}

export default AddFriend;