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
  const [current, setCurrent] = useState('');

  useEffect(()=> {
    getSNData().then(item => setKBArticles(item));
  }, []);

  if (!kbArticles) {
    return <div>Loading...</div>;
  }

  // console.log(current)
  return (
    <ul className='card-container'>
      {
        kbArticles.map(item => {

          return (
            <ArticleDetail
              setCurrent={setCurrent}
              isActiveArticleDetail={isActiveArticleDetail}
              setActiveArticleDetail={setActiveArticleDetail}
              key={item.id} 
              id={item.id} 
              text={item.text} 
              short_description={item.short_description}
              number={item.number}
              current={current}
            />
          )
        }
        )
      }
      </ul>
    )
}

export default App
