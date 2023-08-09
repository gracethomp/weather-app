const initialState = [
  {
    id: 1,
    city: "Berlin",
    imageUrl:
      "https://www.germany.travel/media/redaktion/staedte_kultur_content/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg",
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
