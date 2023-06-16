export default function ArticleDetail({
  isActiveArticleDetail,
  setActiveArticleDetail,
  sys_id,
  text,
  short_description,
  number,
  current,
  setCurrent
}) {
  function toggle(bool, active) {
    setActiveArticleDetail(bool)
    if (current === sys_id) {
      setCurrent('');
    }
    setCurrent(active);
  }

  if (isActiveArticleDetail) {
    return (
      <li className='card'>
        <h2>{number}</h2>
        <p>{short_description}</p>
        <button onClick={() => toggle(!isActiveArticleDetail, sys_id)}>More Detail</button>
      </li>
    )
  }

  if (!isActiveArticleDetail && current === sys_id) {
    return (
      <div className="article-detail">
        <button onClick={() => toggle(!isActiveArticleDetail, sys_id)} className="return-btn">Go Back</button>
        <h1>{number}</h1>
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
    )
  }
}
