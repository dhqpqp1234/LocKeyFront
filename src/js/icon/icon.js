import menuOtherRogo from '../../assets/otherNew.png'
import mainRogo from '../../assets/logo4.png'
import mainImage from '../../assets/main.gif'
import moonImage from '../../assets/moon.gif'
import moveMoonImage from '../../assets/move_moon.gif'
import kakaoImage from '../../assets/icon_kakao.png'
import naverImage from '../../assets/icon_naver.png'
import googleImage from '../../assets/icon_google.png'
import appleImage from '../../assets/appleIcon.png'
import peopleImage from "../../assets/myPageNew.png"
import mainImageU from "../../assets/mainpagenewnew.jpg"
export function getIconImages(num){
    switch(num){
        case 0 : return menuOtherRogo;   //헤더 메뉴 더보기
        case 1 : return mainRogo;   //메인로고
        //메인사진
        case 2 : return mainImage;
        case 3 : return moonImage;
        case 4 : return moveMoonImage;
        case 5 : return kakaoImage;
        case 6 : return naverImage;
        case 7 : return googleImage;
        case 8 : return appleImage;
        case 9 : return peopleImage;
        case 10 : return mainImageU;
        default : null;
    }    
}


