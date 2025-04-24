export type ResponseType = {
    message: string | null,
    errors?: Record<string, string[] | undefined | null>,
};

export interface FormType {
    label: string;
    name: string;
    element: "input" | "dropdown";
    type?: string;
    options?: { label: string; value: string | number }[];
    error?: string;
    required?: boolean;
}

export interface initialStateType { 
    message: string | null; 
    errors?: Record<string, string[] | undefined> 
}

export type defaultValuesType = Record<string, string | number | null >