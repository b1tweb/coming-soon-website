import * as React from "react";
import {
  PlasmicHomeHeroButton,
  DefaultHomeHeroButtonProps
} from "./plasmic/bit_web_landing/PlasmicHomeHeroButton";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface HomeHeroButtonProps extends DefaultHomeHeroButtonProps {}

function HomeHeroButton_(props: HomeHeroButtonProps, ref: ButtonRef) {
  const { plasmicProps } =
    PlasmicHomeHeroButton.useBehavior<HomeHeroButtonProps>(props, ref);
  return <PlasmicHomeHeroButton {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<HomeHeroButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<HomeHeroButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const HomeHeroButton = React.forwardRef(
  HomeHeroButton_
) as any as ButtonComponentType;

export default Object.assign(HomeHeroButton, {
  __plumeType: "button"
});
