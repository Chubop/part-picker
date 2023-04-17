import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Upload from "./pages/Upload";
import Theme from "./theme/Theme";


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/builder" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/upload" element={<Upload/>}/>

      </Routes>
    </ThemeProvider>

  );
}

export default App;
