import { colors } from "@/src/constants";
import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const Star = ({
  color = "#F3C63F",
  width = 25,
  height = 25,
}: SvgProps) => (
  <Svg fill="none" viewBox="0 0 60 60" width={width} height={height}>
    <Path
      d="M28.1728 11.0279C28.7515 9.72943 29.041 9.0802 29.444 8.88028C29.794 8.70657 30.205 8.70657 30.555 8.88028C30.958 9.0802 31.2475 9.72943 31.8263 11.0279L36.4363 21.3702C36.6075 21.7541 36.693 21.946 36.8255 22.093C36.9425 22.223 37.0858 22.327 37.2455 22.3982C37.4263 22.4787 37.6353 22.5008 38.0533 22.5449L49.314 23.7334C50.7277 23.8826 51.4345 23.9572 51.7492 24.2787C52.0225 24.5579 52.1495 24.9489 52.0925 25.3355C52.027 25.7805 51.499 26.2562 50.443 27.208L42.0313 34.7885C41.7193 35.0697 41.563 35.2105 41.4643 35.3818C41.3768 35.5335 41.322 35.7017 41.3038 35.8757C41.283 36.0725 41.3265 36.278 41.4138 36.6893L43.7633 47.766C44.0583 49.1567 44.2058 49.852 43.9973 50.2505C43.816 50.597 43.4835 50.8385 43.0983 50.9037C42.6548 50.9787 42.039 50.6238 40.8075 49.9135L30.9988 44.256C30.6348 44.046 30.4528 43.9412 30.2593 43.9C30.088 43.8637 29.911 43.8637 29.7398 43.9C29.5463 43.9412 29.3643 44.046 29.0003 44.256L19.1916 49.9135C17.9601 50.6238 17.3444 50.9787 16.9009 50.9037C16.5156 50.8385 16.183 50.597 16.0019 50.2505C15.7934 49.852 15.9409 49.1567 16.2359 47.766L18.5853 36.6893C18.6725 36.278 18.7161 36.0725 18.6954 35.8757C18.677 35.7017 18.6224 35.5335 18.5349 35.3818C18.436 35.2105 18.2799 35.0697 17.9677 34.7885L9.55615 27.208C8.50013 26.2562 7.9721 25.7805 7.90645 25.3355C7.84945 24.9489 7.97648 24.5579 8.24983 24.2787C8.56453 23.9572 9.2714 23.8826 10.6852 23.7334L21.9459 22.5449C22.3638 22.5008 22.5728 22.4787 22.7535 22.3982C22.9134 22.327 23.0565 22.223 23.1737 22.093C23.306 21.946 23.3916 21.7541 23.5627 21.3702L28.1728 11.0279Z"
      fill={color}
      stroke={color}
    />
  </Svg>
);
