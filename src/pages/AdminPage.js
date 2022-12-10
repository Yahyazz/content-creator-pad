import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ContentListSearchBar from '../components/ContentListSearchBar';
import AdminContentListWrap from '../components/AdminContentListWrap';
import { GoPlus } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { auth, db } from '../utils/firebase-config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const [contents, setContents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  const articlesCollectionRef = collection(db, 'articles');

  useEffect(() => {
    const getContents = async () => {
      const data = await getDocs(articlesCollectionRef);
      setContents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getContents();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      }
    });
  });

  const deleteArticle = async (id) => {
    const articleDoc = doc(db, 'articles', id);
    await deleteDoc(articleDoc);
    const data = await getDocs(articlesCollectionRef);
    setContents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  async function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredContents = contents.filter((content) => {
    return content.title.toLowerCase().includes(keyword.toLowerCase());
  });

  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <section className="container-big w-full h-auto min-h-[calc(100vh-5rem)] flex items-center gap-y-8 md:gap-0">
        <div className="w-full md:w-1/2 flex flex-col gap-y-4 px-8 text-center sm:text-left">
          <h2 className="font-extrabold text-4xl break-words">
            Welcome, <span className="text-primary-blue">{user?.email}</span>
          </h2>
          <p className="text-xl">
            Start creating content to share your knowledge on how to become a Content Creator.
          </p>
          <Link to="/content/add" className="w-full sm:w-2/3 mt-4">
            <button type="submit" className="btn-primary w-full">
              <GoPlus className="my-auto" />
              <p>
                Add <span className="hidden sm:inline"> more </span> content
              </p>
            </button>
          </Link>
        </div>
      </section>

      <div className="w-full h-auto bg-primary_background-darkgray02">
        <div className="container-big w-full h-auto flex py-8 items-center flex-col gap-y-4">
          <h2 className="text-2xl font-bold text-center">Help improve community skills</h2>
          <p className="text-xl text-center">
            by provide other with your knowledges and experiences
          </p>
          <ContentListSearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
          <AdminContentListWrap contents={filteredContents} deleteArticle={deleteArticle} />
        </div>
      </div>
    </>
  );
}

export default AdminPage;
