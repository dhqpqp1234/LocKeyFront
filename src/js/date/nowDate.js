export function getNowDate(){
    const nowDate = new Date();
    
    const year = nowDate.getFullYear();
    let month = nowDate.getMonth() + 1;
    let day = nowDate.getDate();

    if(month.length < 2){
        month = "0"+month;
    }

    if(day.length < 2){
        day = "0"+day;
    }

    const fullDate = year+"-"+month+"-"+day;

    return fullDate;

}