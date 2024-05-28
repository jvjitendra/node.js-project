// Array to hold NFTs
let nftCollection = [];

function mintNFT() {               // Function to mint an NFT
    const nft = createNFT();
    addNFT(nft);
    clearFields();
    alert("NFT Minted Successfully!");
}

// Function to create an NFT object
function createNFT() {
    const name = document.getElementById("name").value;
    const creator = document.getElementById("creator").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;

    return { name, creator, description, image };
}

// Function to add NFT to the collection
function addNFT(nft) {
    nftCollection.push(nft);
}

// Function to clear input fields
function clearFields() {
    document.getElementById("name").value = '';
    document.getElementById("creator").value = '';
    document.getElementById("description").value = '';
    document.getElementById("image").value = '';
}

// Function to list all NFTs
function listNFTs() {
    const nftList = document.getElementById("nftList");
    nftList.innerHTML = '';

    nftCollection.forEach(nft => {
        const nftItem = document.createElement("div");
        nftItem.classList.add("nft-item");
        nftItem.innerHTML = `
            <p><strong>Name:</strong> ${nft.name}</p>
            <p><strong>Creator:</strong> ${nft.creator}</p>
            <p><strong>Description:</strong> ${nft.description}</p>
            <p><strong>Image:</strong> <a href="${nft.image}" target="_blank">${nft.image}</a></p>
        `;
        nftList.appendChild(nftItem);
    });
}

// Function to show total supply of NFTs
function showTotalSupply() {
    const total = getTotalSupply();
    document.getElementById("totalSupply").innerText = `Total Supply: ${total}`;
}

// Function to get total supply of NFTs
function getTotalSupply() {
    return nftCollection.length;
}
