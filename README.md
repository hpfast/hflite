# Porting hansfast.net to Web Origami

Start minimal. I don't expect a full website build, but the following might be fruitful sub-projects to explore in a pair programming session:

(see hflite-migration.pdf, page 2)

* explore multi-layered tree transformations with the 'fragmentary translations' feature
* postcss processing
* Currently using [vento](https://vento.js.org):
    * also has full JS 'escape hatch'
    * partials and functions can be imported/exported between template files. See [next/prev function](https://git.surfacemarkup.net/hans/hflite/src/branch/main/src/_includes/functions/next_prev_links.vto) which is included in the [article](https://git.surfacemarkup.net/hans/hflite/src/branch/main/src/_includes/partials/article.vto) template.
    * I think I understand in the abstract how this would translate to Web Origami, but some guidance would make the concrete learning process go a lot faster...

# The data source side
An area I would like to explore is upstream: transforming and filtering a corpus of text before it hits the SSG.

I want to extract my content from the SSG source directory. I want to write incrementally, so with lots of ongoing drafts, which hinders making the web rendering code public because all those private drafts are mixed in.

What I want is to parse my corpus of Markdown files, select those with a `publish: [{domain: hansfast.net, slug: an-article}]` key, and then resolve links between them: 1. rewrite links relative to public root, 2. remove links to unpublished pages. I got a fair ways on this once using Metalsmith.

The output would be an AsyncTree which could  be consumed by another Origami codebase, or by any SSG that could be made to understand the format. It could be cached or consumed 'live'. It could be served as JSON, or rendered back into Markdown.

What do you think, would Origami be a good candidate for the 'orchestrator' for this process? Or should I use the AsyncTree library directly to wrap my own directory traversal/file indexing code?

And finally, I would like to add a parser for [Djot](https://djot.net). Just parsing individual files to start with, but eventually I'd like to buid a tree of the document structure, based on the AST, and apply the filtering described above at the level of document sections. Why should files be the only interface level for selecting and manipulating text? Obviously it doesn't have to be, as Web Origami itself shows. I think Djot provides a more consistent starting point for this kind of manipulations than Markdown, down the line.



