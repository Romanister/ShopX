import Home  from '../pages/Home'

import React from 'react';
import {Routes, Route,} from 'react-router-dom';


const Navigation = () => {
    return(
<Routes>

<Route path="/" element={<Home/>}/>
<Route path="*" element={<Home/>}/>

    
</Routes>   
    )
}

export default Navigation
