var proxy = require('redbird')({
    port: 80,
    secure: true,
    ssl: {
        port: 443,
        key: "./ssl/_.bithereum.network_private_key.key",
        cert: "./ssl/bithereum.network_ssl_certificate.cer",
    }
});


proxy.register("insight.bithereum.network", "http://localhost:3000", {ssl: false});
proxy.register("explorer.bithereum.network", "http://localhost:3000", {ssl: false});




