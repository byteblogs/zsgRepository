const request = require('../utils/kad.request.js')
const linq = require('../lib/linq.min.js').linq

//const URI = 'http://localhost:8088/plat/service';
const URI = 'http://17773w4d03.iok.la/plat/service';
class MainController{
  getListData(unitId,currentPage, pageSize) {
    return request.get(`${URI}/insurance/queryByUnitIdPagination?unitId=${unitId}&currentPage=${currentPage}&pageSize=${pageSize}`, 'GET').then(res=>{
      console.log('resolved');
      console.log(res);
      return res.data;
   
      }, error=>{
        console.log('error');
        console.log(reason);
        wx.showToast({
          title: '网络异常',
        })
        })
  }

  insertData(username,idcard){
    return request.get(`${URI}/insurance/apply?purchaserId=11111&beneficiaryName=${username}&beneficiaryIdentityNo=${idcard}`,'POST').then(res => res.data)
  }

}

/**
 * 实例化对象
 */
let mainController=  new MainController();
/**
 * 暴露对象，无需每次都加函数名
 */
module.exports = { 
    controller:mainController,
 }