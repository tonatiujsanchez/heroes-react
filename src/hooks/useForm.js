import { useState } from "react"


export const useForm = ( initialValues = {} ) => {

    const [values, setValues] = useState( initialValues )

    const handleInputChange = ({ target }) =>{
        const name = target.name
        const value = target.value

        setValues({
            ...values,
            [name]: value
        })
    }

    const resetForm = () =>{
        setValues( initialValues )
    }


  return [ values, handleInputChange, resetForm ]
}
