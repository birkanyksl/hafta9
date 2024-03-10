import KisiEkleForm from "./bilesenler/KisiEkleForm";
import KisiListe from "./bilesenler/KisiListe";

function App() {
  return (
    <>
      <section className="container mt-5">
        <h1>Rehber</h1>
        <KisiEkleForm />
        <KisiListe />
      </section>
    </>
  );
}

export default App;
