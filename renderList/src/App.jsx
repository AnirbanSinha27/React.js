import List from "./List"

function App() {
  const fruits=[{id:1,name:'apple',calories:95},
                {id:2,name:'banana',calories:103},
                {id:3,name:'orange',calories:24},
                {id:4,name:'coconut',calories:98},
                {id:5,name:'pineapple',calories:52}];


  const vegetables=[{id:1,name:'Cauliflower',calories:102},
                    {id:2,name:'Potato',calories:92},
                    {id:3,name:'Onion',calories:54},
                    {id:4,name:'Broccoli',calories:99},
                    {id:5,name:'Carrot',calories:16}];


    return(
    <>
      {fruits.length>0?<List items={fruits} category='Fruits'></List>:null}
      {vegetables.length>0?<List items={vegetables} category='Veggies'></List>:null}
    </>
    );
}

export default App
