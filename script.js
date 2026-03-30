async function getCrypto() {
  const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd";

  const res = await fetch(url);
  const data = await res.json();

  const container = document.getElementById("crypto-container");

  container.innerHTML = `
    <div class="card">
      <h2>Bitcoin</h2>
      <p>$${data.bitcoin.usd}</p>
    </div>

    <div class="card">
      <h2>Ethereum</h2>
      <p>$${data.ethereum.usd}</p>
    </div>

    <div class="card">
      <h2>Solana</h2>
      <p>$${data.solana.usd}</p>
    </div>
  `;
}

getCrypto();

// Auto refresh every 10 sec
setInterval(getCrypto, 10000);