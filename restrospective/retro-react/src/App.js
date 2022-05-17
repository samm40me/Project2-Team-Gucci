function NavBar() {
  return (
    <div>NavBar</div>
  )
}

function LeftMenuBar() {
  return <div>Let Menu Bar</div>;
}

function MainPage() {
  return <div>Main Page</div>;
}

function App() {
  return (
    <div>
      <NavBar />
      <LeftMenuBar />
      <MainPage />
    </div>
  );
}

export default App;
