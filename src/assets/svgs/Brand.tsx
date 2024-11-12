import { colors } from '@/src/constants';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const Brand = ({
	color = colors.brand,
	width = 25,
	height = 25,
}: SvgProps) => (
	<Svg fill="none" viewBox="0 0 40 40" width={width} height={height}>
		<Path
			d="M20.8 3.5498C21.1191 3.83549 21.2426 4.14606 21.3607 4.54999C21.3792 4.61036 21.3977 4.67073 21.4168 4.73292C21.4795 4.93807 21.5398 5.1439 21.6 5.3498C21.6221 5.42508 21.6443 5.50036 21.6665 5.57564C21.8135 6.07578 21.9577 6.57673 22.1011 7.07793C22.2324 7.53659 22.3647 7.99495 22.497 8.45331C22.5101 8.49862 22.5232 8.54392 22.5366 8.5906C22.7546 9.34561 22.9748 10.0999 23.201 10.8525C23.2329 10.9587 23.2647 11.065 23.2964 11.1714C23.4539 11.6988 23.6205 12.2212 23.8078 12.7389C23.8236 12.7827 23.8395 12.8265 23.8558 12.8717C24.1045 13.5467 24.3921 14.1898 24.85 14.7498C24.8715 14.7805 24.893 14.8113 24.9152 14.843C26.3927 16.839 30.8662 17.3151 33.114 17.958C33.5096 18.0712 33.9049 18.1852 34.3 18.2998C34.3342 18.3097 34.3684 18.3196 34.4037 18.3298C34.6114 18.3901 34.8189 18.4507 35.0262 18.512C35.1217 18.5401 35.2172 18.5679 35.3127 18.5956C35.8178 18.7458 36.252 18.8903 36.55 19.3498C36.714 19.7216 36.7577 20.0637 36.6187 20.4498C36.4067 20.9332 36.1329 21.1089 35.65 21.2998C35.3963 21.3859 35.1401 21.4616 34.883 21.5363C34.8091 21.5581 34.7352 21.5799 34.6613 21.6018C34.4657 21.6595 34.2699 21.7167 34.0742 21.7738C33.9115 21.8213 33.7489 21.8691 33.5863 21.917C32.737 22.1667 31.8869 22.4132 31.0326 22.6454C30.3563 22.8295 29.6859 23.0325 29.0156 23.2373C28.9635 23.2532 28.9114 23.269 28.8577 23.2854C27.6778 23.6407 27.6778 23.6407 26.5343 24.0967C26.4971 24.1135 26.4598 24.1303 26.4214 24.1477C25.0929 24.758 24.3987 25.6839 23.8875 27.0217C23.3049 28.6041 22.8695 30.2416 22.4056 31.8617C22.1588 32.7235 21.9091 33.5844 21.6531 34.4435C21.6388 34.4915 21.6246 34.5395 21.6099 34.589C21.5244 34.8763 21.438 35.1633 21.35 35.4498C21.331 35.5116 21.3121 35.5734 21.2926 35.6371C21.2671 35.717 21.2671 35.717 21.2412 35.7986C21.2272 35.8426 21.2133 35.8866 21.1989 35.932C21.0686 36.2456 20.8212 36.4814 20.5113 36.6154C20.1128 36.7385 19.728 36.7316 19.35 36.5498C18.7756 36.1828 18.6675 35.5088 18.4843 34.8935C18.4569 34.8023 18.4295 34.7111 18.4021 34.6199C18.1293 33.7093 17.8658 32.7959 17.6008 31.883C16.7859 28.3362 16.7859 28.3362 15.1 25.1998C15.0685 25.1585 15.037 25.1173 15.0046 25.0748C13.7306 23.5535 10.7263 23.1439 8.91228 22.6311C8.29132 22.4553 7.67133 22.2761 7.05144 22.0965C6.91735 22.0577 6.78323 22.0189 6.64908 21.9803C5.98191 21.7881 5.31572 21.593 4.65328 21.385C4.60235 21.3692 4.55142 21.3535 4.49895 21.3373C4.07082 21.2009 3.69705 21.0436 3.44996 20.6498C3.26256 20.2116 3.25197 19.8292 3.42847 19.3855C3.62033 19.0212 3.90512 18.8516 4.28949 18.7288C4.32213 18.7183 4.35476 18.7078 4.38838 18.697C4.76597 18.5766 5.14624 18.465 5.52671 18.3541C5.60456 18.3313 5.68239 18.3085 5.76023 18.2857C5.96557 18.2255 6.17095 18.1655 6.37635 18.1056C6.54681 18.0558 6.71723 18.0059 6.88766 17.956C7.72607 17.7105 8.56475 17.4659 9.40439 17.2246C12.9903 16.3884 12.9903 16.3884 15.6184 14.0658C16.6216 12.2283 17.0548 10.0201 17.6279 8.01843C17.8899 7.10349 18.1532 6.18911 18.4281 5.27792C18.4474 5.21341 18.4474 5.21341 18.4671 5.14759C18.886 3.75209 18.886 3.75209 19.2994 3.48573C19.7821 3.23117 20.345 3.23145 20.8 3.5498ZM19.95 9.1998C19.9399 9.23434 19.9298 9.26889 19.9195 9.30448C17.8508 16.4082 17.8508 16.4082 15.3406 17.8467C13.4431 18.8882 11.2206 19.3776 9.14996 19.9498C9.19024 20.058 9.19024 20.058 9.29436 20.0876C9.33578 20.0995 9.3772 20.1114 9.41988 20.1237C9.46689 20.1374 9.51391 20.1511 9.56235 20.1652C9.63974 20.1872 9.63974 20.1872 9.71871 20.2096C9.77227 20.2251 9.82583 20.2407 9.88102 20.2567C10.0539 20.3069 10.2269 20.3565 10.4 20.406C10.624 20.4705 10.8479 20.5353 11.0718 20.6002C11.1276 20.6164 11.1834 20.6325 11.2409 20.6492C11.7862 20.8084 12.327 20.9811 12.8672 21.1568C13.0313 21.21 13.1958 21.2621 13.3603 21.314C15.3616 21.955 17.0038 23.0131 17.989 24.9113C18.2282 25.3929 18.4175 25.8945 18.6 26.3998C18.618 26.4497 18.6361 26.4996 18.6547 26.551C19.1517 27.9449 19.5392 29.3788 19.95 30.7998C19.983 30.7998 20.016 30.7998 20.05 30.7998C20.0585 30.7704 20.0671 30.741 20.076 30.7108C22.1631 23.567 22.1631 23.567 24.6843 22.1435C26.3033 21.2598 28.161 20.8118 29.9234 20.3082C30.0072 20.2842 30.0909 20.2601 30.1747 20.2359C30.2633 20.2103 30.3521 20.1854 30.4411 20.1609C30.4865 20.148 30.5319 20.1351 30.5787 20.1219C30.6406 20.1047 30.6406 20.1047 30.7036 20.0872C30.8096 20.0585 30.8096 20.0585 30.85 19.9498C30.7722 19.928 30.7722 19.928 30.6929 19.9058C26.581 18.7524 26.581 18.7524 25.4 18.1998C25.3466 18.1753 25.3466 18.1753 25.2921 18.1504C24.4879 17.7786 23.7727 17.3336 23.15 16.6998C23.1132 16.6629 23.0764 16.6261 23.0384 16.5881C22.5239 16.0417 22.1604 15.3774 21.85 14.6998C21.8344 14.6664 21.8188 14.633 21.8028 14.5986C21.0148 12.8877 20.5709 11.0048 20.05 9.1998C20.017 9.1998 19.984 9.1998 19.95 9.1998Z"
			fill="#0F9BFF"
		/>
		<Path
			d="M16.0001 4.49978C16.3039 4.70513 16.5149 4.93786 16.6001 5.29978C16.6444 5.70262 16.6497 6.06774 16.4001 6.39978C16.1032 6.72706 15.7623 6.86258 15.3532 7.00915C15.2278 7.05632 15.1025 7.10372 14.9774 7.15173C14.9301 7.16986 14.9301 7.16986 14.8817 7.18836C13.4523 7.74158 12.1487 8.53877 11.0001 9.54978C10.961 9.58329 10.922 9.61681 10.8817 9.65134C10.7251 9.78612 10.5752 9.92328 10.4313 10.0717C10.3001 10.1998 10.3001 10.1998 10.2001 10.1998C10.1824 10.2422 10.1824 10.2422 10.1643 10.2855C10.0854 10.4259 9.98873 10.517 9.87195 10.6279C8.53191 11.9469 7.55085 13.7394 6.95336 15.5066C6.82305 15.8811 6.6506 16.2448 6.2907 16.4467C6.24168 16.4752 6.24168 16.4752 6.19167 16.5043C5.88307 16.6576 5.50006 16.6468 5.1696 16.5691C4.83967 16.44 4.61781 16.2084 4.44519 15.9025C4.26022 15.4775 4.34102 15.0431 4.4907 14.6217C4.50608 14.5771 4.52147 14.5326 4.53732 14.4867C5.5602 11.6081 7.4576 8.9058 9.91113 7.06687C10.0048 6.99624 10.0973 6.92428 10.1897 6.85212C10.6713 6.47929 11.1733 6.15495 11.7001 5.84978C11.7376 5.82798 11.7751 5.80619 11.8138 5.78374C12.6413 5.30648 13.487 4.91911 14.3845 4.59206C14.4841 4.55561 14.5834 4.51803 14.6825 4.48025C15.1312 4.31646 15.5686 4.25631 16.0001 4.49978Z"
			fill="#0092DB"
		/>
		<Path
			d="M25.3905 4.49704C25.4356 4.51269 25.4806 4.52833 25.527 4.54444C26.3696 4.84318 27.1678 5.21876 27.9499 5.65017C27.9979 5.67636 27.9979 5.67636 28.0469 5.70307C29.8634 6.69641 31.6004 8.146 32.8499 9.80017C32.907 9.87388 32.9641 9.94757 33.0212 10.0213C33.4359 10.5606 33.8111 11.1103 34.1499 11.7002C34.1715 11.7374 34.1931 11.7747 34.2153 11.813C34.6928 12.6408 35.0804 13.4866 35.4076 14.3844C35.4442 14.4846 35.4817 14.5845 35.5194 14.6843C35.6724 15.1072 35.7156 15.4623 35.5548 15.89C35.3968 16.2071 35.1616 16.4424 34.829 16.5687C34.4133 16.67 34.0445 16.6347 33.6657 16.439C33.3662 16.2092 33.2063 15.9459 33.0843 15.5939C33.0546 15.5137 33.0248 15.4336 32.9948 15.3535C32.9794 15.3119 32.964 15.2704 32.9481 15.2275C32.5149 14.0826 31.9612 12.997 31.2499 12.0002C31.23 11.9721 31.2101 11.9439 31.1896 11.915C30.7981 11.3654 30.3598 10.8342 29.8663 10.3728C29.7999 10.3002 29.7999 10.3002 29.7999 10.2002C29.7714 10.1882 29.7429 10.1763 29.7136 10.164C29.5759 10.0867 29.4892 9.99351 29.3812 9.87829C29.078 9.56935 28.7451 9.31031 28.3999 9.05017C28.3694 9.02688 28.3389 9.00359 28.3074 8.97959C27.8566 8.63598 27.3952 8.32596 26.8999 8.05017C26.8587 8.02716 26.8174 8.00415 26.775 7.98044C25.9954 7.54989 25.1926 7.21113 24.3601 6.89748C23.9839 6.75263 23.6906 6.57432 23.4749 6.22204C23.3204 5.8676 23.3378 5.41067 23.4749 5.05329C23.6324 4.75549 23.8859 4.53724 24.1937 4.40329C24.6089 4.27866 24.9918 4.35436 25.3905 4.49704Z"
			fill="#0092DB"
		/>
		<Path
			d="M6.34684 23.561C6.63015 23.8051 6.79388 24.0549 6.91559 24.4061C6.94526 24.4863 6.97508 24.5665 7.00504 24.6465C7.02046 24.6881 7.03589 24.7297 7.05177 24.7725C7.71972 26.5378 8.70117 28.2368 10.0625 29.5624C10.1078 29.6077 10.1532 29.6531 10.2 29.6999C10.2 29.7329 10.2 29.7659 10.2 29.7999C10.2424 29.8176 10.2424 29.8176 10.2857 29.8356C10.4261 29.9146 10.5172 30.0112 10.6281 30.128C11.3186 30.8295 12.1539 31.4018 13 31.8999C13.0444 31.9277 13.0888 31.9556 13.1345 31.9842C13.7339 32.3525 14.3879 32.6359 15.0461 32.8807C15.1329 32.913 15.1329 32.913 15.2214 32.946C15.3334 32.9871 15.4457 33.0274 15.5584 33.0667C15.9658 33.2152 16.2859 33.4075 16.525 33.778C16.6794 34.1324 16.662 34.5894 16.525 34.9467C16.3398 35.2957 16.0487 35.5083 15.6783 35.6294C15.2927 35.691 14.9774 35.6323 14.6125 35.503C14.5672 35.4873 14.5219 35.4717 14.4753 35.4556C13.6314 35.1579 12.8327 34.7817 12.05 34.3499C12.018 34.3324 11.9859 34.3149 11.953 34.297C10.1365 33.3036 8.39944 31.854 7.14997 30.1999C7.09288 30.1262 7.03578 30.0525 6.97868 29.9788C6.56395 29.4394 6.18878 28.8897 5.84997 28.2999C5.8176 28.244 5.8176 28.244 5.78459 28.187C5.30707 27.3593 4.91947 26.5134 4.59225 25.6157C4.55565 25.5154 4.51813 25.4155 4.48044 25.3157C4.31106 24.8475 4.29469 24.4973 4.48024 24.0292C4.62785 23.7554 4.89746 23.5291 5.19137 23.4219C5.59676 23.3395 5.98788 23.3461 6.34684 23.561Z"
			fill="#0092DB"
		/>
		<Path
			d="M35.094 23.5729C35.4015 23.7966 35.5854 24.0724 35.6501 24.4501C35.6785 24.7851 35.6202 25.0601 35.5094 25.3751C35.4941 25.4198 35.4787 25.4646 35.4628 25.5107C34.4581 28.3519 32.5899 31.0013 30.2001 32.8501C30.165 32.8775 30.1298 32.9049 30.0937 32.9331C29.5179 33.3803 28.9317 33.7862 28.3001 34.1501C28.2641 34.1711 28.2282 34.1922 28.1912 34.2139C25.4228 35.8324 25.4228 35.8324 24.3354 35.6286C23.9919 35.5328 23.7362 35.343 23.5307 35.0519C23.3426 34.6974 23.3324 34.2632 23.4313 33.8786C23.5958 33.5012 23.9298 33.2659 24.3014 33.1167C24.4163 33.074 24.5315 33.0321 24.6469 32.9907C24.7722 32.9437 24.8972 32.8964 25.0221 32.8485C25.0694 32.8304 25.0694 32.8304 25.1177 32.812C25.6436 32.6084 26.1484 32.3566 26.6501 32.1001C26.6849 32.0823 26.7198 32.0645 26.7557 32.0461C27.5695 31.6228 28.316 31.0579 29.0001 30.4501C29.0389 30.4167 29.0778 30.3833 29.1178 30.3489C29.2748 30.2141 29.4248 30.0768 29.5688 29.9282C29.7001 29.8001 29.7001 29.8001 29.8001 29.8001C29.8185 29.7569 29.8185 29.7569 29.8374 29.7128C29.9101 29.582 29.9944 29.4996 30.1032 29.397C30.3578 29.1472 30.5806 28.881 30.8001 28.6001C30.823 28.571 30.8458 28.542 30.8694 28.512C31.8119 27.3095 32.5044 25.9667 33.0288 24.5352C33.1934 24.0929 33.3662 23.7307 33.7782 23.4751C34.2012 23.2919 34.7026 23.3435 35.094 23.5729Z"
			fill="#0092DB"
		/>
	</Svg>
);
