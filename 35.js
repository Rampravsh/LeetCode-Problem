var searchInsert = function (nums, target) {
    let st = 0
    let end = nums.length - 1
    while (st <= end) {
        let md = Math.round((st + end) / 2)
        if (nums[md] < target) {
            st = md + 1
        } else if (nums[md] > target) {
            end = md - 1
        } else {
            return md
        }
    }
    return st
};

// ese solve karte time bo target to return kar pa rahe the jo array me tah per bo nahi jo nahi tha hum -1 
// return kar rahe the jo ki sahi nahi tha question ke hisab se to hum last st hi retun kiye per st return karne se
// pahle hum debug kiye fir ye return kiye debug karte time hame ye samajh aaya ki st hi bo index hoga jo bo index ki
// jagah lega jaha pe us target ko rakhne per arry ki order kharab nahi hoga 
