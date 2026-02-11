import { useState } from "react";
import type { Car, ServiceLog } from "./assets/types";
import { cars } from "./data";

function App() {
  const [selectedCar, setSelectedCar] = useState(cars[0]);
  return (
    <>
      <div className="min-h-screen w-screen bg-[#0a0a0a] text-white font-sans p-4 md:p-10">
        <header className="max-w-5xl mx-auto flex justify-between items-center border-b border-zinc-800 pb-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter uppercase italic text-purple-500">
              Service_Tracker
            </h1>
            <p className="text-zinc-500 text-sm italic">
              Status: Performance Optimized
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs text-zinc-500 block uppercase tracking-widest">
              Selected Unit
            </span>
            <p className="text-lg font-mono">
              {selectedCar.brand} {selectedCar.model}
            </p>
          </div>
        </header>

        <main className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-1 space-y-4">
            <h2 className="text-zinc-400 uppercase text-xs font-bold tracking-widest mb-4">
              // Garage
            </h2>
            {cars.map((car) => (
              <button
                key={car.id}
                onClick={() => setSelectedCar(car)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                  selectedCar.id === car.id
                    ? "border-purple-500 bg-purple-500/10 text-white"
                    : "border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:border-zinc-600"
                }`}
              >
                <p className="text-xs uppercase opacity-60">{car.brand}</p>
                <p className="text-lg font-bold">{car.model}</p>
                <p className="text-xs mt-2 font-mono">
                  {car.engine} | {car.year}
                </p>
              </button>
            ))}
          </section>

          <section className="lg:col-span-2 space-y-6">
            <div className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-xl">
              <h2 className="text-purple-500 uppercase text-xs font-bold mb-4">
                Add Service Entry
              </h2>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Part Name (e.g. Oil Change)"
                  className="flex-1 bg-black border border-zinc-800 p-3 rounded focus:outline-none focus:border-purple-500 transition-colors"
                />
                <input
                  type="number"
                  placeholder="Mileage"
                  className="w-full md:w-32 bg-black border border-zinc-800 p-3 rounded focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded font-bold transition-all uppercase text-sm tracking-wider">
                  Push
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-zinc-400 uppercase text-xs font-bold mb-4 tracking-widest">
                // Log History
              </h2>
              <div className="bg-zinc-900/20 border-l-2 border-purple-500 p-4 flex justify-between items-center group hover:bg-zinc-900/40 transition-all">
                <div>
                  <p className="font-bold text-lg text-zinc-200">
                    Timing Belt Replacement
                  </p>
                  <p className="text-xs text-zinc-500 font-mono">
                    2026-02-11 | {selectedCar.model} Unit
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-purple-500 font-mono font-bold">
                    180,000 KM
                  </p>
                  <span className="text-[10px] uppercase bg-zinc-800 px-2 py-1 rounded">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
