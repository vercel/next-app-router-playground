export async function SlowComponent({page}:{page: string}):Promise<JSX.Element> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    return <div>{page}</div>;
  }
  