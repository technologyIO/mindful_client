
import axios from 'axios';

const AllTodos = async() => {
    // const [todo, setTodo] = useState([]);
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        // Optional: Axios doesn't have a native revalidate option like fetch,
        // but you can manually handle caching or revalidation if needed.
      const todos = res.data

  return (
    <>
        <div>
            {/* <button className='bg-green-500 px-8 py-3 rounded-lg shadow-lg '  onClick={fetch}>Fetch</button>
            <button className='bg-green-500 px-8 py-3 rounded-lg shadow-lg ' onClick={()=>setTodo([])}>remove</button> */}
        </div>

        <div className='h-[500px] overflow-scroll'>
        
            {/* {
                todos?.map((todo)=>{
                    return(
                        <div>
                            <h1>{todo.id}</h1>
                            <h1>{todo.title}</h1>
                        </div>
                    )
                })
            } */}
        </div>
    </>
  )
}

export default AllTodos