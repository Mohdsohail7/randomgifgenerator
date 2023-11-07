// import axios from 'axios';
import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {

  // const[gif, setGifs] = useState('');

  // const[loading, setLoading] = useState('false');

  const[tag,setTag] = useState('');

  
  // async function fetchData(){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url);
  //   const imgSource = data.data.images.downsized_large.url;
  //   setGifs(imgSource);
  //   setLoading(false);
  // }

  // useEffect( () => {
  //   fetchData();
  // },[] )

  const{gif, loading, fetchData} = useGif(tag);

  // function clickHandler(){
  //   fetchData(tag);
  // }

  // function changeHandler(event){
  //     setTag(event.target.value);
  // }

  return (
    <div className='bg-blue-400 w-1/2 lg:w-6/12 rounded-lg border border-black 
    flex items-center flex-col gap-y-3 md:gap-y-8 mt-6 h-[350px] md:h-full'>
        <h3 className='bg-blue-400 text-sm md:text-lg font-bold mt-4 py-2 px-4 rounded uppercase underline'>Random {tag} Gifs</h3>

        {
          loading ? (<Spinner/>) : 
          (<img src={gif} alt="" loading='lazy' className=' w-3/4 md:w-[300px] h-[200px]'/>)
        }

        <input 
          className='w-10/12 bg-yellow-100 text-sm md:text-lg py-2 rounded-lg mb-0.5 text-center'
          onChange={(event) => setTag(event.target.value)}
          value={tag}
          placeholder='search here'
        />

        <button onClick={() => fetchData()}
        className='w-10/12 bg-yellow-100 text-lg py-2 rounded-lg font-semibold mb-5'>
        Generate
        </button>
    </div>
  )
}

export default Tag