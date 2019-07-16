const List = require('./../models/list');

let pageNo = 0;
let pageSize = 15;

// 查询数据库
function myFindList(page) {

    page = (page - 1) * 15;
    pageNo = page === 0 ? 0 : page - 1;

    return new Promise((resolve, reject) => {
        List
            .find()
            .skip(pageNo)
            .limit(pageSize)
            .then((doc) => {
                resolve(doc)
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}

module.exports = {
    myFindList
}