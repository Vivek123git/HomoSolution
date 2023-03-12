import React,{useState  , useEffect} from 'react'
import axios from 'axios'


const Todo = () => {
    const [inputData, setInputData] = useState()
    const [item, setItem] = useState([])
    const [data , setData]=useState([])
      useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/todos').then((data)=>{
           setData(data.data)

     })
   
      },[])

      
    const clickHandle = () => {
        if (!inputData) {

        }
        else {
            setItem([...item, inputData])
            setInputData('')
        }

    }

    //
    
const deleteTodo=async(id)=>{
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const newList=data.filter((elem,ind) =>{
        return ind!==id;

    });
    setData(newList);
}

//
    const deleteEvent=(id)=>{
        console.log(id);
        const updateditems=item.filter((elem,ind)=>{
            return ind !== id;
        });
        setItem(updateditems);
    }

    return (
        <div className='todo'>
            <div className='head'>
                <h2>Add Todo</h2>
            </div>
            <div >
                <input className='txt' type="text" placeholder='Add Todo' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                <button className='btn' onClick={clickHandle} >Add</button>
                </div>
            

            <div >
                {
                    item.map((elem, ind) => {
                        return (
                            <div key={ind}>
                                <h3>{elem}</h3>
                                <button className='btn' onClick={()=>deleteEvent(ind)}>Delete</button>
                            </div>


                        )
                    })
                }

{
                    data.map((elem, ind) => {
                        return (
                            <div key={ind}>
                                <h3>{elem.title}</h3>
                                <button className='btn' onClick={()=>deleteTodo(elem.id)}>Delete</button>
                            </div>


                        )
                    })
                }

              
            </div>
 
            
         </div>
    )
}
export default Todo
