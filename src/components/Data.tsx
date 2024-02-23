import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Data(){
 
  const [data, setData] = useState([]);

 const fetchData = async () => {
   const response = await axios.post('https://f6717121640e4a468d11f3fa642f05ea.api.mockbin.io/');
  
  const data = response.data;
   setData(data);
}

fetchData()
  
    useEffect(() => {
      fetchData();
    },[]);
  
  return (
    <>
      <Navbar/>
      <div className="bg-blue-100">
        <p class="text-center hover:underline hover:text-blue-500 text-3xl "> the typecase use in coding </p>
      {data.map((props) => {
       return (
         <> 
        <div className='data' key={props.title}>
         <p> {props.title} </p>
         <p> {props.description}</p>
        </div>
         </>
       )
       })}
      </div>
      <Footer/>
    </>
  );
};

Data.propTypes = {
  title : PropTypes.string.isRequired,
  data : PropTypes.string.isRequired,
}

Data.defaultProps = {
  title : 'title add soon',
  data : 'data add soon ',
}

 


