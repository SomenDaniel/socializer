// import {
//   getUsersData,
//   writeUserData,
//   testUsersData,
//   readOnce,
//   writeNewPost,
//   deleteData,
// } from "./database/firebase-config";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import RegistrationPage from "./components/Registration/RegistrationPage";
import LoginPage from "./components/Login/LoginPage";
function App() {
  //   const test = () => {
  //     writeUserData("anyadpicsaja", "geci", "zsolti@afereg.szenny");
  //   };

  //   const testos = () => {
  //     getUsersData();
  //     //testUsersData();
  //   };

  //   const egyszer = () => {
  //     readOnce();
  //   };

  //   const update = () => {
  //     writeNewPost("anyadpicsahja", "parasztlengő", "penisz@pumpa.com");
  //   };

  //   const deleteDa = () => {
  //     deleteData("/test/anyadpicsajha");
  //   };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/registration" element={<RegistrationPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<WelcomePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
