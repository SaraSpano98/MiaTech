function App() {

  return (
    <div className="container-text text-center py-10">
      <h1 className="text-heading-1 font-heading-1 size-primary">Titolo Principale</h1>
      <h2 className="text-heading-2 font-heading-2 size-secondary">Sottotitolo Importante</h2>
      <p className="paragraph size-paragraph text-paragraph">
        Questo è un paragrafo che dimostra l'utilizzo di stili personalizzati in Tailwind.
        La gerarchia visiva è fondamentale per una buona esperienza utente.
      </p>

      <div className="space-y-1 space-x-4 ">
        <button className="button-primary bg-button-primary text-primary">Azione Principale</button>
        <button className="button-secondary bg-button-secondary text-secondary">Azione Secondaria</button>
      </div>
    </div>
  );

}

export default App
