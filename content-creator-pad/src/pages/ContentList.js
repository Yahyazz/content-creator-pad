import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ContentListWrap from '../components/ContentListWrap';
import ContentListSearchBar from '../components/ContentListSearchBar';
import { db } from '../utils/firebase-config';
import { collection, getDocs } from 'firebase/firestore'; 

function ContentList() {
  const [contents, setContents] = useState([])
  const [ searchParams, setSearchParams ] = useSearchParams();
  const [ keyword, setKeyword ] = React.useState(() => {
    return searchParams.get('keyword') || ''
  });

  const articlesCollectionRef = collection(db, "articles")

  useEffect(() => {
    const getContents = async () => {
      const data = await getDocs(articlesCollectionRef)
      setContents(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getContents()
  }, [])

  async function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredContents = contents.filter((content) => {
    return content.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  return (
    <>
      <section className="container-big w-full h-auto min-h-[calc(100vh-5rem)] pt-32 sm:pt-16 flex justify-between items-center flex-col">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-y-4 px-8 text-center">
            <h2 className="font-extrabold text-4xl">Start Learn for Free.</h2>
            <p className="text-xl">
              One-Stop-Learn you need to start your carrerr to become a Content Creator.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden">
            <img
              className="w-full md:w-full lg:w-3/4 h-fit overflow-hidden rounded-t-full object-cover"
              src="/images/hero1.jpg"
              alt="A person working on laptop"
            />
          </div>
        </section>

      <section className="w-full h-auto bg-primary_background-darkgray02">
        <div className="container-big w-full h-auto flex py-8 items-center flex-col gap-y-4">
            <h2 className="text-2xl font-bold text-center">Improve your skills</h2>
            <p className="text-xl text-center">by reading the articles we provide below</p>
            <ContentListSearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <ContentListWrap contents={filteredContents} />
        </div>
      </section>
    </>
  );
}

export default ContentList;