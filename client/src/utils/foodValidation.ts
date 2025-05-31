// utils/validations/foodStationValidation.ts

export interface FoodStationFormData {
    name: string;
    description: string;
    type: string;
    image: File | null;
}

export const validateFoodStationForm = (formData: any) => {

    const errors :any = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.description.trim()) errors.description = "Description is required";
    if (!formData.type.trim()) errors.type = "Type is required";
    if(!formData?.price) errors.price = 'Price is Required'



    return errors;
};
