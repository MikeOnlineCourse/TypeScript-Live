/**
 * 1. 可以針對現在流行的 Atomic CSS 去做一些應用，利用 Template Literal Types 來做一些限制
 * 2. 可以避免使用者輸入錯誤的 Atomic CSS
 * 3. 更有效地去規範個別的 Atomic CSS 使用範圍
 */

type TColor = 'black' | 'white' | 'yellow' | 'pink';

const resBgStatus = 'bg-black';
const resTextStatus = 'text-white';
const resBorderStatus = 'border-yellow';
