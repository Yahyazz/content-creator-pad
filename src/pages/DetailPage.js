import React from 'react';
import { useParams } from 'react-router-dom';
import ContentArticleDetail from '../components/ContentArticleDetail';
import { getData } from '../utils/data';
import PageNotFound from './PageNotFound';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={Number(id)} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: getData(props.id),
    };
  }

  render() {
    if (this.state.content === null) {
      return <PageNotFound />;
    }

    return (
      <div className="container-big w-full h-auto py-8">
        <ContentArticleDetail {...this.state.content} />
      </div>
    );
  }
}

export default DetailPageWrapper;
