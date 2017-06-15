export default function getLeftData(data) {
    var arr = []
    var list = {}
    for (var i = 0; i < data.length; i++) {
        if (ishasString(arr, data[i].normalMerchantClassName)) {

        } else {
            list[data[i].normalMerchantClassName] = []

        }
    }
    for (var i = 0; i < data.length; i++) {
        if (ishasString(arr, data[i].normalMerchantClassName)) {

        } else {
            list[data[i].normalMerchantClassName].push({
                merchantId: data[i].merchantId,
                mcc: data[i].mcc,
                name: data[i].name,
                normalMerchantClassName: data[i].normalMerchantClassName
            })
        }
    }
    return list
}
function ishasString(arr, str) {
        var flag = false
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == str) {
                flag = true
                return flag
            }
        }
        return flag
    }