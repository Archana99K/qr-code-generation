// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import QRCodeGenerator from './components/qrcodegeneration'


// function App() {




//   // const [count, setCount] = useState(0)

//    return (
//     <Router>
//       <AuthProvider>
//         <Routes>

//           <Route path="/QRCodeGenerator" element={<QRCodeGenerator/>}/>

//         </Routes>
//       </AuthProvider>
//     </Router>
//   //   <>
//   //     <div>
//   //       <a href="https://vite.dev" target="_blank">
//   //         <img src={viteLogo} className="logo" alt="Vite logo" />
//   //       </a>
//   //       <a href="https://react.dev" target="_blank">
//   //         <img src={reactLogo} className="logo react" alt="React logo" />
//   //       </a>
//   //     </div>
//   //     <h1>Vite + React</h1>
//   //     <div className="card">
//   //       <button onClick={() => setCount((count) => count + 1)}>
//   //         count is {count}
//   //       </button>
//   //       <p>
//   //         Edit <code>src/App.jsx</code> and save to test HMR
//   //       </p>
//   //     </div>
//   //     <p className="read-the-docs">
//   //       Click on the Vite and React logos to learn more
//   //     </p>
//   //   </>
//    )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QRCodeGenerator from './components/qrcodegeneration'; // This matches your actual file name
// index.js or App.js
import './App.css';
import Resume from './components/resume';

// import AuthProvider from './path/to/AuthProvider'; // Uncomment and fix path if you have AuthProvider

function App() {
  return (
    <Router>
      {/* Remove AuthProvider for now if it's causing issues */}
      <Navbar />
      <Routes>
        <Route path="/" element={<div style={{padding: '20px'}}><h1>Home Page</h1></div>} />
        <Route path="/QRCodeGenerator" element={<QRCodeGenerator/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </Router>
  );
}

export default App;