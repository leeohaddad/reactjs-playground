import { useContext } from 'react'
import { MyContext } from './MyContextProvider'

const MyContextConsumer = () => {
  const { text, setText } = useContext(MyContext);

  // TODO: check why this is showing an empty text the first time the button is clicked
  const toggleText = () => {
    if (text == 'Button was clicked!') {
      setText('Button was clicked again!');
    } else if (text == 'Button was clicked again!') {
      setText('Button was clicked!');
    } else {
      setText('Button was clicked!');
    }
  }
  
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText(toggleText)}>Change Text</button>
    </div>
  );
}

export default MyContextConsumer;
