import {createGlobalStyle} from "styled-components";

export const IconGlobalStyle = createGlobalStyle`
        @font-face {font-family: "iconfont";
          src: url('./iconfont.eot?t=1591941840239'); /* IE9 */
          src: url('./iconfont.eot?t=1591941840239#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAY0AAsAAAAAC5AAAAXlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqKMId6ATYCJAMUCwwABCAFhG0HRxuFCSMR9oNxUiX752HsmMik87be6IOgjHVDskJQkq6Lf5eupLef8+Fx096X0DS0npBScaU+FYETY/MQpibIiTsBsJ9uj8kykInHVBuBL777fD2S1nP+xRogwGPqD/cz3loHls++zaUrAEcDns3W10GReMB3gHjC95Cuai+chOuBAJAQKxtpaunQAyI4ODHBvAljRw+FaNOAh5AIRLnB51gOsgICRPo6fQBgufr75BsUJgIUAgN3oy6jmkfA8nnS50eY1WcdwGyw5WcCcDsJYACyARwg03wtE8B0UbYqkfyWc1gASBBBQfOaV/r5rs+P+HwwBS2SSbwFoLn84XGAGMBJAhBnEfOe44oIUODzUgQY8PkuBAjw+RHejJEItF0CYAKyGyC/AC66RgQFh8i5i4QHiKJizPOXlKwRxtb5Rkicocaj5lEm987oMYMyOatn+qwLTT7sTfJ4erlcPdzunnZvo9y3bpKd5PX2TnW5gqVeAT0S3qNvPz1W2hDRZ+h5ox2QiHRFeuMRsfXubVP3r+55Yg+se43264SMXlNnxJF8VqTsTnOq+7Oc0mGaLGu6qu5OU52qLiebQicv2k2hvBPlWo84z+NUdyRrve3q7jKneqJY66PJa45EaIrduDutyqlujlKdph3jg1PkC9VPepy+r9l/Oc1OdiVr0huZKncka0Si738+za6uz9J7nyjeceKErMkRwuU0TSc2XV0f2WFHRLxVJ8TmNGm1eYS8br1pT/qFbA1Ws2LVTLop3dXjQIJDcZhM/im1tVZZX2c6EK0pa80Hcxxm9bjX23jYm+ft/fytSu/h3G1Xvd2d6gPXGGlRb+9mj0s26fohEyyRrYpyMMYhx+qOC8mOtYrDIZsidV1yKGaHfCBeu4adZH1UUd9w+oOJQllJjT1uzXRn9hKJdbLLXXgkU97nvk93vOfQx+fq+vu6A5Tv6YLqk09w3+9w+Z/9MaNFtvH6k1VsNQMT3UhNpr5vxxcsfyb/MfuK3jGPbT9IX+CTth+aR+dSxmFffRBXqPXprukpBvnyG09d27knbRg2ttbL/zk3wvQZN8vziFCfOzmj19jAgcb2lspPB/Wecd+s/BOZ8lNKLM6c4L7Rl0vO3w99Y3e3lNz+Pc+XfXR7RnxRQnNc9fCEcEvB3PiSsMbConv/c/u5w0+teGnWX9VIW4tZn7fD9u88+1v+adDMcZ+8Ejuj/Nzo85Sw/2xQdr+ZkUMvJRO6Yxo/vnPrnNFtBmQ2vaFbe9HE/pSvWNnFwJQEbcP+rvWcUm5pWTFUkH+IDZ151J+HZqZMTlWXV3cg8QXML9iPsp0D+vw7VdzfEO1XGqNUG0YhZkPy8z1jA8ISGBsiLxvMatsk96ldmRPIhoaOLB8wIajWP2l0Y5+up2TlFdd2cfAL7SdXzbPM7jujoPVIU/uWtustxVmJJ09+tNPcL6vD+02CMLD7ycNUzh4b2+ZaVocjg9qWpU7wJYYmsMTio3urxv38/4DkJzzwcWpAr/R1tMVvbtbIDv0HXzNbysKn8o5LIkzFsR/Wh9Ah3XbvPus3GeUAwHedXWQ1gM/HrjAAvsWsG7OdC5uwrKDTD4ODq38T1xvB1Dv+VU9Ul28xRzzu6pciNnfP58Yc4l8+pxX4u1XkvLMFUg4R2Jd4O3nT/u4I834+MiU298SSKSZQ+CEGGEQkozguGwQYUQwGiKgDCVlaTzYi3DQwEO4PINPLAAQhDgNFEC4DQ4iHKI57DwSYfAcGhMRAQi8Sfk4jBm+rVjcGhcMT5J9QSe5J0LuVlv+IhW+FsfJV8isaW/khjRJn/AF7NHkcYEOROUdAhju4h5th2zIowzVKF5XOqX0ck98rRZK7wcqNQeHwBPJPUEnuSZ7sVq6ff8TCt8KEtP0wvqKx1ewgFUlioB4kfay2dSm1ocg4ChGgWy534J5M2PIRBsp/XY3SRcoUIbUX0ziKK4nKl3XTmHvcdeQOFqKEEU4EYsD8qur7/BIzi8LIcnQlpp++EzwYAAAAAA==') format('woff2'),
          url('./iconfont.woff?t=1591941840239') format('woff'),
          url('./iconfont.ttf?t=1591941840239') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
          url('./iconfont.svg?t=1591941840239#iconfont') format('svg'); /* iOS 4.1- */
        }
        .iconfont {
          font-family: "iconfont" !important;
          font-size: 16px;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
`;


