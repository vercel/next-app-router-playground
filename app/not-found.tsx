'use client';
import Button from '#/ui/Button';
import { useRouter } from 'next/navigation'; //只能客户端组件使用

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>

      <Button kind="error" onClick={() => router.push('/')}>
        返回首页
      </Button>
    </>
  );
}


