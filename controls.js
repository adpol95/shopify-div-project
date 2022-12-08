const bodyBridge = document.getElementsByTagName('body')[0];
const searchHeadBridge = document.getElementById('searchArea').style;
const searchAreaHeadDivBorderBridge = document.getElementById('dividerArea').style;
const darkThemeImg = [...document.getElementsByClassName('darkTheme')];
const whiteThemeImg = [...document.getElementsByClassName('whiteTheme')];
let stateOfTheme = false;
//const currentHour = new Date().getHours();

// if (currentHour >= 8 && currentHour < 17) {
//     bodyBridge.background = "white";
//     bodyBridge.color = "#5c5f62";
// } else {
//     bodyBridge.background = "#0d1213";
//     bodyBridge.color = "#d7d7db";
// }


















const dayNight = () => {
    searchHeadBridge.background = stateOfTheme ? "#fafbfb" : "#0d1213";
    searchHeadBridge.border = stateOfTheme ? "1px #6d7175 solid" : "1px solid #59767a";
    searchAreaHeadDivBorderBridge.border = stateOfTheme ? "1px solid #6d7175": "1px solid #59767a";

    if (!stateOfTheme) {
        bodyBridge.setAttribute('class', 'darkThemeBody');
        whiteThemeImg.map((el, i) => {
            darkThemeImg[i].style.display = "inline-block";
            return el.style.display = "none"
        });
        stateOfTheme = !stateOfTheme;

    } else {
        bodyBridge.setAttribute('class', '');
        whiteThemeImg.map((el, i) => {
            darkThemeImg[i].style.display = "none";
            return el.style.display = "inline-block"
        });
        stateOfTheme = !stateOfTheme;
    }
}
