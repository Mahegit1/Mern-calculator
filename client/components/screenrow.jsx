import React from 'react';
// Screen row component is written as a functional component
// it receives and displays (in an input field) a props (property) of value from
// it's parent component
const ScreenRow = (props) => {
return (
<div className="screen-row" >
<input type="text" style = {{alignContent:'end',
fontWeight: 'bold',
color:'grey',
fontSize:'20px',
width:'600px',

height:'30px'}} sreadOnly value={props.value}/>
</div>
)
}
// we describe the props (property) that the parent element isrequired to pass
// into this component
ScreenRow.propTypes = {
value: React.PropTypes.string.isRequired
}
export default ScreenRow;