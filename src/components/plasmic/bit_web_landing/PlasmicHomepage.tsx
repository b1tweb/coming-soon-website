// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5meqejXadBaiiJpUk3KBXy
// Component: EeRCGp3RXibo
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: mo-NtuCrSZ/component
import HomeHero from "../../HomeHero"; // plasmic-import: cr5pXGhghf/component
import HomeHeroButton from "../../HomeHeroButton"; // plasmic-import: _qICj0r55b2/component
import BitAndByte from "../../BitAndByte"; // plasmic-import: 0uy3hUmqm-/component

import { useScreenVariants as useScreenVariantsdhNixrj8Z7R5V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: dhNixrj8Z7r5v/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_bit_web_landing.module.css"; // plasmic-import: 5meqejXadBaiiJpUk3KBXy/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: EeRCGp3RXibo/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: SB2JWCCB9Mk/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: OI1TqQabwyJ/icon
import image3PIGnYl5E3 from "./images/image3.png"; // plasmic-import: pIGnYL5E3/picture

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  bitwebLogo?: p.Flex<typeof Header>;
  homeHero?: p.Flex<typeof HomeHero>;
  homeHeroButton?: p.Flex<typeof HomeHeroButton>;
  text?: p.Flex<"div">;
  bitAndByte?: p.Flex<typeof BitAndByte>;
  byteMobile?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultHomepageProps {
  className?: string;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsdhNixrj8Z7R5V()
  });

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"bitwebLogo"}
            data-plasmic-override={overrides.bitwebLogo}
            className={classNames("__wab_instance", sty.bitwebLogo)}
          />

          <HomeHero
            data-plasmic-name={"homeHero"}
            data-plasmic-override={overrides.homeHero}
            className={classNames("__wab_instance", sty.homeHero)}
          />

          <HomeHeroButton
            data-plasmic-name={"homeHeroButton"}
            data-plasmic-override={overrides.homeHeroButton}
            className={classNames("__wab_instance", sty.homeHeroButton)}
            link={"https://blog.bitweb.org" as const}
            showEndIcon={true}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"FOLLOW OUR DEVELOPMENT"}
            </div>
          </HomeHeroButton>

          <BitAndByte
            data-plasmic-name={"bitAndByte"}
            data-plasmic-override={overrides.bitAndByte}
            className={classNames("__wab_instance", sty.bitAndByte)}
          />

          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <p.PlasmicImg
              data-plasmic-name={"byteMobile"}
              data-plasmic-override={overrides.byteMobile}
              alt={""}
              className={classNames(sty.byteMobile)}
              displayHeight={"381px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"none" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: image3PIGnYl5E3,
                fullWidth: 619,
                fullHeight: 583,
                aspectRatio: undefined
              }}
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "bitwebLogo",
    "homeHero",
    "homeHeroButton",
    "text",
    "bitAndByte",
    "byteMobile"
  ],
  bitwebLogo: ["bitwebLogo"],
  homeHero: ["homeHero"],
  homeHeroButton: ["homeHeroButton", "text"],
  text: ["text"],
  bitAndByte: ["bitAndByte"],
  byteMobile: ["byteMobile"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  bitwebLogo: typeof Header;
  homeHero: typeof HomeHero;
  homeHeroButton: typeof HomeHeroButton;
  text: "div";
  bitAndByte: typeof BitAndByte;
  byteMobile: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    bitwebLogo: makeNodeComponent("bitwebLogo"),
    homeHero: makeNodeComponent("homeHero"),
    homeHeroButton: makeNodeComponent("homeHeroButton"),
    text: makeNodeComponent("text"),
    bitAndByte: makeNodeComponent("bitAndByte"),
    byteMobile: makeNodeComponent("byteMobile"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "BitWeb | It's a bit of a revolution.",
      description: "",
      ogImageSrc: "",
      canonical: "https://bitweb.org"
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
