import Header from "./Header";
import Body from "./Body";
import Login from "./Login";
import Signup from "./Signup";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-orange-100 font-sans">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Body />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
