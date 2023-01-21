import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
 
const Posting = (props) => (
 <tr>
   <td>{props.postings.name}</td>
   <td>{props.postings.position}</td>
   <td>{props.postings.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.postings._id}`}>Edit</Link> |
     <TouchableOpacity className="btn btn-link"
       onClick={() => {
         props.deletePosting(props.postings._id);
       }}
     >
       Delete
     </TouchableOpacity>
   </td>
 </tr>
);
 
export default function PostingList() {
 const [postings, setPostings] = useState([]);
 
 // This method fetches the postings from the database.
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
 
 // This method will delete a posting
 async function deletePosting(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newPostings = postings.filter((el) => el._id !== id);
   setPostings(newPostings);
 }
 
 // This method will map out the postings on the table
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
 
 // This following section will display the table with the postings of individuals.
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