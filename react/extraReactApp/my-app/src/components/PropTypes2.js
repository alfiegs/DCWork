import React from 'react';
import PropTypes from 'prop-types';


const PropTypes2 = (props) => {
  return (
    <>
      {props.count}
      {props.title}
    </>
  )
}

PropTypes2.propTypes = {
    count: PropTypes.number,
    title: PropTypes.string
}


// class PropTypes2 extends React.Component {
//     constructor(props) {
//         super(props);
        
//     }

//     render() {
//         return (
//             <>
//                 {this.props.count}
//                 {this.props.title}
//             </>
//         );
//     }
// }


// PropTypes2.propTypes = {
//     count: PropTypes.number,
//     title: PropTypes.string
// };

export default PropTypes2
