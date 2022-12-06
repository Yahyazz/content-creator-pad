import React from 'react';
import ContentListWrap from '../components/ContentListWrap';
import ContentListSearchBar from '../components/ContentListSearchBar';
import { getDataList } from '../utils/data';

// function ContentList() {
//     const contents = getDataList();

//     return (
//         <div className='content-list'>
//             <ContentListHead />
//             <ContentListSearchBar />
//             <ContentListWrap contents={contents} />
//         </div>
//     );
// }

class ContentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: getDataList(),
      keyword: '',
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
  }

  render() {
    const contents = this.state.contents.filter((content) => {
      return content.title.toLowerCase().includes(this.state.keyword.toLowerCase());
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
        <div className="w-full h-auto bg-primary_background-darkgray02">
          <div className="container-big w-full h-auto flex py-8 items-center flex-col gap-y-4">
            <h2 className="text-2xl font-bold text-center">Lorem ipsum</h2>
            <p className="text-xl text-center">Lorem ipsum dolor sit amet</p>
            <ContentListSearchBar
              keyword={this.state.keyword}
              keywordChange={this.onKeywordChangeHandler}
            />
            <ContentListWrap contents={contents} />
          </div>
        </div>
      </>
    );
  }
}

export default ContentList;
