//https://npmjs.org/package/sudo

var sudo = require('sudo');
var options = {
    cachePassword: true,
    prompt: '需要root权限登录',
    spawnOptions: { /* other options for spawn */ }
};
var child = sudo([ 'ls', '-lh', '/usr' ], options);
child.stdout.on('data', function (data) {
    console.log(data.toString());
});