import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from 'components/pages/Login/Login'
import Main from 'components/pages/Main/Main'
import Header from 'components/Header'
import { useSelector } from "react-redux";
import AppWrapper from "styles/App";

const App = () => {
  const isLogin = useSelector(state => state.user.isLogin)

  return (
    <AppWrapper>
      <Header />
      <BrowserRouter>
        <Routes>
          {!isLogin ? <Route path="/" element={<Login />} />
            : <Route path="/" element={<Main />} />
          }
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
