import { Button, ButtonGroup} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

const SelectButton = withStyles({
   root: {
     boxShadow: 'none',
     textTransform: 'none',
     fontSize: 16,
     padding: '6px 12px',
     border: '1px solid',
     lineHeight: 1.5,
     backgroundColor: '#0063cc',
     borderColor: '#0063cc',
     
     '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
     },
     '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
     },
     '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
     },
      margin: '1px'
   },
 })(Button);

export default function Switch ({handleSwitch}) {
  const urlSmall = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
  const urlBig = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"  

  return (
  <div>
    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
      <SelectButton onClick={() => handleSwitch(urlSmall)} 
        variant="contained" color="primary" disableRipple >
        Get Small Dataset
      </SelectButton>
      <SelectButton onClick={() => handleSwitch(urlBig)} 
        variant="contained" color="primary" disableRipple >
        Get Big Dataset
      </SelectButton>
      </ButtonGroup>
    </div>
  )
}
