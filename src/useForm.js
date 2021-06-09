import {useState, useEffect} from 'react'

const useForm = validate => {
   const [values, setvalue] = useState({
       username:"",
       email:"",
       password:"",
       password2:""
   })

   const [errors, seterrors] = useState({})

   const handleChange = e => {
       const {name, value} = e.target
       setvalue({
           ...values,
           [name] : value
       });
   };

   const handleSubmit = e => {
       e.preventDefault();
       seterrors(validate(values));
   };

   return {handleChange, values, handleSubmit, errors};
}

export default useForm;