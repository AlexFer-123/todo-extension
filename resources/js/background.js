// resources/js/background.js

// Evento disparado quando a extensão é instalada ou atualizada
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extensão instalada!');
});

// Evento disparado quando o ícone da extensão é clicado
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['js/content.js']
    });
});

module.exports = {
    // outras configurações...
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.mjs', '.wasm']
    }
};