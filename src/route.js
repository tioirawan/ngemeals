/* eslint-disable global-require */

customElements.whenDefined('router-slot').then(() => {
  const routerSlot = document.querySelector('router-slot');

  routerSlot.add([
    {
      path: '/',
      component: () => require('Views/main'),
    },
    {
      path: '**',
      // component: () => require('Views/main'),
      redirectTo: '/',
    },
  ]);
});
