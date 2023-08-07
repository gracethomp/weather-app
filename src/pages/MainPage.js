import Trips from "../components/Trips.js";
import Week from "../components/Week.js";
import Header from "../layout/Header.js";

export default function MainPage() {
  return (
    <>
      <Header />
      <section id="main">
        <Trips />
        <Week />
      </section>
    </>
  );
}
