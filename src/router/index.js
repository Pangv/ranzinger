import Vue from 'vue';
import Router from 'vue-router';
import Start from '@/components/Start';
import Ueber from '@/components/Ueber';
import Services from '@/components/Services';
import ProjektePartner from '@/components/ProjektePartner';
import Kontakt from '@/components/Kontakt';
import Impressum from '@/components/Impressum';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start,
    },
    {
      path: '/ueber_uns',
      name: 'Ueber',
      component: Ueber,
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
    },
    {
      path: '/projekte_partner',
      name: 'Projekte_Partner',
      component: ProjektePartner,
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: Kontakt,
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: Impressum,
    },
  ],
});
