import React, { useState } from 'react';
import './Home.css';
import Header from '../../Header/Header';
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay';

function Home(){
    const [category,setCategory] = useState("All");
    return(<>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </>)
}
export default Home;