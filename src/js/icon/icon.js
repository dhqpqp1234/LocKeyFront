import menuOtherRogo from '../../assets/menu_other.png';
import mainRogo from '../../assets/main_rogo.png';

export function getIconImages(num){
    switch(num){
        case 0 : return menuOtherRogo;   //헤더 메뉴 더보기
        case 1 : return mainRogo;   //메인로고
        default : null;
    }    
}


