import React,{useState, useEffect, Component} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";



import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};


  

class UserProfile extends Component {
  constructor(props) {

    super(props);
  
    this.state = { 
      loaded:false,
      username:'',
      first_name:'',
      last_name:'',
      city:'',
      country:'',
      postal_code:'',
      about_me:''
      
      
     }
    
  }
  componentDidMount =()=>{
    this.checkUser();

  }
  checkUser= async ()=>{
    const response = await fetch('https://127.0.0.1:5000/user', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${localStorage.getItem("token")}`
      },
      
    });
    const data= await response.json()   ;
    
    if(data.status!==200){
      return window.location.replace('http://localhost:3000')
  } else if (data.status===200){
    this.setState({
         loaded:true,
          user:data.user
          
      })
  }
  }
handleUpdate= async e =>{
  e.preventDefault();
  let update={
        username:this.state.username || this.state.user.username,
        
        first_name:this.state.first_name || this.state.user.first_name,
        last_name:this.state.last_name || this.state.user.last_name,
        city:this.state.city || this.state.user.city,
        country:this.state.country || this.state.user.country,
        postal_code:this.state.postal_code || this.state.user.postal_code,
        about_me:this.state.about_me || this.state.user.about_me
      }
      const response = await fetch('https://127.0.0.1:5000/update', {
            method: "POST",
            body: JSON.stringify(update),
            headers: new Headers({
              "Content-Type": "application/json",
              'Authorization': `Token ${localStorage.getItem("token")}`
              
            })
            });
            const data= await response.json()
              if(data.status === 200)
                return window.location.replace("http://localhost:3000/admin/dashboard")
              if (data.status !== 200)
                return alert("There is something wrong")
  
}

  
  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log('eeee',name)
    console.log('eeee',value)
    this.setState({
      [name]: value
    });
  };

  

  
  render() { 
    console.log("check object", this.state.user)
    console.log("checkusername", this.state.username)
    const { classes } = this.props;
    return ( 
       <div>
         {this.state.user && 
         <GridContainer>
         <GridItem xs={12} sm={12} md={8}>
                   <Card>
                     <CardHeader color="primary">
                       
                       <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                       <p className={classes.cardCategoryWhite}>Complete your profile</p>
                     </CardHeader>
                     <CardBody>
                       <GridContainer>
                         <GridItem xs={12} sm={12} md={5}>
                           <CustomInput
                             labelText="Company"
                             id="company"
                             
                            value={this.state.user.company}
                             formControlProps={{
                               fullWidth: true,
                               
                             }}
                             inputProps={{
                               disabled: true,
                               value: `${this.state.user.company}`
                               
                               
                               
                             }}
                           />

                         </GridItem>
                         <GridItem xs={12} sm={12} md={3}>
                           <CustomInput
                             labelText="Username"
                             id="username"
                             
                             formControlProps={{
                               fullWidth: true
                             }}
                             inputProps={{                              
                              defaultValue:`${this.state.user.username}`,
                              name:"username",
                              onChange: (e) => this.handleChange(e),
                            }}
                           />
                         </GridItem>
                         <GridItem xs={12} sm={12} md={4}>
                           <CustomInput
                             labelText="Email address"
                             id="email-address"
                             formControlProps={{
                               fullWidth: true
                             }}
                             inputProps={{                              
                              value: `${this.state.user.email}`,
                              disabled: true
                            }}
                           />
                         </GridItem>
                       </GridContainer>
                       <GridContainer>
                         <GridItem xs={12} sm={12} md={6}>
                           <CustomInput
                             labelText="First Name"
                             id="first-name"
                            
                             formControlProps={{
                               fullWidth: true
                             }}
                             inputProps={{                              
                              defaultValue: `${this.state.user.first_name}`,
                              name: "first_name",
                              onChange: (e) => this.handleChange(e),
                              
                            }}
                           />
                         </GridItem>
                         <GridItem xs={12} sm={12} md={6}>
                           <CustomInput
                             labelText="Last Name"
                             id="last-name"
                             formControlProps={{
                               fullWidth: true
                             }}
                             inputProps={{                              
                              defaultValue: `${this.state.user.last_name}`,
                              name:"last_name",
                              onChange: (e) => this.handleChange(e),
                            }}
                           />
                         </GridItem>
                       </GridContainer>
                       <GridContainer>
                       <GridItem xs={12} sm={12} md={4}>
                           <CustomInput
                             labelText="City"
                             id="city"
                             formControlProps={{
                               fullWidth: true
                             }}
                             inputProps={{                              
                              defaultValue: `${this.state.user.city}`,
                              name:"city",
                              onChange: (e) => this.handleChange(e),

                            }}
                           />
                         </GridItem> 
                         <GridItem xs={12} sm={12} md={4}>
                           <CustomInput
                             labelText="Country"
                             id="country"
                            
                             formControlProps={{
                               fullWidth: true
                             }}
                             inputProps={{                              
                              defaultValue: `${this.state.user.country}`,
                              name:"country",
                              onChange: (e) => this.handleChange(e),

                            }}
                           />
                         </GridItem>
                         <GridItem xs={12} sm={12} md={4}>
                           <CustomInput
                             labelText="Postal Code"
                             id="postal-code"
                             inputProps={{
                              defaultValue: `${this.state.user.postal_code}`,
                              name:"postal_code",
                              onChange: (e) => this.handleChange(e),

                             }}
                             formControlProps={{
                               fullWidth: true,
                               
                             }}
                           />
                         </GridItem>
                         
                       </GridContainer>
                       <GridContainer>
                         <GridItem xs={12} sm={12} md={12}>
                           <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                           <CustomInput
                             labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                             id="about-me"
                             formControlProps={{
                               fullWidth: true
                             }}
                             inputProps={{
                               multiline: true,
                               rows: 3,
                               defaultValue:`${this.state.user.about_me}`,
                               name:"about_me",
                               onChange: (e) => this.handleChange(e),
                             }}
                           />
                         </GridItem>
                       </GridContainer>
                     </CardBody>
                     <CardFooter>
                       <Button color="primary" onClick={e=>this.handleUpdate(e)}> Update Profile</Button>
                     </CardFooter>
                   </Card>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={4}>
                   <Card profile>
                     <CardAvatar profile>
                       <a href="#pablo" onClick={e => e.preventDefault()}>
                         <img src={avatar} alt="..." />
                       </a>
                     </CardAvatar>
                     <CardBody profile>
                       <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                       <h4 className={classes.cardTitle}>Alec Thompson</h4>
                       <p className={classes.description}>
                         Don{"'"}t be scared of the truth because we need to restart the
                         human foundation in truth And I love you like Kanye loves Kanye
                         I love Rick Owens’ bed design but the back is...
                       </p>
                       <Button color="primary" round>
                         Follow
                       </Button>
                     </CardBody>
                   </Card>
                 </GridItem>
               </GridContainer>

        
        }

    </div>);
  }
}
 
export default withStyles(styles)(UserProfile);


