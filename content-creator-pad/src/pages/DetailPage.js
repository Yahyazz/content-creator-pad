import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase-config';

function DetailPage() {
  const {id} = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    id && getBlogDetail();
  }, [id])

  const getBlogDetail = async () => {
    const docRef = doc(db, 'articles', id);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
  }

  return (
    <div className="container-big w-full h-auto py-8">
      <div className="w-full h-auto flex flex-col gap-y-8">
        <div className="w-full">
          <p className="font-bold text-base mb-4">Author : {blog?.author}</p>
          <div className="flex justify-between sm:justify-start gap-x-4">
            <p className="w-fit text-sm font-light">{blog?.createdAt}</p>
            <p className="w-fit text-sm font-light">{blog?.duration} min to read</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="font-bold text-3xl text-center sm:text-left mb-4">{blog?.title}</h1>
        <p className="text-lg font-montserrat">{blog?.description}</p>
      </div>
    </div>
  );
}

export default DetailPage;
