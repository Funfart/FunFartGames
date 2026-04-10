const pages = {
    home: `
        <div class="card">
            <h1>Welcome to Web3 Arcade</h1>
            <p>Your gateway to blockchain gaming.</p>
        </div>
    `,

    games: `
        <div class="card">
            <h2>🎮 Games</h2>
            <p>Launch Web3-enabled games here.</p>
            <div class="card">[Game Placeholder]</div>
        </div>
    `,

    marketplace: `
        <div class="card">
            <h2>🛒 Marketplace</h2>
            <p>Buy, sell, and trade NFTs.</p>
        </div>
    `,

    profile: `
        <div class="card">
            <h2>👤 Profile</h2>
            <p>Wallet: <span id="walletAddress">Not connected</span></p>
        </div>
    `
};

function loadPage(page) {
    document.getElementById("pageContainer").innerHTML = pages[page];

    if (page === "profile" && window.userAddress) {
        document.getElementById("walletAddress").innerText = window.userAddress;
    }
}

// Load default page
loadPage("home");
