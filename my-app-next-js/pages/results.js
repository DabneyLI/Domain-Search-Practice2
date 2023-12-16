// pages/results.js
import { useRouter } from 'next/router';

export default function Results({ data }) {
  const router = useRouter();
  const { query } = router.query;

  // 这里可以根据数据的结构来定制显示结果的方式
  // 下面是一个简单的显示结果的示例
  const resultItems = data && Object.entries(data).map(([key, value]) => (
    <li key={key}>{key}: {value.toString()}</li>
  ));

  return (
    <div>
      <h1>Results for: {query}</h1>
      {data && <ul>{resultItems}</ul>}
      {!data && <p>No results found for the query.</p>}
    </div>
  );
}

// 此函数在服务器端运行，并预先获取页面所需的数据
export async function getServerSideProps(context) {
  const { query } = context.query;
  // 执行 WHOIS 查询，这里是您 API 端点的 URL
  const apiUrl = `https://whois.freeaiapi.xyz/?name=${query}&suffix=com`;
  const res = await fetch(apiUrl);
  const data = await res.json(); // 假设这是您想显示的数据
  
  // 将数据通过 props 传递给页面组件
  return { props: { data } };
}

