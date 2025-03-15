let buttons = [
    { "id": "btn1",  "text": "官网（3星）",               "url": "https://testnet.monad.xyz/", "color": "#333" },
    { "id": "btn2",  "text": "Curvance（3星）",        "url": "https://monad.curvance.com/monad", "color": "#333" },
    { "id": "btn3",  "text": "fantasy（3星）",         "url": "https://monad.fantasy.top/", "color": "#333" },
    { "id": "btn4",  "text": "Nad.fun（3星）",         "url": "https://testnet.nad.fun", "color": "#333" },
    { "id": "btn5",  "text": "aPriori（3星）",         "url": "https://stake.apr.io/", "color": "#333" },
    { "id": "btn6",  "text": "Kuru（3星）",            "url": "https://kuru.io/markets", "color": "#333" },
    { "id": "btn7",  "text": "rarebetsports（3星）",   "url": "https://www.rarebetsports.io/", "color": "#333" },
    { "id": "btn8",  "text": "Kintsu（3星）",          "url": "https://kintsu.xyz/staking", "color": "#333" },
    { "id": "btn9",  "text": "Magma（3星）",           "url": "https://magmastaking.xyz", "color": "#333" },
    { "id": "btn10", "text": "uniswap（3星）",         "url": "https://app.uniswap.org/swap", "color": "#333" },
    { "id": "btn11", "text": "Magic Eden（3星）",      "url": "https://magiceden.io/mint-terminal/create", "color": "#333" },
    { "id": "btn12", "text": "Nad Name Service（3星）", "url": "https://nad.domains/", "color": "#333" },
    { "id": "btn13", "text": "Zaros（3星）",           "url": "https://testnet.app.zaros.fi/account", "color": "#333" },
    { "id": "btn14", "text": "Ammalgam（3星）",        "url": "https://ammalgam.xyz/", "color": "#333" },
    { "id": "btn15", "text": "Monadverse（3星）",      "url": "https://monadverse.land/", "color": "#333" },
    { "id": "btn16", "text": "Bean Exchange（3星）",   "url": "https://swap.bean.exchange/swap", "color": "#333" },
    { "id": "btn17", "text": "Kizzy（3星）",           "url": "https://kizzy.io/", "color": "#333" },
    { "id": "btn18", "text": "Nitro Finance（3星）",   "url": "https://nitrofinance.xyz/", "color": "#333" },
    { "id": "btn19", "text": "Azaar（3星）",           "url": "https://app-monad-testnet-v2.azaar.com/", "color": "#333" },
    { "id": "btn20", "text": "monorail（3星）",        "url": "https://testnet-preview.monorail.xyz/", "color": "#333" },
    { "id": "btn21", "text": "monadstarter（2星）",    "url": "https://www.monadstarter.xyz/", "color": "#333" },
    { "id": "btn22", "text": "Monad Pad（2星）",       "url": "https://www.monadpad.xyz/", "color": "#333" },
    { "id": "btn23", "text": "tread.fi（2星）",        "url": "https://tread.fi", "color": "#333" },
    { "id": "btn24", "text": "OctoSwap（2星）",        "url": "https://octo.exchange/swap", "color": "#333" },
    { "id": "btn25", "text": "Poply（2星）",           "url": "https://poply.xyz/", "color": "#333" },
    { "id": "btn26", "text": "GOEMON（2星）",          "url": "https://testnet.goemon.xyz/", "color": "#333" },
    { "id": "btn27", "text": "Monadex（2星）",         "url": "https://app.monadex.exchange/", "color": "#333" },
    { "id": "btn28", "text": "Taya（2星）",            "url": "https://tayaswap.xyz/", "color": "#333" },
    { "id": "btn29", "text": "Defined（2星）",         "url": "https://defined.fi", "color": "#333" },
    { "id": "btn30", "text": "LFJ.gg（一星）",         "url": "https://pandaria.lfj.gg/monad-testnet/swap", "color": "#333" },
    { "id": "btn31", "text": "narwhal（2星）",         "url": "https://testnet.narwhal.finance/", "color": "#333" },
    { "id": "btn32", "text": "Predicto（一星）",       "url": "https://x.com/predicto_hq", "color": "#333" },
    { "id": "btn33", "text": "LANIAKEA（一星）",       "url": "https://laniakea.game/", "color": "#333" },
    { "id": "btn34", "text": "Shrimp Protocol（一星）", "url": "https://x.com/ShrimpDEX", "color": "#333" },
    { "id": "btn35", "text": "Monadians（一星）",      "url": "https://monadians.xyz/", "color": "#333" },
    { "id": "btn36", "text": "BlockNads（一星）",      "url": "https://www.blocknads.art/", "color": "#333" },
    { "id": "btn37", "text": "Monad Nomads NFT（一星）", "url": "https://www.monadnomads.xyz/", "color": "#333" },
    { "id": "btn38", "text": "Spiky Nads（一星）",     "url": "https://www.spikynads.xyz/", "color": "#333" },
    { "id": "btn39", "text": "Skrumpeys（一星）",      "url": "https://x.com/skrumpeys", "color": "#333" },
    { "id": "btn40", "text": "bebop",                  "url": "https://bebop.xyz/trade?network=monad&buy=", "color": "#333" },
    { "id": "btn41", "text": "PancakeSwap",            "url": "https://pancakeswap.finance/?chain=monadTestnet", "color": "#333" },
    { "id": "btn42", "text": "hashflow",               "url": "https://app.hashflow.com/?b=10143-MON&q=10143-WMON", "color": "#333" },
    { "id": "btn43", "text": "FastLane",               "url": "https://www.shmonad.xyz/", "color": "#333" },
    { "id": "btn44", "text": "Castora",                "url": "https://castora.xyz/pools", "color": "#333" },
    { "id": "btn45", "text": "ambient",                "url": "https://monad.ambient.finance/swap/", "color": "#333" },
    { "id": "btn46", "text": "LEVR_bet",               "url": "https://app.levr.bet/lab", "color": "#333" },
    { "id": "btn47", "text": "Talentum",               "url": "http://monad.talentum.id", "color": "#333" },
    { "id": "btn48", "text": "nad域名",                "url": "https://app.nad.domains", "color": "#333" },
    { "id": "btn49", "text": "Redbrick",               "url": "https://redbrick.land/web3-portal?tab=monad_testnet", "color": "#333" },
    { "id": "btn50", "text": "Mace",                   "url": "https://testnet.swaps.mace.ag/", "color": "#333" },
    { "id": "btn51", "text": "Mu Digital",             "url": "https://testnet.mudigital.net/", "color": "#333" },
    { "id": "btn52", "text": "Multipli",               "url": "https://testnet.multipli.fi/", "color": "#333" },
    { "id": "btn53", "text": "Dusted",                 "url": "https://www.dusted.app/login", "color": "#333" },
    { "id": "btn54", "text": "Kinza",                  "url": "https://monad-test.kinza.finance/#/", "color": "#333" },
    { "id": "btn55", "text": "Accountable",            "url": "https://game.accountable.capital/", "color": "#333" },
    { "id": "btn56", "text": "aiCraft Fun",            "url": "https://aicraft.fun/projects/fizen", "color": "#333" },
    { "id": "btn57", "text": "Crystal",                "url": "https://app.crystal.exchange/swap", "color": "#333" },
    { "id": "btn58", "text": "layer3",                 "url": "https://app.layer3.xyz/quests/monad-timeswap", "color": "#333" },
    { "id": "btn59", "text": "exospirits",             "url": "https://www.exospirits.com/", "color": "#333" },
    { "id": "btn60", "text": "圆形NFT0.034M",          "url": "https://testnet.freee.xyz/", "color": "#333" },
    { "id": "btn61", "text": "demask",                 "url": "https://app.demask.finance/explorer", "color": "#333" },
    { "id": "btn62", "text": "kiloex",                 "url": "https://app.kiloex.io/trade?chain=MON", "color": "#333" },
    { "id": "btn63", "text": "nitrofinance",           "url": "https://testapp.nitrofinance.xyz/pool", "color": "#333" },
    { "id": "btn64", "text": "beta.lootify",           "url": "https://beta.lootify.xyz/", "color": "#333" },
    { "id": "btn65", "text": "owlto",                  "url": "https://owlto.finance/swap", "color": "#333" },
    { "id": "btn66", "text": "moncave",                "url": "https://www.moncave.xyz/cave-inside", "color": "#333" },
    { "id": "btn67", "text": "dirol",                  "url": "https://dex.dirol.network/swap", "color": "#333" }
];

const savedButtons = JSON.parse(localStorage.getItem('customButtons') || '[]');
if (savedButtons.length > 0) {
    buttons = savedButtons;
}

let displayedButtons = [];
let nextId = buttons.length ? Math.max(...buttons.map(b => parseInt(b.id.replace('btn', '')))) + 1 : 1;

function renderButtons() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    displayedButtons.forEach(btn => {
        const div = document.createElement('div');
        div.className = 'text-btn';
        div.innerText = btn.text;
        div.style.backgroundColor = btn.color; // 设置按钮背景颜色
        div.dataset.id = btn.id;
        div.onclick = function() {
            window.open(btn.url, '_blank');
        };
        div.oncontextmenu = function(e) {
            e.preventDefault();
            showEditModal(btn.id);
        };
        container.appendChild(div);
    });
}

function showAddModal() {
    document.getElementById('modal-title').innerText = '添加按钮';
    document.getElementById('edit-text').value = '';
    document.getElementById('edit-url').value =
