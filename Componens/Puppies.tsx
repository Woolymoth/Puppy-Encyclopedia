import Image from 'next/image'


export default function Puppies(){

return(
<Image
  src="/dog-3128192_1280.jpg"
  alt="Next.js Logo"
  width={2000}
  height={90}
  priority
/>
)
}