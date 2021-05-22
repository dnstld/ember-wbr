import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

/**
 * Better Line Breaks for Long URLs
 * @author CSS-TRICKS <https://css-tricks.com/better-line-breaks-for-long-urls/>
 * @param { string } url - A URL that overflows its container
 */
export default helper(function wbr([url]) {
  const doubleSlash = url.split('//')

  const formatted = doubleSlash.map(str =>
    str.replace(/(?<after>:)/giu, '$1<wbr>')
      .replace(/(?<before>[/~.,\-_?#%])/giu, '<wbr>$1')
      .replace(/(?<beforeAndAfter>[=&])/giu, '<wbr>$1<wbr>')
    ).join('//<wbr>')

  return htmlSafe(formatted)
});
