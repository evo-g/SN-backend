export default function ArticleDetail({ 
  isActiveArticleDetail, 
  setActiveArticleDetail, 
  id, 
  text,
  short_description,
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
      <h2>{number}</h2>
      <p>{short_description}</p>
      <button onClick={() => toggle(!isActiveArticleDetail, id)}>More Detail</button>
      </li>
    )
  }

  if(!isActiveArticleDetail && current === id) {
    return (
      <div className="article-detail">
        <button onClick={() => toggle(!isActiveArticleDetail, id)} className="return-btn">Go Back</button>
        <h1>{number}</h1>
        <div dangerouslySetInnerHTML={{ __html: text }} ></div>
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