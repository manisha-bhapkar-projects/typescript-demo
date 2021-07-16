import React, { Children, ReactElement, ReactNode, useState } from 'react';
import './App.css';

// Conditional props
function Heading({ title }: { title: string }) {
  return (
    <h1>{title}</h1>
  )
}
function HeadingWithChild({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>{children}</h1>
      <div>data</div>
    </>
  )
}

//default props
const defaultContainerProps = {
  heading: <strong>My Container Heading</strong>
}
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;

function Container({ heading, children }: ContainerProps) {
  return (
    <>
      <h1>{heading}</h1>
      <div>{children}</div>
    </>
  )
}
Container.defaultProps = defaultContainerProps;


//Functional props
function ShowText(
  { header, children }: {
    header?: (num: number) => ReactNode;
    children: (num: number) => ReactNode;
  }

) {
  // const [count, setCount] = useState<number | null>(1);
  //if we want null state
  const [count, setCount] = useState(1);
  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
      <div>{children(count)}</div>
      <h2>{header && header?.(count)}</h2>
    </>
  )
}


//List 
function List<ListItems>({ items, render }: {
  items: ListItems[],
  render: (items: ListItems) => ReactNode
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  )
}
function App() {
  return (
    <div>
      <Heading title="Hello Manisha"></Heading>
      <HeadingWithChild>
        <b>Good </b>Afternoon</HeadingWithChild>
      <Container>Container Class</Container><br />
      {/* <ShowText header = {(num: number) =><div>Header {num}</div>}
        >{(num: number) =><div>{num}</div>}</ShowText> */}

      <ShowText>{(num: number) => <div>{num}</div>}</ShowText>

      <List items={["Mumbai", "Ahmedabad", "Pune"]}
       render={(item) => <div>{item}</div>}></List>
    </div>
  );
}

export default App;
