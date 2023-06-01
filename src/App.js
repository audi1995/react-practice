import { useEffect, useState } from 'react';
import './App.css';
import Layout from './componenets/layout';
import Footer from './componenets/footer';
import Button from './componenets/button';
import ClassButton from './componenets/classbutton';
import Form from './componenets/form';



function App() {
  const [test, setTest] = useState(true);
  const incrementCounter = () => {
    setTimeout(() => {
      setTest(false)
    }, 10000);

  }
  useEffect(() => {
    incrementCounter()
  }, [test])


  return (<div className="App">
    <Layout mmyAttribute="test" />
    <>Hello World</>
    <ClassButton exam = "btech" />    
    <Form/>
  </div>
  );
}


export default App;
