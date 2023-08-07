import Trips from "../components/Trips.js";
import Header from "../layout/Header.js";

export default function MainPage() {
  return (
    <>
      <Header />
      <section id="main">
        <Trips />
      </section>
    </>
  );
}
