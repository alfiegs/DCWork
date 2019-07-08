
//PropTypes Documentation
//https://reactjs.org/docs/typechecking-with-proptypes.html


//checks to see that imported prop is right type (in this case, "integer")
//if it is a string, you will get message in the console

// PropTypes2.propTypes = {
//     count: PropTypes.integer
// };



//Conditional Rendering
//https://reactjs.org/docs/conditional-rendering.html
//render a component based on whether some condition is true
//e.g. if logged on, execute ComponentX, if logged off, execute ComponentY

//Conditional Rendering uses Ternary If Statement - see below

// Ternary If Statement
// (condition) ? (code to execute if true) : (code to execute if true)
// {isLoggedIn ? <PropTypes1 count={0} title="hello" /> : null}
//EX.
//if isLoggedIn is true, execute PropTypes1, else do nothing



// class based vs functional component
//functional components for dumb components (presentational components)
//class for smart components that need state



// REFS