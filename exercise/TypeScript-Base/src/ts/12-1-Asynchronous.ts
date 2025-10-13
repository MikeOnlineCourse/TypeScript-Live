// 1. 先定義最終的資料格式 type

// 2. 封裝 fetch get 方法
async function apiRequest(url) {
  const response = await fetch(url);
  const data = await response.json();
  return {
    status: response.status,
    data,
  };
}

// 3-1. 直接調用，傳入最後API 拿回來的資料格式
apiRequest('https://vue-lessons-api.vercel.app/photo/list').then(res => {
  console.log('API then=>', res.data);
});

// 3-2. 也可以改用 await 來接資料
const res = await apiRequest('https://vue-lessons-api.vercel.app/photo/list');
console.log('API await=>', res.data);
