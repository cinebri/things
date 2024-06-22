const d = document;
const wallets = {
  lottery: [
    {
      url: "EQDusjLMtEC4c_RZTVbOols0FFLdJNdNp2N0XidzXprlZBZs",
      id: "💎 Lottery 💎",
      remaining: 10000000,
      terrahash: "100M T"
    },
  ],
  small: [
    {
      url: "EQAxcQR1ZATipq7_p3uC_nzdAGfEI9_ot7KwbImmZUcF28Fv",
      id: "Cortez",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCKI-brKDH7yB_ZNtLBQuH5WHxhVyTZ8TTMeczM90MTb4BR",
      id: "Grasberg",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCqbXeTPH27h6PCxW9siLd99TK6V_1z_Qd4ZvK2epOYXJ13",
      id: "Boddington",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCMLOxANELISfDOOs-4ajGkl87jPJF23-jx_q3WZcqABt_M",
      id: "Lihir",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQA0cEVAzvBCJRIRAE-0rJTBRj62iI_uhoERg8U2ils9U0TP",
      id: "Pueblo Viejo",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQAxd4JnIJeiYjhjx5oVCfy7zIz90lsEPX55cJPAZfT_nOPn",
      id: "Kibali",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQBRfSLLWKpPENVrplO6cgF-YCXT5-KDTJlYTzijziqBc69X",
      id: "Loulo-Gounkoto",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCBQwfxN3osQrIQaDS2I6hKgt-V6pzC-in56E_SyupI0_xv",
      id: "Kadia",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQBJ2X9VBfvBsoMfQFYFRmQW4reXOK4fqYxvSqw5PrY0Okyd",
      id: "Nevada",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQAJnRZ1SP6dazEKh3yljlz1iWlq7wUN1F-eiOED2L8dbh3M",
      id: "Canadian Malarctic",
      remaining: 5000000,
      terrahash: "70T"
    },
  ],
  extraSmall: [
    {
      url: "EQCAGbUzkfXA-_k5WKuH3r0ERlk0X70_aHxHF3QxO4c7xzIc",
      id: "Super Pit",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQBzh8zKTIglDKo4oNuTANGHAB3cPzrqz8jzxBX7t6lraCFB",
      id: "Yanacocha",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQDYkDO-B9RVj5JtraUuQi6-z_UZBUy76NkK-GVMxQR-nbC6",
      id: "Tarkwa",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQBRpj30zjeeZx2uBNwkxf0N2umd4Zx939l4B7ZWgLMrHw6o",
      id: "Goldstrike",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQDD6XMM8KjLqCQQUaW2MT3zif7Co6b1uvm7zea91NRmG6DU",
      id: "Obuasi",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQBlZKR1SdUH021RHD9mSjGwolg6v2WAeh4H3B55btxLFHSY",
      id: "Cadia East",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQDbBsBdFQoQr-PQrOHA6diZJLeBIARqH-IdMTPN0kZePEhr",
      id: "Oyu Tolgoi",
      remaining: 5000000,
      terrahash: "70T"
    },
  ],
  
  medium: [
    {
      url: "EQAXkmHPHj38EAoSUpFS4h_-51Nr-0zkt-WvqFz-g9EeyytS",
      id: "Bambanani",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCgIz9n-IKjCnkp1cvdY_Y36hWrspYyn-YzwtnWRAO3VX-2",
      id: "Tshepong",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCaC2SnsYdFwBKxmVNDDzErdwIuE6jCFQ_vktkMEgJvnE3q",
      id: "Kopanang",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQBa2MAvh8B4wGRGSCL6KauYRURMDvnhyJnOFe0AS_mY8pVy",
      id: "Kuranah",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCJS7stH6ArCx9rMKqW6ma3wwnQ8jIZseZSomfIe4Xu7bTh",
      id: "Kupol",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQBgYOXP1jher0Ryi8Eu0JdCSGQyJXq5iBk02Fot0fOo_Jq6",
      id: "Pioneer",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCYhHyUdcM-cY-52ajaKn_W_WQ1eiDZi5_MmJLhQYVYlroa",
      id: "Darasun",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCgvetY70xTWBebiW0eqk85d8M7nafRd7IPAck7QVnecnE0",
      id: "Muruntau",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCJSX9yLJOXX7jVGpnsFneV-0w2ViSsyqmtrAtMZRAJP9_X",
      id: "Carlin",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQBE4Xu0kyHAN3zKmdrgxQmpMoAYuEsJECPM40PV2Sa6nq1j",
      id: "Olimpiada",
      remaining: 5000000,
      terrahash: "70T"
    },
  ],
  large: [
    {
      url: "EQCpdH9Ly5YzKQvyLvgdpQn8sAa72Q88ChG5Hzy_-bk-OFFz",
      id: "Moab Khotsong",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCf2CHBldCQBRKmgy7S17Hjid2mom9bKiVHf3YAhSpnboHj",
      id: "Kidd",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQBvTXPQdUFTwDOxdI6DK4tFwlyL0dYtFEkxoq-dsMeOlbQ-",
      id: "Laronde",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQDwENdKtFQ8Epl6d6Y2g_0QnAPPzNpGnDSy8FJwRUSJs0Ta",
      id: "Morro Velho",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQA9w-G3wPvo7t3OnggaG8rqzpdjiuGka-Nd4hoCPV1_BwWI",
      id: "South Deep",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQBnSDj00PPIb_I2IosTwefIV4OJQqElZAXwufX1nHlqH-at",
      id: "Harmony",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCMF2xRfeKNGreAZ8w5237Rf6Rlrp3in5Wmf7nDVB6hAfwU",
      id: "Homestake",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQD8ZchOWgQxbGWLXMUb_DhCkcw9mrJgCmZyHd18UmCVdm8T",
      id: "Phakisa",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQDLSjsUUCIgFEAxdtJYUbzNPvenpTTXoZjIQqmHWXQ-kBSX",
      id: "Great Noligwa",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQAahx1pXEI0Gmq1hCQrLh0vVFTRVpGgiRHz_088hzQuEr9x",
      id: "Creighton",
      remaining: 5000000,
      terrahash: "70T"
    },
  ],
  extraLarge: [
    {
      url: "EQAY4LHfgqInZTekX9SDBmbBimShl3OdmTnQGSw82DQBNKAQ",
      id: "Mponeng",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCfPVHTaKwoPOG5C8jSrhi5j82EuhNdKqoirEPvES8igPPN",
      id: "TauTona",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQB6P_39LCqDIcZ600Y6qenlc47a-FtjpReb4rCHGZOt8b2q",
      id: "Savuka",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQDftSo4Mn53jyUFb5bTzmJevxUjK832iy6Tt4eoYIB9M7J5",
      id: "East Rand",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCXsac0FpvNyQwZSCImpmh1O8QWa-JSnal2ESYXZaKq9twn",
      id: "Driefontein",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQDavF_H1EBBsQ82HdyvCExFRbFKQ3mpsHMElE0wbim5ehHM",
      id: "Kusasalethu",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQB-Tc3OrKn__jSa9hTPEmbMioOQN08Fvda_85exIB4GPw4g",
      id: "Empire",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQAl3C0k1R8X9Ms7VG4cUpM3u_lKqfKIgYCLjMDMqaiwXynW",
      id: "Kloof",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQCHODQyANmzftrcaGUOctE_D7XSEZKTepzxXyGLA6dZNDTJ",
      id: "Kolar Gold Fields",
      remaining: 5000000,
      terrahash: "70T"
    },
    {
      url: "EQDCeae9X_DZji0GEUXV8IFX5BPID2AX8zVCxugeH_H1fb9Z",
      id: "Blyvooruitzicht",
      remaining: 5000000,
      terrahash: "70T"
    },
  ],
};
const currentBalances = {
  lottery: {},
  small: {},
  extraSmall: {},
  medium: {},
  large: {},
  extraLarge: {}
};
// const API_TOKEN =
//   "4d1a670e6f0081b02a5add60037f43512497506439d55b62a05100b88ec1c6cb";
const jetton_id = "EQBFlIF-XwfzMOKrFcKJrWQT-kOQvKm48vE-adXZBSt8Mbzh";
async function getWalletBalance(address) {
  try {
    const response = await fetch(
      `https://tonapi.io/v2/accounts/${address}/jettons/${jetton_id}`
      // , {
      //     headers: {
      //         'Authorization': `Bearer ${API_TOKEN}`
      //     }
      // }
    );
    const data = await response.json();
      //тут добавить проверку ответа сервера, data Array=true и длина > 0 : throw new Error("Incorrect server response");
    const jettonWallets = data.balance;
  
    return jettonWallets; // это число баланса

  } catch (error) {
    console.error("Error while fetching balance:", error.message);
    return null;
  }
}

async function updateWallet(wallet, category) {
  try {
    const balanceString = await getWalletBalance(wallet.url);

    if (!balanceString) {
      console.error("Failed to get balance for wallet:", wallet.url);
      return;
    }
    //regexp для справки
    // let balance = balanceString.replace(/0+$/, "");
    // balance = balance.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    // console.log(`BALANCE ${balanceString}`);
    const remainingBalance = wallet.remaining;
   
    // const balanceNumber = parseFloat(balance.replace(/\s/g, ""));
    let balance = parseFloat(balanceString) / 1000000000;
    if (isNaN(balance)) {
      console.error(
        "Balance is not a number for wallet:",
        wallet.url,
        "Balance:",
        balance
      );
      return false;
    }

    currentBalances[category][wallet.url] = balance; // Обновляем текущий баланс кошелька

    const progressBarWidth = Math.abs(100 - (balance / remainingBalance) * 100); 
    let shownBalanceString = balance
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    const walletElement = document.getElementById(wallet.url);
    if (walletElement) {
      walletElement.querySelector(
        ".remaining"
      ).textContent = `Balance: ${shownBalanceString} (${progressBarWidth.toFixed(
        2
      )}%)`;
      walletElement.querySelector(
        ".capacity"
      ).textContent = `Сapacity: ${remainingBalance
        .toLocaleString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
      walletElement.querySelector(
        ".giver-ratio__line-fill"
      ).style.width = `${progressBarWidth}%`;
      walletElement.querySelector(
        ".giver-ratio__percents"
      ).textContent = `${progressBarWidth.toFixed(2)}%`;
      walletElement.querySelector('.terrahash').textContent=`Hashes: ${wallet.terrahash}`
      updateMinedTokens()
    return true;
    } else {
      console.error("Wallet not found", wallet.url);
      return false;
    }
  } catch (error) {
    console.error("Error while updating wallet info:", error.message);
    return false;
  }
}
async function updateBurnedTokens() {
  try {
    const response = await fetch(
      `https://tonapi.io/v2/jettons/EQBFlIF-XwfzMOKrFcKJrWQT-kOQvKm48vE-adXZBSt8Mbzh`
    );
    const data = await response.json();
    let burnedTokens = Math.floor(500000000 - (parseFloat(data.total_supply) / 1000000000));
    let shownBurnedTokens = burnedTokens
      .toLocaleString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    let progressBarWidth = (burnedTokens / 500000000) * 100;
    if(isNaN(burnedTokens)){
      return
    }
    let burntTokensCont = d.querySelector(".burnt-tokens-cont");
    burntTokensCont.querySelector(
      ".burnt-tokens-line__fill"
    ).style.width = `${progressBarWidth}%`;
    burntTokensCont.querySelector(
      ".burnt-tokens__span"
    ).textContent = `${progressBarWidth.toFixed(1)}%`;
    burntTokensCont.querySelector(
      ".burnt-tokens__p"
    ).textContent = `${shownBurnedTokens} tokens burned of 500 000 000`;
  } catch (e) {
    console.error("Error while updating Burned Tokens", e.message);
  }
}

async function updateMinedTokens(){
  try {
    let totalMined = 0;
    const totalCapacity = 250000000;
    for (const category in currentBalances) {
      for (const wallet in currentBalances[category]) {
        totalMined += 5000000 - currentBalances[category][wallet] / totalCapacity;
      }
    }
    let shownMiningTokens = totalMined
      .toLocaleString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    let progressBarWidth = (totalMined / 250000000) * 100;
    if(isNaN(totalMined)){
      return
    }
    let miningTokensCont = d.querySelector(".mining-tokens-cont");
    miningTokensCont.querySelector(
      ".mining-tokens-line__fill"
    ).style.width = `${progressBarWidth}%`;
    miningTokensCont.querySelector(
      ".mining-tokens__span"
    ).textContent = `${progressBarWidth.toFixed(1)}%`;
    miningTokensCont.querySelector(
      ".mining-tokens__p"
    ).textContent = `${shownMiningTokens} tokens mined of 250 000 000`;
  } catch (e) {
    console.error("Error while updating Mined Tokens", e.message);
  }
}
async function updateWallets() {
  try {
    for (const category in wallets) {
      for (const wallet of wallets[category]) {
        //проверка на успешность загрузки кошелька
        // const success = await updateWallet(wallet);
        // console.log(`SUCCESS ${success}`)
        await updateWallet(wallet, category);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }
  } catch (error) {
    console.error("Error while updating wallet info");
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    for (const category in wallets) {
      const categoryElement = document.getElementById(`${category}`);
      for (const wallet of wallets[category]) {
        const walletElement = document.createElement("div");
        walletElement.classList.add("giver-card");
        walletElement.id = wallet.url;
        walletElement.innerHTML = `
                <div class="giver-card">
              <div class="giver-info">
                <a
                  href="https://tonviewer.com/${wallet.url}"
                  >${wallet.id}</a
                >
                <div class="giver-text-cont">
                  <p class="giver-text remaining">Balance: loading...</p>
                  <p class="giver-text capacity">Capacity: loading...</p>
                  <p class="giver-text terrahash">Hashes: loading...</p>
                </div>
              </div>
              <div class="giver-ratio">
                <div class="giver-ratio__percents"><span>0%</span></div>
                <div class="giver-ratio__line-cont">
                  <div class="giver-ratio__line-fill"></div>
                </div>
              </div>
            </div>
            `; 
        categoryElement.appendChild(walletElement);
      }
    }
  } catch (error) {
    console.error("Error while page rendering:", error.message);
  }

  setInterval(updateWallets, 5000);
  setInterval(updateBurnedTokens, 5000);
});
// updateWallets();
