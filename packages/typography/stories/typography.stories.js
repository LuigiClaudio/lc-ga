import React from "react";
import { storiesOf } from "@storybook/react";
import { text, radios, boolean } from "@storybook/addon-knobs";
import { H1, H2, H3, H4, H5, H6, typographyColorData, P } from "..";
// import ColorList from './Typography';

const wrapperStyles = {
  display: "flex",
  minHeight: "100vh",
  flexFlow: "column nowrap",
  justifyContent: "center",
  margin: "0 auto",
  padding: "10vw 5vw",
  maxWidth: "50vw",
};

// const wrapperColorsStyles = {
//     alignItems: 'center',
//     display: 'flex',
//     flexFlow: 'row wrap',
//     minHeight: '100vh',
//     justifyContent: 'center',
//     margin: '0 10vw',
//     padding: '10vw',
// };

storiesOf("Common Components|Typography", module).add("Headings", () => (
  <div style={wrapperStyles}>
    <H1 color={radios("H1 Color", typographyColorData, "default", "Heading 1")}>
      {text("Heading 1", "Header 1", "Heading 1")}
    </H1>
    <H2 color={radios("H2 Color", typographyColorData, "default", "Heading 2")}>
      {text("Heading 2", "Header 2", "Heading 2")}
    </H2>
    <H3 color={radios("H3 Color", typographyColorData, "default", "Heading 3")}>
      {text("Heading 3", "Header 3", "Heading 3")}
    </H3>
    <H4 color={radios("H4 Color", typographyColorData, "default", "Heading 4")}>
      {text("Heading 4", "Header 4", "Heading 4")}
    </H4>
    <H5 color={radios("H5 Color", typographyColorData, "default", "Heading 5")}>
      {text("Heading 5", "Header 5", "Heading 5")}
    </H5>
    <H6 color={radios("H6 Color", typographyColorData, "default", "Heading 6")}>
      {text("Heading 6", "Header 6", "Heading 6")}
    </H6>
  </div>
));

// storiesOf('Common Components|Typography', module).add('Content', () => (
//     <div style={wrapperStyles}>
//         <P
//             color={radios('First Paragraph Type', typographyColorData, 'default')}
//             lead={boolean('First Paragraph Lead', false)}
//         >
//             {text(
//                 'First Paragraph',
//                 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, quis nostrud ende dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
//             )}
//         </P>
//         <P lead={false}>
//             {text(
//                 'Second Paragraph',
//                 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//             )}
//             Sed do eiusmod tempor <a href="#link">dolor amet sit consectetur</a>, quis nostrud ende
//             dolore.
//         </P>
//     </div>
// ));

// storiesOf('Common Components|Typography', module).add('Colors', () => (
//     <div style={wrapperColorsStyles}>
//         <ColorList />
//     </div>
// ));
