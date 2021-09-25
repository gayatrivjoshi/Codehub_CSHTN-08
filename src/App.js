import LandingPage from "./pages/LandingPage";
import CoursesPage from "./pages/CoursesPage";
import RoadmapPage from "./pages/RoadmapPage";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import QuizPage from "./pages/QuizPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "./firebase.js";
import VideoPage from "./pages/VideoPage";
import { VideoIdContext } from "./context/VideoIdContext";
import { SelectQuizContext } from "./context/SelectQuizContext";
import { UserContext } from "./context/UserContext";

function App() {
  const [videoId, setVideoId] = useState(0);
  const [selectQuiz, setSelectQuiz] = useState(0);
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="App select-none">
        <Switch>
          <UserContext.Provider value={{ user, setUser }}>
            <VideoIdContext.Provider value={{ videoId, setVideoId }}>
              <SelectQuizContext.Provider value={{ selectQuiz, setSelectQuiz }}>
                <Route exact path="/">
                  <LandingPage user={user} setUser={setUser} />
                </Route>
                <Route path="/courses">
                  <CoursesPage />
                </Route>
                <Route path="/roadmap">
                  <RoadmapPage />
                </Route>
                <Route path="/books">
                  <BooksPage />
                </Route>
                <Route path="/quiz">
                  <QuizPage />
                </Route>
                <Route path="/signup">
                  <SignupPage />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/video">
                  <VideoPage />
                </Route>
              </SelectQuizContext.Provider>
            </VideoIdContext.Provider>
          </UserContext.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
