// import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {

  

  const{gif, loading, fetchData} = useGif();

  // function clickHandler(){
  //   fetchData();
  // }

  return (
    <div className='bg-green-400 w-1/2 lg:w-6/12  rounded-lg border border-black 
    flex items-center flex-col gap-y-3 md:gap-y-8 mt-4 h-[350px] md:h-full'>
        <h3 className='bg-green-400 text-sm md:text-lg font-bold mt-4 py-2 px-4 rounded uppercase underline'>A Random Gifs</h3>

        {
          loading ? (<Spinner/>) : 
          (<img src={gif} alt="" loading='lazy' className='w-3/4 md:w-[300px] h-[200px]'/>)
        }

        <button onClick={() => fetchData()}
        className='w-10/12 bg-yellow-100 text-lg py-2 rounded-lg font-semibold mb-5'>
        Generate
        </button>
    </div>
  )
}

export default Random