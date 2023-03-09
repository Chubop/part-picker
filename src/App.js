import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Theme from "./theme/Theme";


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </ThemeProvider>

  );
}

export default App;
