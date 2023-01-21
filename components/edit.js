import React, { useState, useEffect } from "react";
import { View, TextInput, Text } from 'react-native';
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",
   postings: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/postings/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const posting = await response.json();
     if (!posting) {
       window.alert(`Posting with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(posting);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     name: form.name,
     position: form.position,
     level: form.level,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <View>
     <Text>Update Job Posting</Text>
       <View className="form-group">
         <Text htmlFor="name">Name: </Text>
         <TextInput
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </View>
       <View className="form-group">
         <Text htmlFor="position">Position: </Text>
         <TextInput
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </View>
       <View className="form-group">
         <View className="form-check form-check-inline">
           <TextInput
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="Intern"
             checked={form.level === "Intern"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <Text htmlFor="positionIntern" className="form-check-label">Intern</Text>
         </View>
         <View className="form-check form-check-inline">
           <TextInput
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionJunior"
             value="Junior"
             checked={form.level === "Junior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <Text htmlFor="positionJunior" className="form-check-label">Junior</Text>
         </View>
         <View className="form-check form-check-inline">
           <TextInput
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionSenior"
             value="Senior"
             checked={form.level === "Senior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <Text htmlFor="positionSenior" className="form-check-label">Senior</Text>
       </View>
       </View>
       <br />
 
       <View className="form-group">
         <TextInput
           onSubmit={onSubmit}
           value="Update Posting"
           className="btn btn-primary"
         />
       </View>
   </View>
 );
}