import React  from 'react';
import { FormGroup, FormControl,  } from 'react-bootstrap';


const Search = ({validation , handleChange}) => {
  return (
    <form>
    <FormGroup
      controlId="formBasicText"
      validationState={validation}
      className="small"
    >
      <FormControl
        type="search"
        placeholder="Search item..."
        onChange={handleChange}
      />
      <FormControl.Feedback/>
    </FormGroup>
  </form>);
}


export default Search;
