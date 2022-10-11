import * as React from "react";
import {
  PlasmicHomeHeaderButton,
  DefaultHomeHeaderButtonProps
} from "./plasmic/bit_web_landing/PlasmicHomeHeaderButton";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface HomeHeaderButtonProps extends DefaultHomeHeaderButtonProps {}

function HomeHeaderButton_(props: HomeHeaderButtonProps, ref: ButtonRef) {
  const { plasmicProps } =
    PlasmicHomeHeaderButton.useBehavior<HomeHeaderButtonProps>(props, ref);
  return <PlasmicHomeHeaderButton {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<HomeHeaderButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<HomeHeaderButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const HomeHeaderButton = React.forwardRef(
  HomeHeaderButton_
) as any as ButtonComponentType;

export default Object.assign(HomeHeaderButton, {
  __plumeType: "button"
});
