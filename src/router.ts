import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import EmptyLayout from "./views/layout/empty-layout.vue";
import MainLayout from "./views/layout/main-layout.vue";
import Overview from "./views/overview/overview.vue";
import CompamyList from "./views/company-list/compamy-list.vue";
import companyDetail from "./views/company-detail/company-detail.vue";
import companyDetailLayout from "./views/company-detail/layout.vue";
import NewsList from "./views/news-list/news-list.vue";
import newsDetail from "./views/news-detail/news-detail.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "home",
          component: Home
        },
        {
          path: "overview",
          name: "overview",
          component: EmptyLayout,
          redirect: { name: "overviewIndex" },
          meta: {
            breadcrumbs: "overview"
          },
          children: [
            {
              path: "",
              name: "overviewIndex",
              component: Overview
            },
            {
              path: "compamy-list/",
              component: EmptyLayout,
              name: "companyList",
              redirect: { name: "companyListIndex" },
              meta: {
                breadcrumbs: "compamy-list"
              },
              children: [
                {
                  path: "",
                  name: "companyListIndex",
                  component: CompamyList
                },
                {
                  path: "compamy-detail/:companyId",
                  component: companyDetailLayout,
                  name: "companyDetail",
                  redirect: { name: "companyDetailIndex" },
                  meta: {
                    breadcrumbs: "compamy-detail"
                  },
                  children: [
                    {
                      path: "",
                      name: "companyDetailIndex",
                      component: companyDetail
                    },
                    {
                      path: "news-list",
                      component: EmptyLayout,
                      name: "NewsList",
                      redirect: { name: "NewsListIndex" },
                      meta: {
                        breadcrumbs: "news-list"
                      },
                      children: [
                        {
                          path: "",
                          name: "NewsListIndex",
                          component: NewsList
                        },
                        {
                          path: ":newId",
                          name: "newsDetail",
                          component: newsDetail,
                          meta: {
                            breadcrumbs: "news-detail"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});
router.beforeEach((to, from, next) => {
  console.log("beforeEach", to);
  next();
});
export default router;
