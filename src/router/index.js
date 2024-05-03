import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import AppsCalendarView from "@/views/AppsCalendarView.vue";
import AuthLogoutViewVue from "@/views/AuthLogoutView.vue";
import AuthoLoginViewVue from "@/views/AuthoLoginView.vue";
import AuthoRegisterViewVue from "@/views/AuthoRegisterView.vue";
import AuthoTwoStepVerificationViewVue from "@/views/AuthoTwoStepVerificationView.vue";
import AuthoRecorveryPwdViewVue from "@/views/AuthoRecorveryPwdView.vue";
import AuthoConfirmMailViewVue from "@/views/AuthoConfirmMailView.vue";
import AuthoLockScreenViewVue from "@/views/AuthoLockScreenView.vue";
import Pages404ViewVue from "@/views/Pages404View.vue";
import Pages500ViewVue from "@/views/Pages500View.vue";
import AppBlogDetailViewVue from "@/views/blogs/AppBlogDetailView.vue";
import ApBlogGridViewVue from "@/views/blogs/ApBlogGridView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: "/",
      name: "home",
      component: HomeView,
    }, */
    {
      path: "/",
      name: "home",
      component: IndexView,
    },
    {
      path: "/calendar",
      name: "calendar",
      component: AppsCalendarView,
    },
    ,
    {
      path: "/auth-logout",
      name: "auth-logout",
      component: AuthLogoutViewVue,
    },
    {
      path: "/auth-login",
      name: "auth-login",
      component: AuthoLoginViewVue,
    },
    {
      path: "/auth-register",
      name: "auth-register",
      component: AuthoRegisterViewVue,
    },
    {
      path: "/auth-twoStepVerification",
      name: "auth-twoStepVerification",
      component: AuthoTwoStepVerificationViewVue,
    },
    {
      path: "/auth-RecorveryPwd",
      name: "auth-RecorveryPwd",
      component: AuthoRecorveryPwdViewVue,
    },
    {
      path: "/auth-ConfirmMail",
      name: "auth-ConfirmMail",
      component: AuthoConfirmMailViewVue,
    },
    {
      path: "/auth-LockScreen",
      name: "auth-LockScreen",
      component: AuthoLockScreenViewVue,
    },
    {
      path: "/Pages404",
      name: "Pages404",
      component: Pages404ViewVue,
    },
    {
      path: "/Pages500",
      name: "Pages500",
      component: Pages500ViewVue,
    } /*,
    {
      path: '/PagesComingSoon',
      name: 'PagesComingSoon',
      component: PagesComingSoonViewVue,
    }*/,

    ,
    /*blogs*/
    {
      path: "/AppBlogDetail",
      name: "AppBlogDetail",
      component: AppBlogDetailViewVue,
    },
    {
      path: "/ApBlogGrid",
      name: "ApBlogGrid",
      component: ApBlogGridViewVue,
    },
  ],
});

export default router;
