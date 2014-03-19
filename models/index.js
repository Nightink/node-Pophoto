/**
 * 数据模型统一调度接口
 */

require('./photo');
require('./user');

var debug     = require('debug')('app:models');
var debugging = require('../libs/utils').debugging;

debugging(debug, 'loaded model files');
