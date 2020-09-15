import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Divider, Spin, Row, Col, Button } from 'antd';
import { LoadingOutlined, DownOutlined  } from '@ant-design/icons';
import axios from 'axios';
import config from '../config';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
const NewSports = () => {
    const [news, setNews] = useState([]);
    const [sports, setSports] = useState([]);
    const [science, setScience] = useState([]);
    const [arts, setArts] = useState([]);
    const [display, setDisplay] = useState(true);
    const [topNews, setTopNews] = useState([]);
    const [topSports, setTopSports] = useState([]);


    const url = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${config.newsApi}`;
    const sportUrl = `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${config.newsApi}`;
    const ScienceUrl = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${config.newsApi}`;
    const ArtsUrl = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${config.newsApi}`;
    const top = `http://newsapi.org/v2/top-headlines?country=gb&apiKey=${config.topNew}`;
    const sportshub = `http://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=${config.topNew}`;
    
    const getResult = async () => {
      await axios(url).then((data) => {
        let result = data.data.results;
        const slice = result.slice(0, 3)
        setNews(slice);
    })
    await axios(top).then((data) => {
      let result = data.data.articles;
      const slice = result.slice(0, 3)
      setTopNews(slice);
    })
    await axios(sportshub).then((data) => {
      let result = data.data.articles;
      const slice = result.slice(0, 3)
       setTopSports(slice);
    })
    await axios(sportUrl).then((data) => {
        let result = data.data.results;
        const slice = result.slice(0, 3)
        setSports(slice);
    })
    await axios(ScienceUrl).then((data) => {
        let result = data.data.results;
        const slice = result.slice(0, 3)
        setScience(slice);
    })
    await axios(ArtsUrl).then((data) => {
        let result = data.data.results;
        const slice = result.slice(0, 3)
        setArts(slice);
    })
    setDisplay(false);
    };

    useEffect(() => {
        getResult();
    }, []);
    console.log(topSports);
    console.log(topNews);



    return (
        <div className="container"> 
            <div className="News">
            <Card title={'Top Stories'} style={{ width: "100%"}} >
              {display === false ? topNews.map((result) => 
                result.urlToImage ?
                <div key={result.id}>
                    <Row>
                        <Col xs={24} sm={12} >
                          <h1>{result.title}</h1>
                        </Col>
                        <Col xs={24} sm={12} > 
                          <div className="imgy"><img className="image" src={result.urlToImage} alt={result.description} /></div>
                        </Col>
                        <Col xs={24} sm={12} > 
                          <p className="para">{result.content}...<a rel="external" target="_blank" href={result.url}>Read more</a></p>
                          <p>Written by {result.author}</p>
                          <p>Published date {result.publishedAt}</p>
                        </Col>
                        <Divider />
                    </Row>
                  </div> : null
                ) :  <div className="spinnerdiv"> 
                       <div className="spinner" >
                        <Spin indicator={antIcon} /> 
                        </div>
                    </div>}
               {display === false ? news.map((result) => 
                <div key={result.id}>
                    <Row>
                        <Col xs={24} sm={12} >
                          <h1>{result.title}</h1>
                        </Col>
                        <Col xs={24} sm={12} > 
                          <div className="img"><img className="imag" src={result.multimedia[0].url} alt={result.title} /></div>
                        </Col>
                        <Col xs={24} sm={12} > 
                          <p className="para">{result.abstract}...<a rel="external" target="_blank" href={result.short_url}>Read more</a></p>
                          <p>Written {result.byline}</p>
                          <p>Published date {result.published_date}</p>
                        </Col>
                        <Divider />
                    </Row>
                </div>
               ) :  <div className="spinnerdiv"> 
                       <div className="spinner" >
                        <Spin indicator={antIcon} /> 
                        </div>
                    </div>}
                    <div className="button"> 
                          <div className="spinner" >
                               <Link to="/News"><Button type="primary"   shape="round" size="large" icon={<DownOutlined />} size="large">
                                         SEE MORE ON TOP STORIES
                                    </Button></Link>
                          </div>
                        </div>
                </Card>
                <br/>
            </div> 
            <div className="Sports">
            <Card title={'Top Sports'} style={{ width: "100%"}} >
              {display === false ? topSports.map((result) => 
                result.urlToImage ?
                <div key={result.id}>
                    <Row>
                        <Col xs={24} sm={12} >
                          <h1>{result.title}</h1>
                        </Col>
                        <Col xs={24} sm={12} > 
                          <div className="imgy"><img className="image" src={result.urlToImage} alt={result.description} /></div>
                        </Col>
                        <Col xs={24} sm={12} > 
                          <p className="para">{result.content}...<a rel="external" target="_blank" href={result.url}>Read more</a></p>
                          <p>Written by {result.author}</p>
                          <p>Published date {result.publishedAt}</p>
                        </Col>
                        <Divider />
                    </Row>
                  </div> : null
                ) :  <div className="spinnerdiv"> 
                       <div className="spinner" >
                        <Spin indicator={antIcon} /> 
                        </div>
                    </div>}
               {display === false ? sports.map((result) => 
                <div key={result.id}>
                    <Row>
                        <Col xs={24} sm={12} >
                          <h1>{result.title}</h1>
                        </Col>
                        <Col xs={24} sm={12} > 
                          <div className="img"><img className="imag" src={result.multimedia[0].url} alt={result.title}  /></div>
                        </Col>
                        <Col xs={24} sm={12} > 
                          <p className="para">{result.abstract}...<a rel="external" target="_blank" href={result.short_url}>Read more</a></p>
                          <p>Written {result.byline}</p>
                          <p>Published date {result.published_date}</p>
                        </Col>
                        <Divider/>
                    </Row>
                </div>
               ) : <div className="spinnerdiv"> 
                     <div className="spinner" >
                        <Spin indicator={antIcon} /> 
                    </div>
                   </div>
                   }
                   <div className="button"> 
                          <div className="spinner" >
                               <Link to="/Sports"><Button type="primary"   shape="round" size="large" icon={<DownOutlined />} size="large">
                                         SEE MORE ON TOP SPORTS
                                    </Button></Link>
                          </div>
                        </div>
                </Card>
                <br/>
            </div>  
            <div className="Science">
            <Card title={'Sciences'} style={{ width: "100%"}} >
               {display === false ? science.map((result) => 
                <div key={result.id}>
                    <Row>
                        <Col xs={24} sm={12} >
                          <h1>{result.title}</h1>
                        </Col>
                        <Col xs={24} sm={12} > 
                          <div className="img"><img className="imag" src={result.multimedia[0].url} alt={result.title}  /></div>
                        </Col>
                        <Col xs={24} sm={12} > 
                          <p className="para">{result.abstract}...<a rel="external" target="_blank" href={result.short_url}>Read more</a></p>
                          <p>Written {result.byline}</p>
                          <p>Published date {result.published_date}</p>
                        </Col>
                        <Divider />
                    </Row>
                </div>
               ) :  <div className="spinnerdiv"> 
                      <div className="spinner" >
                         <Spin indicator={antIcon} /> 
                      </div>
                    </div> }
                    <div className="button"> 
                          <div className="spinner" >
                               <Link to="/Sciences"><Button type="primary"   shape="round" size="large" icon={<DownOutlined />} size="large">
                                         SEE MORE ON SCIENCE
                                    </Button></Link>
                          </div>
                        </div>
                </Card>
                <br/>
            </div>  
            <div className="Sports">
            <Card title={'Entertaiment'} style={{ width: "100%"}} >
               {display === false ? arts.map((result) => 
                <div key={result.id}>
                    <Row>
                        <Col xs={24} sm={12} >
                          <h1>{result.title}</h1>
                        </Col>
                        <Col xs={24} sm={12} > 
                          <div className="img"><img className="imag" src={result.multimedia[0].url} alt={result.title} /></div>
                        </Col>
                        <Col xs={24} sm={12} > 
                          <p className="para">{result.abstract}...<a rel="external" target="_blank" href={result.short_url}>Read more</a></p>
                          <p>Written {result.byline}</p>
                          <p>Published date {result.published_date}</p>
                        </Col>
                        <Divider/>
                    </Row>
                </div>
               ) :   <div className="spinnerdiv"> 
                       <div className="spinner" >
                           <Spin indicator={antIcon} /> 
                        </div>
                      </div>}
                      <div className="button"> 
                          <div className="spinner" >
                               <Link to="/arts"><Button type="primary"   shape="round" size="large" icon={<DownOutlined />} size="large">
                                         SEE MORE ON ENTERTAIMENT
                                    </Button></Link>
                          </div>
                        </div>
                </Card>
                <br/>
            </div>   
        </div>
    )
}

export default NewSports;