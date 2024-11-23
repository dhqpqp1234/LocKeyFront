function lengthCheck(item){
    if(item.length < 2){
        item = "0"+item;
    }
    return item;
}

export function getNowDate(date){
    const nowDate = new Date(date);
    
    const year = nowDate.getFullYear();
    let month = nowDate.getMonth() + 1;
    let day = nowDate.getDate();

    const fullDate = year+"-"+lengthCheck(month)+"-"+lengthCheck(day);

    return fullDate;

}

export function getYearMonth(date){
    const now = new Date(date);
    const year = date.getFullYear();
    let month = now.getMonth()+1;

    const yearMonth = year + "-" + lengthCheck(month);

    return yearMonth;
}