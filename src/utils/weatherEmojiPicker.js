const emojis = [
  {
    name: "partly-cloudy-day",
    icon: "⛅",
  },
  {
    name: "snow",
    icon: "❄️",
  },
  {
    name: "rain",
    icon: "🌧️",
  },
  {
    name: "fog",
    icon: "🌫️",
  },
  {
    name: "wind",
    icon: "🌬️",
  },
  {
    name: "cloudy",
    icon: "☁️",
  },
  {
    name: "partly-cloudy-night",
    icon: "⛅",
  },
  {
    name: "clear-day",
    icon: "☀️",
  },
  {
    name: "clear-night",
    icon: "🌕",
  },
];

export function getEmojiByName(name) {
  const emojiObj = emojis.find((emoji) => emoji.name === name);
  return emojiObj ? emojiObj.icon : "❓";
}
