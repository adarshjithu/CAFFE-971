import * as  yup from 'yup'

const schema  = yup.object().shape({
    name:yup.string().required("Package name is required"),
    price:yup.string().required("Package price is required"),
    description:yup.string().required("Package Description is required"),
    
})


export default schema