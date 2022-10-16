import React, { useEffect ,useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import './Post.css';

function Posts() {
const {firebase} =useContext(FirebaseContext)
const [products,setProducts] = useState([])
const [freshproduct,setFreshProducts] = useState([])
const {setPostDetails} = useContext(PostContext)
const navigate = useNavigate()

useEffect(() => {
  firebase.firestore().collection('products').get().then((snapshot)=>{
    const allPost = snapshot.docs.map((product)=>{
        return {
          ...product.data(),
          id : product.id
        }
    })
    setProducts(allPost)
  })
},[])
useEffect(() => {
  firebase.firestore().collection('freshproduct').get().then((snapshot)=>{
    const allPost = snapshot.docs.map((product)=>{
        return {
          ...product.data(),
          id : product.id
        }
    })
    setFreshProducts(allPost)
  })
},[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
         {products.map(product=>{
       return   <div
            className="card" onClick={()=>{
              setPostDetails(product);navigate('/view')
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
          })}
        </div>
      </div>


      <div className="moreViews">
        <div className="title">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
        {freshproduct.map(product=>{
       return   <div
            className="card" onClick={()=>{
              setPostDetails(product);
            }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name">{product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
          })}
        </div>
      
      </div>
    </div>
  );
}

export default Posts;
