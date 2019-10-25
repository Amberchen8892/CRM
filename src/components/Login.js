import React, {Component} from 'react';
import { Button, Form } from 'react-bootstrap';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isSignin: false,

            email: "",
            password: ""
         }
         
    }

    handleLogin = async e => {
        e.preventDefault();
        let check_login={
          email: this.state.email,
          password: this.state.password
        };
        console.log("===", check_login)
        const response = await fetch(`https://127.0.0.1:5000/login`, {
          method: "POST",
          body: JSON.stringify(check_login),
          headers: new Headers({
            "Content-Type": "application/json"
            })
          });
          const data= await response.json()
          console.log(data,'data')
          if(data.status === 200)
            localStorage.setItem('token',data.token)
            window.location.replace(`http://localhost:3000/admin/dashboard`)
          if (data.status !== 200)
            return alert("There is something wrong")
        }
        handleChange = e => {
          const name = e.target.name;
          const value = e.target.value;
          this.setState({
            [name]: value
          });
        }
        


    render() { 
        console.log("check email", this.state.email)
        return (
            <div className="login-page">
           
            <div className='login-container'>
                <h1 style={{color:"#e1f5fe"}}>Login</h1>
            <Form 
            onSubmit={e => this.handleLogin(e)}
            onChange={e => this.handleChange(e)}
            >
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{color:"#f06292", fontWeight:"bold"}}>Email address</Form.Label>
    <Form.Control name="email" type="email" placeholder="Enter email"  />
    <Form.Text className="text" style={{color:"#212121"}}>
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label style={{color:"#f06292",fontWeight:"bold"}}>Password</Form.Label>
    <Form.Control name="password" type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox" style={{display:"flex", flexDirection:"row",paddingLeft:"20px"}}>
    <Form.Check.Input  type="checkbox"  />
    <Form.Check.Label style={{color:"#212121", fontWeight:"bold"}}>Remember me</Form.Check.Label>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<div style={{paddingTop:"30px", color:"black"}}><p style={{ fontSize:"16px", fontWeight:"800px"}}>Looking to <a href="http://localhost:3001/signup"><span style={{fontWeight:"bold", color:"#0091ea"}}> create an account?</span></a></p>  </div>
            </div>
           
        </div>
          );
    }
}
 
export default Login;



