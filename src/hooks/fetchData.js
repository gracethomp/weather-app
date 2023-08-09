import { useEffect, useState } from "react";
import axios from "axios";
import { getEmojiByName } from "../utils/weatherEmojiPicker";

export function useFetchDays(selectedTrip) {
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedTrip.city}/${selectedTrip.startDate}/${selectedTrip.endDate}?unitGroup=metric&elements=datetime%2Cname%2Caddress%2Ctempmax%2Ctempmin%2Ctemp%2Cicon&include=days%2Ccurrent&key=JA72EPG39Y7R93E534SY2VFTN&contentType=json`
      )
      .then((response) => setDays(response.data.days))
      .catch((error) => console.error("Error fetching data:", error));
  }, [selectedTrip]);
  return days;
}

export function useFetchCurrentCondition(selectedTrip) {
  const [currentTemp, setCurrentTemp] = useState();
  const [emoji, setEmoji] = useState();
  useEffect(() => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedTrip.city}/today?unitGroup=metric&include=current%2Cfcst&key=JA72EPG39Y7R93E534SY2VFTN&contentType=json`
      )
      .then((response) => {
        setCurrentTemp(response.data.currentConditions.temp);
        setEmoji(getEmojiByName(response.data.currentConditions.icon));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [selectedTrip]);
  
  return { currentTemp, emoji };
}
