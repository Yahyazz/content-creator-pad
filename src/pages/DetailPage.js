import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase-config';
import ContentArticleDetail from '../components/ContentArticleDetail';

function DetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    id && getBlogDetail();
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, 'articles', id);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
  };
  return (
    <div className="container-big w-full h-auto py-8">
      <ContentArticleDetail
        author={blog?.author}
        title={blog?.title}
        description={blog?.description || ''}
        duration={blog?.duration}
        createdAt={blog?.createdAt}
      />
    </div>
  );
}

export default DetailPage;
