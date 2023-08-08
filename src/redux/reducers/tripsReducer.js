const initialState = [
    {
        city: "Berlin",
        startDate: "24/07/2023",
        endDate: "29/07/2023",
    }
];

const tripsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "trips/addTrip":
            return [...state, action.payload];
        default:
            return state;
    }
}

export default tripsReducer;