import Form from "./Form";

const movies = [
  {
    name: "Avenger",
    available: 5
  },
  {
    name: "Terminator",
    available: 3
  }
];

export default function App() {
  return (
    <>
      <h2>Peliculas</h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </>
  );
}
