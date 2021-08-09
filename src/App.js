import React from 'react';
import ReactDOM from 'react-dom';

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
let state;
function useState(num){
  state=state || num;  //初始值
  function setState(newstate){
    state=newstate
    render()
  }
  return [state,setState]
}

let oldDeps;
function useEffect(callback, deps) {
  const hasChangedDeps = oldDeps ? !deps.every((el, i) => el === oldDeps[i]) : true;  //新老参数是否相等
  if(!deps || hasChangedDeps ) {
    callback();
    oldDeps = deps;
  }
}

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('update', count)
  }, [count])

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Add count </button>
    </div>
  );
}


export default App;
