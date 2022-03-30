const imagesFaker = async (number: number) => {
  const images = await Promise.all(
    Array(number)
      .fill(0)
      .map(async () => {
        const { url } = await fetch('https://picsum.photos/600/600/?random');
        return url;
      })
  );
  return images;
};
