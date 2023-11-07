import Random from "./components/Random";
import Tag from "./components/Tag";



export default function App() {
  return (

    <div className="w-full h-screen flex flex-col background relative items-center overflow-x-hidden">
      <h1 className="bg-white mt-10 w-6/12 flex justify-center items-center 
      p-4 text-xl md:text-3xl font-bold rounded-lg">RANDOM GIFS</h1>

      <div className="flex flex-col w-full mt-4 md:mt-10 items-center">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
