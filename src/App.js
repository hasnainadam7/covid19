import React from 'react'  
import './App.css';
import ButtonAppBar from './components/Header'

import MainGrid from './components/MainGrid'
function App() {
  return (
<div style={{backgroundColor:'#f3fab6',color:"#ffe77aff"}}>
<>
<ButtonAppBar />
<MainGrid />
</>
</div>
    );
}

export default App;
