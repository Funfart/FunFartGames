let provider;
let signer;

async function connectWallet() {
    try {
        // MetaMask
        if (window.ethereum) {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            signer = provider.getSigner();

            const address = await signer.getAddress();
            window.userAddress = address;

            document.getElementById("connectBtn").innerText =
                address.slice(0,6) + "..." + address.slice(-4);

            console.log("Connected:", address);
            return;
        }

        // WalletConnect fallback
        const wcProvider = await window.EthereumProvider.init({
            projectId: "YOUR_PROJECT_ID", // replace later
            chains: [1],
            showQrModal: true
        });

        await wcProvider.enable();

        provider = new ethers.providers.Web3Provider(wcProvider);
        signer = provider.getSigner();

        const address = await signer.getAddress();
        window.userAddress = address;

    } catch (err) {
        console.error(err);
    }
}
