
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ChurchFamilyUI/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ChurchFamilyUI"
  },
  {
    "renderMode": 2,
    "route": "/ChurchFamilyUI/home"
  },
  {
    "renderMode": 2,
    "route": "/ChurchFamilyUI/cults"
  },
  {
    "renderMode": 2,
    "route": "/ChurchFamilyUI/about"
  },
  {
    "renderMode": 2,
    "route": "/ChurchFamilyUI/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4268, hash: 'f91efec34d274421972052c8625f04edfa4c3693b7481e95b7dc3e9068c0ec69', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4612, hash: 'ffd94d5c059f6e5570da185069df4d864d5b1267628c3e5f62430595a89302e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 282, hash: '0f4d2bc78c96927a54c2a88e0fe92dfa381d511b7e70b2baad3c91e5c9854293', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 28903, hash: '24f874c2c9920c07aad1c02dfbfb07f18561918caec2e8273fba53b9ccb2e6ec', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 25829, hash: '7efe9bdc655364dd9f2a0a8691ef1784a11c4763a509713c7b9def62da8528b5', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'cults/index.html': {size: 29079, hash: '3c8435e5a8063936d2acb2eabe05b3c83aae38782b20fc455d496acb3afd1d95', text: () => import('./assets-chunks/cults_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32696, hash: 'dfdf0ea6c240b82e18e0896fd78249f5b8da5e95bbdb00e55617c93298d53f3e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-7HCKL3HY.css': {size: 44, hash: 'RnO0YkbANT8', text: () => import('./assets-chunks/styles-7HCKL3HY_css.mjs').then(m => m.default)}
  },
};
