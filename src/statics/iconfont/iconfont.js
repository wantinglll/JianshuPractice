import { createGlobalStyle } from 'styled-components';

export const IconFont = createGlobalStyle`
  @font-face {
  font-family: 'iconfont';  /* Project id 3150069 */
  src: url('//at.alicdn.com/t/font_3150069_nqlu926fi4r.woff2?t=1646820279730') format('woff2'),
       url('//at.alicdn.com/t/font_3150069_nqlu926fi4r.woff?t=1646820279730') format('woff'),
       url('//at.alicdn.com/t/font_3150069_nqlu926fi4r.ttf?t=1646820279730') format('truetype');
}
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
