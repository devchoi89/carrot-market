import Layout from "@components/layout";

export default function NotFound() {
  return (
    <Layout title="페이지 없음" canGoBack>
      <div className="text-center">"404 Not Found"</div>
    </Layout>
  );
}
