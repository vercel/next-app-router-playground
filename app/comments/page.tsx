import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center text-3xl font-bold text-white">
        <p className="m-auto mb-10">vercel.fyi/conf-comments</p>
        <p className="m-auto mb-10">
          Or scan this QR code to leave comments 👇
        </p>
        <Image
          className="border-5 m-auto rounded-lg border-4 border-gray-300 bg-white p-10"
          src="/qr-comments.jpg"
          alt="QR code to try Vercel Comments"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
