const { useState } = React;

function Factorial() {
  const [val, setVal] = useState("");
  const [res, setRes] = useState("—");
  const calc = () => {
    const n = parseInt(val);
    if (isNaN(n) || n < 0) { setRes("Enter a valid non-negative integer."); return; }
    let f = 1n; for (let i=2n;i<=BigInt(n);i++) f*=i;
    setRes(`Factorial(${n}) = ${f.toString()}`);
  };
  return (<div className="card">
    <label>Enter a number</label>
    <input type="number" value={val} onChange={e=>setVal(e.target.value)} />
    <div className="controls">
      <button className="primary" onClick={calc}>Calculate</button>
      <button className="secondary" onClick={()=>{{setVal('');setRes('—')}}}>Clear</button>
    </div>
    <div className="result">{res}</div>
  </div>);
}
function App(){ return <Factorial/>; }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
