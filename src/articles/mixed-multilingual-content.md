---
title: "Does your site publishing system think in your language(s)?"
date: 2024-10-31
id: "trnslEN"
lang: en
translated: "trnslNL"
---

_This is my entry for the [October 2024 IndieWeb Carnaval](https://tilde.team/~zinricky/multilingualism/)._


Every framework for translating a website needs to impose some kind of structure. Whenever you add structure, you introduce tradeoffs. You need to make some assumptions about how content-in-languages-as-data are going to behave and relate to each other, otherwise the complexity of your information model will explode. Those assumptions invariably introduce inflexibility that limits what your system can handle. 

For a large corporate or government site, the limitations on flexibility might be worth it because exhaustive systematic translation furthers the organisations goals.


But this is a personal website and it gets to reflect my personal way of using language. And as someone who grew up in a very multilingual environment where language and translation were indeed always explicit topics of attention because of the work my parents were doing as expats, my native language is arguably a mix of several languages. If that sounds strange to you, check out the first video on the Wikipedia page about [code-switching](https://en.wikipedia.org/wiki/Code-switching), the act of mixing languages within a discourse unit.


So I need website-building tools that allow for the textual equivalent of code-switching.
In the future, when this site serves more business purposes, a more predictable structure with some automatic linking of translations might be useful. But even then, I suspect Dutch and English content will be either written for different audiences, or will still want to mix within a single page. It's the nature of technical documentation to include a lot of English, regardless of the main language, and Dutch people can generally handle a fair bit of English.

But for now, plain handmade hyperlinks are the best way to represent the kind of sub-publication multilingualism I envision.

Ironically, the links at the top of this article and it's Dutch translation illustrate the problem.

I installed [Lume's](https://lume.land) [Multilanguage Plugin](https://lume.land/plugins/multilanguage/) to provide the links between translations. But it adds a language prefix to every URL, as seen on the Dutch version. I don't want that, for various reasons conceptual and technical, which I'll get into another time.

:::draft
It forces you to make choices you don't want to make, like including different language articles in overview lists or not ...
:::

However, while I thought my code ended up independent of the plugin, when I disabled it, my links broke. Without realizing it, I made them dependent on a variable which is defined by the plugin. So to finish this article on time, I was stuck with either no translations, or URLs that I didn't want.

My plan is to add links to translations or other-language-versions by hand, as necessary. The only automation I'll add is the generating of the markup and maybe looking up the target URL using a shorter ID. My code will make no assumptions about the URLs of articles in different languages. It's not to say I'll never want that, but it's too early for me to make that decision yet.

---

Stop press: luckily our host gave us until 11:00 on 1 November to submit our contributions.
Because early this morning I thought of a simple solution to my problem.

I was going to conclude that I almost think the Web itself can't handle such flexible linguistic mixing, with the way it's organised into domain names, folders, and paths, with every HTML page strongly encouraged to include a single `lang=…` property. It's no wonder every site translation system ends up making choices that preclude the kind of fluidity I want, because they're based on a fabric which only works with strict separation.

But I woke from light sleep with at least a partial solution in my head. It was, in fact, something I saw on Lume's documentation page itself: a [section-level switcher](https://lume.land/plugins/multilanguage/#link-to-a-page-in-current-language).

Like all solutions it has its own tradeoffs; in this case, the author has to add some more markup to their document source. The idea is that individual paragraphs or whole sections get a selector above them to switch their language.

This allows translating whole documents or just parts of them, without depending on any processing logic -- it's encoded in the markup. You could just translate the summary at the top, or translate the various sections as you have time, or translate the whole page.

The selector/switcher can be implemented in CSS only. Processing the markup requires some template scripting, but it is fairly simle as it doesn't have to look beyond the current section or page.

I'll make a demo as soon as I have time.
