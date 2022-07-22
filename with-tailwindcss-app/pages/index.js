import { useRef } from 'react';

const Home = () => {
  const vidRef = useRef(null);
  const vidRef2= useRef(null)
  const handlePlayVideo = () => {
    vidRef.current.play();
    vidRef2.current.play()
  }

  return (
    <div className="flex min-h-screen flex-col items-center py-2 gap-10">
      <div className='flex justify-center gap-14'>
        <video ref={vidRef2} style={{ width: '400px', height: '400px' }} controls={true}>
          <source src="/sample-5s.mp4" />
          </video>
        <video ref={vidRef} style={{ width: '400px', height: '400px' }} controls={true}>
          <source src="/sample-10s.mp4" />
        </video>
      </div>
      <button onClick={handlePlayVideo} className='bg-blue-500 hover:bg-blue-700 w-32 h-10 text-white font-bold py-2 px-4 rounded'>Play!</button>


    </div>
  )
}

export default Home
