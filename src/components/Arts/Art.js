import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import TopBar from '../TopBar/TopBar';
import Footer from '../Footer/Footer';
import BackToTop from '../backToTop/BackToTop';
import { Spin, Divider, Card, Row, Col  } from 'antd';
import { LoadingOutlined  } from '@ant-design/icons';
import axios from 'axios';
import config from '../config';
 

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
const Arts = () => {
    const [state, setState] = useState({
        results:[],
        offset: 0,
        perPage: 20,
        currentPage: 0
    });
    const [render, setRender] = useState(false);
    

    const receiveData = async () => {
        const url = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${config.newsApi}`;
        await axios(url).then((data) => {
            var result = data.data.results;
            const slice = result.slice(state.offset, state.offset + state.perPage);
            setRender(true);
            const postData = slice.map(pd => <React.Fragment key={pd.title}>
                  <Row>
                        <Col xs={24} sm={12} >
                          <h1>{pd.title}</h1>
                        </Col>
                        <Col xs={24} sm={12} > 
                          <div className="img"><img src={pd.multimedia[0].url} alt={result.title} /></div>
                        </Col>
                        <Col xs={24} sm={12} > 
                          <p className="para">{pd.abstract}...<Link to={pd.short_url}>Read more</Link></p>
                          <p>Written {pd.byline}</p>
                          <p>Published date {pd.published_date}</p>
                        </Col>
                        <Divider dashed />
                    </Row>
            </React.Fragment>)

            setState({
                pageCount: Math.ceil(result.length / state.perPage),
                postData
            })
        })
    }

    

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * state.perPage;

        setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            receiveData()
        });
    }

    useEffect(() => {
        receiveData();
    },[]);



    return (
        <div>
          <TopBar />
          <br />
                {render ===  true ?  
                <div className="container">
                    <Card title={'ENTERTAIMENT'} style={{ width: "100%"}} > 
                        {state.postData}
                    </Card>
                    <div className="spinnerdiv"> 
                    <div className="spinner" >
                        <ReactPaginate
                            previousLabel={"prev"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}/>
                        </div>
                    </div>    
                 </div>
             :  <div className="spinnerdiv"> 
                  <div className="spinner" >
                    <Spin indicator={antIcon} /> 
                  </div>
                </div>}
            <BackToTop/>
            <Footer/>
        </div>
        
    )
}

export default Arts;