import React from 'react';
import { Button, Form, FormControl, Navbar } from "react-bootstrap";

const CardNameInput = ({additionalClassNames=''}) => {
  return(
    <Form inline className={additionalClassNames}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
      <Button variant="outline-success">Search</Button>
    </Form>
  )
};

export default CardNameInput;