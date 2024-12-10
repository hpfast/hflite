import lume from "lume/mod.ts";
import feed from "lume/plugins/feed.ts";
import postcss from "lume/plugins/postcss.ts";
import postcssDesignTokens from "https://esm.sh/@csstools/postcss-design-tokens@3.1.5";
import postcssUtopia from "https://esm.sh/postcss-utopia@1.0.1";
import inline from "lume/plugins/inline.ts";
import remark from "lume/plugins/remark.ts";
import remarkDirective from 'https://esm.sh/remark-directive@3'
import remarkDirectiveRehype from 'https://cdn.skypack.dev/remark-directive-rehype';
import remarkComponents from "https://esm.sh/rehype-components@0.3.0";
import remarkToc from 'https://esm.sh/remark-toc@9'
import rehypeAutolinkHeadings from 'https://esm.sh/rehype-autolink-headings@7'
import rehypeSlug from 'https://esm.sh/rehype-slug@6'
import date from "lume/plugins/date.ts";
import smartypants from "https://esm.sh/remark-smartypants@3.0.1";
import {h} from "https:/esm.sh/hastscript@9.0.0";
import redirects from "lume/plugins/redirects.ts";
import multilanguage from "lume/plugins/multilanguage.ts";


//hide private 'notes' (with tag 'hide') by default, unless in draft mode.
function hideNotes(props, children){
  if (Deno.env.get('LUME_DRAFTS') === 'true') {
    return h('div.note-content', {...props}, [...children]);
  }
};

//style 'draft' notes as such
function showDrafts(props, children){
  return h('div.draft-content', {...props}, [
    h('details', {...props}, [
      h('summary', ['DRAFT: ' + props.summary]), ...children
    ])
  ]);
};

//add translation picker
function arrangeTranslations(props, children) {
  return h('div.translated-content', {...props}, [
    h('input#lang-toggle', {type: 'radio'}),
    h('label.lang-toggle-container', {for: 'lang-toggle'},
      props.langs.split(', ').map(l => h('div.'+l, l))
    ),
    
    ...children
  ])

}


const site = lume({
  src: './src',
  dest: '_site',
  location: new URL("https://hansfast.net")
});

site.use(postcss({
  plugins: [
    postcssDesignTokens({
      valueFunctionName: 'tkn'
    }),
    postcssUtopia(),
  ]
}));
site.use(remark({
  remarkPlugins: [
    [smartypants, {dashes: 'oldschool'}],
    remarkDirective,
    remarkToc,
    remarkDirectiveRehype
  ],
  rehypePlugins: [
    rehypeSlug,
    rehypeAutolinkHeadings,
    [remarkComponents, {
      components: {
        'hide': hideNotes,       //show 'hide' components if LUME_DRAFTS is true.
        'draft': showDrafts,      //show draft components with special rendering
        // 'multilang': arrangeTranslations //enable when this is implemented: https://stackoverflow.com/questions/1431726/css-selector-for-a-checked-radio-buttons-label
      }
    }]
  ]
}));

site.use(feed({
  output: ['everything.rss'],
  query: 'url^=/articles',
  info: {
    title: 'hansfast.net all articles'
  },
  items: {
    title: '=title',
    description: '=excerpt',
    published: '=date'
  }
}));
site.use(feed({
  output: ['/changelog/changelog.rss'],
  query: 'url^=/changelog level!=index',
  info: {
    title: 'hansfast.net — Changelog',
    description:'Updates to the site presented in a changelog format with a summary of what changed.' 
  },
  items: {
    title: '=title',
    description: '=excerpt',
    published: '=date'
  }
}));
site.use(redirects());

site.use(date());
site.use(inline());
site.use(multilanguage({
  languages: ["en", "nl"],
  defaultLanguage: "en"
}));

site.copyRemainingFiles((path) => path.startsWith('/static'));

export default site;
