import React from 'react'

const Video = () => {
  return (
    <div className='absolute -z-10 w-full object-cover top-0 h-full'>
    <video autoPlay muted loop className='w-[1400px]'>
      <source src={"/video3.mp4"} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  
  )
}

export default Video

// import React, { useEffect } from 'react';
// import '../styles/stickyVideo.css';

// const Video = () => {
//   useEffect(() => {
//     const videoContainer:any = document.querySelector('.video-container');

//     const handleScroll = () => {
//       const threshold = 100; // Set the threshold as needed
//       if (window.scrollY > threshold) {
//         videoContainer.classList.remove('sticky-video');
//       } else {
//         videoContainer.classList.add('sticky-video');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="video-container sticky-video">
//       <video controls autoPlay muted loop className="w-full">
//         <source src={"/world2.mp4"} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default Video;
