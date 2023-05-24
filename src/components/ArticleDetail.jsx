export default function ArticleDetail({ 
  isActiveArticleDetail, 
  setActiveArticleDetail, 
  id, 
  text, 
  number,
  current,
  setCurrent 
}) {
  function toggle(bool, active) {
    setActiveArticleDetail(bool)
    if (current === id) {
      setCurrent('');
    }
    setCurrent(active);
  }
  if (isActiveArticleDetail) {
    return (
      <li className='card'>
      <h1>{number}</h1>
      <div dangerouslySetInnerHTML={{ __html: text }} className='article-body'></div>
      <button onClick={() => toggle(!isActiveArticleDetail, id)}>More Detail</button>
      </li>
    )
  }

  if(!isActiveArticleDetail && current === id) {
    return (
      <div className="article-detail">
      <h1>{number}</h1>
      <div dangerouslySetInnerHTML={{ __html: text }} ></div>
      <button onClick={() => toggle(!isActiveArticleDetail, id)}>Go Back</button>
      </div>
    )
  }

  // const activeStyle = {
  //   position: 'fixed',
  //   top: 0,
  //   left: 0,
  //   height: '100vh',
  //   width: '100%',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // }

}