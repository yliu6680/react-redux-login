import React from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email:"",
            password:"",
            passwordConfirmation:"",
            errors: {},
            isLoading: false,
            invalid: false
        }
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // 截留和防抖 回流和重绘
        this.setState({ errors: {}, isLoading: true });
        this.props.signupActions.userSignupRequest(this.state).then(
            // success， 添加数据到redux
            () => {
                console.log("adding message");
                this.props.flashActions.addFlashMessage({
                    type: "success",
                    text: "注册成功，欢迎你的加入，请登陆"
                });
                this.props.history.push("/");
            },
            // fail
            ({ response }) => { this.setState({ errors: response.data, isLoading: false});
            }
        );
    } 

    checkUserExists = (e) =>{
        const field = e.target.name;
        const val = e.target.value;
        let invalid;
        if(val !== ""){
            this.props.signupActions.isUserExists(val).then(res =>{
                let errors = this.state.errors;
                if(res.data[0]){
                    errors[field] = "用户名已经存在:" + field;
                    invalid = true;
                }else{
                    errors[field] = ""
                    invalid = false;
                }
                this.setState({errors,invalid})
            })
        }
    }

    render(){
        const { errors, isLoading, invalid } = this.state;

        return (
            <form onSubmit={ this.onSubmit }>
                <h1>加入我们</h1>

                <div className="form-group">
                    <label className="control-label">user name</label>
                    <input
                        type="text"
                        name="username"
                        value={ this.state.username }
                        onChange={ this.onChange }
                        onBlur={ this.checkUserExists }
                        className={ classNames('form-control', { 'is-invalid': errors.username}) }
                    />
                    { errors.username && <span className="form-text text-muted">{ errors.username }</span> }
                </div>

                <div className="form-group">
                    <label className="control-label">email</label>
                    <input
                        type="email"
                        name="email"
                        value={ this.state.email }
                        onChange={ this.onChange }
                        className={ classNames('form-control', { 'is-invalid': errors.email}) }
                    />
                    { errors.email && <span className="form-text text-muted">{ errors.email }</span> }
                </div>

                <div className="form-group">
                    <label className="control-label">password</label>
                    <input
                        type="password"
                        name="password"
                        value={ this.state.password }
                        onChange={ this.onChange }
                        className={ classNames('form-control', { 'is-invalid': errors.password}) }
                    />
                    { errors.password && <span className="form-text text-muted">{ errors.password }</span> }
                </div>

                <div className="form-group">
                    <label className="control-label">password confirmation</label>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        value={ this.state.passwordConfirmation }
                        onChange={ this.onChange }
                        className={ classNames('form-control', { 'is-invalid': errors.passwordConfirmation}) }
                    />
                    { errors.passwordConfirmation && <span className="form-text text-muted">{ errors.passwordConfirmation }</span> }
                </div>
                <div className="form-group">
                    <button disabled={ isLoading || invalid } className="btn btn-primary btn-lg">注册</button>
                </div>
            </form>
        )
    }
}

export default withRouter(SignupForm);