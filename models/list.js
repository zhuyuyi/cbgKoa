const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let cbgSchema = new Schema({
    allow_bargain: Boolean,
    allow_urs_bargain: Boolean,
    // 区
    area_name: String,
    // 收藏数
    collect_num: Number,
    // 评分
    desc_sumup_short: String,
    // 等级
    equip_level: Number,
    // id
    game_ordersn: String,
    // 高亮
    highlights: Array,
    // 等级
    level_desc: String,
    // 价格
    price: Number,
    // 服务器名称
    server_name: String,
    // 服务器id
    serverid: Number,
    storage_type: Number,
    // 门派
    format_equip_name: String,
    // 平台ios=1 or android=2
    platform_type: Number,
    pass_fair_show: Number,

});

module.exports = mongoose.model('Cbg', cbgSchema);