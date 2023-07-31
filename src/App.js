import '~/App.css';
import Content from '~/Content';
import { useState } from 'react';
import Button from '~/components/Button';

function App() {
  const [isShow, setShow] = useState(false)


  const setContent = () => {
    setShow(!isShow)
  }

  return (
    <div className="App">
      <button
        style={{ padding: "24px 52px", margin: "5rem 0 2rem" }}
        onClick={setContent}>
        Show
      </button>
      <div>
        { isShow && <Content/>}
      </div>

      <Button />

    </div>
  );
}

export default App;
