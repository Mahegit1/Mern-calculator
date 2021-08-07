import React from 'react'; // import react module
// create our Button component as a functional component
const Button = (props) => {
return (
<input
type="button"
style = {{backgroundColor:'#1AD0D9',justifyContent:'center',
alignItems:'center',
fontWeight: 'bold',
color:'red',
fontSize:'20px',
width:'100px',
height:'30px'}}
className={props.type === 'action' ? 'button action-button' :
'button input-button'}
onClick={props.handleClick}
value={props.label}

/>
);
}


// describe our expected props types
Button.propTypes = {
type: React.PropTypes.string.isRequired,
handleClick: React.PropTypes.func.isRequired,
label: React.PropTypes.string.isRequired
}

// export our button component.
export default Button;
