import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
     static defaultProps={
     country:'in',
     pageSize:10,
    category:'general'
     }
     static defaultProps= {
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string
     }
     // articles=[{"source":{"id":null,"name":"Moneycontrol"},"author":"Moneycontrol News","title":"Microsoft's ex-VP of HR lists 3 types of employees at most risk during layoffs - Moneycontrol","description":"Chris Williams also shared two categories of employees who are at least risk of being laid off.","url":"https://www.moneycontrol.com/news/trends/microsofts-ex-vp-of-hr-lists-3-types-of-employees-at-most-risk-during-layoffs-9913771.html","urlToImage":"https://images.moneycontrol.com/static-mcnews/2023/01/Collage-Maker-22-Jan-2023-07.14-PM-770x435.jpg","publishedAt":"2023-01-22T13:49:36Z","content":"Following Microsoft's announcement on January 18 said it would lay off 10,000 employees, accounting for almost 5 percent of the global workforce, a former vice president of human resources has come f… [+2411 chars]"},{"source":{"id":null,"name":"Moneycontrol"},"author":"Sunil Shankar Matkar","title":"Trade setup for Monday: Top 15 things to know before the opening bell - Moneycontrol","description":"Analysts expect the market to remain choppy in the run-up to the Budget 2023-24. For the Nifty, support is at 17,900-17,800 and resistance is expected at 18,150-18,200 in the near term","url":"https://www.moneycontrol.com/news/business/markets/trade-setup-for-monday-top-15-things-to-know-before-the-opening-bell-27-9913601.html","urlToImage":"https://images.moneycontrol.com/static-mcnews/2023/01/market-1-770x433.jpg","publishedAt":"2023-01-22T13:08:35Z","content":"The market ended lower for the second consecutive session on January 20, with the benchmark indices losing 0.4 percent. FMCG, auto, healthcare, metal and select technology stocks pulled the market do… [+11115 chars]"}] 
    capitalizeFirstLetter=(string)=> {
       return string.chatAt(0).toUpperCase()+string.slice(1);
    }
    constructor(props){
     super(props);
    // console.log("hello i am constructor");
     this.state={
     //   articles:this.articles,
     articles:[],
        loading:true,     
        page:1,
        totalResult:0
     }
     document.title= `${this.props.category}-NewsMonkey`;
    }
    async updateNews(){
      this.props.setProgress(10);
    //  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}afdd01eb26f840c29de1acd5b329d212&pageSize=${this.props.pageSize}`;
    const url=  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true}); 
      let data= await fetch(url);
      this.props.setProgress(30);
      let parseData= await data.json(); 
      this.props.setProgress(70);
    //  console.log(parseData);
      this.setState({articles:parseData.articles,totalResult:parseData.totalResult,loading:false})
      this.props.setProgress(100);
    }
  async  componentDidMount(){
    {/*  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=afdd01eb26f840c29de1acd5b329d212&pageSize=${this.props.pageSize}`;
      this.setState({loading: true}); 
      let data= await fetch(url);
      let parseData= await data.json();
    //  console.log(parseData);
  this.setState({articles:parseData.articles,totalResult:parseData.totalResult,loading:false})   */}
  this.updateNews();
    }
  handleNextClick=async()=>{
      console.log("next")
   {/*   if(!(this.state.page+1>Math.ceil(this.state.totalResult/20))){
        this.setState({loading: true});
     // }
     // else {
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=afdd01eb26f840c29de1acd5b329d212&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data= await fetch(url);
      let parseData= await data.json();
    //  console.log(parseData);
     // this.setState({articles:parseData.articles})
        this.setState({
        page:this.state.page+1,
        articles:parseData.articles,
        loading:false
      })
  }  */}
  this.setState({page:this.state.page+1});
        this.updateNews();
    }
    handlePrevClick= async()=>{
      console.log("prev")
    {/*  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=afdd01eb26f840c29de1acd5b329d212&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data= await fetch(url);
      let parseData= await data.json();
    //  console.log(parseData);
     // this.setState({articles:parseData.articles})
      this.setState({
        page:this.state.page-1,
        articles:parseData.articles,
        loading:false
      }) */}
    this.setState({page:this.state.page-1});
        this.updateNews();
    }
   fetchMoreData = async() => {
     
      this.setState({page:this.state.page+1})
      //const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}afdd01eb26f840c29de1acd5b329d212&pageSize=${this.props.pageSize}`;
      //const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}afdd01eb26f840c29de1acd5b329d212&pageSize=${this.props.pageSize}`;
    const url=  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     // this.setState({loading: true}); 
      let data= await fetch(url);
      let parseData= await data.json();
    //  console.log(parseData);
      this.setState({articles:this.state.articles.concat(parseData.articles),totalResult:parseData.totalResult,loading:false})
      
    }; 
  render() {
    return (
      <div className='conatiner my-3'>
      <h2 className="text-center" style={{margin:`35px 0px`,marginTop:'90px'}}>NewsMonkey-Top headline from {this.props.category}</h2>
         {this.state.loading &&<Spinner/>} 
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResult}
          loader={<Spinner/>}
       >
       <div className="container">

        <div className="row">
        {/*!this.state.loading &&  this is use before this key word in beloe line*/ }
       { this.state.articles.map((element)=>{
         return <div className="col-md-3" key={element.url}>
        <NewsItem title={element.title ? element.title : ""} description={element.description?element.description:""} imageUrl={element.urlToImage}  url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
        })}  
      </div>
      </div>
      </InfiniteScroll>
      {/*   <div className="container d-flex justify-content-between">
         <button disabled={!this.state.page+1>Math.ceil(this.state.totalResult/8)}  type="button" className="btn btn-dark " onClick={this.handlePrevClick} > &larr;Previos</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResult/8)}  type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
           
         </div> */}
      </div>
    )
  }
}

export default News
