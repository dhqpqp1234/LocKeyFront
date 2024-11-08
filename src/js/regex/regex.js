export function filterPhone(value){
    if(typeof value !== "string") return "";
    
    return value.replace(/[^0-9]/g, "")
    .replace(/^(\d{2,3})(\d{4})(\d{4})$/, `$1-$2-$3`);
}