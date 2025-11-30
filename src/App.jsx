import './App.css';

function App() {
  return (
    <div className="app-root">
      <div className="phone-frame">
        <iframe
          src="/ui/dist/index.html"
          title="LB Phone"
          className="phone-content"
        />
      </div>
    </div>
  );
}

export default App;
