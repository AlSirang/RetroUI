import { lazy } from "react";

export const componentConfig = {
  registry: {
    "accordion-style-default": {
      name: "accordion-style-default",
      preview: lazy(
        () => import("@/preview/components/accordion-style-default")
      ),
      codeHtml: `<div class="space-y-4 mx-auto">
    <details class="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
    <summary class="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
        Accordion Item 1
    </summary>
    <div class="px-4 py-2 font-body bg-white text-gray-700">
        This is the content of the first accordion item. It is styled with
        Tailwind CSS.
    </div>
    </details>

    <details class="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
    <summary class="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
        Accordion Item 2
    </summary>
    <div class="px-4 py-2 font-body bg-white text-gray-700">
        This is the content of the second accordion item. It has a similar
        style to maintain consistency.
    </div>
    </details>

    <details class="border-2 border-black shadow-md hover:shadow-sm transition-all overflow-hidden">
    <summary class="px-4 py-2 font-head text-black cursor-pointer focus:outline-none">
        Accordion Item 3
    </summary>
    <div class="px-4 py-2 font-body bg-white text-gray-700">
        This is the content of the third accordion item. The details element
        handles the toggle behavior.
    </div>
    </details>
</div>`,
    },
    "avatar-style-circle": {
      name: "avatar-style-circle",
      preview: lazy(() => import("@/preview/components/avatar-style-circle")),
      codeHtml: `<div className="inline-block w-14 h-14 border-2 border-black rounded-full overflow-hidden">
    <img
        className="w-full h-full"
        src="https://pagedone.io/asset/uploads/1704275541.png"
        alt="Rounded Avatar"
    />
</div>`,
    },
    "badge-style-default": {
      name: "badge-style-default",
      preview: lazy(() => import("@/preview/components/badge-style-default")),
      codeHtml: `<span className="border-black text-black border-2 px-2 py-1 text-sm">
    Badge
</span>`,
    },
    "button-style-default": {
      name: "button-style-default",
      preview: lazy(() => import("@/preview/components/button-style-default")),
      codeHtml: `<button className="bg-primary-400 text-black px-6 py-2 text-base font-head border-2 border-black shadow-md hover:shadow-xs hover:bg-primary-500 transition-all">
    Click Me!
</button>`,
    },
    "card-style-default": {
      name: "card-style-default",
      preview: lazy(() => import("@/preview/components/card-style-default")),
      codeHtml: `<div className="inline-block border-2 border-black p-4 shadow-md cursor-pointer transition-all hover:shadow-xs">
    <h4 className="font-head text-2xl font-medium mb-1">This is card Title</h4>
    <p>This is card description.</p>
</div>`,
    },
    "input-style-default": {
      name: "input-style-default",
      preview: lazy(() => import("@/preview/components/input-style-default")),
      codeHtml: `<input
    type="text"
    placeholder="type something..."
    className="px-4 py-2 w-full border-2 border-black shadow-md transition focus:outline-none focus:shadow-xs"
/>`,
    },
    "typography-headings": {
      name: "typography-headings",
      preview: lazy(() => import("@/preview/components/typography-headings")),
      codeHtml: `<div className="space-y-4">
  <h1 className="font-head text-5xl lg:text-6xl font-bold">This is H1</h1>
  <h2 className="font-head text-4xl font-semibold">This is H2</h2>
  <h3 className="font-head text-2xl font-semibold">This is H3</h3>
  <h4 className="font-head text-xl font-medium">This is H4</h4>
  <h5 className="font-head text-lg font-medium">This is H5</h5>
  <h6 className="font-head font-medium">This is H6</h6>
</div>`,
    },
    "typography-p": {
      name: "typography-p",
      preview: lazy(() => import("@/preview/components/typography-p")),
      codeHtml: `<p className="font-sans">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat eos,
  doloremque inventore nesciunt quo sequi veniam impedit alias libero
  dolorem tempore quia esse fugit fuga iste aliquam expedita molestias
  iusto?
</p>`,
    },
  },
};