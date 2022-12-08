const bodyBridge = document.getElementsByClassName('body1')[0].style;
const moonBridge = document.getElementById('moonImg').style;
const sunBridge = document.getElementById('sunImg').style;
const logoBlackBridge = document.getElementById('mainLogoBlack').style;
const logoWhiteBridge = document.getElementById('mainLogoWhite').style;
const searchHeadBridge = document.getElementById('searchArea').style;
const arrowGrayBridge = document.getElementById('arrowGray').style;
const arrowGrayWhiteBridge = document.getElementById('arrowGrayWhite').style;
const searchAreaHeadDivBorderBridge = document.getElementById('dividerArea').style;
const searchingLogo = document.getElementById('searchingLogo').style;
const searchingLogoWhite = document.getElementById('searchingLogoWhite').style;
const test1 = document.getElementsByTagName('body');

//const currentHour = new Date().getHours();

// if (currentHour >= 8 && currentHour < 17) {
//     bodyBridge.background = "white";
//     bodyBridge.color = "#5c5f62";
// } else {
//     bodyBridge.background = "#0d1213";
//     bodyBridge.color = "#d7d7db";
// }


















const dayNight = () => {

    if (bodyBridge.background === "white" || !bodyBridge.background) {






        bodyBridge.background = "#0d1213";
        bodyBridge.color = "#d7d7db";
        searchHeadBridge.background = "#0d1213";
        searchHeadBridge.border = "1px solid #59767a"
        searchAreaHeadDivBorderBridge.border = "1px solid #59767a"

        moonBridge.display = "none";
        sunBridge.display = "inline-block";
        logoBlackBridge.display = "none";
        logoWhiteBridge.display = "inline-block";
        arrowGrayBridge.display = "none";
        arrowGrayWhiteBridge.display = "inline-block";
        searchingLogoWhite.display = "inline-block";
        searchingLogo.display = "none";

        test1[0].setAttribute('class', "hueueueueu");
        console.log(test1[0].className);
        // moonBridge.opacity = "0";
        // sunBridge.opacity = "1";
        // logoBlackBridge.opacity = "0";
        // logoWhiteBridge.opacity = "1";
        // arrowGrayBridge.opacity = "0";
        // arrowGrayWhiteBridge.opacity = "1";
        // searchingLogo.opacity = "0";
        // searchingLogoWhite.opacity = "1";
        //
        // moonBridge.height = "0";
        // sunBridge.height = "auto";
        // logoBlackBridge.height = "0";
        // logoWhiteBridge.height = "auto";
        // arrowGrayBridge.height = "0";
        // arrowGrayWhiteBridge.height = "auto";
        // searchingLogo.height = "0";
        // searchingLogoWhite.height = "auto";
    } else {
        bodyBridge.background = "white";
        bodyBridge.color = "#5c5f62";
        moonBridge.display = "inline-block";
        sunBridge.display = "none";
        logoBlackBridge.display = "inline-block";
        logoWhiteBridge.display = "none";
        searchHeadBridge.background = "#fafbfb";
        arrowGrayBridge.display = "inline-block";
        arrowGrayWhiteBridge.display = "none";
        searchHeadBridge.border = "1px #6d7175 solid";
        searchAreaHeadDivBorderBridge.border = "1px solid #6d7175";
        searchingLogoWhite.display = "none";
        searchingLogo.display = "inline-block";

        test1[0].setAttribute('class', "hueueueueu2");
        console.log(test1[0].className);
        // moonBridge.opacity = "1";
        // sunBridge.opacity = "0";
        // logoBlackBridge.opacity = "1";
        // logoWhiteBridge.opacity = "0";
        // arrowGrayBridge.opacity = "1";
        // arrowGrayWhiteBridge.opacity = "0";
        // searchingLogo.opacity = "1";
        // searchingLogoWhite.opacity = "0";
        //
        // moonBridge.height = "auto";
        // sunBridge.height = "0";
        // logoBlackBridge.height = "auto";
        // logoWhiteBridge.height = "0";
        // arrowGrayBridge.height = "auto";
        // arrowGrayWhiteBridge.height = "0";
        // searchingLogo.height = "auto";
        // searchingLogoWhite.height = "0";
    }
}
