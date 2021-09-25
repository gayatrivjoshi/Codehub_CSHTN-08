import Navbar from '../components/Navbar';
import React, { useState, useEffect, useContext } from 'react';
import { storage, vidRef } from '../firebase';
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { VideoIdContext } from '../context/VideoIdContext';
import VideoOver from '../components/VideoOver';

const VideoPage = () => {
  const { videoId, setVideoId } = useContext(VideoIdContext);
  const [videoRef, setVideoRef] = useState('');
  const [downUrl, setDownUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listAll(vidRef)
      .then((res) => {
        const data = res.items;
        setVideoRef(data);
      })
      .catch((error) => {
        console.error('list error', error);
      });
  }, []);

  const handleCall = (e) => {
    e.preventDefault();
    const rec = videoRef[videoId - 1];
    console.log(rec);
    let link = 'gs://' + rec._location.bucket + '/' + rec._location.path_;
    console.log(link);
    getDownloadURL(ref(storage, link))
      .then((url) => {
        console.log('harsh', url);
        setDownUrl(url);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="bg-primary h-screen">
      <Navbar setVideoId={setVideoId} />
      <VideoOver />
      <button onClick={(e) => handleCall(e)}>
        {loading ? (
          <div className="w-screen flex justify-center h-96 items-center text-center">
            <p className=" text-2xl font-sans font-medium rounded-md text-secondary-lightgray border-2 py-2 px-8 border-secondary-lightgray">
              Start the course
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </button>
      {loading ? (
        <p></p>
      ) : (
        <video className="w-screen h-screen -mt-6" controls>
          <source src={downUrl} type="video/mp4"></source>
        </video>
      )}
    </div>
  );
};

export default VideoPage;
