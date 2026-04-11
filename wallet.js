let provider;
let signer;

const CONTRACT_ADDRESS = "0x1fde0c64677C7F2E9dE23494D7bFD8caa9F63fa6";

const ABI = [
  "function balanceOf(address owner, uint256 id) view returns (uint256)"
];

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

async function checkTokenGate() {
    if (!signer) return false;

    try {
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
        const address = await signer.getAddress();

        const balance = await contract.balanceOf(address, 1);

        console.log("Token Balance:", balance.toString());

        return balance.gt(0);
    } catch (err) {
        console.error("Token Gate Error:", err);
        return false;
    }
}
        // WalletConnect fallback
        const wcProvider = await window.EthereumProvider.init({
            projectId: "", // replace later
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
