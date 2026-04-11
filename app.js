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

async function loadPage(page) {
    const container = document.getElementById("pageContainer");

    // Example: gate marketplace + special mint
    if (page === "marketplace") {

        if (!window.userAddress) {
            container.innerHTML = `
                <div class="card">
                    <h2>🔒 Connect Wallet Required</h2>
                </div>
            `;
            return;
        }

        const hasAccess = await checkTokenGate();

        if (!hasAccess) {
            container.innerHTML = `
                <div class="card">
                    <h2>🚫 Access Denied</h2>
                    <p>You must own FunFart Token #1 to enter.</p>
                </div>
            `;
            return;
        }
    }

    container.innerHTML = pages[page];
}

// Load default page
loadPage("home");
