import React from 'react';
import ContentListWrap from '../components/ContentListWrap';
import ContentListHead from '../components/ContentListHead';
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
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
    }

    render() {
        const contents = this.state.contents.filter((content) => {
            return content.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
            <div className='content-list'>
                <ContentListHead />
                <ContentListSearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <ContentListWrap contents={contents} />
            </div>
        );
    }
}

export default ContentList;
