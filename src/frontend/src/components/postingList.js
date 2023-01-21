import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Posting = (props) => {
  return (
 <tr>
   <td>{props.posting._id}</td>
   <td>{props.posting.posting_title}</td>
   <td>{props.posting.posting_body}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.posting._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deletePosting(props.posting._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
)};
 
export default function PostingList() {
 const [postings, setPostings] = useState([]);
 
 useEffect(() => {
   async function getPostings() {
     const response = await fetch(`http://localhost:5000/postings/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const postings = await response.json();
     setPostings(postings);
   }
 
   getPostings();
 
   return;
 }, [postings.length]);
 
 async function deletePosting(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newPostings = postings.filter((el) => el._id !== id);
   setPostings(newPostings);
 }
 
 function postingList() {
   return postings.map((posting) => {
     return (
       <Posting
         posting={posting}
         deletePosting={() => deletePosting(postings._id)}
         key={postings._id}
       />
     );
   });
 }
 
 return (
   <div>
     <h3>Job Postings List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
           <th>Level</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{postingList()}</tbody>
     </table>
   </div>
 );
}