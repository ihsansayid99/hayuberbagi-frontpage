import { useState } from 'react'

const useForm = (initialValues) => {
    const [state, setstate] = useState(initialValues)

    return [
        state,
        (e) => {
            setstate({
                ...state,
                [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
            })
        },
        (newState) => {
            setstate({
                ...state,
                ...newState
            })
        }
    ]
}

export default useForm;