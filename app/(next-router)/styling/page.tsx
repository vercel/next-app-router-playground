export default function Page() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-gray-500">Styling</div>

      <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
        <li>This example shows different styling solutions.</li>
      </ul>

      <div>
        <a
          className="font-medium text-gray-300 hover:text-white"
          href="https://beta.nextjs.org/docs/styling/css-modules"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
