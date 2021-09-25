import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import { storage, listRef } from '../firebase';
import { ref, getDownloadURL, listAll } from 'firebase/storage';

const BookList = () => {
  const [downurl, setDownurl] = useState('');
  const [references, setReferences] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    listAll(listRef)
      .then((res) => {
        const data = res.items;
        setReferences(data);
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }, []);

  function handleSubmit(list, key) {
    setIndex(key);
    // console.log(list);
    getDownloadURL(ref(storage, list))
      .then((url) => {
        setDownurl(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }
  // console.log(references);

  return (
    <div className="flex flex-col bg-primary rounded-lg justify-center w-3/4 mt-16 z-20 shadow-pn mb-32">
      {references.map((ref, idx) => {
        let link = 'gs://' + ref._location.bucket + '/' + ref._location.path_;
        return (
          <div key={idx}>
            <ListItem
              title={ref.name.slice(0, -4)}
              idx={idx}
              link={link}
              index={index}
              downurl={downurl}
              handleSubmit={handleSubmit}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
