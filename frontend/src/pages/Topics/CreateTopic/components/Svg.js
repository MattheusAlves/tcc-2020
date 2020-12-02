import React from 'react';
import { View } from 'react-native';

import Svg,{Path,G,Defs,ClipPath,Rect} from 'react-native-svg'
// import { Container } from './styles';

const SvgCreateTopic = (props) => {
  return(
    <Svg width="105" height="143" viewBox="0 0 105 143" fill="none" xmlns="http://www.w3.org/2000/svg" style={{...props.styles}}>
    <G clip-path="url(#clip0)">
    <Path d="M81.55 134.19H25.8325C23.8021 134.19 21.7916 133.884 19.9158 133.289C18.0399 132.694 16.3355 131.822 14.8998 130.722C13.4641 129.622 12.3253 128.317 11.5483 126.88C10.7713 125.443 10.3714 123.903 10.3714 122.348V11.8421C10.3761 8.70248 12.0065 5.69246 14.905 3.4724C17.8035 1.25234 21.7334 0.00355422 25.8325 0H81.5497C85.6489 0.00354448 89.5787 1.25233 92.4773 3.47239C95.3758 5.69245 97.0062 8.70248 97.0108 11.8421V31.8013H97.9708V46.5072H97.0108V122.348C97.0108 125.489 95.3819 128.501 92.4825 130.722C89.583 132.943 85.6505 134.19 81.55 134.19V134.19ZM25.8325 0.367757C21.8606 0.371192 18.0528 1.5812 15.2443 3.73231C12.4358 5.88343 10.856 8.79998 10.8516 11.8421V122.348C10.8515 123.855 11.239 125.347 11.9919 126.739C12.7447 128.132 13.8482 129.396 15.2393 130.462C16.6304 131.527 18.2819 132.373 20.0994 132.949C21.917 133.526 23.8651 133.823 25.8324 133.823H81.5497C85.5229 133.823 89.3334 132.614 92.1428 130.462C94.9523 128.31 96.5307 125.392 96.5307 122.348V46.1394H97.4907V32.169H96.5307V11.8421C96.5262 8.79998 94.9464 5.88343 92.1379 3.73231C89.3294 1.5812 85.5216 0.371193 81.5498 0.367757H25.8325Z" fill="#3F3D56"/>
    <Path d="M82.1637 131.158H26.1791C23.1017 131.155 20.1514 130.217 17.9753 128.551C15.7992 126.884 14.5752 124.624 14.5716 122.267V11.9235C14.5752 9.56639 15.7992 7.30663 17.9753 5.63992C20.1513 3.97321 23.1017 3.03566 26.1791 3.03293H33.3276L33.1931 3.28612C32.8742 3.88634 32.7527 4.53737 32.8394 5.18197C32.9261 5.82657 33.2183 6.44497 33.6903 6.98279C34.1622 7.5206 34.7995 7.96134 35.546 8.26625C36.2926 8.57115 37.1255 8.73087 37.9715 8.73137H69.8912C70.7373 8.73085 71.5702 8.57112 72.3167 8.2662C73.0632 7.96129 73.7004 7.52055 74.1724 6.98274C74.6443 6.44493 74.9365 5.82653 75.0232 5.18195C75.1099 4.53736 74.9884 3.88633 74.6696 3.28612L74.535 3.03293H82.1637C85.2411 3.03567 88.1914 3.97323 90.3674 5.63994C92.5435 7.30664 93.7676 9.5664 93.7711 11.9235V122.267C93.7676 124.624 92.5435 126.884 90.3674 128.551C88.1914 130.217 85.2411 131.155 82.1637 131.158V131.158ZM26.1791 3.40069C23.229 3.40329 20.4007 4.30207 18.3146 5.89983C16.2286 7.4976 15.0552 9.66389 15.0517 11.9235V122.267C15.0552 124.527 16.2286 126.693 18.3147 128.291C20.4007 129.889 23.229 130.787 26.1791 130.79H82.1637C85.1138 130.787 87.9421 129.889 90.0281 128.291C92.1141 126.693 93.2875 124.527 93.291 122.267V11.9235C93.2876 9.6639 92.1141 7.49761 90.0281 5.89985C87.9421 4.30208 85.1138 3.4033 82.1637 3.40069H75.2371C75.5219 4.05047 75.6009 4.74283 75.4676 5.42062C75.3343 6.0984 74.9924 6.74219 74.4702 7.29883C73.948 7.85548 73.2605 8.30903 72.4644 8.62205C71.6682 8.93508 70.7863 9.0986 69.8914 9.09912H37.9713C37.0764 9.09861 36.1945 8.9351 35.3983 8.62208C34.6022 8.30907 33.9146 7.85552 33.3924 7.29887C32.8702 6.74223 32.5283 6.09844 32.395 5.42065C32.2616 4.74286 32.3406 4.05049 32.6254 3.40069H26.1791Z" fill="#CCCCCC"/>
    <Path d="M99.929 71.8535H5.07102C3.72656 71.8524 2.43761 71.4428 1.48693 70.7146C0.536258 69.9865 0.00150911 68.9992 -3.8147e-06 67.9694V44.6651C0.00150911 43.6353 0.536258 42.6481 1.48693 41.9199C2.43761 41.1917 3.72656 40.7822 5.07102 40.781H99.929C101.273 40.7822 102.562 41.1917 103.513 41.9199C104.464 42.6481 104.998 43.6353 105 44.6651V67.9694C104.998 68.9992 104.464 69.9865 103.513 70.7146C102.562 71.4428 101.273 71.8524 99.929 71.8535V71.8535Z" fill="white"/>
    <Path d="M99.929 71.8535H5.07102C3.72656 71.8524 2.43761 71.4428 1.48693 70.7146C0.536258 69.9865 0.00150911 68.9992 -3.8147e-06 67.9694V44.6651C0.00150911 43.6353 0.536258 42.6481 1.48693 41.9199C2.43761 41.1917 3.72656 40.7822 5.07102 40.781H99.929C101.273 40.7822 102.562 41.1917 103.513 41.9199C104.464 42.6481 104.998 43.6353 105 44.6651V67.9694C104.998 68.9992 104.464 69.9865 103.513 70.7146C102.562 71.4428 101.273 71.8524 99.929 71.8535V71.8535ZM5.07102 41.238C3.88474 41.239 2.74743 41.6004 1.9086 42.2429C1.06978 42.8854 0.597929 43.7565 0.596584 44.6651V67.9694C0.597929 68.8781 1.06978 69.7492 1.9086 70.3916C2.74743 71.0341 3.88474 71.3955 5.07102 71.3966H99.929C101.115 71.3955 102.253 71.0341 103.091 70.3916C103.93 69.7492 104.402 68.8781 104.403 67.9694V44.6651C104.402 43.7565 103.93 42.8854 103.091 42.2429C102.253 41.6004 101.115 41.239 99.929 41.238H5.07102Z" fill="#3F3D56"/>
    <Path d="M64.9392 55.0606H31.8284C31.1955 55.0606 30.5885 54.8681 30.141 54.5253C29.6935 54.1825 29.442 53.7176 29.442 53.2329C29.442 52.7481 29.6935 52.2832 30.141 51.9404C30.5885 51.5976 31.1955 51.4051 31.8284 51.4051H64.9392C65.5721 51.4051 66.1791 51.5976 66.6266 51.9404C67.0742 52.2832 67.3256 52.7481 67.3256 53.2329C67.3256 53.7176 67.0742 54.1825 66.6266 54.5253C66.1791 54.8681 65.5721 55.0606 64.9392 55.0606V55.0606Z" fill="#6C63FF"/>
    <Path d="M95.6636 61.2295H31.8284C31.1955 61.2295 30.5885 61.0369 30.141 60.6941C29.6935 60.3513 29.442 59.8864 29.442 59.4017C29.442 58.9169 29.6935 58.452 30.141 58.1092C30.5885 57.7664 31.1955 57.5739 31.8284 57.5739H95.6636C96.2965 57.5739 96.9035 57.7664 97.351 58.1092C97.7986 58.452 98.05 58.9169 98.05 59.4017C98.05 59.8864 97.7986 60.3513 97.351 60.6941C96.9035 61.0369 96.2965 61.2295 95.6636 61.2295Z" fill="#6C63FF"/>
    <Path d="M15.8989 63.1715C20.8413 63.1715 24.8478 60.1028 24.8478 56.3173C24.8478 52.5318 20.8413 49.463 15.8989 49.463C10.9566 49.463 6.95007 52.5318 6.95007 56.3173C6.95007 60.1028 10.9566 63.1715 15.8989 63.1715Z" fill="#6C63FF"/>
    <Path d="M95.6601 68.6549H87.3078C86.6749 68.6549 86.0679 68.4623 85.6204 68.1195C85.1729 67.7767 84.9214 67.3118 84.9214 66.8271C84.9214 66.3423 85.1729 65.8774 85.6204 65.5346C86.0679 65.1918 86.6749 64.9993 87.3078 64.9993H95.6601C95.9735 64.9993 96.2838 65.0465 96.5733 65.1384C96.8628 65.2303 97.1259 65.3649 97.3475 65.5346C97.5691 65.7043 97.7449 65.9058 97.8648 66.1276C97.9847 66.3494 98.0465 66.587 98.0465 66.8271C98.0465 67.0671 97.9847 67.3048 97.8648 67.5265C97.7449 67.7483 97.5691 67.9498 97.3475 68.1195C97.1259 68.2892 96.8628 68.4239 96.5733 68.5157C96.2838 68.6076 95.9735 68.6549 95.6601 68.6549V68.6549Z" fill="white"/>
    <Path d="M95.6601 68.6549H87.3078C86.6749 68.6549 86.0679 68.4623 85.6204 68.1195C85.1729 67.7767 84.9214 67.3118 84.9214 66.8271C84.9214 66.3423 85.1729 65.8774 85.6204 65.5346C86.0679 65.1918 86.6749 64.9993 87.3078 64.9993H95.6601C95.9735 64.9993 96.2838 65.0465 96.5733 65.1384C96.8628 65.2303 97.1259 65.3649 97.3475 65.5346C97.5691 65.7043 97.7449 65.9058 97.8648 66.1276C97.9847 66.3494 98.0465 66.587 98.0465 66.8271C98.0465 67.0671 97.9847 67.3048 97.8648 67.5265C97.7449 67.7483 97.5691 67.9498 97.3475 68.1195C97.1259 68.2892 96.8628 68.4239 96.5733 68.5157C96.2838 68.6076 95.9735 68.6549 95.6601 68.6549V68.6549Z" fill="#CCCCCC"/>
    <Path d="M81.2921 34.8062H28.5093C27.7612 34.8055 27.044 34.5776 26.515 34.1725C25.986 33.7673 25.6885 33.2179 25.6876 32.6449V19.6775C25.6885 19.1045 25.986 18.5551 26.515 18.1499C27.044 17.7448 27.7612 17.5168 28.5093 17.5162H81.2921C82.0402 17.5168 82.7574 17.7448 83.2864 18.1499C83.8154 18.5551 84.113 19.1045 84.1138 19.6775V32.6449C84.113 33.2179 83.8154 33.7673 83.2864 34.1725C82.7574 34.5776 82.0402 34.8055 81.2921 34.8062V34.8062ZM28.5093 17.7705C27.8493 17.771 27.2164 17.9721 26.7497 18.3296C26.2829 18.6871 26.0203 19.1719 26.0196 19.6774V32.6449C26.0203 33.1505 26.2829 33.6352 26.7497 33.9927C27.2164 34.3502 27.8493 34.5513 28.5093 34.5519H81.2921C81.9522 34.5513 82.585 34.3502 83.0518 33.9927C83.5185 33.6352 83.7811 33.1505 83.7818 32.6449V19.6774C83.7811 19.1719 83.5185 18.6871 83.0518 18.3296C82.585 17.9721 81.9522 17.771 81.2921 17.7705H28.5093Z" fill="#CCCCCC"/>
    <Path d="M61.8224 25.462H43.3982C43.0463 25.4616 42.7091 25.3543 42.4604 25.1636C42.2118 24.9729 42.0721 24.7144 42.0721 24.4449C42.0721 24.1754 42.2118 23.9169 42.4604 23.7262C42.7091 23.5355 43.0463 23.4282 43.3982 23.4279H61.8224C62.1742 23.4282 62.5115 23.5355 62.7602 23.7262C63.0088 23.9169 63.1485 24.1754 63.1485 24.4449C63.1485 24.7144 63.0088 24.9729 62.7602 25.1636C62.5115 25.3543 62.1742 25.4616 61.8224 25.462V25.462Z" fill="#E6E6E6"/>
    <Path d="M78.9187 28.8945H43.3982C43.0463 28.8942 42.7091 28.7868 42.4604 28.5962C42.2118 28.4055 42.0721 28.147 42.0721 27.8775C42.0721 27.608 42.2118 27.3495 42.4604 27.1588C42.7091 26.9681 43.0463 26.8608 43.3982 26.8604H78.9187C79.0932 26.8602 79.2661 26.8864 79.4274 26.9374C79.5887 26.9885 79.7353 27.0634 79.8588 27.1578C79.9823 27.2523 80.0802 27.3645 80.1471 27.4879C80.2139 27.6114 80.2483 27.7438 80.2483 27.8775C80.2483 28.0111 80.2139 28.1435 80.1471 28.267C80.0802 28.3905 79.9823 28.5027 79.8588 28.5971C79.7353 28.6916 79.5887 28.7665 79.4274 28.8175C79.2661 28.8685 79.0932 28.8947 78.9187 28.8945V28.8945Z" fill="#E6E6E6"/>
    <Path d="M34.5344 29.9752C37.2845 29.9752 39.5139 28.2676 39.5139 26.1612C39.5139 24.0548 37.2845 22.3472 34.5344 22.3472C31.7843 22.3472 29.5549 24.0548 29.5549 26.1612C29.5549 28.2676 31.7843 29.9752 34.5344 29.9752Z" fill="#E6E6E6"/>
    <Path d="M78.9167 33.0263H74.2692C74.0946 33.0265 73.9218 33.0003 73.7605 32.9493C73.5991 32.8983 73.4526 32.8234 73.3291 32.7289C73.2056 32.6345 73.1076 32.5223 73.0407 32.3988C72.9739 32.2753 72.9395 32.143 72.9395 32.0093C72.9395 31.8756 72.9739 31.7432 73.0407 31.6197C73.1076 31.4963 73.2056 31.3841 73.3291 31.2896C73.4526 31.1952 73.5991 31.1203 73.7605 31.0692C73.9218 31.0182 74.0946 30.992 74.2692 30.9922H78.9167C79.2686 30.9926 79.6059 31.0999 79.8545 31.2906C80.1031 31.4813 80.2428 31.7398 80.2428 32.0093C80.2428 32.2788 80.1031 32.5373 79.8545 32.728C79.6059 32.9187 79.2686 33.026 78.9167 33.0263V33.0263Z" fill="white"/>
    <Path d="M78.9167 33.0263H74.2692C74.0946 33.0265 73.9218 33.0003 73.7605 32.9493C73.5991 32.8983 73.4526 32.8234 73.3291 32.7289C73.2056 32.6345 73.1076 32.5223 73.0407 32.3988C72.9739 32.2753 72.9395 32.143 72.9395 32.0093C72.9395 31.8756 72.9739 31.7432 73.0407 31.6197C73.1076 31.4963 73.2056 31.3841 73.3291 31.2896C73.4526 31.1952 73.5991 31.1203 73.7605 31.0692C73.9218 31.0182 74.0946 30.992 74.2692 30.9922H78.9167C79.2686 30.9926 79.6059 31.0999 79.8545 31.2906C80.1031 31.4813 80.2428 31.7398 80.2428 32.0093C80.2428 32.2788 80.1031 32.5373 79.8545 32.728C79.6059 32.9187 79.2686 33.026 78.9167 33.0263V33.0263Z" fill="#CCCCCC"/>
    <Path d="M81.2921 94.7506H28.5093C27.7612 94.7499 27.044 94.522 26.515 94.1169C25.986 93.7117 25.6885 93.1623 25.6876 92.5893V79.6218C25.6885 79.0488 25.986 78.4995 26.515 78.0943C27.044 77.6892 27.7612 77.4612 28.5093 77.4606H81.2921C82.0402 77.4612 82.7574 77.6892 83.2864 78.0943C83.8154 78.4995 84.113 79.0488 84.1138 79.6218V92.5893C84.113 93.1623 83.8154 93.7117 83.2864 94.1169C82.7574 94.522 82.0402 94.7499 81.2921 94.7506V94.7506ZM28.5093 77.7149C27.8493 77.7154 27.2164 77.9165 26.7497 78.274C26.2829 78.6315 26.0203 79.1163 26.0196 79.6218V92.5893C26.0203 93.0949 26.2829 93.5796 26.7497 93.9371C27.2164 94.2946 27.8493 94.4957 28.5093 94.4963H81.2921C81.9522 94.4957 82.585 94.2946 83.0518 93.9371C83.5185 93.5796 83.7811 93.0949 83.7818 92.5893V79.6218C83.7811 79.1163 83.5185 78.6315 83.0518 78.274C82.585 77.9165 81.9522 77.7154 81.2921 77.7149H28.5093Z" fill="#CCCCCC"/>
    <Path d="M61.8224 85.4063H43.3982C43.046 85.4063 42.7083 85.2992 42.4593 85.1085C42.2103 84.9177 42.0703 84.659 42.0703 84.3893C42.0703 84.1195 42.2103 83.8608 42.4593 83.6701C42.7083 83.4794 43.046 83.3722 43.3982 83.3722H61.8224C62.1742 83.3726 62.5115 83.4799 62.7602 83.6706C63.0088 83.8613 63.1485 84.1198 63.1485 84.3893C63.1485 84.6588 63.0088 84.9173 62.7602 85.108C62.5115 85.2987 62.1742 85.406 61.8224 85.4063V85.4063Z" fill="#E6E6E6"/>
    <Path d="M78.9187 88.8389H43.3982C43.0463 88.8386 42.7091 88.7312 42.4604 88.5405C42.2118 88.3499 42.0721 88.0914 42.0721 87.8219C42.0721 87.5524 42.2118 87.2939 42.4604 87.1032C42.7091 86.9125 43.0463 86.8052 43.3982 86.8048H78.9187C79.2709 86.8048 79.6086 86.912 79.8576 87.1027C80.1066 87.2934 80.2466 87.5521 80.2466 87.8219C80.2466 88.0916 80.1066 88.3503 79.8576 88.541C79.6086 88.7318 79.2709 88.8389 78.9187 88.8389Z" fill="#E6E6E6"/>
    <Path d="M34.5344 89.9196C37.2845 89.9196 39.5139 88.212 39.5139 86.1056C39.5139 83.9992 37.2845 82.2916 34.5344 82.2916C31.7843 82.2916 29.5549 83.9992 29.5549 86.1056C29.5549 88.212 31.7843 89.9196 34.5344 89.9196Z" fill="#E6E6E6"/>
    <Path d="M78.9167 92.9707H74.2692C73.917 92.9707 73.5792 92.8636 73.3302 92.6728C73.0812 92.4821 72.9413 92.2234 72.9413 91.9537C72.9413 91.6839 73.0812 91.4252 73.3302 91.2345C73.5792 91.0438 73.917 90.9366 74.2692 90.9366H78.9167C79.2686 90.937 79.6059 91.0443 79.8545 91.235C80.1031 91.4257 80.2428 91.6842 80.2428 91.9537C80.2428 92.2232 80.1031 92.4817 79.8545 92.6723C79.6059 92.863 79.2686 92.9703 78.9167 92.9707V92.9707Z" fill="white"/>
    <Path d="M78.9167 92.9707H74.2692C73.917 92.9707 73.5792 92.8636 73.3302 92.6728C73.0812 92.4821 72.9413 92.2234 72.9413 91.9537C72.9413 91.6839 73.0812 91.4252 73.3302 91.2345C73.5792 91.0438 73.917 90.9366 74.2692 90.9366H78.9167C79.2686 90.937 79.6059 91.0443 79.8545 91.235C80.1031 91.4257 80.2428 91.6842 80.2428 91.9537C80.2428 92.2232 80.1031 92.4817 79.8545 92.6723C79.6059 92.863 79.2686 92.9703 78.9167 92.9707V92.9707Z" fill="#CCCCCC"/>
    <Path d="M81.2921 118.839H28.5093C27.7612 118.838 27.044 118.61 26.515 118.205C25.986 117.8 25.6885 117.25 25.6876 116.677V103.71C25.6885 103.137 25.986 102.588 26.515 102.182C27.044 101.777 27.7612 101.549 28.5093 101.549H81.2921C82.0402 101.549 82.7574 101.777 83.2864 102.182C83.8154 102.588 84.113 103.137 84.1138 103.71V116.677C84.113 117.25 83.8154 117.8 83.2864 118.205C82.7574 118.61 82.0402 118.838 81.2921 118.839V118.839ZM28.5093 101.803C27.8493 101.804 27.2164 102.005 26.7497 102.362C26.2829 102.72 26.0203 103.204 26.0196 103.71V116.677C26.0203 117.183 26.2829 117.668 26.7497 118.025C27.2164 118.383 27.8493 118.584 28.5093 118.584H81.2921C81.9522 118.584 82.585 118.383 83.0518 118.025C83.5185 117.668 83.7811 117.183 83.7818 116.677V103.71C83.7811 103.204 83.5185 102.72 83.0518 102.362C82.585 102.005 81.9522 101.804 81.2921 101.803H28.5093Z" fill="#CCCCCC"/>
    <Path d="M61.8224 109.494H43.3982C43.046 109.494 42.7083 109.387 42.4593 109.197C42.2103 109.006 42.0703 108.747 42.0703 108.477C42.0703 108.208 42.2103 107.949 42.4593 107.758C42.7083 107.567 43.046 107.46 43.3982 107.46H61.8224C62.1742 107.461 62.5115 107.568 62.7602 107.759C63.0088 107.949 63.1485 108.208 63.1485 108.477C63.1485 108.747 63.0088 109.005 62.7602 109.196C62.5115 109.387 62.1742 109.494 61.8224 109.494V109.494Z" fill="#E6E6E6"/>
    <Path d="M78.9187 112.927H43.3982C43.0463 112.927 42.7091 112.819 42.4604 112.629C42.2118 112.438 42.0721 112.179 42.0721 111.91C42.0721 111.64 42.2118 111.382 42.4604 111.191C42.7091 111.001 43.0463 110.893 43.3982 110.893H78.9187C79.2709 110.893 79.6086 111 79.8576 111.191C80.1066 111.382 80.2466 111.64 80.2466 111.91C80.2466 112.18 80.1066 112.438 79.8576 112.629C79.6086 112.82 79.2709 112.927 78.9187 112.927Z" fill="#E6E6E6"/>
    <Path d="M34.5344 114.008C37.2845 114.008 39.5139 112.3 39.5139 110.194C39.5139 108.087 37.2845 106.38 34.5344 106.38C31.7843 106.38 29.5549 108.087 29.5549 110.194C29.5549 112.3 31.7843 114.008 34.5344 114.008Z" fill="#E6E6E6"/>
    <Path d="M78.9167 117.059H74.2692C73.917 117.059 73.5792 116.952 73.3302 116.761C73.0812 116.57 72.9413 116.311 72.9413 116.042C72.9413 115.772 73.0812 115.513 73.3302 115.323C73.5792 115.132 73.917 115.025 74.2692 115.025H78.9167C79.2686 115.025 79.6059 115.132 79.8545 115.323C80.1031 115.514 80.2428 115.772 80.2428 116.042C80.2428 116.311 80.1031 116.57 79.8545 116.76C79.6059 116.951 79.2686 117.058 78.9167 117.059V117.059Z" fill="white"/>
    <Path d="M78.9167 117.059H74.2692C73.917 117.059 73.5792 116.952 73.3302 116.761C73.0812 116.57 72.9413 116.311 72.9413 116.042C72.9413 115.772 73.0812 115.513 73.3302 115.323C73.5792 115.132 73.917 115.025 74.2692 115.025H78.9167C79.2686 115.025 79.6059 115.132 79.8545 115.323C80.1031 115.514 80.2428 115.772 80.2428 116.042C80.2428 116.311 80.1031 116.57 79.8545 116.76C79.6059 116.951 79.2686 117.058 78.9167 117.059V117.059Z" fill="#CCCCCC"/>
    <Path d="M48.4121 140.815H51.3553L52.7554 132.119L48.4116 132.12L48.4121 140.815Z" fill="#FFB8B8"/>
    <Path d="M47.6613 140.079L53.4575 140.079H53.4577C53.9428 140.079 54.4232 140.152 54.8713 140.294C55.3195 140.436 55.7267 140.645 56.0697 140.907C56.4127 141.17 56.6848 141.482 56.8704 141.825C57.0561 142.168 57.1516 142.536 57.1516 142.908V143L47.6615 143L47.6613 140.079Z" fill="#2F2E41"/>
    <Path d="M36.6486 140.815H39.5918L40.9919 132.119L36.6481 132.12L36.6486 140.815Z" fill="#FFB8B8"/>
    <Path d="M35.8978 140.079L41.694 140.079H41.6943C42.1793 140.079 42.6597 140.152 43.1078 140.294C43.556 140.436 43.9632 140.645 44.3062 140.907C44.6492 141.17 44.9213 141.482 45.1069 141.825C45.2926 142.168 45.3881 142.536 45.3881 142.908V143L35.898 143L35.8978 140.079Z" fill="#2F2E41"/>
    <Path d="M48.9995 80.6164C52.256 80.6164 54.8959 78.5944 54.8959 76.1002C54.8959 73.6059 52.256 71.584 48.9995 71.584C45.743 71.584 43.1031 73.6059 43.1031 76.1002C43.1031 78.5944 45.743 80.6164 48.9995 80.6164Z" fill="#FFB8B8"/>
    <Path d="M52.9646 138.938H47.5028C47.3598 138.938 47.2183 138.916 47.0864 138.874C46.9545 138.832 46.8348 138.77 46.7343 138.692C46.6338 138.614 46.5545 138.522 46.501 138.42C46.4475 138.319 46.4209 138.21 46.4226 138.101L46.74 118.236C46.7411 118.165 46.7069 118.097 46.6444 118.045C46.5819 117.994 46.4959 117.962 46.404 117.957C46.312 117.953 46.2212 117.975 46.1503 118.02C46.0793 118.065 46.0335 118.129 46.0224 118.199L42.8437 138.211C42.8116 138.411 42.6848 138.596 42.4873 138.73C42.2898 138.864 42.0351 138.938 41.7713 138.938H36.257C36.1081 138.938 35.9607 138.915 35.8242 138.869C35.6877 138.823 35.565 138.756 35.4639 138.672C35.3627 138.589 35.2853 138.49 35.2364 138.382C35.1876 138.274 35.1684 138.16 35.18 138.046L38.8213 102.36L38.9203 102.352L56.3564 100.909L54.0438 138.15C54.0309 138.362 53.9115 138.563 53.7105 138.71C53.5095 138.857 53.2423 138.938 52.9646 138.938V138.938Z" fill="#2F2E41"/>
    <Path d="M39.0335 104.551C38.7534 104.55 38.4845 104.466 38.2836 104.317C38.0827 104.167 37.9656 103.964 37.957 103.749C37.8619 101.493 37.6987 93.6851 39.5948 87.9531C40.1123 86.3872 41.2738 84.9905 42.9077 83.9693C44.5416 82.9481 46.5611 82.3567 48.6677 82.2825V82.2825C50.7412 82.1957 52.7977 82.6113 54.5455 83.4702C56.2933 84.3292 57.6435 85.5878 58.4047 87.0676C61.5918 93.2649 64.6028 100.904 60.8488 102.102C55.9286 103.672 42.9579 104.372 39.0998 104.549C39.0776 104.55 39.0555 104.551 39.0335 104.551Z" fill="#6C63FF"/>
    <Path d="M61.5693 71.5356C61.662 71.6085 61.762 71.6757 61.8684 71.7366L61.2495 80.8434L58.6749 81.853L60.1563 85.0281L64.9409 83.5801C65.3274 83.4631 65.6539 83.2533 65.8715 82.982C66.0891 82.7108 66.1859 82.3928 66.1474 82.0759L64.894 71.7457C65.3041 71.5113 65.6114 71.1868 65.7749 70.8154C65.9384 70.444 65.9504 70.0432 65.8093 69.6665C65.6682 69.2897 65.3807 68.9548 64.985 68.7062C64.5893 68.4576 64.1042 68.3072 63.5942 68.275C63.0842 68.2428 62.5735 68.3302 62.1299 68.5258C61.6864 68.7213 61.3311 69.0156 61.1113 69.3696C60.8914 69.7235 60.8175 70.1203 60.8993 70.5073C60.9812 70.8942 61.2149 71.2529 61.5693 71.5356H61.5693Z" fill="#FFB8B8"/>
    <Path d="M61.2983 81.1824L63.1094 85.1245C63.161 85.2367 63.1803 85.356 63.1662 85.4745C63.1521 85.5929 63.1048 85.7076 63.0276 85.8107C62.9504 85.9139 62.845 86.0031 62.7188 86.0722C62.5925 86.1414 62.4482 86.1889 62.2958 86.2115L56.9553 87.0036C56.2046 87.2024 55.3815 87.165 54.6667 86.8996C53.9519 86.6343 53.4037 86.1627 53.1422 85.5882C52.8807 85.0137 52.9273 84.3832 53.2719 83.835C53.6164 83.2868 54.2307 82.8656 54.9801 82.6638L59.7752 80.7252C59.9125 80.6697 60.0639 80.6375 60.2189 80.6309C60.3739 80.6243 60.5289 80.6433 60.6734 80.6867C60.818 80.7301 60.9486 80.7968 61.0565 80.8823C61.1643 80.9679 61.2468 81.0702 61.2983 81.1824V81.1824Z" fill="#6C63FF"/>
    <Path d="M36.0289 71.5356C35.9363 71.6085 35.8363 71.6757 35.7298 71.7366L36.3488 80.8434L38.9234 81.853L37.4419 85.0281L32.6574 83.5801C32.2708 83.4631 31.9443 83.2533 31.7267 82.982C31.5092 82.7108 31.4124 82.3928 31.4508 82.0759L32.7043 71.7457C32.2941 71.5113 31.9868 71.1868 31.8233 70.8154C31.6598 70.444 31.6478 70.0432 31.7889 69.6665C31.93 69.2897 32.2175 68.9548 32.6132 68.7062C33.0089 68.4576 33.494 68.3072 34.004 68.275C34.514 68.2428 35.0248 68.3302 35.4683 68.5258C35.9118 68.7213 36.2672 69.0156 36.487 69.3695C36.7068 69.7235 36.7807 70.1203 36.6989 70.5073C36.6171 70.8942 36.3834 71.2529 36.0289 71.5356V71.5356Z" fill="#FFB8B8"/>
    <Path d="M36.9248 80.6866C37.0693 80.6432 37.2244 80.6242 37.3794 80.6308C37.5344 80.6375 37.6857 80.6696 37.823 80.7252L42.6181 82.6638C43.3675 82.8656 43.9818 83.2868 44.3263 83.835C44.6709 84.3832 44.7175 85.0137 44.456 85.5882C44.1946 86.1627 43.6463 86.6343 42.9315 86.8997C42.2167 87.165 41.3936 87.2024 40.6429 87.0036L35.3024 86.2115C35.15 86.1889 35.0057 86.1414 34.8794 86.0722C34.7532 86.0031 34.6478 85.9139 34.5706 85.8107C34.4934 85.7076 34.4461 85.5929 34.432 85.4745C34.4179 85.356 34.4372 85.2367 34.4888 85.1245L36.2999 81.1824C36.3514 81.0702 36.4338 80.9678 36.5417 80.8823C36.6495 80.7967 36.7802 80.73 36.9248 80.6866Z" fill="#6C63FF"/>
    <Path d="M51.2896 76.87C51.2586 76.2939 51.4474 75.7234 51.8328 75.2281C52.2182 74.7328 52.7836 74.3342 53.46 74.081C55.2523 73.3723 56.3783 71.8607 55.8849 70.4803C55.2534 68.7134 52.1137 67.5675 49.5698 68.1754C48.8813 68.3626 48.2173 68.599 47.5866 68.8814L45.9246 69.5638C45.2146 69.836 44.53 70.1455 43.8758 70.4901C42.8958 71.0432 42.1278 71.7877 41.6519 72.6458C41.1759 73.5039 41.0095 74.4442 41.1701 75.3684C41.4974 77.1646 43.0332 78.812 45.1355 79.9398C45.9395 80.4 46.8681 80.7162 47.8528 80.8649C48.8605 80.9921 49.9824 80.8475 50.7192 80.3675C51.8706 79.6174 51.7516 78.3613 51.3792 77.3122C51.33 77.1675 51.3 77.0193 51.2896 76.87V76.87Z" fill="#2F2E41"/>
    </G>
    <Defs>
    <ClipPath id="clip0">
    <Rect width="105" height="143" fill="white"/>
    </ClipPath>
    </Defs>
    </Svg>
    
  ) 

}

export default SvgCreateTopic;