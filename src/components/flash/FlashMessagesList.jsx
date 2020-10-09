import React from "react";
import FlashMessage from "./FlashMessage";
import { connect } from "react-redux";
import { deleteFlashMessage } from "../../actions/flashMessages";

class FlashMessagesList extends React.Component {
    // message 是一个数组
    render (){
        const messages = this.props.messages.map(message => {
            console.log("flashMessagesList component is looping the messages");
            console.log(message);
            return <FlashMessage key = { message.id } message={ message } deleteFlashMessage={ this.props.deleteFlashMessage }/>
        });

        return (
            
            <div className="container">
                { messages }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);