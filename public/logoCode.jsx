import Image from "next/image"

export const LightEn = () =>{
    return(
      <Image priority width={140} height={140} className="w-auto h-auto" alt="sooqsquare logo" src="/icons/light-en-logo.svg" />
    )
}
export const LightAr = () =>{
    return (
      <Image priority width={140} height={140} className="w-auto h-auto" alt="sooqsquare logo" src="/icons/light-ar-logo.svg" />
    )
}
export const DarkEn = () =>{
    return (
        <Image priority width={140} height={140} className="w-auto h-auto" alt="sooqsquare logo" src="/icons/dr-en-logo.svg" />
      )
}
export const DarkAr = () =>{
    return (
        <Image priority width={140} height={140} className="w-auto h-auto" alt="sooqsquare logo" src="/icons/dr-ar-logo.svg" />
      )
}