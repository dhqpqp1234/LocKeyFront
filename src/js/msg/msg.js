export function filterNullCheckMsg(value) {
    let returnValue = "";

    if (typeof value !== "string") return "";

    switch (value) {
        case "email":
            returnValue = "이메일을 입력해주세요.";
            break;
        case "pw1":
            returnValue = "비밀번호를 입력해주세요.";
            break;
        case "pw2":
            returnValue = "비밀번호 확인을 입력해주세요.";
            break;
        case "ph1":
            returnValue = "휴대폰번호를 입력해주세요.";
            break;
        case "ph2":
            returnValue = "인증번호를 입력해주세요.";
            break;
        case "addr":
            returnValue = "주소를 입력해주세요.";
            break;
            case "name":
            returnValue = "이름을 입력해주세요.";
            break;
            case "detailAddr" : 
            returnValue = "상세주소를 입력해주세요."
            break;
        default:
            returnValue = "";
            break;
    }
    
    return returnValue;
}
