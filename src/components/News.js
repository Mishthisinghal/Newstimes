import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';


const News =(props)=> {
  const [articles,setarticles]=useState([]);
  const [page,setpage]=useState(1);
  const [totalResults,settotalResults]=useState(0);
  const [loading,setloading]=useState(true);

  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  
  useEffect(() => {
    const updatenews=async()=>{
      props.setmyprogress(0);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pagesize}&page=1`;
      props.setmyprogress(20);
  
      setloading(true);
      let parseddata = await fetch(url).then(response => response.json()).then(data => {
        return data;
      });
      props.setmyprogress(70);
  
      setarticles(parseddata.articles);
      settotalResults(parseddata.totalResults);
      setloading(false);
      
      props.setmyprogress(100);
    }
   updatenews();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pagesize}&page=${page + 1}`;
    // this.setState({ loading: true });
    setloading(true);
    let parseddata = await fetch(url).then(response => response.json()).then(data => {
      return data;
    });
    setpage(page+1);
    setarticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults);
    setloading(false);
    
  }

    return (
      <>
        <div className="container my-3">
          <h2 className="d-flex justify-content-center" style={{marginTop:"75px"}}>Top {capitalizeFirstLetter(props.category)} Headlines</h2>
          {loading && <Loading />}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Loading />}>
            <div className="container">
              <div className="row">
                {articles.map((element) => {
                  return <div className="col-md-4">
                    <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 85) : ""} imgurl={element.urlToImage ? element.urlToImage : "https://images.hindustantimes.com/tech/img/2022/08/04/1600x900/asteroid-3628185_1920_1631933514992_1659598580799_1659598580799.jpg"} newsurl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} /></div>
                })}
              </div>
            </div>
          </InfiniteScroll>

        </div>
      </>
    )
  
}
export default News;