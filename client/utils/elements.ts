import { FormType } from "./types";

const departure = [
    {label: "Select Departure", value: ""},
    {label: "Adama Peacock", value: "Adama Peacock Terminal"},
    {label: "Adama Migiraa", value: "Adama Migiraa"},
    {label: "Shashamane", value: "Shashamane"},
    {label: "Hawwaasa", value: "Hawwaasa"},
]

const plateNumbers = [
    {label: "Select Plate Number", value: ""},
    {label: "05512", value: "05512"},
    {label: "01075", value: "01075"},
    {label: "33671", value: "33671"},
    {label: "90876", value: "90876"},
    {label: "00234", value: "00234"},
]

const fleetType = [
    {label: "Select Fleet Type", value: ""},
    {label: "Isuze", value: "Isuze"},
    {label: "Highroof", value: "Highroof"},
    {label: "Dolphine", value: "Dolphine"},
    {label: "TATA 32", value: "TATA 32"},
    {label: "TATA", value: "TATA"},
]

const status = [
    {label: "Active", value: 1},
    {label: "InActive", value: 0}
]

const position = [
    {label: "Admin", value: "1"},
    {label: "Employee", value: "0"}
]

export const VehicleFormElements: FormType[] = [
    {
      label: "Plate Number",
      name: "Plate_Number",
      element: "dropdown",
      type: "text",
      options: plateNumbers,
      error: "Please select a plate number",
    },
    {
      label: "Fleet Type",
      name: "Fleet_Name",
      element: "dropdown",
      type: "text",
      options: fleetType,
      error: "Please select a fleet type",
    },
    {
      label: "Level",
      name: "Level",
      element: "input",
      type: "number",
      error: "Please enter a level",
    },
    {
      label: "Status(off/on)",
      name: "Status",
      element: "dropdown",
      type: "text",
      options: status,
      error: "Please select a status",
    },
    {
      label: "Association Name",
      name: "Association_Name",
      element: "input",
      type: "text",
      error: "Please enter an association name",
    },
    {
      label: "Seat Number",
      name: "Seat_Number",
      element: "input",
      type: "number",
      error: "Please enter a seat number",
    },
    {
      label: "Region",
      name: "Region",
      element: "input",
      type: "text",
      error: "Please enter a region name",
    },
    {
      label: "Departure Name",
      name: "Departure_Name",
      element: "dropdown",
      type: "text",
      options: departure,
      error: "Please select a departure name",
    }
  ];

export const AdminFormElements: FormType[] = [
    {
      label: "First Name",
      name: "First_Name",
      element: "input",
      type: "text",
      error: "Please enter a first name",
    },
    {
      label: "Last Name",
      name: "Last_Name",
      element: "input",
      type: "text",
      error: "Please enter a last name",
    },
    {
      label: "Email",
      name: "Email",
      element: "input",
      type: "email",
      error: "Please enter an email address",
    },
    {
        label: "Position",
        name: "Position",
        element: "dropdown",
        type: "text",
        options: position,
        error: "Please select a position",
    },
    {
        label: "Password",
        name: "Password",
        element: "input",
        type: "password",
        error: "Please enter a password",
    },
    {
        label: "Confirm Password",
        name: "confirmPassword",
        element: "input",
        type: "password",
        error: "Please confirm your password",
    },
    {
        label: "Departure (optional)",
        name: "Departure_Name",
        element: "dropdown",
        type: "",
        options: departure,
        error: "",
        required:false
    }
];

export const DepartureFormElements: FormType[] = [
    {
        label: "Departure Name",
        name: "Departure_Name",
        element: "input",
        type: "text",
        error: "Please enter a departure name",
    }
]

export const FleetFormElements: FormType[] = [
    {
        label: "Fleet Name",
        name: "Fleet_Name",
        element: "input",
        type: "text",
        error: "Please enter a fleet name",
    },
    {
        label: "Seat Number",
        name: "Seat_Number",
        element: "input",
        type: "number",
        error: "Please enter a seat number",
    }
]

export const ArrivalFormElements: FormType[] = [
    {
        label: "Departure Location",
        name: "Departure_Location",
        element: "dropdown",
        type: "text",
        options: departure,
        error: "Please enter a departure location",
    },
    {
        label: "Arrival Location",
        name: "Arrival_Location",
        element: "input",
        type: "text",
        error: "Please enter an arrival location",
    },
    {
        label: "Distance (km)",
        name: "Distance",
        element: "input",
        type: "number",
        error: "Please enter a distance in km",
    }
]

export const EmployeeFormElements: FormType[] = [
    {
        label: "First Name",
        name: "First_Name",
        element: "input",
        type: "text",
        error: "Please enter a first name",
    },
    {
        label: "Last Name",
        name: "Last_Name",
        element: "input",
        type: "text",
        error: "Please enter a last name",
    },
    {
        label: "Phone Number",
        name: "Phone_Number",
        element: "input",
        type: "text",
        error: "Please enter a phone number",
    },
    {
        label: "Password",
        name: "Password",
        element: "input",
        type: "password",
        error: "Please enter a password",
    },
    {
        label: "Confirm Password",
        name: "confirmPassword",
        element: "input",
        type: "password",
        error: "Please confirm your password",
    },
    {
        label: "Departure",
        name: "Departure_Name",
        element: "dropdown",
        type: "",
        options: departure,
        error: "",
        required:false
    }
]