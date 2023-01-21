import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Link } from "react-router-native";
 
const Posting = (props) => (
 <View>
   <Text>{props.postings.name}</Text>
   <Text>{props.postings.position}</Text>
   <Text>{props.postings.level}</Text>
   <View>
     <Link className="btn btn-link" to={`/edit/${props.postings._id}`}><Text>Edit</Text></Link> |
     <TouchableOpacity className="btn btn-link"
       onClick={() => {
         props.deletePosting(props.postings._id);
       }}
     >
       <Text>Delete</Text>
     </TouchableOpacity>
   </View>
 </View>
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
   <View>
     <Text>Job Postings List</Text>
     <View className="table table-striped" style={{ marginTop: 20 }}>
       <View>
         <View>
           <Text>Name</Text>
           <Text>Position</Text>
           <Text>Level</Text>
           <Text>Action</Text>
         </View>
       </View>
       <Text>{postingList()}</Text>
     </View>
   </View>
 );
}