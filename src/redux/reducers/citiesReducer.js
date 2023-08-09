const initialState = [
  {
    id: 1,
    city: "Berlin",
    imageUrl:
      "https://img.freepik.com/free-photo/building-with-columns_1160-803.jpg?w=1480&t=st=1691518608~exp=1691519208~hmac=8319ea928cb713e9a00012b640f9866c55cf3304aa5dcee835597869161d8ca2",
  },
  {
    id: 2,
    city: "Barcelona",
    imageUrl:
      "https://img.freepik.com/free-photo/toledo-from-hill-summer-morning_1398-2075.jpg?w=1480&t=st=1691518742~exp=1691519342~hmac=e67faa5f997ba553b243919ab697f65dabe1451f3ffa0f6487623c9775002477",
  },
  {
    id: 3,
    city: "Tokyo",
    imageUrl:
      "https://img.freepik.com/free-photo/people-walking-japan-street-nighttime_23-2148942945.jpg?w=1480&t=st=1691518806~exp=1691519406~hmac=e3ec38d8946e6808a6587c0f4cecc2494f0cd250dc2b6c00c7d3720e4c46beca",
  },
  {
    id: 4,
    city: "New York",
    imageUrl:
      "https://img.freepik.com/free-photo/statue-liberty-liberty-island-new-york_268835-780.jpg?w=1060&t=st=1691520104~exp=1691520704~hmac=94920e1c6e1b5b700ee08ae5983771cbf0931f1e4137037194f7ed077ca563e6",
  },
  {
    id: 5,
    city: "Kyiv",
    imageUrl:
      "https://img.freepik.com/free-photo/aerial-view-city-fog_1153-5421.jpg?w=1480&t=st=1691520159~exp=1691520759~hmac=4c6a888103d2296424e80b4f5f9ac12893d6940c3ea1260c33dc78aa090ff40b",
  },
  {
    id: 6,
    city: "Wroclaw",
    imageUrl: "https://img.freepik.com/free-photo/cityscape-wroclaw-cloudy-sky-poland_181624-12559.jpg?w=1480&t=st=1691520309~exp=1691520909~hmac=cd309b08940f49770dbbdcbee79585b08b9b3c6e908acfb8cebe9a6a64488089"
  },
];

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "trips/addTrip":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default citiesReducer;
