import { writeUserData } from "./database/firebase";

function App() {
  const test = () => {
    writeUserData("anyadpicshaja", "zsolti", "zsolti@afereg.szenny");
  };

  return (
    <>
      <h1>szoszimo</h1>
      <button onClick={test}>tesztoszteron</button>
    </>
  );
}

export default App;
