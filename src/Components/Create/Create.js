import React, { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/Context'
const Create = () => {
  const {firebase} =useContext(FirebaseContext)
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const[name, setName] = useState('');
  const[category ,setCategory] = useState('');
  const[price , setPrice] = useState('');
  const[image , setImage] = useState(null);
  const date = new Date()
  
  const handleSubmit = () =>{
    
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          console.log('url')
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId:user.uid,
            createdAt:date.toDateString()
          })
            
        })
      })
  }
  return (
    <Fragment>
      <Header />
    
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
             
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
             value={price} 
             onChange={(e)=>setPrice(e.target.value)} 
             className="input"  
             name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):'' }></img>
          
            <br />
            <input  onChange={(e)=>{
              setImage(e.target.files[0])}} type="file" />
            <br />
            <button onClick={handleSubmit}  className="uploadBtn">upload and Submit</button>
      
        </div>
        
    </Fragment>
  );
};

export default Create;
