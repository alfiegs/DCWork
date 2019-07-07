





//WHAT WAS ORGINIALLY HERE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





//NOTES ON WHAT THIS DOES

// import React from 'react';


// class App extends React.Component {  //inheriting from base class
//   constructor(props){
//     super(props) //passing props to base component
//   }
//   render(){
//     return //what is displayed on html page (can only be one thing - only one div, e.g., but it can have things nested in it)
//     <div>hello</div>
//   }
// }

// export default App; //exports this component to index.js so that index can render App component onto page







//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//MAKE IT FROM TEMPLATE
//to get this template, use extension React and Redux Snippets
//type cc then tab

import React from 'react';
import Nav from './nav.js'; //importing from nav component in src
import Footer from './footer.js'; 
import Body from './body.js'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    let list = ['shampoo', 'oranges', 'apples', 'chicken', 'soap']
    let newList = list.map((listItem)=>{
      return <Footer item={listItem} />
      // the thing that gets returned here will appear down below where {newList} is in the div
      // the thing that getes returned is <Footer item="shampoo"> and then <Footer item="oranges"> etc for each of the items in newList
    })
    let images = ["https://cdn1-www.dogtime.com/assets/uploads/2010/12/puppies.jpg",
  "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg",
"https://www.thesprucepets.com/thmb/k5-1yRjQK-VFZ6Z-YCAgddikeQU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/puppy-samoyed-boy-990077480-5c89719646e0fb00012c67e8.jpg"]
let newImages = images.map((newImageItem)=>{
  return <Body image={newImageItem} />
})
    return (
      <div>
        {/* navItem is being sent to nav.js, etc */}
        <Nav navItem="Contact Us" /> 
        <Body content="lorem ipsum" imgURL="" />
      {newImages}
      {newList}
      </div>
    );
  }
}


App.propTypes = {
  
};

export default App
