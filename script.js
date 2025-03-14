let buttons = [
    { "id": "btn1",  "text": "kinstu质押",               "url": "https://kintsu.xyz/staking", "color": "#333" },
    { "id": "btn2",  "text": "talentum任务平台",        "url": "https://monad.talentum.id/", "color": "#333" },
    { "id": "btn3",  "text": " Apriori质押",            "url": "https://stake.apr.io/", "color": "#333" },
    { "id": "btn4",  "text": "nad fun meme交互",       "url": "https://testnet.nad.fun/", "color": "#333" },
    { "id": "btn5",  "text": " Bebop蜂交易一对多多对一", "url": "https://bebop.xyz/trade?network=monad&sell=MON&buy=WMON", "color": "#333" },
    { "id": "btn6",  "text": " Monad域名",              "url": "https://app.nad.domains/", "color": "#333" },
    { "id": "btn7",  "text": "Owlto部署合约",           "url": "https://owlto.finance/deploy/", "color": "#333" },
    { "id": "btn8",  "text": "uniswap交互和流动性",     "url": "https://app.uniswap.org/swap", "color": "#333" },
    { "id": "btn9",  "text": "Orbiter跨链",            "url": "https://testnet.orbiter.finance/en?src_chain=11155111&tgt_chain=10143&src_token=ETH", "color": "#333" },
    { "id": "btn10", "text": "Curvance借贷",            "url": "https://app.curvance.com/", "color": "#333" },
    { "id": "btn11", "text": "Ambient交易",            "url": "https://monad.ambient.finance/", "color": "#333" },
    { "id": "btn12", "text": "Accountable游戏",        "url": "https://game.accountable.capital/", "color": "#333" },
    { "id": "btn13", "text": "Nostra借贷",             "url": "https://monad.nostra.finance/", "color": "#333" },
    { "id": "btn14", "text": "Fantasy卡牌",            "url": "https://monad.fantasy.top/", "color": "#333" },
    { "id": "btn15", "text": " Aicraft投票",           "url": "https://aicraft.fun/projects/fizen", "color": "#333" },
    { "id": "btn16", "text": "kuru交互",               "url": "https://www.kuru.io/swap", "color": "#333" },
    { "id": "btn17", "text": "kizzy交互",              "url": "https://testnet.kizzy.io/", "color": "#333" },
    { "id": "btn18", "text": "Bima借贷",               "url": "https://bima.money/", "color": "#333" },
    { "id": "btn19", "text": "bean交互",               "url": "https://swap.bean.exchange/", "color": "#333" },
    { "id": "btn20", "text": "blazpay交互ai聊天流动性", "url": "https://www.defi.blazpay.com/", "color": "#333" },
    { "id": "btn21", "text": "Caddy交互",              "url": "https://caddy.finance/", "color": "#333" },
    { "id": "btn22", "text": "Izumi交互流动性挖矿",    "url": "https://alpha.izumi.finance/trade/swap", "color": "#333" },
    { "id": "btn23", "text": "Magma质押",              "url": "https://www.magmastaking.xyz/", "color": "#333" },
    { "id": "btn24", "text": "Monorail周交易",         "url": "https://monorail.xyz/", "color": "#333" },
    { "id": "btn25", "text": "Multipli  跨Testnet交互", "url": "https://multipli.fi/", "color": "#333" },
    { "id": "btn26", "text": "monadata.ai未发布可留意", "url": "https://monadata.ai/", "color": "#333" },
    { "id": "btn27", "text": "RareBetSports交互",      "url": "https://rarelink.rarebetsports.io/", "color": "#333" },
    { "id": "btn28", "text": "Magic创建nft和交易",    "url": "https://magiceden.io/monad-testnet", "color": "#333" },
    { "id": "btn29", "text": "fortytwo未发布留意",    "url": "https://fortytwo.network", "color": "#333" },
    { "id": "btn30", "text": "fortytwo填写表单",       "url": "https://tally.so/r/wQzVQk", "color": "#333" },
    { "id": "btn31", "text": "LFJ.gg 兑换和组lp",      "url": "https://pandaria.lfj.gg/", "color": "#333" },
    { "id": "btn32", "text": "PancakeSwap交互",        "url": "https://pancakeswap.finance/?chain=monadTestnet", "color": "#333" },
    { "id": "btn33", "text": "LootGO加白名单",         "url": "https://www.lootgo.app/", "color": "#333" },
    { "id": "btn34", "text": "hashflow交互",           "url": "https://app.hashflow.com/?b=1-ETH&q=1-WETH", "color": "#333" },
    { "id": "btn35", "text": "castora未发布留意",      "url": "https://castora.xyz/", "color": "#333" },
    { "id": "btn36", "text": "levr待发布",             "url": "https://a4p.levr.bet", "color": "#333" }
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
    document.getElementById('edit-url').value = '';
    document.getElementById('edit-color').value = '#333'; // 默认颜色
    document.getElementById('delete-btn').style.display = 'none';
    document.getElementById('edit-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('edit-modal').dataset.id = '';
}

function showEditModal(id) {
    const btn = displayedButtons.find(b => b.id === id);
    document.getElementById('modal-title').innerText = '编辑按钮';
    document.getElementById('edit-text').value = btn.text;
    document.getElementById('edit-url').value = btn.url;
    document.getElementById('edit-color').value = btn.color; // 设置当前颜色
    document.getElementById('delete-btn').style.display = 'inline';
    document.getElementById('edit-modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('edit-modal').dataset.id = id;
}

function closeModal() {
    document.getElementById('edit-modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function saveButton() {
    const text = document.getElementById('edit-text').value;
    const url = document.getElementById('edit-url').value;
    const color = document.getElementById('edit-color').value; // 获取选择的颜色
    if (!text || text.length > 20) {
        alert("文字不能为空且不能超过20个字！");
        return;
    }
    if (!url || !url.startsWith('http')) {
        alert("请输入有效的网址！");
        return;
    }
    const id = document.getElementById('edit-modal').dataset.id;
    const newButton = { id: id || `btn${nextId++}`, text, url, color };
    if (!id) {
        buttons.push(newButton);
        displayedButtons.push(newButton);
    } else {
        const index = buttons.findIndex(b => b.id === id);
        buttons[index] = newButton;
        const displayIndex = displayedButtons.findIndex(b => b.id === id);
        displayedButtons[displayIndex] = newButton;
    }
    localStorage.setItem('customButtons', JSON.stringify(buttons));
    renderButtons();
    closeModal();
}

function deleteButton() {
    const id = document.getElementById('edit-modal').dataset.id;
    if (id) {
        buttons = buttons.filter(btn => btn.id !== id);
        displayedButtons = displayedButtons.filter(btn => btn.id !== id);
        localStorage.setItem('customButtons', JSON.stringify(buttons));
        renderButtons();
    }
    closeModal();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-btn').addEventListener('click', showAddModal);
    document.getElementById('save-btn').addEventListener('click', saveButton);
    document.getElementById('delete-btn').addEventListener('click', deleteButton);
    document.getElementById('cancel-btn').addEventListener('click', closeModal);
    displayedButtons = [...buttons]; // 直接使用 buttons 数组的顺序
    renderButtons();
});
