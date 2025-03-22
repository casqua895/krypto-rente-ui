function CryptoRenteInterface() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Krypto-Rente 2043 – Interface</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-2">Portfolio-Status</h2>
          <p className="text-sm">BTC: 40 %, ETH: 20 %, TIA: 10 %, SOL: 10 %, DYDX/ATOM/INJ: je 5 %, Reserve: 5 %</p>
        </div>

        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="text-xl font-semibold mb-2">Sparplan</h2>
          <ul className="text-sm list-disc list-inside">
            <li>BTC – 200 €/Monat</li>
            <li>ETH – 100 €/Monat</li>
            <li>TIA / SOL – je 50 €/Monat</li>
            <li>DYDX / INJ / ATOM – je 25 €/Monat</li>
            <li>Reserve – 25 €/Monat</li>
          </ul>
        </div>
      </div>

      <div className="bg-white shadow rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-2">Steuerfreie Haltefristen</h2>
        <p className="text-sm">Beispiel: BTC steuerfrei ab 12.04.2025 (noch 21 Tage)</p>
      </div>
    </div>
  );
}

export default CryptoRenteInterface;
