import { useEffect, useState } from "react";

const TestPage = () => {
  const [imgSrc, setImgSrc] = useState<string>(
    "images/default-image.png",
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      if (typeof e.target?.result === 'string') {
        setImgSrc(e.target?.result);
      }
    };
  };

  useEffect(() => {
    console.log(imgSrc);
  }, []);

  return (
    <div>
      <input type='file' accept='image/*' onChange={handleChange} />
      <img src={imgSrc} alt='' width={200} height={150} />
    </div>
  )
}

export default TestPage;