import React from 'react';
import { Card, Space, Spin, Row, Col, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
  

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
const ShowResult = ({ Result, open }) => {
    return (
        <div>
        {open === false ? Result.map((result) => 
            <div key={result._id}>
                <Row>
                    <Col xs={24} sm={6} > 
                    <Space size="medium" direction="vertical"> 
                        <Card key={result._id} > 
                            <h1>{result.headline.main}</h1>
                            <p className="para">{result.abstract}...<a rel="external" target="_blank" href={result.web_url}><Button type="primary">Read more</Button></a></p>
                            <p>Written {result.byline.original}</p>
                            <p>Published date {result.pub_date}</p>
                        </Card>
                    </Space>
                    </Col>
                </Row>
                <br />
            </div> ) : <div className="spinnerdiv"> 
            <div className="spinner" >
            <Spin indicator={antIcon} /> 
            </div>
        </div>
        };
        </div>
    )
};



export default ShowResult;