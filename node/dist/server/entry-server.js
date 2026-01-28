import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Link, Routes, Route, matchRoutes } from "react-router-dom";
function Index() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Home" }),
    /* @__PURE__ */ jsx("p", { children: "This is the default home page of your app." }),
    /* @__PURE__ */ jsx("p", { children: "Tell the AI chat what you want your app to do." })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "About" }),
    /* @__PURE__ */ jsx("p", { children: "This is a sample about page rendered with React Router." })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Contact" }),
    /* @__PURE__ */ jsx("p", { children: "Get in touch via this sample contact page." })
  ] });
}
function NotFound() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "404 - Page Not Found" }),
    /* @__PURE__ */ jsx("p", { children: "The page you are looking for does not exist." })
  ] });
}
const routes = [
  { path: "/", Component: Index },
  { path: "/about", Component: About },
  { path: "/contact", Component: Contact },
  { path: "*", Component: NotFound, notFound: true }
];
function App() {
  return /* @__PURE__ */ jsxs("div", { className: "dark w-full min-h-screen flex items-center flex-col justify-start bg-gradient-to-br from-blue-600 via-slate-800 to-black", children: [
    /* @__PURE__ */ jsxs("nav", { className: "flex w-full items-center justify-center gap-4 p-4", children: [
      /* @__PURE__ */ jsx(Link, { className: "underline", to: "/", children: "Home" }),
      /* @__PURE__ */ jsx(Link, { className: "underline", to: "/about", children: "About" }),
      /* @__PURE__ */ jsx(Link, { className: "underline", to: "/contact", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pt-4 w-full text-center flex flex-col justify-center grow", children: /* @__PURE__ */ jsx(Routes, { children: routes.map((route, index) => /* @__PURE__ */ jsx(Route, { path: route.path, element: /* @__PURE__ */ jsx(route.Component, {}) }, index)) }) })
  ] });
}
function render(url) {
  const location = url || "/";
  const matches = matchRoutes(routes, location);
  const isNotFound = Array.isArray(matches) && matches.length > 0 ? Boolean(matches.at(-1)?.route?.notFound) : !matches;
  const status = isNotFound ? 404 : 200;
  const html = renderToString(/* @__PURE__ */ jsx(StaticRouter, { location, children: /* @__PURE__ */ jsx(App, {}) }));
  return { html, status };
}
export {
  render
};
