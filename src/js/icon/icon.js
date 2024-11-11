import menuOtherRogo from '../../assets/menu_other.png'
import mainRogo from '../../assets/main_rogo.png'
import mainImage from '../../assets/main.gif'
import moonImage from '../../assets/moon.gif'
import moveMoonImage from '../../assets/move_moon.gif'
import kakaoImage from '../../assets/kakaoTalk_logo.svg'

export function getIconImages(num){
    switch(num){
        case 0 : return menuOtherRogo;   //헤더 메뉴 더보기
        case 1 : return mainRogo;   //메인로고
        //메인사진
        case 2 : return mainImage;
        case 3 : return moonImage;
        case 4 : return moveMoonImage;
        case 5 : return kakaoImage;
        default : null;
    }    
}


