const bcrypt = require('bcrypt')

async function run() {
    //随机字符串
    let salt = await bcrypt.genSalt(10)
    let result = await bcrypt.hash('123', salt)
    console.log(result)
}

run()