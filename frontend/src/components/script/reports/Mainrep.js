import React from 'react';
import { connect } from 'react-redux';
import { Tab, Nav } from 'react-bootstrap';
import Upraisalrep from './Upraisalrep';
import Salaryrep from './Salaryrep';
import Leaverep from './Leaverep';
import Timesheetrep from './Timesheetrep';
import Viewdepartment from '../department/Viewdepartment';

const Mainrep = (props) => {
  return (
    <div className="row pt-5">
      <div className="col-lg-12">
        <Tab.Container defaultActiveKey="upraisalrep">
          <Nav variant="pills" className="acount__nav justify-content-center mb-3">
            <Nav.Item>
              <Nav.Link eventKey="upraisalrep" className="btn btn-success">
                Upraisal
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="salaryrep" className="btn btn-success">
                Salary
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="leaverep" className="btn btn-success">
                Leave
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="timerep" className="btn btn-success">
                Timesheet
              </Nav.Link>
            </Nav.Item>
            
           
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="upraisalrep">
              <Upraisalrep />
            </Tab.Pane>
            <Tab.Pane eventKey="salaryrep">
              <Salaryrep />
            </Tab.Pane>
            <Tab.Pane eventKey="leaverep">
              <Leaverep />
            </Tab.Pane>
            <Tab.Pane eventKey="timerep">
              <Timesheetrep />
            </Tab.Pane>
            
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

const mapStateToProps = () => {
  return {
   
  };
};

export default connect(mapStateToProps)(Mainrep);
