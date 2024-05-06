import React,{useState} from "react";

function MyComponent(){

    const [cars,setCar]=useState([]);
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const [carMake,setCarMake]=useState("");
    const [carModel,setCarModel]=useState("");

    function handleAddCar(){

        const newCar={year:carYear,
                      make:carMake,
                      model:carModel};

        setCar(c=>[...c,newCar]);

        setCarMake("");
        setCarYear(new Date().getFullYear());
        setCarModel("");
    }

    function handleRemoveCar(index){
        setCar(cars.filter((_,i)=>i!=index))
    }  

    function handleYearChange(e){
        setCarYear(e.target.value);
    }

    function handleMakeChange(e){
        setCarMake(e.target.value);

    }

    function handleModelChange(e){
        setCarModel(e.target.value);
    }

    return(
    <>
        <div>
            <h2>List of Car Objects</h2>

            <ul className="listItem">
                {cars.map((car,index)=>
                <li key={index} onClick={()=>handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange}/><br />

            <input type="text" value={carMake} placeholder="Enter Car Manufacturer" onChange={handleMakeChange}/><br />

            <input type="text" value={carModel} placeholder="Enter Car Model" onChange={handleModelChange}/><br />

            <button onClick={handleAddCar}>Add Car</button>
        </div>
    </>
    );
}

export default MyComponent