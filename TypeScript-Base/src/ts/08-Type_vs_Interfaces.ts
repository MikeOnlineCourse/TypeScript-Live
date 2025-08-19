/**
* Interface
*/
interface IWidth {
  width: string;
}
interface IHeight {
  height: string;
}
interface IBoxFontSize {
  "font-size": string;
  "font-weight": string;
}

interface IBoxStyle extends IWidth, IHeight, IBoxFontSize {
  color: string;
  border: string;
  padding: string;
  margin: string;
}
 

/**
* Type
*/
type TWidth = {
  width: string;
}
type THeight = {
  height: string;
}
type TBoxFontSize = {
  "font-size": string;
  "font-weight": string;
}
type TOtherStyle = {
  color: string;
  border: string;
  padding: string;
  margin: string;
}

type TBoxStyle = TWidth & THeight & TBoxFontSize & TOtherStyle
 