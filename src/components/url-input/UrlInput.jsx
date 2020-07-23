import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const UrlInput = ({onChange, Url, onSubmit}) => {
  return (
  <>
   <form onSubmit={onSubmit}>
     <Input defaultValue='API URL' onChange={onChange} value={Url} name="text"/>
     <Button>Submit</Button>
   </form>
  </>
  )
}

export default UrlInput;