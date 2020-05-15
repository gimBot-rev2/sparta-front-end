import logo200Image from '../../assets/img/logo/logo_200.png';
import React from 'react';
import { Button, Form, FormGroup, Input, Label, Container } from 'reactstrap';
import './styles.scss'
import actions from '../../store/login/action'
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SpinnerLoader from '../loader'
import Error from '../../error'
import routes from '../../config/routes'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '', password: '', redirect: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { username, password } = this.state
        const response = await this.props.login(username, password)
    }

    render() {
        if (this.props.isLogin) return <Redirect to={routes.root} />;
        return (
            <Container className="container">
                <Form onSubmit={this.handleSubmit} className="form">
                <div className="text-center pb-4">
                    <img
                        src={logo200Image}
                        className="rounded"
                        style={{ width: 60, height: 60, cursor: 'pointer' }}
                        alt="logo"
                    />
                </div>
                <FormGroup>
                    <Label for='username'>Username</Label>
                    <Input type='text' id="username" name='username' onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for='password'>Password</Label>
                    <Input type='password' name="password" onChange={this.handleChange} />
                </FormGroup>
                <Error
                  error={
                    this.props.errors.password
                      ? this.props.errors.password
                      : null
                  }
                />
                <Error
                  error={
                    this.props.errors.Unauthorized
                      ? this.props.errors.Unauthorized
                      : null
                  }
                />
                <hr />
                {this.props.loading? (
                    <Button size="lg" className="bg-gradient-theme-left border-0" block>
                        <SpinnerLoader />
                    </Button>
                ) : (
                    <Button size="lg" className="bg-gradient-theme-left border-0" block onClick={this.handleSubmit}>
                        Login
                    </Button>
                )   
                }
            </Form>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      loading: state.loginReducer.loading,
      users: state.loginReducer.users,
      errors: state.loginReducer.errors,
      isLogin: state.loginReducer.isLogin,
    };
}

const mapDispatchToProps = {
    login: actions.login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)