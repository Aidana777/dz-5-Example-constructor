import React from "react";
import './mount.css'


const Component = (props) => {
    React.useEffect(() => {
      console.log(`useEffect: ${props.name}`);
      return () => {
        console.log(`useEffect return: ${props.name}`);
      };
    });
    React.useLayoutEffect(() => {
      console.log(`useLayoutEffect: ${props.name}`);
      return () => {
        console.log(`useLayoutEffect return: ${props.name}`);
      };
    });
    console.log(`render: ${props.name}`);
    return (
      <div className={props.name}>
        {props.children}
        {props.name}
      </div>
    );
  };
  
  export default function App() {
    const [mount, setMount] = React.useState(false);
    const handleClick = () => setMount((prev) => !prev);
    return (
      <div className="App">
        <button onClick={handleClick}>{mount ? "Unmount" : "Mount"}</button>
        {mount && (
          <>
            <Component name="a">
              <Component name="b">
                <Component name="c" />
              </Component>
            </Component>
            <Component name="d" />
          </>
        )}
      </div>
    );
  }
  