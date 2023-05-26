import { useState, useEffect } from 'react'
import ArticleDetail from './components/ArticleDetail';
import './App.css'


const getSNData = async () => {
  const response = await fetch('https://dev99637.service-now.com//api/495743/test_knowledge/test');
  const data = await response.json();
  // console.log(data);
  return data.result;
}

function App() {
  const [kbArticles, setKBArticles] = useState([]);
  const [isActiveArticleDetail, setActiveArticleDetail] = useState(true);
  const [listView, setListView] = useState(false);
  const [current, setCurrent] = useState('');

  useEffect(() => {
    getSNData().then(item => setKBArticles(item));
  }, []);

  if (!kbArticles) {
    return <div>Loading...</div>;
  }

  // console.log(current)

  // next add list view to make it look like esc portals
  // then maybe style this a bit better
  // look into react router cause this cheating way isn't gonna cut it lol
  return (
    <>
    <div className={`top-container ${!isActiveArticleDetail && 'hide-container'}`}>
    <span><button onClick={() => setListView(false)}>Grid View</button></span>
    <span><button onClick={() => setListView(true)}>List View</button></span>
    </div>
    <ul className={`card-container ${listView && 'list-view'}`}>
    {
      kbArticles.map(item => {
        return (
          <ArticleDetail
          setCurrent={setCurrent}
          isActiveArticleDetail={isActiveArticleDetail}
          setActiveArticleDetail={setActiveArticleDetail}
          key={item.id}
          {...item}
          current={current}
          />
          )
        })
      }
      </ul>
    </>
  )
}

export default App
