---
layout: layouts/changelog.vto
title: Changelog
level: index
notes: |
    ### Notes
    This is how I generate the wordcount:

    ```
     sed '{ /^---/ { :a N; /\n---/! ba; d} }' FILENAME | \
        sed '{/^```/ { :a N; /\n```/! ba; d} }' \
        | wc -w
    ```

    This excludes yaml frontmatter (between `---` lines) and code blocks (between ``` lines).
---

This is a provisional changelog. Currently it shows statistics for words written.
It will eventually become a proper changelog with all modifications.

You can subscribe to this changelog as an [RSS Feed](/changelog/changelog.rss).

