import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <>
      <Link to='/'><button>Home</button></Link>
      <Link to='example1'><button>Prop Types</button></Link>
      <Link to='example2'><button>Conditional Rendering</button></Link>
      <Link to='example3'><button>Ref Example</button></Link>

    </>
  )
}
