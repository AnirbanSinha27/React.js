import React,{useState} from "react";

function MyComponent(){

    const [foods,setFoods]=useState(["Apple","Banana","Orange"])

    function handleAddFood(){
        const element=document.getElementById("inputId").value;
        document.getElementById("inputId").value="";
        setFoods(f=>[...f,element]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=>i!=index))
    }

    return(
        <>
            <div>
                <h2>List of Foods</h2>
                <ul>
                    {foods.map((food,index)=>
                    <li key={index} onClick={()=>handleRemoveFood(index)}>
                        {food}
                    </li>)}
                </ul>
                <input type="text" id="inputId" placeholder="Enter the name of the food"/>
                <button onClick={handleAddFood}>Add Food</button>
            </div>
        </>
    );
}

export default MyComponent