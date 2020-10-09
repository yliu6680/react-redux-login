import React from "react";
import classnames from "classnames";

/**
 * 成功提示， 失败提示
 */
class FlashMessage extends React.Component {
    onClick = () => {
        console.log(this.props.deleteFlashMessage);
        this.props.deleteFlashMessage(this.props.message.id);
    }

    render (){
        const { type, text } = this.props.message;
        console.log("in the flashMessage component");
        return (
            <div className={ classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'danger'
            }) }>
                <button onClick={ this.onClick } className="close">&times;</button>
                { text }
            </div>
        )
    }
}

export default FlashMessage;