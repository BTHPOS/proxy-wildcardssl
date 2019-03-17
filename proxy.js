var proxy = require('redbird')({
    port: 80,
    secure: true,
    ssl: {
        port: 443,
        key: "./ssl/_.bithereum.network_private_key.key",
        cert: "./ssl/bithereum.network_ssl_certificate.cer",
    }
});


proxy.register("insight.bithereum.network", "http://18.206.164.133:3000", {ssl: false});
proxy.register("explorer.bithereum.network", "http://18.206.164.133:3000", {ssl: false});
proxy.register("insight2.bithereum.network", "http://54.236.112.229:3000", {ssl: false});
proxy.register("office.bithereum.network", "http://96.56.229.210:3000", {ssl: false});




