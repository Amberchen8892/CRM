/*eslint-disable*/
import React,{Component, Children} from "react";

// import Select from 'react-select';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
// calendar
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
// boostrap
import { Button, Modal, InputGroup, FormControl} from 'react-bootstrap';


import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const useStyles = makeStyles(styles);
const localizer = momentLocalizer(moment);
const propTypes = {}

const CURRENT_DATE = moment().toDate();
const ColoredDateCellWrapper = ({children, value}) =>
React.cloneElement(Children.only(children), {
  style: {
    ...children.style,
    backgroundColor: value < CURRENT_DATE ? '#e8f5e9' : '#e3f2fd',
  },
});
const customDayPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
      style: {
        border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
        // backgroundColor: (date.getDate() === 7 ? "red": "orange")
      },
    }
  else return {}
}

const customSlotPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
    }
  else return {}
}

class Icons extends Component {
  constructor(...args) {
    super(...args);
    const now = new Date();
    const events = [
      {
          id: 0,
          title: 'All Day Event very long title',
          allDay: true,
          start: new Date(2015, 3, 0),
          end: new Date(2015, 3, 1),
      },
      {
          id: 1,
          title: 'Long Event',
          start: new Date(2015, 3, 7),
          end: new Date(2015, 3, 10),
      },

      {
          id: 2,
          title: 'DTS STARTS',
          start: new Date(2016, 2, 13, 0, 0, 0),
          end: new Date(2016, 2, 20, 0, 0, 0),
      },

      {
          id: 3,
          title: 'DTS ENDS',
          start: new Date(2016, 10, 6, 0, 0, 0),
          end: new Date(2016, 10, 13, 0, 0, 0),
      },

      {
          id: 4,
          title: 'Some Event',
          start: new Date(2015, 3, 9, 0, 0, 0),
          end: new Date(2015, 3, 10, 0, 0, 0),
      },
      {
          id: 5,
          title: 'Conference',
          start: new Date(2015, 3, 11),
          end: new Date(2015, 3, 13),
          desc: 'Big conference for important people',
      },
      {
          id: 6,
          title: 'Meeting',
          start: new Date(2015, 3, 12, 10, 30, 0, 0),
          end: new Date(2015, 3, 12, 12, 30, 0, 0),
          desc: 'Pre-meeting meeting, to prepare for the meeting',
      },
      {
          id: 7,
          title: 'Lunch',
          start: new Date(2015, 3, 12, 12, 0, 0, 0),
          end: new Date(2015, 3, 12, 13, 0, 0, 0),
          desc: 'Power lunch',
      },
      {
          id: 8,
          title: 'Meeting',
          start: new Date(2015, 3, 12, 14, 0, 0, 0),
          end: new Date(2015, 3, 12, 15, 0, 0, 0),
      },
      {
          id: 9,
          title: 'Happy Hour',
          start: new Date(2015, 3, 12, 17, 0, 0, 0),
          end: new Date(2015, 3, 12, 17, 30, 0, 0),
          desc: 'Most important meal of the day',
      },
      {
          id: 10,
          title: 'Dinner',
          start: new Date(2015, 3, 12, 20, 0, 0, 0),
          end: new Date(2015, 3, 12, 21, 0, 0, 0),
      },
      {
          id: 11,
          title: 'Birthday Party',
          start: new Date(2015, 3, 13, 7, 0, 0),
          end: new Date(2015, 3, 13, 10, 30, 0),
      },
      {
          id: 12,
          title: 'Late Night Event',
          start: new Date(2015, 3, 17, 19, 30, 0),
          end: new Date(2015, 3, 18, 2, 0, 0),
      },
      {
          id: 12.5,
          title: 'Late Same Night Event',
          start: new Date(2015, 3, 17, 19, 30, 0),
          end: new Date(2015, 3, 17, 23, 30, 0),
      },
      {
          id: 13,
          title: 'Multi-day Event',
          start: new Date(2015, 3, 20, 19, 30, 0),
          end: new Date(2015, 3, 22, 2, 0, 0),
      },
      {
          id: 14,
          title: 'Today',
          start: new Date(new Date().setHours(new Date().getHours() - 3)),
          end: new Date(new Date().setHours(new Date().getHours() + 3)),
      },
      {
          id: 15,
          title: 'Point in Time Event',
          start: now,
          end: now,
      },
    ]
    this.state = { 
      name: 'React',
      events,
      showModal: false,
      atTop: true,
      multi: false,
      options: [
				{ value: 'R', label: 'Red' },
				{ value: 'G', label: 'Green' },
				{ value: 'B', label: 'Blue' }
			],
     }
  }
  handleSelect=()=>{
    console.log
    (
      "hhahhah"
    )
    this.setState({
      showModal: true
    })
    console.log
    (
      this.state
    )
  }
  // handleSelect = ({ start, end }) => {
  //   const title = window.prompt('New Event name')
   
  //   if (title)
  //     this.setState({
  //       events: [
  //         ...this.state.events,
  //         {
  //           start,
  //           end,
  //           title,
  //         },
  //       ],
  //     })
  // }
  render() { 
    
    
    return ( 
      <div>
        <p>
          A test for the React Big Calendar.
        </p>
        <div style={{ height: '500pt'}}>
          <Calendar
           selectable
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
            dayPropGetter={customDayPropGetter}
    slotPropGetter={customSlotPropGetter}
            // components={{
            //   dateCellWrapper: ColoredDateCellWrapper,
            // }}
            onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
            
          />
        </div>
        <div>
        <Modal show={this.state.showModal} animation={true}>
        <Modal.Header >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><i class="fa fa-list" aria-hidden="true"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Title of Event"
      aria-label="Username"
      aria-describedby="basic-addon1"
      name="title"
    />
  </InputGroup>
  {/* <Select.Creatable
					multi={multi}
					options={options}
					onChange={this.handleOnChange}
					value={ value}
					showNewOptionAtTop={atTop}
				/> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>

      </div>
     );
  }
}
Icons.propTypes = propTypes
export default Icons;


// export default function Icons() {
//   const classes = useStyles();
//   return (
//     <GridContainer>
//       <GridItem xs={12} sm={12} md={12}>
//         <Card plain>
//           <CardHeader plain color="primary">
//             <h4 className={classes.cardTitleWhite}>Material Design Icons</h4>
//             <p className={classes.cardCategoryWhite}>
//               Handcrafted by our friends from{" "}
//               <a
//                 href="https://design.google.com/icons/?ref=creativetime"
//                 target="_blank"
//               >
//                 Google
//               </a>
//             </p>
//           </CardHeader>
//           <CardBody>
//             <Hidden only={["sm", "xs"]}>
//               <iframe
//                 className={classes.iframe}
//                 src="https://material.io/icons/"
//                 title="Icons iframe"
//               >
//                 <p>Your browser does not support iframes.</p>
//               </iframe>
//             </Hidden>
//             <Hidden only={["lg", "md"]}>
//               <GridItem xs={12} sm={12} md={6}>
//                 <h5>
//                   The icons are visible on Desktop mode inside an iframe. Since
//                   the iframe is not working on Mobile and Tablets please visit
//                   the icons on their original page on Google. Check the
//                   <a
//                     href="https://design.google.com/icons/?ref=creativetime"
//                     target="_blank"
//                   >
//                     Material Icons
//                   </a>
//                 </h5>
//               </GridItem>
//             </Hidden>
//           </CardBody>
//         </Card>
//       </GridItem>
//     </GridContainer>
//   );
// }
