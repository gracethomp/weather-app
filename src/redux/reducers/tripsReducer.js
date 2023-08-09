const initialState = [
  {
    id: 1,
    city: "Berlin",
    imageUrl:
      "https://img.freepik.com/free-photo/building-with-columns_1160-803.jpg?w=1480&t=st=1691520611~exp=1691521211~hmac=03c50eac34bc778ac018404bf5496a0897ef882d3343176f552ec5622642e81e",
    startDate: "2023-08-24",
    endDate: "2023-08-31",
  },
];


const tripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "trips/addTrip":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default tripsReducer;
