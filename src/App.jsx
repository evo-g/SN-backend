import { useState, useEffect } from 'react'
import ArticleDetail from './components/ArticleDetail';
import './App.css'


const getKBSNData = async () => {
  const url = 'https://dev103286.service-now.com/api/495743/react_test';
  const response = await fetch(url
  //   , {
  //   method: "GET", // *GET, POST, PUT, DELETE, etc.
  //   mode: "no-cors", // no-cors, *cors, same-origin
  //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //   credentials: "same-origin", // include, *same-origin, omit
  //   headers: {
  //     "Content-Type": "application/json",
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  // }
  );
  // console.log(typeof response);
  // console.log('api response', response);
  const data = await response.json();
  // console.log('api data', data);
  return data.result;
}

function App() {
  const [kbArticles, setKBArticles] = useState([]);
  const [isActiveArticleDetail, setActiveArticleDetail] = useState(true);
  const [listView, setListView] = useState(false);
  const [current, setCurrent] = useState('');
  const [usingLocal, setUsingLocal] = useState('');


  useEffect(() => {
    getKBSNData().then(item => setKBArticles(item)).catch(async (err) => {
      // Fetch data from local JSON file
      console.log('err', err)
      const res = await fetch('/kb_knowledge.json')
      const data = await res.json();
      setKBArticles(data.records);
      setUsingLocal('using older cached data, please contact system admin');
    });
  }, []);

  if (!kbArticles) {
    return <div>Loading...</div>;
  }

  // then maybe style this a bit better
  // look into react router cause this cheating way isn't gonna cut it lol

  return (
    <>
    <div className={`top-container ${!isActiveArticleDetail && 'hide-container'}`}>
    {usingLocal}
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
          key={item.sys_id}
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
