import React from "react";
import { connect } from "react-redux";

class ShopPage extends React.Component {
    render(){
        const { user } = this.props.auth;

        return (
            <div className="jumbotron">
                <h1>Shop page, you have logged in. Welcome { user.username }</h1>
                <p>Your id is { user.id }</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(ShopPage);