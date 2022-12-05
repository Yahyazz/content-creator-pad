import React from 'react';
import ContentListSearchBar from '../components/ContentListSearchBar';
import { deleteContent, getDataList } from '../utils/data';
import AdminContentListWrap from '../components/AdminContentListWrap';
import { GoPlus } from 'react-icons/go';
import { Link } from 'react-router-dom';

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: getDataList(),
      keyword: '',
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
  }

  onDeleteHandler(id) {
    deleteContent(id);
    this.setState(() => {
      return {
        contents: getDataList(),
      };
    });
  }

  render() {
    const contents = this.state.contents.filter((content) => {
      return content.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });

    return (
      <>
        <section className="container-big w-full h-auto min-h-[calc(100vh-5rem)] flex items-center gap-y-8 md:gap-0">
          <div className="w-full md:w-1/2 flex flex-col gap-y-4 px-8 text-center sm:text-left">
            <h2 className="font-extrabold text-4xl">Welcome, Username.</h2>
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
            <h2 className="text-2xl font-bold text-center">Lorem ipsum</h2>
            <p className="text-xl text-center">Lorem ipsum dolor sit amet</p>
            <ContentListSearchBar
              keyword={this.state.keyword}
              keywordChange={this.onKeywordChangeHandler}
            />
            <AdminContentListWrap contents={contents} onDelete={this.onDeleteHandler} />
          </div>
        </div>
      </>
    );
  }
}

export default AdminPage;
