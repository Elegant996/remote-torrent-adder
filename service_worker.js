// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.

importScripts(
    'miscapis/RTAinit.js',
    'miscapis/browser.js',
    'miscapis/safe-buffer.js',
    'miscapis/bencode.js',
    'miscapis/functions.js',
    'miscapis/background.js',
    'miscapis/config.js',
    'miscapis/base64.js',
    'webuiapis/VuzeSwingUI.js',
    'webuiapis/TorrentfluxWebUI.js',
    'webuiapis/TransmissionWebUI.js',
    'webuiapis/uTorrentWebUI.js',
    'webuiapis/ruTorrentWebUI.js',
    'webuiapis/VuzeHTMLUI.js',
    'webuiapis/VuzeRemoteUI.js',
    'webuiapis/BuffaloWebUI.js',
    'webuiapis/qBittorrentWebUI.js',
    'webuiapis/qBittorrentWebUI-v2.js',
    'webuiapis/QnapDownloadStation.js',
    'webuiapis/DelugeWebUI.js',
    'webuiapis/pyrtWebUI.js',
    'webuiapis/TixatiWebUI.js',
    'webuiapis/HadoukenWebUI.js',
    'webuiapis/nodejsrtorrentWebUI.js',
    'webuiapis/SynologyWebUI.js',
    'webuiapis/floodWebUI.js',
    'webuiapis/flood-jesecWebUI.js',
    'webuiapis/tTorrentWebUI.js',
    'webuiapis/rtorrentXmlRpc.js'
)