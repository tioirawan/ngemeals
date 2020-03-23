/* eslint-disable global-require */

customElements.whenDefined('router-slot').then(() => {
  const routerSlot = document.querySelector('router-slot');

  routerSlot.add([
    {
      path: 'meals',
      component: () => require('Views/main'),
    },
    {
      path: '**',
      redirectTo: 'meals',
    },
  ]);
});
