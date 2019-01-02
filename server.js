const WebhooksApi = require('@octokit/webhooks')
const { spawn } = require('child_process')

const webhooks = new WebhooksApi({
    secret: 'jiangbo'
})

webhooks.on('*', ({ id, name, payload }) => {
    if (name === 'push') {
        var ls = spawn('sh', ['./deploy.sh'])
        ls.stdout.on('data', (data) => {
            console.log(`输出：${data}`)
        });

        ls.stderr.on('data', (data) => {
            console.log(`错误：${data}`)
        })
    }
})

require('http').createServer(webhooks.middleware).listen(8002)