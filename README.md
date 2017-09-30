## 便捷书签


### 0x01 解析Bookmark.html文件


[File Format](https://msdn.microsoft.com/en-us/library/aa753582(v=vs.85).aspx)

The file starts with the following text:

```html
<!DOCTYPE NETSCAPE-Bookmark-file-1>
    <!--This is an automatically generated file.
    It will be read and overwritten.
    Do Not Edit! -->
    <Title>Bookmarks</Title>
    <H1>Bookmarks</H1>
```

The rest of the file is as follows:
```html
 <DL>
    {item}
    {item}
    {item}
    .
    .
    .
    </DL>
```

An item may be a subfolder, shortcut, feed, Web Slice, or icon.

If {item} refers to a subfolder, it is:

```html

    <DT><H3 FOLDED ADD_DATE="{date}">{title}</H3>
    <DL><p>
        {item}
        {item}
        {item}
        .
        .
        .
    </DL><p>
```

If {item} refers to a shortcut, it is:

```html
    <DT><A HREF="{url}" ADD_DATE="{date}" LAST_VISIT="{date}"
    LAST_MODIFIED="{date}">{title}</A>
```

If {item} refers to a feed, it is:

```html
FEED="true"
FEEDURL="href... "
```

If {item} refers to a Web Slice, it is:

```html
WEBSLICE="true"
ISLIVEPREVIEW="true"

PREVIEWSIZE="w x h"
```

If {item} refers to an icon, it is:

```html
{item}

ICON_URI="href... "
```

**Note**
Throughout this file format definition, {date} is a decimal integer that represents the number of seconds elapsed since midnight January 1, 1970.