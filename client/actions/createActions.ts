'use server'

import { z } from "zod";

type Response = {
    message: string;
    errors?: Record<string, string[] | undefined>,
};

export const createVehicle = async (
    state: { message: string | null, errors?: Record<string, string[] | undefined> },
    formData: FormData
  ): Promise<Response> => {

    const VehicleValidation = z.object({
        Plate_Number: z.string().nonempty("Plate Number is required."),
        Fleet_Name: z.string().nonempty("Fleet Type is required."),
        Level: z.coerce.number().min(1, "Level is required and must be greather than 0."),
        Status: z.coerce.number().min(0, "Status is required.").max(1, "Status must be 0 or 1."),
        Association_Name: z.string().nonempty("Association Name is required."),
        Seat_Number: z.coerce.number().min(1, "Seat is required and must be greather than 0."),
        Region: z.string().nonempty("Region is required."),
        Departure_Name: z.string().nonempty("Departure is required."),
      });
      
  
  
      try {
          const formValues = Object.fromEntries(formData.entries());
          VehicleValidation.parse(formValues);

    console.log("formValues ",formValues);

          
          const inputValues = {
                Plate_Number: formData.get('Plate_Number') as string,
                Fleet_Name: formData.get('Fleet_Name') as string,
                Level: Number(formData.get('Level')),
                Status: Number(formData.get('Status')),
                Association_Name: formData.get('Association_Name') as string,
                Seat_Number: Number(formData.get('Seat_Number')),
                Region: formData.get('Region') as string,
                Departure_Name: formData.get('Departure_Name') as string,
          }
          
          console.log("inputValues ",inputValues);
          
              
              return { message: "Vehicle Registered Successfully" };
  
      } catch (error) {
        
          if (error instanceof z.ZodError) {
        console.log("error ",error.flatten().fieldErrors);
              
              return {
                  message: '',
                  errors: error.flatten().fieldErrors,
              };
          }
          return {
              message: '',
              errors: {root:["Something went wrong. Please try again!"]},
          };
      }
};

export const createArrival = async (
    state: { message: string | null, errors?: Record<string, string[] | undefined> },
    formData: FormData
  ): Promise<Response> => {

    const ArrivalValidation = z.object({
        Departure_Location: z.string().nonempty("Departure is required."),
        Arrival_Location: z.string().nonempty("Arrival is required."),
        Distance: z.coerce.number().min(1, "Distance is required and must be greather than 0."),
    });


    try {
        const formValues = Object.fromEntries(formData.entries());
        ArrivalValidation.parse(formValues);

        const inputValues = {
                Departure_Location: formData.get('Departure_Location') as string,
                Arrival_Location: formData.get('Arrival_Location') as string,
                Distance: Number(formData.get('Distance')),
        }

        console.log("inputValues ",inputValues);
        
        
        return { message: "Arrival added Successfully" };

    } catch (error) {
        
        if (error instanceof z.ZodError) {
              
              return {
                  message: '',
                  errors: error.flatten().fieldErrors,
              };
          }
          return {
              message: '',
              errors: {root:["Something went wrong. Please try again!"]},
          };
      }
};

export const createDeparture = async (
    state: { message: string | null, errors?: Record<string, string[] | undefined> },
    formData: FormData
  ): Promise<Response> => {

    const DepartureValidation = z.object({
        Departure_Name: z.string().nonempty("Departure is required."),
    });


    try {
        const formValues = Object.fromEntries(formData.entries());
        DepartureValidation.parse(formValues);

        const inputValues = {
                Departure_Name: formData.get('Departure_Name') as string,
        }

        console.log("inputValues ",inputValues);
        
        
        return { message: "Departure Added Successfully" };

    } catch (error) {
        
        if (error instanceof z.ZodError) {
              
              return {
                  message: '',
                  errors: error.flatten().fieldErrors,
              };
          }
          return {
              message: '',
              errors: {root:["Something went wrong. Please try again!"]},
          };
      }
};

export const createEmployee = async (
    state: { message: string | null, errors?: Record<string, string[] | undefined> },
    formData: FormData
  ): Promise<Response> => {

    const EmployeeValidation = z.object({
        First_Name: z.string().nonempty("First name is required."),
        Last_Name: z.string().nonempty("Last name is required."),
        Phone_Number: z.string().nonempty("Phone number is required."),
        Password: z.string().nonempty("Password is required."),
        confirmPassword: z.string().nonempty("confirm password is required."),
        Departure_Name: z.string().optional(),
      }).refine((data) => data.Password === data.confirmPassword, {
        message: "Passwords do not match.",
        path: ["confirmPassword"], 
    });
      
  
  
      try {
          const formValues = Object.fromEntries(formData.entries());
          EmployeeValidation.parse(formValues);

    console.log("formValues ",formValues);

        
        const inputValues = {
                First_Name: formData.get('First_Name') as string,
                Last_Name: formData.get('Last_Name') as string,
                Phone_Number: formData.get('Phone_Number') as string,
                Password: formData.get('Password') as string,
                confirmPassword: formData.get('confirmPassword') as string,
                Departure_Name: formData.get('Departure_Name') as string,
        }
        
        console.log("inputValues ",inputValues);
        
            
            return { message: "Employee Added Successfully" };

    } catch (error) {
        
          if (error instanceof z.ZodError) {
        console.log("error ",error.flatten().fieldErrors);
              
              return {
                  message: '',
                  errors: error.flatten().fieldErrors,
              };
          }
          return {
              message: '',
              errors: {root:["Something went wrong. Please try again!"]},
          };
      }
};

export const createFleetType = async (
    state: { message: string | null, errors?: Record<string, string[] | undefined> },
    formData: FormData
  ): Promise<Response> => {

    const EmployeeValidation = z.object({
        Fleet_Name: z.string().nonempty("Fleet name is required."),
        Seat_Number: z.string().nonempty("Seat number is required."),
    });
    

    try {
        const formValues = Object.fromEntries(formData.entries());
        EmployeeValidation.parse(formValues);

        
        const inputValues = {
                Fleet_Name: formData.get('Fleet_Name') as string,
                Seat_Number: formData.get('Seat_Number') as string,
        }
        
        console.log("inputValues ",inputValues);
        
        return { message: "Fleet Type added Successfully" };

    } catch (error) {
        
        if (error instanceof z.ZodError) {
            
            return {
                message: '',
                errors: error.flatten().fieldErrors,
            };
            }
            return {
            message: '',
            errors: {root:["Something went wrong. Please try again!"]},
            };
    }
};

export const Register = async (
    state: { message: string | null, errors?: Record<string, string[] | undefined> },
    formData: FormData
  ): Promise<Response> => {

    const AdminValidation = z.object({
        Email: z.string().nonempty("Email is required."),
        Last_Name: z.string().nonempty("Last name is required."),
        First_Name: z.string().nonempty("First name is required."),
        Password: z.string().nonempty("Password is required."),
        confirmPassword: z.string().nonempty("Confirm Password is required."),
        Departure: z.string().optional(),
        Position: z.coerce.number().min(0, "Position is required.").max(1, "Position must be 0 or 1."),
    }).refine((data) => data.Password === data.confirmPassword, {
        message: "Passwords do not match.",
        path: ["confirmPassword"], 
    });
    

    try {
        const formValues = Object.fromEntries(formData.entries());
        AdminValidation.parse(formValues);

        
        const inputValues = {
                Email: formData.get('Email') as string,
                Last_Name: formData.get('Last_Name') as string,
                First_Name: formData.get('First_Name') as string,
                Password: formData.get('Password') as string,
                Position: Number(formData.get('Position')),
                Departure: formData.get('Departure') as string,
        }
        
        console.log("inputValues ",inputValues);
        
        return { message: "Admin Registered Successfully" };

    } catch (error) {
        
        if (error instanceof z.ZodError) {
            
            return {
                message: '',
                errors: error.flatten().fieldErrors,
            };
            }
            return {
            message: '',
            errors: {root:["Something went wrong. Please try again!"]},
            };
    }
};
