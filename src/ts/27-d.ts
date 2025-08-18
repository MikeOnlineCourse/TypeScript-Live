// 即使這個 mike-lib 實際上不存在，也不會報錯，因為聲明了 .d.ts 檔案
import { add } from "mike-lib"; 

console.log(add(1, 2));