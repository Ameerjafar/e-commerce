import { LoginComponent } from "./component/LoginComponent";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginComponent />}></Route>
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App