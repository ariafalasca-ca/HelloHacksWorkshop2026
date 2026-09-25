import { useState } from 'react'

const starters = [
  { name: 'Bulbasaur', number: '001', type: 'Grass', color: 'bg-emerald-50 text-emerald-800', description: 'A little seed. A lot of potential.' },
  { name: 'Charmander', number: '004', type: 'Fire', color: 'bg-orange-50 text-orange-800', description: 'A warm heart with a fiery spirit.' },
  { name: 'Squirtle', number: '007', type: 'Water', color: 'bg-sky-50 text-sky-800', description: 'Ready to make a splash.' },
]

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="mx-auto flex min-h-svh max-w-5xl flex-col px-6 sm:px-10">
      <header className="flex items-center gap-3 border-b border-stone-200 py-6">
        <span aria-hidden="true" className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-stone-900 bg-white">
          <span className="absolute inset-x-0 top-0 h-1/2 border-b-2 border-stone-900 bg-red-600" />
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-stone-900 bg-white" />
        </span>
        <span className="text-lg font-bold tracking-tight">PokéStart</span>
        <span className="ml-auto text-xs font-medium uppercase tracking-widest text-stone-500">Kanto region</span>
      </header>

      <main className="flex flex-1 flex-col justify-center py-16 sm:py-24">
        <p className="mb-4 text-sm font-semibold text-red-700">Your adventure starts here</p>
        <h1 className="max-w-xl text-4xl font-bold tracking-tight sm:text-6xl">Small beginnings.<br />Legendary journeys.</h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600">Every trainer needs a partner. Choose your first Pokémon and take the first step together.</p>

        <fieldset className="mt-12">
          <legend className="mb-4 text-sm font-semibold">Choose your starter</legend>
          <div className="grid gap-4 sm:grid-cols-3">
            {starters.map((pokemon) => (
              <button
                key={pokemon.number}
                type="button"
                aria-pressed={selected?.name === pokemon.name}
                onClick={() => setSelected(pokemon)}
                className={`rounded-2xl border bg-white p-6 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600 ${selected?.name === pokemon.name ? 'border-red-600 ring-1 ring-red-600' : 'border-stone-200 hover:border-stone-400'}`}
              >
                <div className="mb-8 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-stone-500">#{pokemon.number}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${pokemon.color}`}>{pokemon.type}</span>
                </div>
                <h2 className="text-xl font-semibold tracking-tight">{pokemon.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{pokemon.description}</p>
              </button>
            ))}
          </div>
        </fieldset>
        <p role="status" className="mt-6 min-h-12 text-sm text-stone-600">
          {selected?.type}
        </p>
      </main>

      <footer className="border-t border-stone-200 py-6 text-xs text-stone-500">Made for the joy of adventure. A Pokémon fan project.</footer>
    </div>
  )
}

export default App
