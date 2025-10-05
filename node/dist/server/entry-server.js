import { jsxs, jsx } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Link, Routes, Route, matchRoutes } from "react-router-dom";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva as cva$1 } from "class-variance-authority";
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Home" }),
    /* @__PURE__ */ jsx("p", { children: "This is the default home page of your app." }),
    /* @__PURE__ */ jsx("p", { children: "Tell the AI chat what you want your app to do." })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "About" }),
    /* @__PURE__ */ jsx("p", { children: "This is a sample about page rendered with React Router. " })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Contact" }),
    /* @__PURE__ */ jsx("p", { children: "Get in touch via this sample contact page." })
  ] });
}
function NotFound() {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "404 - Page Not Found" }),
    /* @__PURE__ */ jsx("p", { children: "The page you are looking for does not exist." })
  ] });
}
const routes = [
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/contact", Component: Contact },
  { path: "*", Component: NotFound, notFound: true }
];
const cva = cva$1;
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      className: buttonVariants({ variant, size, className }),
      ref,
      ...props
    }
  );
});
Button.displayName = "Button";
function App() {
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-center", children: [
    /* @__PURE__ */ jsxs("nav", { className: "flex items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsx(Link, { className: "underline", to: "/", children: "Home" }),
      /* @__PURE__ */ jsx(Link, { className: "underline", to: "/about", children: "About" }),
      /* @__PURE__ */ jsx(Link, { className: "underline", to: "/contact", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "pt-4 text-center", children: /* @__PURE__ */ jsx(Routes, { children: routes.map((route, index) => /* @__PURE__ */ jsx(Route, { path: route.path, element: /* @__PURE__ */ jsx(route.Component, {}) }, index)) }) })
  ] }) });
}
function render(url) {
  const location = url || "/";
  const matches = matchRoutes(routes, location);
  const isNotFound = Array.isArray(matches) && matches.length > 0 ? Boolean(matches[matches.length - 1]?.route?.notFound) : !matches;
  const status = isNotFound ? 404 : 200;
  const html = renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location, children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html, status };
}
export {
  render
};
