import React, {Component} from 'react';
 import { Button, Form, Col} from 'react-bootstrap';
 
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isSignin: false,
        last_name: "",
        first_name: "",
        company: "",
        email: "",
        password: "",
        repassword:"",
        profile_picture:"",
        emailError: ""
         }
    }
    validation = ()=>{
        let emailError="";
        if (!this.state.email.includes("@gmail")){
            emailError="it must be gmail account";
        }
        if (emailError){
            this.setState({emailError});
            return false
        }
        return true
        
    };
    handleRegister = async e => {
        e.preventDefault();
       if( ! this.state.email.includes("@gmail")){
           alert ("it must be gmail account")
       }

        else if (this.state.password !== this.state.repassword) {
          alert("Password and Password confirm must match");
        }
        

        else {
          let newuser = {
            first_name: this.state.first_name,
            last_name:this.state.last_name,
            company:this.state.company,
            email: this.state.email,
            password: this.state.password,
            profile_picture: this.state.profile_picture
            
            
          };
          const response = await fetch(`https://127.0.0.1:5000/signup`, {
            method: "POST",
            body: JSON.stringify(newuser),
            headers: new Headers({
              "Content-Type": "application/json"
            })
          });
          console.log(response)
          console.log(response.status)
          const data= await response.json()
          console.log(data.status)
          if(data.status === 200)
            return window.location.replace(`http://localhost:3000`)
          if (data.status !== 200)
            return alert("There is something wrong")
    
        }
      };
    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
          [name]: value
        });
      };
    render() { 
        return ( 
            <div className="sign-up">
            <div className="sign-up-container">
                <h1 style={{color:"#1a237e"}}>Sign up</h1>
            <Form 
             onSubmit={e => this.handleRegister(e)}
             onChange={e => this.handleChange(e)}
            >
              <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label style={{color:"#37474f", fontWeight:"bold"}}>First Name</Form.Label>
    <Form.Control name="first_name" required={true} type="text" placeholder="Enter your first name" />
   
  </Form.Group>
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label style={{color:"#37474f", fontWeight:"bold"}}>Last Name</Form.Label>
    <Form.Control name="last_name" required={true} type="text" placeholder="Enter last name" />
   
  </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label style={{color:"#37474f", fontWeight:"bold"}}>Company</Form.Label>
    <Form.Control name="company"type="text"required={true} placeholder="Enter your company" />
    
  </Form.Group>
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label style={{color:"#37474f", fontWeight:"bold"}}>Email address</Form.Label>
    <Form.Control  name="email"type="email"required={true} placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email.
    </Form.Text>
  </Form.Group>
  </Form.Row>
  
  <Form.Row>
  <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label style={{color:"#37474f", fontWeight:"bold"}}>Password</Form.Label>
    <Form.Control required={true}name="password"type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group as={Col} controlId="formGridPassword">
    <Form.Label style={{color:"#37474f", fontWeight:"bold"}}>Re-Password</Form.Label>
    <Form.Control required={true}name="repassword"type="password" placeholder="Re-password" />
  </Form.Group>
  </Form.Row>
  
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{color:"#37474f", fontWeight:"bold"}}>Profile Picture</Form.Label>
    <Form.Control required={true} name="profile_picture" type="text" placeholder="Enter image url" />
    
  </Form.Group>
  <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>
  
</Form>
            </div>
            
            
        </div>
         );
    }
}
 
export default Signup;


// import React from 'react';
// import { Button, Form } from 'react-bootstrap';

// export default function Signup() {
//     this.state = {
//         isSignin: false,
//         last_name: "",
//         first_name: "",
//         company: "",
//         email: "",
//         password: "",
//         repassword:"",
//         profile_picture:""
        
//       };
    
//       handleRegister = async e => {
//         e.preventDefault();
//         if (this.state.password !== this.state.repassword) {
//           alert("Password and Password confirm must match");
//         }
//         else {
//           let newuser = {
//             username: this.state.username,
//             email: this.state.email,
//             password: this.state.password,
//             last_period: this.state.last_period,
            
//           };
//           const response = await fetch(`${process.env.REACT_APP_API}signup`, {
//             method: "POST",
//             body: JSON.stringify(newuser),
//             headers: new Headers({
//               "Content-Type": "application/json"
//             })
//           });
//           console.log(response)
//           const data= await response.json()
//           if(data.status === 200)
//             return window.location.replace(`${process.env.REACT_APP_FRONT_URL}/user/profile`)
//           if (data.status !== 200)
//             return alert("There is something wrong")
    
//         }
//       };


//       handleChange = e => {
//         const name = e.target.name;
//         const value = e.target.value;
//         this.setState({
//           [name]: value
//         });
//       };
    
//     return (
       
//     )
// }
