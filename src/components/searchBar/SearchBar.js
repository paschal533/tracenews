import React, { useState } from 'react';
import ShowResult from './ShowResult';
import { Card } from 'antd';
import config from '../config';
import { Input } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import './searchBar.css';

const { Search } = Input;

 
const SearchBar = () => { 
  const [searchQuery, setSearchQuery] = useState("");
  const [renderSearch, setRenderSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    results: [],
    selected: {},
    suggs: []
  });

   
   
 // get search input  
  const handleInput = e => {
    let text = e.target.value;
    setSearchQuery(text);
  }
   
   
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&api-key=${config.newsApi}`;

  const handleSubmit = async () => {
    setRenderSearch(true);
    setOpen(true);
    await axios(url).then((data) => {
      let result = data.data.response.docs;
      setState(prevState => {
        return { ...prevState, results: result}
      })
  })
  console.log(state.results)
  setOpen(false);
};
 

    
    
    return (
        <div>
          <div className="container" > 
              <Search
                style={{ width: '100%' }}
                placeholder="Search for any news or article here"
                enterButton="Search"
                size="large"
                onSearch={e => handleSubmit(e.preventDefault)}
                onChange={handleInput}
              /> 
          </div>
          <br />
          {renderSearch ?<div>
            <Card title={'Search Results'} style={{ width: "100%"}} >
            <ShowResult Result={state.results} searchName={searchQuery} open={open}/></Card></div> : null}
          <br />       
        </div>
    )
}

export default SearchBar;