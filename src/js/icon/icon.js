import menuOtherRogo from '../../assets/header_other.png'
import mainRogo from '../../assets/main_rogo.png'
import mainImage from '../../assets/main.gif'
import moonImage from '../../assets/moon.gif'
import moveMoonImage from '../../assets/move_moon.gif'
import kakaoImage from '../../assets/kakaoIcon.png'
import naverImage from '../../assets/naverIcon.png'
import googleImage from '../../assets/googleIcon.png'
import appleImage from '../../assets/appleIcon.png'
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
        default : null;
    }    
}


