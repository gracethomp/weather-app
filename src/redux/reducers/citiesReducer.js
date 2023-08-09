const initialState = [
  {
    id: 1,
    city: "Berlin",
    imageUrl:
    "https://www.germany.travel/media/redaktion/staedte_kultur_content/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg",
  },
  {
    id: 2,
    city: "Barcelona",
    imageUrl:
      "https://comeonbarcelona.com/wp-content/uploads/2020/06/IMG_7766-21.jpg",
  },
  {
    id: 3,
    city: "Tokyo",
    imageUrl:
      "https://blog.japanwondertravel.com/wp-content/uploads/2022/03/manuel-velasquez-ssfp9okORYs-unsplash.jpg",
  },
  {
    id: 4,
    city: "New York",
    imageUrl:
      "https://s.w-x.co/in-new_york%281%29.jpg",
  },
  {
    id: 5,
    city: "Kyiv",
    imageUrl:
      "https://cdnp.flypgs.com/files/Sehirler-long-tail/Kyiv/kyiv-bag_ms_zl_k-anit.jpg",
  },
  {
    id: 6,
    city: "Wroclaw",
    imageUrl:
      "https://assets.vogue.com/photos/5891c81223f9887c0e0e3554/master/w_2560%2Cc_limit/00-holding-wroclaw-poland-travel-guide.jpg",
  },
];

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default citiesReducer;
