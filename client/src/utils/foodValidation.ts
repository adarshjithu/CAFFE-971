// utils/validations/foodStationValidation.ts

export interface FoodStationFormData {
    name: string;
    description: string;
    type: string;
    image: File | null;
}

export interface ValidationError {
    name?: string;
    description?: string;
    type?: string;
    image?: string;
}

export const validateFoodStationForm = (formData: any): ValidationError => {

    const errors: ValidationError = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.description.trim()) errors.description = "Description is required";
    if (!formData.type.trim()) errors.type = "Type is required";



    return errors;
};
