const bodyBridge = document.getElementsByTagName('body')[0];
const searchHeadBridge = document.getElementsByClassName('searchArea')[0].style;
const searchAreaHeadDivBorderBridge = document.getElementsByClassName('dividerArea')[0].style;
const darkThemeImg = [...document.getElementsByClassName('darkTheme')];
const whiteThemeImg = [...document.getElementsByClassName('whiteTheme')];
let stateOfTheme = false;

const arrTest1 = [searchHeadBridge, searchAreaHeadDivBorderBridge]

//const currentHour = new Date().getHours();

// if (currentHour >= 8 && currentHour < 17) {
//     bodyBridge.background = "white";
//     bodyBridge.color = "#5c5f62";
// } else {
//     bodyBridge.background = "#0d1213";
//     bodyBridge.color = "#d7d7db";
// }


const dayNight = () => {
    arrTest1.forEach(el => {
        el.background = stateOfTheme ? "#fafbfb" : "#0d1213";
        el.border = stateOfTheme ? "1px #6d7175 solid" : "1px solid #59767a";
    })
    bodyBridge.setAttribute('class', stateOfTheme ? '' : 'darkThemeBody');
    whiteThemeImg.map((el, i) => {
        darkThemeImg[i].style.opacity = stateOfTheme ? "0" : "1";
        return el.style.opacity = stateOfTheme ? "1" : "0";
    });
    stateOfTheme = !stateOfTheme;
}
