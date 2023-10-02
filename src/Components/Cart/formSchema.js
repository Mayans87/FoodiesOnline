import * as yup from "yup";
export const formSchema=yup.object({
    name: yup.string().required('please enter your name').min(2).max(10),
    street: yup.string().required('please enter your street address').min(3),
    postal: yup.number().positive().integer().required('please enter a postal code'),
    city: yup.string().required('please enter your city')
})